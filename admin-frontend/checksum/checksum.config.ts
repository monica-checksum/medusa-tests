import { RunMode, getChecksumConfig } from "@checksum-ai/runtime"

export default getChecksumConfig({
  /**
   * Checksum Run mode. See Readme for more info
   */
  runMode: RunMode.Normal,

  /**
   * Insert here your Checksum API key
   */
  apiKey: "medusamedusa",

  /**
   * This is the base URL of the tested app. E.g. https://example.com
   */
  baseURL: "http://localhost:7001",
  // apiURL: "http://localhost:3000",

  username: "test@test.com",

  password: "1234",
  options: {
    /**
     * Whether to use Checksum Smart Selector when an action fails (see Readme)
     */
    useChecksumSelectors: true,
    /**
     * Whether to use Checksum AI when an action fails (see Readme)
     */
    useChecksumAI: true,
    /**
     * Whether to use mock API data when running your tests (see Readme)
     */
    useMockData: false,
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
