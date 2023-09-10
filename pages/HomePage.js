import { Selector, t } from 'testcafe'

class HomePage {
    constructor() {
        this.subtitleHeader = Selector('h2').withText('Welcome to our store')
        this.registerLink = Selector('a').withText('Register')
        this.myAccountLink = Selector('a').withText('My account')
        this.logIn = Selector('a').withText('Log in')
        this.logOut = Selector('a').withText('Log out')
        this.shoppingCart = Selector('a').withText('Shopping cart')
        this.searchTxtField = Selector("input[id='small-searchterms']")
        this.selectCurrency = Selector('#customerCurrency')
    }

    get productSearch() {
        return Selector("input[id='small-searchterms']");
    }

    async search(product) {
        await t
            .typeText(this.productSearch, product)
            .wait(3000)
            .pressKey('enter');
    }

    async changeCurrency(currency) {
        await t
            .click(this.selectCurrency)
            .click(Selector('option', { text: currency }));
    }
}
export default new HomePage();