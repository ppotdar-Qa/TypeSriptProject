import  { test,Page,Browser,expect,Locator } from "@playwright/test";
import { chromium,firefox } from "playwright";

test('DropdownHandle', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const country='select#Contact_CountryCode'

    /*await page.selectOption(country,{ label: 'Albania' });

    await page.waitForTimeout(5000);
    await browser.close();

    */

   const allOptions = await page.$$(country + '>option');

for (const e of allOptions) {
    const text = await e.textContent(); // Corrected async handling
    console.log(text);

    if (text === 'India') {
        await page.selectOption(country, { label: text }); // Added 'await'
        break;
    }
}

test('Radio', async()=>{
    const browser: Browser = await chromium.launch({ headless: false });
    const page1: Page = await browser.newPage(); 
    await page.goto("https://practice.expandtesting.com/radio-buttons");

    const Rediobtn= await page1.locator('card-header',{hasText:'Select your favorite color:'});

    await  Rediobtn.getByRole('radio',{name:'Red'}).check({force:true});

    const radiostatus= await  Rediobtn.getByRole('radio',{name:'Red'}).isChecked();



})

});