import { test, expect } from "@playwright/test";

test("Dropdown Selection", async ({ page }) => {
    await page.goto("https://testautomationcentral.com/demo/dropdown.html");

    // Locate all dropdown elements
    const dropdowns = await page.locator("//select[@class='form-select block w-full mt-1']").all();

    await page.waitForTimeout(5000); // Optional, but consider using proper waits instead

    // Select and validate each dropdown separately
    for (const dropdown of dropdowns) {
        await dropdown.waitFor({ state: "visible" });
        await dropdown.selectOption("Option 2");

        // Validate selection for the current dropdown
        const selectedValue = await dropdown.inputValue();
        console.log(`Selected Value: ${selectedValue}`);
        expect(selectedValue).toEqual("Option 2");
    }
});
