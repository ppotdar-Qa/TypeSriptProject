import{test} from "@playwright/test";
import{chromium,firefox} from 'playwright'
import Loginpage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

test("Login page test",async({page})=>{

    const loginpage= new Loginpage(page);

     await loginpage.navigateToLoginPage();
     await loginpage.fillusername("ppotdar834565@agentforce.com");
     await loginpage.passwordname("Pooja@bang123");
    

     const Homepage = await loginpage.clickLoginButton();
      await Homepage.expectHomePageTitleToBeVisible();

});