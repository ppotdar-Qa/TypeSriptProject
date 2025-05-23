import{test} from "@playwright/test";
import Homepage from "../pages/HomePage";
import HomePage from "../pages/HomePage";

test('homescreenvalidation', async({page})=>{
 const Homepage= new HomePage(page);

 await Homepage.expectHomePageTitleToBeVisible();


 await Homepage.clickAppLauncher();

    

})

