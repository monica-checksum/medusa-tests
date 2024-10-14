MEDUSA_URLS = ["https://medusa-frontend-e5awkpngiq-uc.a.run.app"];
MEDUSA_LOGINS = [
  {
    username: "user6@1234.com",
    password: "1234",
  },
];

const instructions = [
  "Your task is to generate sessions on an app called Medusa.",
  "You will receive a list of goals to achieve in the app. Complete them one by one.",
  "Your sessions should be as similar as possible to a real user. Feel free to make mistakes and create minor changes between sessions.",
  "Generate your sessions in incognito",
  "Once you are done with a session, close all incognito windows and refresh this page to get a new set of sessions",
  "We record every action done on this app and can detect empty sessions. Make sure to follow the instructions and stay active",
  "If you want to split screen between this window and the app, make this window as small as possible",
];

const instructionsList = document.getElementById("instructions-list");

for (let i = 0; i < instructions.length; i++) {
  const li = document.createElement("li");
  li.classList.add("p-2");
  li.textContent = instructions[i];
  instructionsList.appendChild(li);
}

const url = MEDUSA_URLS[Math.floor(Math.random() * MEDUSA_URLS.length)];
const login = MEDUSA_LOGINS[Math.floor(Math.random() * MEDUSA_LOGINS.length)];
const urlParams = new URLSearchParams(location.search);
utm_source = urlParams.get("utm_source");
const topTasks = [
  "Open a fresh incognito window",
  `Go to <a href="${url}">${url}?utm_source=${utm_source}</a>`,
  `Login with username: ${login.username} and password: ${login.password}`,
];

const bottomTasks = ["Close browser window"];

const pages = [
  { name: "productListOrNew", first_task: "Go to products page" },
  {
    name: "productDetails",
    first_task:
      "Go to products page and click on a product. If there isn't a product there, create one",
  },
  { name: "discountListOrNew", first_task: "Go to discounts page" },
  {
    name: "discountDetails",
    first_task:
      "Go to discounts page and click on a discount to enter the discount details page. If there isn't a discount, create one",
  },
  { name: "giftCardListOrNew", first_task: "Go to gift card page" },
  {
    name: "giftCardManage",
    first_task:
      "Go to gift card page and select a gift card. If there isn't a gift card, create one.",
  },
  {
    name: "pricingNew",
    first_task: "Go to pricing page and click the add price list button",
  },
  { name: "pricingList", first_task: "Go to pricing page" },
  {
    name: "priceDetails",
    first_task:
      "Go to pricing page and select a price from the list. If there isn't any price, create one",
  },
  {
    name: "regionDetail",
    first_task:
      "Go to Settings > Regions and choose a region from the list on the right",
  },
  { name: "currencies", first_task: "Go to Go to Settings > Currencies" },
  { name: "storeDetails", first_task: "Go to Settings > Store Details" },
  {
    name: "returnReasons",
    first_task: "Go to Settings > Return Reasons",
  },
  { name: "team", first_task: "Go to Settings > The Team" },
  {
    name: "personalInformation",
    first_task: "Go to Settings > Personal Information",
  },
  { name: "taxSettings", first_task: "Go to Settings > Tax Settings" },
  { name: "general", first_task: "" },
  {
    name: "orders",
    first_task: "Go to orders page",
  },
  {
    name: "draftOrderDetails",
    first_task:
      "Go to orders page, click on drafts and create a new draft order",
  },
  {
    name: "orderDetails",
    first_task:
      "Go to orders page, click on drafts and create a new draft order. Then mark the order as paid",
  },
  {
    name: "customerList",
    first_task: "Go to customers page",
  },
  {
    name: "customerDetails",
    first_task: "Go to the customers page and choose one customer",
  },
  {
    name: "customerGroup",
    first_task:
      "Go to customers page, then select groups and click on a group from the list. If the list is empty, create a group",
  },
];

