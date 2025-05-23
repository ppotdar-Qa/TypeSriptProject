import{test,Expect, expect} from '@playwright/test';
import {chromium,firefox} from 'playwright'
import { text } from 'stream/consumers';

test("RadioBtn", async({page})=>{

    await page.goto("https://practice.expandtesting.com/radio-buttons")
 
    const radioBtn= await page.getByRole("radio" , {name:'blue'});

    await page.waitForTimeout(5000);
       await radioBtn.check({ force: true })

       const radiobtnstatus= await page.getByRole("radio" , {name:'blue'}).isChecked();
       


       expect(radiobtnstatus).toBeTruthy();

       



})

