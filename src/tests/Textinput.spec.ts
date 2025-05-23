import { test, expect, Browser, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test.describe('Input_user test', () => {
  test('Login Test', async ({ page }) => {
    await page.getByRole('textbox', { name: 'username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');
    await page.locator('//*[text()="Login"]').click();

    await page.waitForTimeout(5000);
    
    // Example assertion (add as needed)
    await expect(page).toHaveURL(/dashboard/i);
  });
});
