import { Selector, t } from 'testcafe'

class SearchResultPage {
    constructor() {
        this.productItem = Selector('.product-item')
        this.appleProductInfo = Selector('a').withText("Apple MacBook Pro 13-inch")
    }}

export default new SearchResultPage();