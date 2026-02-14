import { expect, test } from "@playwright/test";

test("home page visual regression", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Hello" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Say hello" })).toBeVisible();
  await expect(page).toHaveScreenshot("app-home.png", { fullPage: true });
});
