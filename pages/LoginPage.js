import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.email = Selector("#Email")
        this.password = Selector("#Password")
        this.submitButton = Selector("button[type='submit']").withText("Log in")
        this.returningCustomerMessage = Selector(".title").withText('Returning Customer')
    }
}
export default new LoginPage();