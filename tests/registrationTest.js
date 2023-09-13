import { ClientFunction } from 'testcafe'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import CustomerPage from '../pages/CustomerPage'

const URL = 'https://demo.nopcommerce.com/'
const getUrl = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'ziomeczek' + randomNumber+'@malpa.pl';

fixture("Registration")
    .page(URL);

test("Assert Home page test", async t => {
    await t.expect(getUrl()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subtitleHeader.exists).ok();
});

test("User registration and login", async t => {
    await t.click(HomePage.registerLink)
    .expect(getUrl()).contains('register')
    .click(RegisterPage.genderMale)
    .typeText(RegisterPage.firstName, 'Ziomeczek')
    .typeText(RegisterPage.lastName, 'Coolio');

    await RegisterPage.selectDate('6', 'January', '1999')

    await t.typeText(RegisterPage.email, userEmail)
    .typeText(RegisterPage.password, '123456')
    .typeText(RegisterPage.confirmPassword, '123456')
    .click(RegisterPage.registerButton)
    .expect(RegisterPage.succesfulMessage.exists).ok()
    .click(HomePage.logOut)
    .click(HomePage.logIn)
    .expect(LoginPage.returningCustomerMessage.exists).ok()
    .typeText(LoginPage.email, userEmail)
    .typeText(LoginPage.password, '123456')
    .click(LoginPage.submitButton)
    .click(HomePage.myAccountLink);
});

test("User registration and login", async t => {
    await t.click(HomePage.registerLink)
})