import { ClientFunction } from 'testcafe'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import CustomerPage from '../pages/CustomerPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import CartPage from '../pages/CartPage'
import SearchResultPage from '../pages/SearchResultPage'

const URL = 'https://demo.nopcommerce.com/'
const getUrl = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'ziomeczek' + randomNumber+'@malpa.pl';

fixture("Registration")
    .page(URL);

test("Assert Home page test", async t => {
    await t.expect(getUrl()).eql(URL)
})

test("fat e2e test", async t => {
    await t.maximizeWindow()
    .click(HomePage.registerLink)
    .expect(getUrl()).contains('register')
    .click(RegisterPage.genderMale)
    .typeText(RegisterPage.firstName, 'Ziomeczek')
    .typeText(RegisterPage.lastName, 'Coolio')
    .typeText(RegisterPage.email, userEmail)
    .typeText(RegisterPage.password, '123456')
    .typeText(RegisterPage.confirmPassword, '123456')
    .click(RegisterPage.registerButton)
    .expect(RegisterPage.succesfulMessage.exists).ok();

    await HomePage.search('Apple MacBook Pro 13-inch');
    await t.click(SearchResultPage.productItem)
    .expect(getUrl()).contains('apple-macbook-pro-13-inch')
    .expect(ProductDetailsPage.productPrice.exists).ok()
    .selectText(ProductDetailsPage.productQuantity).pressKey('delete')
    .typeText(ProductDetailsPage.productQuantity, '3')
    .click(ProductDetailsPage.addToCartButton)
    .expect(ProductDetailsPage.succesMessage.exists).ok()
    .wait(3000)
    .click(HomePage.shoppingCart)
    .click(CartPage.termsOfService)
    .click(CartPage.checkoutButton)
    .expect(getUrl()).contains('checkout');
})