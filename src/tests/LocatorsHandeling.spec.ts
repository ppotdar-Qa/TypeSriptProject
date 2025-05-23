import{test,Page,Browser,Locator,Expect, BrowserContext, expect} from '@playwright/test';
import { chromium , firefox} from 'playwright';

test('locatortest', async()=>{

    const Browser:Browser=await chromium.launch({headless:false})

    const browsercontext:BrowserContext= await Browser.newContext();

    const page:Page= await browsercontext.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

    // Id locator
    
    expect(page).toHaveTitle('Register Account');
    const firstname:Locator= await page.locator('id=input-firstname');
     await firstname.fill("naveen");

    const lastname:Locator= await page.locator('id=input-lastname');
     await lastname.fill("jhadav");

    // Class locators 

    const logo:Locator=await page.locator('.img-responsive');

     const visibility=  await logo.isEnabled();

     console.log(visibility);

     // Text locator 

     const headar_txt:Locator=await page.locator('text=Register Account');

     //await expect(headar_txt).toBeVisible();

     const headervisible =await headar_txt.isVisible();

     console.log(headervisible);

     // locator of CSS selector 

     const emailid:Locator=await page.locator('css=input#input-email');

     const telephone:Locator= await page.locator('xpath=//input[@name="telephone"]');
    

        await emailid.fill("naveen@gmail.com");
       await telephone.fill("0214522356");


       // getByRole


       await page.getByRole('radio',{name:'Yes'}).isVisible();
        await page.getByRole('radio',{name:'Yes'}).click();

     


      await browsercontext.close();
      await Browser.close();
     


     





})