import { User } from "@medusajs/medusa"
import { useAdminGetSession, useAdminUpdateUser } from "medusa-react"
import React, {useEffect, useState} from "react"
import { useForm } from "react-hook-form"
import Button from "../../../../components/fundamentals/button"
import InputField from "../../../../components/molecules/input"
import Modal from "../../../../components/molecules/modal"
import useNotification from "../../../../hooks/use-notification"

type Props = {
  user: Omit<User, "password_hash">
  open: boolean
  onClose: () => void
}

type EditInformationFormType = {
  first_name: string | null
  last_name: string | null
}

const EditUserInformationModal = ({ user, open, onClose }: Props) => {
  const { mutate, isLoading: isSubmitting } = useAdminUpdateUser(user.id)
  const { refetch } = useAdminGetSession()

  const [hasShownScreen, setHasShownScreen] = useState(false)
  if (open) {
    if (!hasShownScreen) {
      // @ts-ignore
      window.checksum.goalTracker.recordGoalFinished("edit-personal-information-start")
      setHasShownScreen(true)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditInformationFormType>({
    defaultValues: getDefaultValues(user),
  })

  useEffect(() => {
    reset(getDefaultValues(user))
  }, [open, user])

  const notification = useNotification()

  const onSubmit = handleSubmit((data) => {
    let anyChanges = false
    for (const [key, value] of Object.entries(data)) {
      if (user[key] !== value) {
        anyChanges = true
        break
      }
    }

    mutate(
      // @ts-ignore
      data,
      {
        onSuccess: () => {
          if (anyChanges) {
            // @ts-ignore
            window.checksum.goalTracker.recordGoalFinished("edit-personal-information-success")
          }

          notification(
            "Success",
            "Your information was successfully updated",
            "success"
          )
          refetch()
          onClose()
        },
        onError: () => {},
      }
    )
  })

  return (
    <Modal handleClose={onClose} open={open} isLargeModal={false}>
      <Modal.Header handleClose={onClose}>
        <h1 className="inter-xlarge-semibold">Edit information</h1>
      </Modal.Header>
      <Modal.Body>
        <Modal.Content>
          <div className="flex flex-col gap-y-base">
            <div className="grid grid-cols-2 gap-x-base">
              <InputField
                {...register("first_name")}
                errors={errors}
                label="First name"
              />
              <InputField
                {...register("last_name")}
                errors={errors}
                label="Last name"
              />
            </div>
          </div>
        </Modal.Content>
        <Modal.Footer className="border-t border-grey-20 pt-base">
          <div className="flex items-center justify-end gap-x-xsmall w-full">
            <Button variant="secondary" size="small">
              Cancel
            </Button>
            <Button
              variant="primary"
              size="small"
              loading={isSubmitting}
              disabled={isSubmitting}
              onClick={onSubmit}
            >
              Submit and close
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}

const getDefaultValues = (user: Omit<User, "password_hash">) => {
  return {
    first_name: user.first_name,
    last_name: user.last_name,
  }
}

export default EditUserInformationModal
