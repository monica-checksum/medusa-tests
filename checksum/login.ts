import { ChecksumConfig, IChecksumPage } from "@checksum-ai/runtime";
import { expect, request } from "@playwright/test";

export default async function login(
  page: IChecksumPage,
  config: ChecksumConfig
) {
  if (!config.username || !config.password) {
    return;
  }

  const url = config.baseURL;
  await page.goto(url);
  await page.getByPlaceholder("Email...").fill(config.username);
  await page.getByPlaceholder("Password...").fill(config.password);
  await page.getByText("Continue").click();
}
