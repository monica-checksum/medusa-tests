
**BEFORE TEST EDITING, COMPLETE THE FOLLOWING STEPS:**

1. Copy the ```/tests/*``` directory (which includes QA Engineering folder)
2. Navigate to ```/admin-frontend/checksum```
3. Paste the ```/tests``` directory into the ```checksum``` folder
4. Make edits and run tests from within the ```/admin-frontend/checksum/tests/*``` directory

<br/>
<br/>

**TO RUN THE TEST APP:**

at root, run: 
```yarn install```

in new terminal window:
```cd backend```
run:
```yarn install```
```yarn start```

in new terminal window:
```cd admin-frontend```
run:
```yarn install```
```yarn start```

app located at: ```http://localhost:7001/```

<br/>
<br/>

**NOTES:**

**Checksum built in page.compoundSelector() method** *(this material will soon be added to the runtime readme)*
 /**
   * Will create a compound selection that selects elements by grouping multiple locators as anchors
   * and finding the target elements from their common root parent.
   *
   * **Usage example**
   *
   * ```js
   * await page.compoundSelection({
   *    anchors: (base) => [base.getByText("<selector to first anchor>""), page.locator("selector to second anchor"), "<text content of third anchor>"],
   *    target?: (base) => base.locator("<relative selector to target element>")
   * }).first().click();
   * ```
   * @param selection
   */
  compoundSelection?(selection: {
    /**
     * Method that returns array of locators to group and calculate the common parent from.
     * The method should return an array of locators or strings that point at the anchor elements.
     *
     * @param base Base locator that the compound selection is called on.
     */
    anchors: (base: Locator) => Array<Locator | string>;
    /**
     * Method that returns the relative locator or string content that will point at the target element from the common parent
     * that was calculated from the anchors.
     * If the target is null, the compound selection will return a locator to the common parents.
     *
     * @param base Base locator that the compound selection is called on.
     */
    target?: (base: Locator) => Locator | string;
  }): Locator;

