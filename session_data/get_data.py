# from dotenv import load_dotenv
import os
import requests
import json
from google.cloud import storage
from datetime import date, datetime
import pytz
from dateutil.parser import parse
from pathlib import Path


# gcloud auth application-default login
# gcloud auth application-default set-quota-project checksum-359718

# load_dotenv()
ph_key = os.environ['PH_API_KEY']
BUCKET = 'recordings_checksum'
PROJECT = 'checksum-359718'


def upload_blob_from_memory(bucket_name, contents, destination_blob_name):
    storage_client = storage.Client(PROJECT)
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_string(contents)
    print(
        f"{destination_blob_name} uploaded to {bucket_name}."
    )


def list_blobs_with_prefix(bucket_name, prefix, delimiter=None):
    """Lists all the blobs in the bucket that begin with the prefix.

        This can be used to list all blobs in a "folder", e.g. "public/".

        The delimiter argument can be used to restrict the results to only the
        "files" in the given "folder". Without the delimiter, the entire tree under
        the prefix is returned. For example, given these blobs:

            a/1.txt
            a/b/2.txt

        If you specify prefix ='a/', without a delimiter, you'll get back:

            a/1.txt
            a/b/2.txt

        However, if you specify prefix='a/' and delimiter='/', you'll get back
        only the file directly under 'a/':

            a/1.txt

        As part of the response, you'll also get back a blobs.prefixes entity
        that lists the "subfolders" under `a/`:

            a/b/
        """
    storage_client = storage.Client(PROJECT)
    blobs = storage_client.list_blobs(
        bucket_name, prefix=prefix, delimiter=delimiter)
    # TODO return after 1
    for b in blobs:
        pass
    return blobs


def save_recordings(pro=None, rec=None, today=False, local=False):
    projects = {
        'test': 10826,
        'ketch': 11787,
        'habu': 12560,
        'markov': 12670
    }
    for project in projects.keys():
        if pro and project != pro:
            continue
        recordings = []
        project_id = projects[project]
        base_url = f'https://app.posthog.com/api/projects/{project_id}'
        params = {
            'limit': 1000,
            'offset': 0,
            'session_recording_duration': json.dumps({
                "type": "recording",
                "key": "duration",
                "value": 0,
                "operator": "gt"
            }),
            'date_from': '2021-10-01'
        }

        # fetch recordings
        while True:
            print(
                f'fetching recording ids. project: {project}, page: {params["offset"]/params["limit"]}')
            req = requests.get(f'{base_url}/session_recordings/',
                               headers={'Authorization': f'Bearer {ph_key}'},
                               params=params
                               )
            response = json.loads(req.content)
            recordings += response['results']
            if not response['has_next']:
                break
            params['offset'] += params['limit']

        # fetch snapshots and events
        for i, recording in enumerate(recordings):
            if rec and recording['id'] != rec:
                continue
            if not today and (datetime.now(pytz.utc) - parse(recording["start_time"])).total_seconds()/(60*60) <= 24:
                continue
            print(f'{project} recording {i}/{len(recordings)}')
            rec_id = recording['id']
            path = f'{project}/{recording["start_time"][:10]}/{rec_id}/'
            if not local:
                blobs = list_blobs_with_prefix(BUCKET, path)
                if blobs.num_results >= 3:
                    print('skipped')
                    continue
            snapshots = {}
            url = f'{base_url}/session_recordings/{rec_id}/snapshots'
            page = 0
            while True:
                print(
                    f'getting snapshots. project: {project}, id: {rec_id}. Page: {page}')
                req = requests.get(url,
                                   headers={'Authorization': f'Bearer {ph_key}'})
                dict = json.loads(req.content)['result']
                for id in dict['snapshot_data_by_window_id'].keys():
                    snapshots[id] = dict['snapshot_data_by_window_id'][id]
                if not dict['next']:
                    break
                page += 1
                url = dict['next']

            events = {}
            for id in snapshots.keys():
                events[id] = []
                properties = [
                    {
                        'key': '$window_id',
                        'value': id,
                        'operator': 'exact',
                        'type': 'event'
                    }
                ]
                params = {
                    'limit': 1000,
                    'offset': 0,
                    'properties': json.dumps(properties),
                }
                page = 0
                url = f'{base_url}/events'
                while True:
                    print(
                        f'getting events. project: {project}, id: {id}. Page: {page}')
                    req = requests.get(url,
                                       headers={
                                           'Authorization': f'Bearer {ph_key}'},
                                       params=params)
                    dict = json.loads(req.content)
                    events[id] += dict['results']
                    if not dict['next']:
                        break
                    url = dict['next']
                    page += 1
                events[id] = sorted(events[id],
                                    key=lambda d: d['timestamp'])
            # save
            if not local:
                upload_blob_from_memory(BUCKET,
                                        json.dumps(recording), path + 'recording.json')
                upload_blob_from_memory(BUCKET,
                                        json.dumps(snapshots), path + 'snapshots.json')
                upload_blob_from_memory(BUCKET,
                                        json.dumps(events), path + 'events.json')
            else:
                Path(path).mkdir(parents=True, exist_ok=True) 
                with open(path + 'recording.json', 'w') as outfile:
                    json.dump(recording, outfile)
                with open(path + 'snapshots.json', 'w') as outfile:
                    json.dump(snapshots, outfile)
                with open(path + 'events.json', 'w') as outfile:
                    json.dump(recording, outfile)


save_recordings(pro='test', today=True, local=True, rec="184dcf46a1812d5-0c5ede1013c358-18525635-1ea000-184dcf46a191e4e")