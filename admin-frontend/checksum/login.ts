import { ChecksumConfig, IChecksumPage } from "@checksum-ai/runtime"
import { expect, request } from "@playwright/test"

export default async function login(
  page: IChecksumPage,
  config: ChecksumConfig
) {
  const apiContext = await request.newContext({
    baseURL: "http://localhost:9000",
  })
  const response = await apiContext.get("/reset-db")
  if (response.status() === 200) {
    console.log("db resetted. Waiting for server to reload")
  } else {
    console.log(response.status())
  }
  while (true) {
    try {
      const apiTestRequest = await apiContext.get("/")
      await page.waitForTimeout(2000)
      console.log("server responded. Proceeding to login")
      break
    } catch (error) {
      console.log("backend not ready... trying in two seconds")
      await page.waitForTimeout(2000)
    }
  }
  await page.goto("/login")
  await page.getByPlaceholder("Email...").fill(config.username || "")
  await page.getByPlaceholder("Password...").fill(config.password || "")
  await page.getByText("Continue").click()
  await page.waitForTimeout(3000)
}