const tasks = [
  {
    page: "productListOrNew",
    task: "Add new product but abandon the task by clicking cancel or the X on the top left",
    goals: "",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Add new product",
    goals:
      "edit-product-start,new-product-start,new-product-success,view-product-list",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Unpublish product",
    goals: "view-product-list,unpublish-product",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Export products",
    goals: "view-product-list,export-products",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Duplicate product",
    goals: "view-product-list,duplicate-product,edit-product-start",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Filter product list and then clear filters",
    goals:
      "view-product-list,products-table-apply-collection-filter,products-table-clear-filters",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Filter product list",
    goals: "view-product-list,products-table-apply-status-filter",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Search product list",
    goals: "view-product-list,products-table-search",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Edit product",
    goals: "view-product-list,edit-product-start",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Delete product",
    goals: "view-product-list,delete-product-from-dropdown",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Go to collections and add a collection but abandon the task by clicking cancel or the X on the top left",
    goals: "view-product-list",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Go to collections and add a collection",
    goals: "view-product-list,create-collection-success",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Go to collections and edit a collection",
    goals: "view-product-list,edit-collection-success",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Go to collections and add a collection, but use an handle that already exists so it results in an error",
    goals: "view-product-list,create-collection-error",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Go to collections and edit a collection, but use an handle that already exists so it results in an error",
    goals: "view-product-list,edit-collection-error",
    anchor: "",
  },
  {
    page: "productListOrNew",
    task: "Go to collections and sort collections",
    goals: "view-product-list",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Edit general information",
    goals:
      "edit-product-start,edit-product-general-information-start,edit-product-general-information-submit",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Edit variants",
    goals: "edit-product-start,edit-product-variants-inventory-success",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Add variant but abandon the task by clicking cancel or the X on the top left",
    goals: "",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Add variant",
    goals: "edit-product-start,add-variant-start,add-variant-success",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Delete variant",
    goals: "edit-product-start,delete-variant-success",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Edit product variant",
    goals: "edit-product-start",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Edit media",
    goals:
      "edit-product-start,edit-product-images-start,edit-product-images-submit",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Edit thumbnail",
    goals: "edit-product-start,upload-product-thumbnail-start",
    anchor: "",
  },
  {
    page: "productDetails",
    task: "Edit attribute",
    goals:
      "edit-product-start,edit-product-attributes-start,edit-product-attributes-submit",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Add new discount but abandon the task by clicking cancel or the X on the top left",
    goals: "",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Add new discount",
    goals: "view-discount-list,new-discount-start,new-discount-publish-success",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Add discount with percentage higher than 100% to create an error",
    goals:
      "view-discount-list,new-discount-start,new-discount-save-draft-error",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Add discount and save as draft",
    goals:
      "view-discount-list,new-discount-start,new-discount-safe-draft-success",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Unpublish discount",
    goals: "view-discount-list",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Publish discount",
    goals: "view-discount-list",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Filter discounts",
    goals: "view-discount-list,discounts-table-apply-filters",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Search discounts",
    goals: "view-discount-list,discounts-table-search",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Delete discount",
    goals: "view-discount-list",
    anchor: "",
  },
  {
    page: "discountListOrNew",
    task: "Filter discounts and then clear filters",
    goals:
      "view-discount-list,discounts-table-search,discounts-table-apply-filters,discounts-table-clear-filters",
    anchor: "",
  },
  {
    page: "discountDetails",
    task: "Edit general information",
    goals:
      "view-discount-list,view-discount-details,edit-discount-general-information-start,edit-discount-general-information-success",
    anchor: "",
  },
  {
    page: "discountDetails",
    task: "Edit discount configurations",
    goals:
      "view-discount-list,view-discount-details,edit-discount-general-information-start,edit-discount-general-information-success,edit-discount-configurations-start,edit-discount-configurations-success",
    anchor: "",
  },
  {
    page: "discountDetails",
    task: "Delete discount configuration",
    goals: "view-discount-details,delete-discount-usage-limit-success",
    anchor: "",
  },
  {
    page: "discountDetails",
    task: "Add discount conditions but abandon the task by clicking cancel or the X on the top left",
    goals: "",
    anchor: "",
  },
  {
    page: "discountDetails",
    task: "Add discount conditions",
    goals: "view-discount-details,new-discount-condition-success",
    anchor: "",
  },
  {
    page: "discountDetails",
    task: "Edit discount condition",
    goals: "view-discount-details,new-discount-condition-success",
    anchor: "",
  },
  {
    page: "discountDetails",
    task: "Delete discount condition",
    goals: "view-discount-details,delete-discount-condition-success",
    anchor: "",
  },
  {
    page: "discountDetails",
    task: "Delete discount",
    goals: "view-discount-details,view-discount-list",
    anchor: "",
  },
  {
    page: "giftCardListOrNew",
    task: "Create a custom gift card but abandon the task by clicking cancel or the X on the top left",
    goals: "",
    anchor: "",
  },
  {
    page: "giftCardListOrNew",
    task: "Create a custom gift card",
    goals:
      "view-gift-card-list,create-custom-gift-card-start,create-custom-gift-card-success",
    anchor: "",
  },
  {
    page: "giftCardListOrNew",
    task: "Create a custom gift card and input invalid emails",
    goals:
      "view-gift-card-list,create-custom-gift-card-start,create-custom-gift-card-error",
    anchor: "",
  },
  {
    page: "giftCardListOrNew",
    task: "Delete gift card",
    goals: "view-gift-card-list",
    anchor: "",
  },
  {
    page: "giftCardListOrNew",
    task: "Add gift card",
    goals:
      "view-gift-card-list,new-gift-card-start,new-gift-card-success,view-manage-gift-card",
    anchor: "",
  },
  {
    page: "giftCardListOrNew",
    task: "Unpublish gift card",
    goals: "view-gift-card-list,unpublish-gift-card",
    anchor: "",
  },
  {
    page: "giftCardListOrNew",
    task: "Publish gift card",
    goals: "view-gift-card-list,publish-gift-card",
    anchor: "",
  },
  {
    page: "giftCardManage",
    task: "Unpublish gift card",
    goals: "view-manage-gift-card,edit-gift-card-unpublish",
    anchor: "",
  },
  {
    page: "giftCardManage",
    task: "Publish gift card",
    goals: "view-manage-gift-card,edit-gift-card-publish",
    anchor: "",
  },
  {
    page: "giftCardManage",
    task: "Edit gift card general information",
    goals: "view-manage-gift-card,edit-gift-card-general-information-success",
    anchor: "",
  },
  {
    page: "giftCardManage",
    task: "Add gift card denomination",
    goals:
      "view-manage-gift-card,edit-gift-card-add-denomination-start,edit-gift-card-add-denomination-success",
    anchor: "",
  },
  {
    page: "giftCardManage",
    task: "Add gift card image",
    goals: "view-manage-gift-card,edit-gift-card-add-image",
    anchor: "",
  },
  {
    page: "giftCardManage",
    task: "Delete gift card image",
    goals:
      "view-manage-gift-card,edit-gift-card-add-image,edit-gift-card-delete-image",
    anchor: "",
  },
  {
    page: "giftCardManage",
    task: "Edit gift card denomination",
    goals:
      "view-manage-gift-card,edit-gift-card-change-denomination-start,edit-gift-card-change-denomination-success",
    anchor: "",
  },
  {
    page: "pricingNew",
    task: "Add new price",
    goals:
      "view-manage-gift-card,edit-gift-card-change-denomination-start,edit-gift-card-change-denomination-success,view-price-list-table,new-price-list-start,publish-price-list-success,view-price-list-details",
    anchor: "",
  },
  {
    page: "pricingNew",
    task: "Save new price as draft",
    goals:
      "new-price-list-start,save-price-list-draft-success,view-price-list-details",
    anchor: "",
  },
  {
    page: "pricingList",
    task: "Filter lists",
    goals: "view-price-list-table,price-list-table-apply-status-filter",
    anchor: "",
  },
  {
    page: "pricingList",
    task: "Clear filter list",
    goals:
      "view-price-list-table,price-list-table-apply-status-filter,price-list-table-clear-filters",
    anchor: "",
  },
  {
    page: "pricingList",
    task: "Search list",
    goals: "view-price-list-table,price-list-table-search",
    anchor: "",
  },
  {
    page: "pricingList",
    task: "Unpublish price",
    goals: "view-price-list-table,unpublish-price-list-from-table-success",
    anchor: "",
  },
  {
    page: "pricingList",
    task: "Delete price",
    goals: "view-price-list-table,delete-price-list-from-table-success",
    anchor: "",
  },
  {
    page: "pricingList",
    task: "Publish price",
    goals: "view-price-list-table,publish-price-list-from-table-success",
    anchor: "",
  },
  {
    page: "priceDetails",
    task: "Edit general information details (top three dots)",
    goals:
      "view-price-list-details,edit-price-list-details-start,edit-price-list-details-success",
    anchor: "",
  },
  {
    page: "priceDetails",
    task: "Edit prices",
    goals:
      "view-price-list-details,edit-price-list-prices-start,edit-price-list-prices-success",
    anchor: "",
  },
  {
    page: "priceDetails",
    task: "Remove product from prices",
    goals:
      "view-price-list-details,edit-price-list-details-start,edit-price-list-details-success,edit-price-overrides-start,edit-price-overrides-success,delete-prices-for-product-success",
    anchor: "",
  },
  {
    page: "regionDetail",
    task: "Add region",
    goals:
      "view-price-list-details,edit-price-list-details-start,edit-price-list-details-success,edit-price-overrides-start,edit-price-overrides-success,delete-prices-for-product-success,view-price-list-table,view-settings-index-page,view-region-settings,new-region-start,new-region-success",
    anchor: "",
  },
  {
    page: "regionDetail",
    task: "Edit region details",
    goals: "",
    anchor: "",
  },
  {
    page: "regionDetail",
    task: "Add shipping option",
    goals:
      "view-region-settings,create-shipping-option-start,create-shipping-option-success",
    anchor: "",
  },
  {
    page: "regionDetail",
    task: "Edit shipping option",
    goals:
      "view-region-settings,edit-shipping-option-start,edit-shipping-option-success",
    anchor: "",
  },
  {
    page: "regionDetail",
    task: "Add return option",
    goals:
      "view-region-settings,create-return-shipping-option-start,create-return-shipping-option-success",
    anchor: "",
  },
  {
    page: "regionDetail",
    task: "Edit return option",
    goals:
      "view-region-settings,edit-shipping-option-start,edit-shipping-option-success",
    anchor: "",
  },
  {
    page: "currencies",
    task: "Add currency",
    goals: "view-currency-settings,add-currency-success",
    anchor: "",
  },
  {
    page: "currencies",
    task: 'Add currency but select "save and go back"',
    goals: "view-currency-settings,add-currency-success",
    anchor: "",
  },
  {
    page: "currencies",
    task: "Change default currency",
    goals: "view-currency-settings, change-default-currency-success",
    anchor: "",
  },
  {
    page: "currencies",
    task: "Remove currency",
    goals: "view-currency-settings,remove-currency-success",
    anchor: "",
  },
  {
    page: "storeDetails",
    task: "Change store details and save",
    goals:
      "view-store-details,edit-store-details-error,edit-store-details-success",
    anchor: "",
  },
  {
    page: "storeDetails",
    task: "Change store details and cancel",
    goals: "view-store-details",
    anchor: "",
  },
  {
    page: "returnReasons",
    task: "Add reason",
    goals: "view-return-reasons,create-return-reason-submit",
    anchor: "",
  },
  {
    page: "returnReasons",
    task: "Duplicate reason",
    goals:
      "view-return-reasons,duplicate-return-reason,create-return-reason-submit",
    anchor: "",
  },
  {
    page: "returnReasons",
    task: "Edit reason",
    goals: "view-return-reasons,edit-return-reason-success",
    anchor: "",
  },
  {
    page: "returnReasons",
    task: "Delete reason",
    goals: "view-return-reasons,delete-return-reason-success",
    anchor: "",
  },
  {
    page: "team",
    task: "Invite team member",
    goals:
      "view-settings-index-page,view-user-list,invite-user-start,invite-user-success",
    anchor: "",
  },
  {
    page: "team",
    task: "resend invitation",
    goals: "view-user-list,resend-invitation-link",
    anchor: "",
  },
  {
    page: "team",
    task: "copy invitation link",
    goals: "view-user-list,resend-invitation-link,copy-invite-link",
    anchor: "",
  },
  {
    page: "team",
    task: "remove invitation",
    goals:
      "view-user-list,resend-invitation-link,copy-invite-link,delete-invitation-success",
    anchor: "",
  },
  {
    page: "team",
    task: "edit user first or last name",
    goals: "view-user-list,edit-user-start,edit-user-success",
    anchor: "",
  },
  {
    page: "personalInformation",
    task: "edit personal information",
    goals: "edit-personal-information-start,edit-personal-information-success",
    anchor: "",
  },
  {
    page: "personalInformation",
    task: "edit usage insights preference",
    goals: "edit-usage-insights-start,edit-usage-insights-success",
    anchor: "",
  },
  {
    page: "taxSettings",
    task: "Add new tax rate",
    goals:
      "view-tax-settings-for-region,create-tax-rate-start,create-tax-rate-success",
    anchor: "",
  },
  {
    page: "taxSettings",
    task: "Go to region settings (top left three dots)",
    goals: "view-region-settings",
    anchor: "",
  },
  {
    page: "taxSettings",
    task: "Edit task rate",
    goals:
      "view-tax-settings-for-region,edit-default-tax-rate-start,edit-default-tax-rate-success",
    anchor: "",
  },
  {
    page: "taxSettings",
    task: "Uncheck calculate taxes automatically and save",
    goals: "view-tax-settings-for-region,edit-region-tax-settings-success",
    anchor: "",
  },
  {
    page: "taxSettings",
    task: "Uncheck apply tax to gift cards and save",
    goals: "view-tax-settings-for-region,edit-region-tax-settings-success",
    anchor: "",
  },
  {
    page: "general",
    task: "Search top search box",
    goals: "view-customer-list",
    anchor: "",
  },
  {
    page: "general",
    task: "Invite a team member from the left bar",
    goals: "view-customer-list,invite-user-start,invite-user-success",
    anchor: "",
  },
  {
    page: "general",
    task: "Invite a team member from the left bar but don't enter an email and close modal by clicking cancel or the X",
    goals: "view-customer-list,invite-user-start",
    anchor: "",
  },
  {
    page: "general",
    task: "click profile avatar on the top left and logout",
    goals: "view-product-list",
    anchor: "",
  },
  {
    page: "general",
    task: "on the top bar, click the help button and submit a ticket",
    goals: "",
    anchor: "",
  },
  {
    page: "orders",
    task: "Go to drafts and create a draft order",
    goals:
      "new-order-start,new-order-success,view-draft-orders,view-order-list,view-product-list,view-single-draft-order",
    anchor: "",
  },
  {
    page: "draftOrderDetails",
    task: "Edit the customer billing address",
    goals: "",
    anchor: "",
  },
  {
    page: "draftOrderDetails",
    task: "Edit the customer shipping address",
    goals: "",
    anchor: "",
  },
  {
    page: "orderDetails",
    task: "Cancel order by clicking on the three dots next to the order name",
    goals: "",
    anchor: "",
  },
  {
    page: "orderDetails",
    task: "Request a return by clicking on the three dots next to timeline and following the instructions on screen",
    goals: "",
    anchor: "",
  },
  {
    page: "orderDetails",
    task: "Register a claim by clicking on the three dots next to timeline and following the instructions on screen",
    goals: "",
    anchor: "",
  },
  {
    page: "orderDetails",
    task: 'Refund the order by clicking the "refund order" button and following the instructions on screen',
    goals: "",
    anchor: "",
  },
  {
    page: "orderDetails",
    task: 'Create a fulfillment by clicking the "Create fulfillment" button and follow the instructions on screen',
    goals: "",
    anchor: "",
  },
  {
    page: "customerList",
    task: "Click on the three dots next to a customer and click edit",
    goals: "",
    anchor: "",
  },
  {
    page: "customerList",
    task: "Click on the three dots next to a customer and click details",
    goals: "",
    anchor: "",
  },
  {
    page: "customerList",
    task: "Go to groups and add a new group",
    goals: "",
    anchor: "",
  },
  {
    page: "customerList",
    task: "Go to groups edit a group. If the list is empty create a group first.",
    goals: "",
    anchor: "",
  },
  {
    page: "customerDetails",
    task: "Edit the customer details by clicking on the three dots on the top of the screen and then Edit.  Then follow the instructions on the screen",
    goals: "",
    anchor: "",
  },
  {
    page: "customerDetails",
    task: "On the orders box, click on one order",
    goals: "",
    anchor: "",
  },
  {
    page: "customerGroup",
    task: "Edit the group",
    goals: "",
    anchor: "",
  },
  {
    page: "customerGroup",
    task: "Remove a customer from this group",
    goals: "",
    anchor: "",
  },
  {
    page: "customerGroup",
    task: "Add a customer to this group",
    goals: "",
    anchor: "",
  },
  {
    page: "customerGroup",
    task: "Delete the group",
    goals: "",
    anchor: "",
  },
];

