import clsx from "clsx"
import React, { useEffect, useMemo, useState } from "react"
import PlusIcon from "../../../components/fundamentals/icons/plus-icon"
import FilterDropdownContainer from "../../../components/molecules/filter-dropdown/container"
import FilterDropdownItem from "../../../components/molecules/filter-dropdown/item"
import SaveFilterItem from "../../../components/molecules/filter-dropdown/save-field"
import TabFilter from "../../../components/molecules/filter-tab"

const statusFilters = ["active", "draft"]
const typeFilters = ["sale", "override"]

const PriceListsFilter = ({
  filters,
  submitFilters,
  clearFilters,
  tabs,
  onTabClick,
  activeTab,
  onRemoveTab,
  onSaveTab,
}) => {
  const [tempState, setTempState] = useState(filters)
  const [name, setName] = useState("")

  const handleRemoveTab = (val) => {
    // @ts-ignore
    window.checksum.goalTracker.recordGoalFinished("price-list-table-remove-saved-filter")

    if (onRemoveTab) {
      onRemoveTab(val)
    }
  }

  const handleSaveTab = () => {
    // @ts-ignore
    window.checksum.goalTracker.recordGoalFinished("price-list-table-save-new-filter")

    if (onSaveTab) {
      onSaveTab(name, tempState)
    }
  }

  const handleTabClick = (tabName: string) => {
    if (onTabClick) {
      onTabClick(tabName)
    }
  }

  useEffect(() => {
    setTempState(filters)
  }, [filters])

  const onSubmit = () => {
    if (tempState.status.filter) {
      // @ts-ignore
      window.checksum.goalTracker.recordGoalFinished("price-list-table-apply-status-filter")
    }
    if (tempState.type.filter) {
      // @ts-ignore
      window.checksum.goalTracker.recordGoalFinished("price-list-table-apply-type-filter")
    }

    submitFilters(tempState)
  }

  const onClear = () => {
    if (numberOfFilters > 0) {
      // @ts-ignore
      window.checksum.goalTracker.recordGoalFinished("price-list-table-clear-filters")
    }
    clearFilters()
  }

  const numberOfFilters = useMemo(
    () =>
      Object.entries(filters).reduce((acc, [, value]) => {
        if (value?.open) {
          acc = acc + 1
        }
        return acc
      }, 0),
    [filters]
  )

  const setSingleFilter = (filterKey, filterVal) => {
    setTempState((prevState) => ({
      ...prevState,
      [filterKey]: filterVal,
    }))
  }

  return (
    <div className="flex space-x-1">
      <FilterDropdownContainer
        submitFilters={onSubmit}
        clearFilters={onClear}
        triggerElement={
          <button
            className={clsx(
              "flex rounded-rounded items-center space-x-1 focus-visible:outline-none focus-visible:shadow-input focus-visible:border-violet-60"
            )}
          >
            <div className="flex rounded-rounded items-center bg-grey-5 border border-grey-20 inter-small-semibold px-2 h-6">
              Filters
              <div className="text-grey-40 ml-1 flex items-center rounded">
                <span className="text-violet-60 inter-small-semibold">
                  {numberOfFilters ? numberOfFilters : "0"}
                </span>
              </div>
            </div>
            <div className="flex items-center rounded-rounded bg-grey-5 border border-grey-20 inter-small-semibold p-1">
              <PlusIcon size={14} />
            </div>
          </button>
        }
      >
        <FilterDropdownItem
          filterTitle="Status"
          options={statusFilters}
          filters={tempState.status.filter}
          open={tempState.status.open}
          setFilter={(v) => setSingleFilter("status", v)}
        />
        <FilterDropdownItem
          filterTitle="Type"
          options={typeFilters}
          filters={tempState.type.filter}
          open={tempState.type.open}
          setFilter={(v) => setSingleFilter("type", v)}
        />
        <SaveFilterItem
          saveFilter={handleSaveTab}
          name={name}
          setName={setName}
        />
      </FilterDropdownContainer>
      {tabs &&
        tabs.map((t) => (
          <TabFilter
            key={t.value}
            onClick={() => handleTabClick(t.value)}
            label={t.label}
            isActive={activeTab === t.value}
            removable={!!t.removable}
            onRemove={() => handleRemoveTab(t.value)}
          />
        ))}
    </div>
  )
}

export default PriceListsFilter
