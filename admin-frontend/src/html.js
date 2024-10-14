import React from "react"
import PropTypes from "prop-types"
import { getBaseURL } from './services/request'

export default function HTML(props) {
  const baseURL = getBaseURL()
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {process.env.LOAD_CHECKSUM_BUNDLE_FROM_FILE === "true" ? (
          <script src="/checksum-frontend-bundle-03-16.js" />
        ) : (
          <script src="http://localhost:3001/static/js/bundle.js" />
        )}
        {process.env.LOAD_CHECKSUMAI === "true" && (
          <>
          <script src="https://cdn.checksum.ai/checksum-sdk-min-0.1.js" />
          <script
          dangerouslySetInnerHTML={{
            __html: `
                const isHash = localStorage.getItem("hash") ? localStorage.getItem("hash") === "true" : false
                checksumai.init('phc_gYukIVmLVDWugWYJLTJ6d6AKDRcZWdhklSYqaEsq585', {networkRecordingMode:'regular'}, { hashTextAndInput: isHash });
                checksumai.posthog.register({'app': 'medusa'});
                console.log('session_id: ' + checksumai.posthog.sessionManager._sessionId + ' window_id: ' + checksumai.posthog.sessionManager._windowId);
            `,
            }}
          />
          </>
        )}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
/* eslint-enable */
