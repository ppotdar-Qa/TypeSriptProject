import { Page } from '@playwright/test';

 export default class NavigationPage{

    readonly Page:Page
    
    constructor(page:Page){
     this.Page=page;

    }

    async formLayoutstage(){
        await this.Page.getByText('Forms').click()
        await this.Page.getByText('Form Layout').click()
    }
}