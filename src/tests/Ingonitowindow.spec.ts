import{test,Page,Browser,Locator, Expect, BrowserContext} from '@playwright/test'
import { chromium,firefox } from 'playwright';


test('No incognito_Mode', async()=>{

    const BrowserContext:BrowserContext= await chromium.launchPersistentContext('',{headless:false});

     const Pages= BrowserContext.pages();  // 0 and 1 
     const page:Page= Pages[0];
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
     const firstname:Locator= await page.locator('id=input-firstname');
     await firstname.fill("naveen");

    const lastname:Locator= await page.locator('id=input-lastname');
     await lastname.fill("jhadav");

     await BrowserContext.close();


})