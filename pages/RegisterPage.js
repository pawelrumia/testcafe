import { Selector, t } from 'testcafe'

class RegisterPage {
    constructor() {
        this.genderMale = Selector('input#gender-male')
        this.firstName = Selector('input#FirstName')
        this.lastName = Selector('input#LastName')
        this.dayOfBirth = Selector("select[name='DateOfBirthDay']")
        this.monthOfBirth = Selector("select[name='DateOfBirthMonth']")
        this.yearOfBirth = Selector("select[name='DateOfBirthYear']")
        this.email = Selector("#Email")
        this.password = Selector("#Password")
        this.confirmPassword = Selector("#ConfirmPassword")
        this.registerButton = Selector("#register-button")
        this.succesfulMessage = Selector("div.result").withText('Your registration completed')
    }

    async registerNewUser(userFirstName, usrLastName, day, month, year, userEmail, userPassword) {
        await this.selectDate(day, month, year)

        await t.click(this.genderMale)
            .typeText(this.firstName, userFirstName)
            .typeText(this.lastName, usrLastName)
            .typeText(this.email, userEmail)
            .typeText(this.password, userPassword)
            .typeText(this.confirmPassword, userPassword)
            .click(this.registerButton)
    }

    async selectDate(day, month, year) {
        const dayOption = this.dayOfBirth.find('option');
        const monthOption = this.monthOfBirth.find('option');
        const yearOption = this.yearOfBirth.find('option');
        await t
            .click(this.dayOfBirth)
            .click(dayOption.withText(day))
            .click(this.monthOfBirth)
            .click(monthOption.withText(month))
            .click(this.yearOfBirth)
            .click(yearOption.withText(year))
    }
}
export default new RegisterPage(); 