import { Selector, t } from 'testcafe'

class CartPage {
    constructor(){
        this.termsOfService = Selector('input#termsofservice')
        this.checkoutButton = Selector('button#checkout')
        
    }
}

export default new CartPage();