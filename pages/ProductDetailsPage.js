import { Selector, t } from 'testcafe'

class ProductDetailsPage {
    constructor(){
        this.productPrice = Selector('#price-value-4')
        this.productQuantity = Selector('input#product_enteredQuantity_4')
        this.addToCartButton = Selector('button#add-to-cart-button-4')
        this.succesMessage = Selector('div.bar-notification.success')
        this.checkoutAsGuestButton = Selector('.button-1.checkout-as-guest-button')
    }

    async checkoutNewProduct() {
        await t.selectText(this.productQuantity).pressKey('delete')
        .typeText(this.productQuantity, '3')
        .click(this.addToCartButton)
        .expect(this.succesMessage.exists).ok()
    }
}

export default new ProductDetailsPage();