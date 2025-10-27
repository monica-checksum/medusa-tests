# MEDUSA PROJECT RULES - CRITICAL REQUIREMENTS

## 🚨 MANDATORY RULES FOR ALL CODE CHANGES

### 1. **NO console.log statements**
- ❌ NEVER use console.log() in test files
- ❌ NEVER leave console.log statements in production code
- ✅ Remove ALL console.log statements from test files

### 2. **NO REPL imports or eval calls**
- ❌ NEVER import REPL utilities
- ❌ NEVER use eval or REPL function calls
- ❌ NEVER leave commented REPL imports
- ✅ Remove ALL REPL-related code

### 3. **Follow Playwright Playbook Best Practices**
- ✅ Use checksumAI() wrapping for ALL actions
- ✅ Use descriptive action descriptions
- ✅ Use web-first assertions (expect.poll() instead of arbitrary waits)
- ✅ Use proper timeout handling (25000ms, 30000ms)
- ✅ Use robust selectors (filter(), hasNotText(), etc.)

### 4. **Code Quality Standards**
- ✅ Clean imports - remove unused imports
- ✅ Remove commented code
- ✅ Use variablesStore for data persistence
- ✅ **NO const/let declarations** - Use variablesStore for ALL variables
- ✅ Use test.step() for logical grouping
- ✅ Use proper error handling

### 5. **Selector Best Practices**
- ✅ Use filter() and hasNotText() for reliable element selection
- ✅ Avoid brittle selectors like .first(), .last(), .nth()
- ✅ Use role-based selectors when possible
- ✅ Use compound selection only when specifically requested

### 6. **Test Structure**
- ✅ Clear test step organization
- ✅ Descriptive step names
- ✅ Proper variable naming with variablesStore
- ✅ Logical flow and separation of concerns

## 📋 CHECKLIST FOR EVERY CODE CHANGE

Before submitting any code changes, verify:

- [ ] No console.log statements
- [ ] No REPL imports or eval calls
- [ ] All actions wrapped with checksumAI()
- [ ] Descriptive action descriptions
- [ ] Web-first assertions used
- [ ] Proper timeout handling
- [ ] Clean imports
- [ ] No commented code
- [ ] **No const/let declarations** - Use variablesStore for ALL variables
- [ ] Proper error handling
- [ ] Robust selectors used

## 🎯 EXAMPLES

### ❌ BAD CODE:
```typescript
console.log("Debug info")
// REPL utilities are not allowed - never use eval or REPL imports
await page.waitForTimeout(3000)
await page.locator('.css-123').first().click()
const count = await page.locator('tbody tr').count()
```

### ✅ GOOD CODE:
```typescript
await checksumAI("Click on the product menu button", () =>
  page.locator('button[aria-haspopup="menu"]').click()
)
await expect.poll(async () => {
  variablesStore.rowCount = await page.locator('tbody tr').count()
  return variablesStore.rowCount
}, { timeout: 30000 }).toBeGreaterThan(0)
```

---

**REMEMBER: These rules are MANDATORY and must be followed in ALL test files and code modifications.**
