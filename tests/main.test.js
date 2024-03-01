// make sure to run project before doing this test

// playwright for integration tests
// vitest for unit tests

import { expect, test } from "@playwright/test";

const url = "http://localhost:3000";
const questionTypes = ["Big Talk", "Fall in Love", "Friends"];

test("has correct title", async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle(/Questions/);
});

test("question modal is hidden", async ({ page }) => {
  await page.goto(url);
  const locator = page.locator("#questions");
  await expect(locator).toBeHidden();
});

for (const i of questionTypes) {
  test(
    "question modal shows after " + i + " group is chosen",
    async ({ page }) => {
      await page.goto(url);
      const locator = page.locator("#questions");
      await page.getByText(i).click();
      await expect(locator).toBeVisible;
    }
  );
}
