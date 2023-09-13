import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.email = Selector("#Email")
        this.password = Selector("#Password")
        this.submitButton = Selector("button[type='submit']").withText("Log in")
        this.returningCustomerMessage = Selector(".title").withText('Returning Customer')
    }

    async logIn(userEmail, userPassword) {
        await t
            .typeText(this.email, userEmail)
            .typeText(this.password, userPassword)
            .click(this.submitButton);
    }
}
export default new LoginPage();