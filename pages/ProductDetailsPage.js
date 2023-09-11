import { Selector, t } from 'testcafe'

class ProductDetailsPage {
    constructor(){
        this.productPrice = Selector('#price-value-4')
        this.productQuantity = Selector('input#product_enteredQuantity_4')
        this.addToCartButton = Selector('button#add-to-cart-button-4')
        this.succesMessage = Selector('div.bar-notification.success')
        this.checkoutAsGuestButton = Selector('.button-1.checkout-as-guest-button')
    }
}

export default new ProductDetailsPage();