import { expect, type Locator, type Page } from '@playwright/test';
import HomePage from './HomePage';





export default class Loginpage{
    private readonly userinputselector="#username";
    private readonly PasswordInputSelector="#password";
    private readonly loginButtonselector="#Login";

    constructor(private page:Page){

    }

    async navigateToLoginPage(){
        await this.page.goto("/");
    }

    async fillusername(username:string){
        await this.page.locator(this.userinputselector).fill(username);
    }

    async passwordname(password:string){
        await this.page.locator(this.PasswordInputSelector).fill(password);

    }

    async clickLoginButton() {
      
       try {
            const loginButton = this.page.locator(this.loginButtonselector);
            if (!(await loginButton.isVisible())) throw new Error('Login button not found');

                 await loginButton.click();
            console.log('Login button clicked successfully');
        } catch (error) {
            console.error(`Error clicking login button: ${error}`);
            throw error; // Rethrow if needed for test assertion handling
        }
       
       

       const Homepage= new HomePage(this.page);
       return Homepage;
    }

    }



