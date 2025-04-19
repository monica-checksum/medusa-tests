import { RouteComponentProps } from "@reach/router"
import React, { useState } from "react"
import PriceListForm from "./pricing-form"
import { PriceListFormProvider } from "./pricing-form/form/pricing-form-context"
import { ViewType } from "./pricing-form/types"

const New: React.FC<RouteComponentProps> = () => {
  const [hasShownScreen, setHasShownScreen] = useState(false)
  if (!hasShownScreen) {
    // @ts-ignore
    window.checksum?.goalTracker?.recordGoalFinished("new-price-list-start")
    setHasShownScreen(true)
  }

  return (
    <PriceListFormProvider>
      <PriceListForm viewType={ViewType.CREATE} />
    </PriceListFormProvider>
  )
}

export default New
