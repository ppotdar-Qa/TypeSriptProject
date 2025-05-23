import  { test,Page,Browser,expect,Locator } from "@playwright/test";
import { chromium,firefox } from "playwright";

test('Checkboxes',async({page})=>{

    await page.goto("https://testautomationcentral.com/demo/checkboxes.html");

    await page.waitForTimeout(5000);

     
//   const checkbox = page.getByRole('checkbox', { name: 'Option 1', exact: true });
  //     await checkbox.check();

// To sleecting all checkboxes 

const checkboxes=  await page.locator('xpath=//*[@class="simple-checkbox-container"] ');

for(const checkbox of await checkboxes.all() ){

const text = await checkbox.innerText();
   console.log(`Checkbox Text: ${text}`);

   await checkbox.check({force:true})
   expect(await checkbox.isChecked()).toBeTruthy()

}


})