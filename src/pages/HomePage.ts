import { expect, Page } from "@playwright/test";

export default class HomePage {
    private readonly applauncherSelector = "//button[@title='App Launcher']"; 

    constructor(private page: Page) {}

    async expectHomePageTitleToBeVisible() {
    await this.page.waitForTimeout(6000) // Ensure full page load
    const title = await this.page.title();
    console.log(`Page title received: "${title}"`); // Debug log

    expect(title).toEqual("Lightning Experience");
}


    async clickAppLauncher() {
        try {
            const appLauncher = this.page.locator(this.applauncherSelector);
            await appLauncher.waitFor(); // Ensures visibility before interaction
            await appLauncher.click();
            console.log("App Launcher clicked successfully");
        } catch (error) {
            console.error(`Error clicking App Launcher: ${error}`);
            throw error;
        }
    }

    
}
