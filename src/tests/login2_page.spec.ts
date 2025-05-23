import  { test,Page,Browser,expect,Locator } from "@playwright/test";
import { chromium,firefox } from "playwright";


test('Login test', async () =>{

   const Browser:Browser=await chromium.launch({headless:false})
    const page:Page= await Browser.newPage();

    await page.goto("https://www.saucedemo.com/");

  const username:Locator= await page.locator("input#user-name");
  const password:Locator =await page.locator("input#password");
  const loginbtn:Locator= await page.locator("input#login-button");

  await username.fill("standard_user");
  await password.fill("secret_sauce");
  await loginbtn.click();

  // validating 

const title= await page.title();
console.log("my application title",title)

expect(title).toEqual("Swag Labs");

await page.screenshot({path:'homepage.png'});

Browser.close();


})