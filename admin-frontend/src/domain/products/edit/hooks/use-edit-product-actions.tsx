import {
  AdminPostProductsProductReq,
  AdminPostProductsProductVariantsReq,
  AdminPostProductsProductVariantsVariantReq,
} from "@medusajs/medusa"
import { navigate } from "gatsby"
import {
  useAdminCreateVariant,
  useAdminDeleteProduct,
  useAdminDeleteVariant,
  useAdminProduct,
  useAdminUpdateProduct,
  useAdminUpdateVariant,
} from "medusa-react"
import useImperativeDialog from "../../../../hooks/use-imperative-dialog"
import useNotification from "../../../../hooks/use-notification"
import { getErrorMessage } from "../../../../utils/error-messages"
import { useEffect } from "react"

const useEditProductActions = (productId: string) => {
  const dialog = useImperativeDialog()
  const notification = useNotification()
  const getProduct = useAdminProduct(productId)
  const updateProduct = useAdminUpdateProduct(productId)
  const deleteProduct = useAdminDeleteProduct(productId)
  const updateVariant = useAdminUpdateVariant(productId)
  const deleteVariant = useAdminDeleteVariant(productId)
  const addVariant = useAdminCreateVariant(productId)

  const onDelete = async () => {
    const shouldDelete = await dialog({
      heading: "Delete Product",
      text: "Are you sure you want to delete this product",
    })
    if (shouldDelete) {
      deleteProduct.mutate(undefined, {
        onSuccess: () => {
          notification("Success", "Product deleted successfully", "success")
          navigate("/a/products/")
          // @ts-ignore
          window.checksum?.goalTracker?.recordGoalFinished(
            "delete-product-success"
          )
        },
        onError: (err) => {
          notification("Error", getErrorMessage(err), "error")
        },
      })
    }
  }

  const onAddVariant = (
    payload: AdminPostProductsProductVariantsReq,
    onSuccess: () => void,
    successMessage = "Variant was created successfully"
  ) => {
    addVariant.mutate(payload, {
      onSuccess: () => {
        notification("Success", successMessage, "success")
        getProduct.refetch()
        onSuccess()

        // @ts-ignore
        window.checksum?.goalTracker?.recordGoalFinished("add-variant-success")
      },
      onError: (err) => {
        notification("Error", getErrorMessage(err), "error")

        // @ts-ignore
        window.checksum?.goalTracker?.recordGoalFinished("add-variant-error")
      },
    })
  }

  const onUpdateVariant = (
    id: string,
    payload: Partial<AdminPostProductsProductVariantsVariantReq>,
    onSuccess: () => void,
    successMessage = "Variant was updated successfully"
  ) => {
    updateVariant.mutate(
      // @ts-ignore - TODO fix type on request
      { variant_id: id, ...payload },
      {
        onSuccess: () => {
          notification("Success", successMessage, "success")
          getProduct.refetch()
          onSuccess()

          // @ts-ignore
          window.checksum?.goalTracker?.recordGoalFinished(
            "edit-variant-success"
          )
        },
        onError: (err) => {
          notification("Error", getErrorMessage(err), "error")

          // @ts-ignore
          window.checksum?.goalTracker?.recordGoalFinished("edit-variant-error")
        },
      }
    )
  }

  const onDeleteVariant = (
    variantId: string,
    onSuccess?: () => void,
    successMessage = "Variant was succesfully deleted"
  ) => {
    deleteVariant.mutate(variantId, {
      onSuccess: () => {
        notification("Success", successMessage, "success")
        getProduct.refetch()
        if (onSuccess) {
          onSuccess()
        }
        // @ts-ignore
        window.checksum?.goalTracker?.recordGoalFinished(
          "delete-variant-success"
        )
      },
      onError: (err) => {
        notification("Error", getErrorMessage(err), "error")
      },
    })
  }

  const onUpdate = (
    payload: Partial<AdminPostProductsProductReq>,
    onSuccess: () => void,
    successMessage = "Product was successfully updated"
  ) => {
    updateProduct.mutate(
      // @ts-ignore TODO fix images being required
      payload,
      {
        onSuccess: () => {
          notification("Success", successMessage, "success")
          onSuccess()

          // Don't measure the edit product success path. This is because this path is duplicated
          // with a bunch of sub-paths that are more specific. We want to measure the sub-paths
          // without penalizing the metrics for duplicate paths.
        },
        onError: (err) => {
          notification("Error", getErrorMessage(err), "error")

          // @ts-ignore
          window.checksum?.goalTracker?.recordGoalFinished("edit-product-error")
        },
      }
    )
  }

  const onStatusChange = (currentStatus: string) => {
    const newStatus = currentStatus === "published" ? "draft" : "published"
    updateProduct.mutate(
      {
        // @ts-ignore TODO fix update type in API
        status: newStatus,
      },
      {
        onSuccess: () => {
          const pastTense = newStatus === "published" ? "published" : "drafted"
          notification(
            "Success",
            `Product ${pastTense} successfully`,
            "success"
          )

          // @ts-ignore
          window.checksum?.goalTracker?.recordGoalFinished(
            "change-product-status-success"
          )
        },
        onError: (err) => {
          notification("Ooops", getErrorMessage(err), "error")
        },
      }
    )
  }

  return {
    getProduct,
    onDelete,
    onStatusChange,
    onUpdate,
    onAddVariant,
    onUpdateVariant,
    onDeleteVariant,
    updating: updateProduct.isLoading,
    deleting: deleteProduct.isLoading,
    addingVariant: addVariant.isLoading,
    updatingVariant: updateVariant.isLoading,
    deletingVariant: deleteVariant.isLoading,
  }
}

export default useEditProductActions
