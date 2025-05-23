import { test, Page, Browser, Locator, Expect, expect } from '@playwright/test';
import { chromium, firefox } from 'playwright';

test('Move to Element', async () => {
    const Browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await Browser.newPage();

    await page.goto("https://www.bigbasket.com/");

    const title = await page.title();
    console.log(title);

    await expect(title).toEqual("Online Grocery Shopping and Online Supermarket in India - bigbasket");

    // Hover over the element and perform action
    const grosorybtn: Locator = await page.locator('xpath=//button[@id="headlessui-menu-button-:R5bab6:"]');
    await grosorybtn.click();
       
    const Fashion:Locator= await page.locator('xpath=//*[@id="headlessui-menu-items-:R1769b6:"]/nav/ul[1]/li[2]/a');
    const Footware:Locator=await page.locator('xpath=//*[@id="headlessui-menu-items-:R9bab6:"]/nav/ul[2]/li[2]/a');
    const WoomansFOtware=await page.locator('xpath=//*[@id="headlessui-menu-items-:R9bab6:"]/nav/ul[3]/li[2]/a');


   /* await page.getByText("Electronics").first().hover();
        await page.waitForTimeout(5000);
    await page.getByText("Home & Kitchen Appliance").first().hover();
    await page.getByText("Microwaves").first().click();  */

   await  Fashion.first().hover();
   await Footware.first().hover();
   await WoomansFOtware.first().click();
    




    await Browser.close(); // Added 'await' before closing the browser
});
