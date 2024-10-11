import { useAdminProducts } from "medusa-react"
import React, { useContext, useEffect, useState } from "react"
import Button from "../../../../../../../components/fundamentals/button"
import Modal from "../../../../../../../components/molecules/modal"
import { LayeredModalContext } from "../../../../../../../components/molecules/modal/layered-modal"
import { SelectableTable } from "../../../../../../../components/templates/selectable-table"
import { useDebounce } from "../../../../../../../hooks/use-debounce"
import useQueryFilters from "../../../../../../../hooks/use-query-filters"
import { defaultQueryProps } from "../../../../..//new/discount-form/condition-tables/shared/common"
import {
  ProductRow,
  ProductsHeader,
  useProductColumns,
} from "../../../../../new/discount-form/condition-tables/shared/products"
import { useEditConditionContext } from "../../edit-condition-provider"

const AddProductConditionsScreen = () => {
  const params = useQueryFilters(defaultQueryProps)

  const { pop } = useContext(LayeredModalContext)

  const [selectedResources, setSelectedResources] = useState<string[]>([])

  const columns = useProductColumns()

  const { isLoading, count, products } = useAdminProducts(params.queryObject, {
    keepPreviousData: true,
  })

  const { saveAndClose, saveAndGoBack } = useEditConditionContext()

  return (
    <>
      <Modal.Content>
        <SelectableTable
          options={{
            enableSearch: true,
            immediateSearchFocus: true,
            searchPlaceholder: "Search...",
          }}
          resourceName="Products"
          totalCount={count ?? 0}
          selectedIds={selectedResources}
          data={products || []}
          columns={columns}
          isLoading={isLoading}
          onChange={(ids) => setSelectedResources(ids)}
          renderRow={ProductRow}
          renderHeaderGroup={ProductsHeader}
          {...params}
        />
      </Modal.Content>
      <Modal.Footer>
        <div className="flex justify-end w-full space-x-xsmall">
          <Button variant="secondary" size="small" onClick={pop}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="small"
            onClick={() => {
              if (selectedResources.length > 0) {
                // @ts-ignore
                window.checksum.goalTracker.recordGoalFinished("add-discount-condition-product-resource")
              }

              saveAndGoBack(selectedResources)
            }}
          >
            Save and go back
          </Button>
          <Button
            variant="primary"
            size="small"
            onClick={() => {
              if (selectedResources.length > 0) {
                // @ts-ignore
                window.checksum.goalTracker.recordGoalFinished("add-discount-condition-product-resource")
              }

              saveAndClose(selectedResources)
            }}
          >
            Save and close
          </Button>
        </div>
      </Modal.Footer>
    </>
  )
}

export default AddProductConditionsScreen
