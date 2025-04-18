import { ChecksumLoginFunction } from "@checksum-ai/runtime"

const login: ChecksumLoginFunction = async (
  page,
  { user, environment, config }
) => {
  const username = user.username
  const password = user.password

  if (!username || !password) {
    throw new Error("USERNAME and PASSWORD must be set")
  }

  await page.goto("/login")
  await page.getByPlaceholder("Email...").fill(username)
  await page.getByPlaceholder("Password...").fill(password)
  await page.getByText("Continue").click()
  await page.waitForTimeout(3000)

  console.log("Login Successful");
  return
}

export default login