function getRandomPages(pages) {
  const numPages = Math.floor(Math.random() * 6) + 1; // Randomize number of pages between 1 and 6
  const selectedPages = [];

  for (let i = 0; i < numPages; i++) {
    const randomIndex = Math.floor(Math.random() * pages.length);
    selectedPages.push(pages[randomIndex]);
  }
  return selectedPages;
}

function getRandomTasksPerPage(page, tasks) {
  const pageName = page.name;
  // Filter tasks by the given pageName
  const filteredTasks = tasks.filter((task) => task.page === pageName);
  const maxTasks = Math.min(7, filteredTasks.length);
  const numTasks = Math.floor(Math.random() * maxTasks) + 1
  const selectedTasks = [];
  if (filteredTasks.length > 0) {
    for (let i = 0; i < numTasks; i++) {
      const randomIndex = Math.floor(Math.random() * filteredTasks.length);
      selectedTasks.push(filteredTasks[randomIndex].task);
      filteredTasks.splice(randomIndex, 1);
    }
  }
  return selectedTasks;
}
function getRandomTasks() {
  const selectedPages = getRandomPages(pages);
  let selectedTasks = topTasks;
  for (const page of selectedPages) {
    const selectedTasksPerPage = getRandomTasksPerPage(page, tasks);
    if (page.first_task) {
      selectedTasks.push(page.first_task);
    }
    selectedTasks = selectedTasks.concat(selectedTasksPerPage);
  }
  selectedTasks = selectedTasks.concat(bottomTasks);
  return selectedTasks;
}

