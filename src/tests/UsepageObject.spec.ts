import { test, expect } from '@playwright/test';

import NavigationPage from "../pages/NavigationPage";

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");
});

test('navigate to user page', async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    await navigateTo.formLayoutstage();
});
