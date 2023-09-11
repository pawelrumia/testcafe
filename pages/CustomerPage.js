import { Selector, t } from 'testcafe'

class CustomerPage{
    constructor(){
        this.orders = Selector('a').withText("Orders")
        this.noOrdersLabel = Selector('.no-data').withText("No orders")
    }
}

export default new CustomerPage();