function addTasksToTable(tasks) {
  const table = document.getElementById("myTable");
  const tbody = table.getElementsByTagName("tbody")[0];
  for (let i = 0; i < tasks.length; i++) {
    const row = tbody.insertRow(i);
    const cell = row.insertCell(0);
    cell.classList.add("d-flex");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-2"); // add class "m-3" to checkbox
    cell.appendChild(checkbox);
    const textDiv = document.createElement("div");
    textDiv.classList.add("m-2");
    textDiv.innerHTML = tasks[i];
    cell.appendChild(textDiv);

    // Add event listener to checkbox
    checkbox.addEventListener("change", function (e) {
      el = e.target;
      if (el.checked) {
        el.parentNode.style.color = "gray";
        el.parentNode.style.textDecoration = "line-through";
      } else {
        el.parentNode.style.color = "black";
        el.parentNode.style.textDecoration = "none";
      }
    });
  }
}

function switchScreen() {
  instructionsDiv = document.querySelector("#instructions");
  tasksDiv = document.querySelector("#tasks");
  if (instructionsDiv.classList.contains("d-none")) {
    instructionsDiv.classList.remove("d-none");
    tasksDiv.classList.add("d-none");
  } else {
    tasksDiv.classList.remove("d-none");
    instructionsDiv.classList.add("d-none");
  }
}

addTasksToTable(getRandomTasks());

try {
  module.exports = {
    getRandomPages,
    getRandomTasksPerPage,
    getRandomTasks,
    addTasksToTable,
    switchScreen,
    pages,
    tasks,
  };
} catch {
  
}
