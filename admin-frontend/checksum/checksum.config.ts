import { RunMode, getChecksumConfig } from "@checksum-ai/runtime"
import { resolve } from "path"
require("dotenv").config({ path: resolve(__dirname, ".env") })

export default getChecksumConfig({
  /**
   * Checksum Run mode. See Readme for more info
   */
  runMode: RunMode.Normal,

  /**
   * Insert here your Checksum API key. You can find it in https://app.checksum.ai/#/settings/
   */
  apiKey: process.env.CHECKSUM_API_KEY,

  /**
   * Test environments
   */
  environments: [
    {
      name: "medusa_local",
      baseURL: process.env.BASE_URL || "http://localhost:7000",
      loginURL: process.env.LOGIN_URL,
      default: true,
      users: [
        {
          role: "",
          username: process.env.USERNAME,
          password: process.env.PASSWORD,
          default: true,
        },
      ],
    },
  ],

  options: {
    /**
     * Whether to use Checksum Smart Selector in order to recover from failing to locate an element for an action (see README)
     */
    useChecksumSelectors: true,
    /**
     * Whether to use Checksum AI in order to recover from a failed action or assertion (see README)
     */
    useChecksumAI: { actions: false, assertions: false },
    /**
     * Whether to use mock API data when running your tests (see README)
     */
    useMockData: true,
    /**
     * Whether to Upload HTML test reports to app.checksum.ai so they can be viewed through the UI. Only relevant if Playwright reporter config is set to HTML
     * Reports will be saved locally either way (according to Playwright Configs) and can be viewed using the CLI command show-reports.
     */
    hostReports: !!process.env.CI,
    /**
     * Whether to create a PR with healed tests. Only relevant when in Heal mode.
     */
    autoHealPRs: !!process.env.CI,
  },
})
