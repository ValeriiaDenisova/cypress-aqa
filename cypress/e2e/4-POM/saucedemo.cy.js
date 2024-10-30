import LoginPage from "../../support/pageObject/page/LoginPage"
import InventoryPage from "../../support/pageObject/page/InventoryPage";
import ItemPage from "../../support/pageObject/page/ItemPage";
import testData from "../../fixtures/credentials.json"

let item = "Sauce Labs Backpack"

describe('Saucedemo. Test Inventory page ', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.username, testData.password);
    })

    it('Перевірити, що присутні наступні UI-елементи: бургер-меню, іконка корзини, дропдаун для сортування', () => {
        InventoryPage.shouldSeeUIElements();
    })

    it('Перевірити, що у дропдауні сортування 4 опції ', () => {
        InventoryPage.checkProductSortContainer();
    })

    it('Перевірити, що після кліку по іконці корзини, юзер перенаправлений на сторінку https://www.saucedemo.com/cart.html', () => {
        InventoryPage.clickShoppingCartContainer();
        cy.url().should('equal', 'https://www.saucedemo.com/cart.html');
    })

    it('Перевірити, що після кліку по айтему відкривається його Item Page', () => {
        let item = "Sauce Labs Backpack"
        InventoryPage.selectItemByText(item);
        ItemPage.verifyTitle(item)
        ItemPage.verifyAddToCartButton()
    })

})

describe('Saucedemo. Test Item page ', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.username, testData.password);
        InventoryPage.selectItemByText(item);
    })

    it('Перевірити, що присутні картинка, опис, ціна та назва товару.', () => {
        ItemPage.verifyTitle(item)
        ItemPage.verifyPicture()
        ItemPage.verifyDescription("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.")
        ItemPage.verifyPrice("$29.99")
    })

    it('Перевірити, що після кліку на"Add to cart" з\'являється кнопка Remove', () => {
        ItemPage.clickAddToCart()
        ItemPage.verifyRemoveButton()
    })

    it('Перевірити, що після кліку на Remove з\'являється кнопка Add to Cart', () => {
        ItemPage.clickAddToCart()
        ItemPage.verifyRemoveButton()
        ItemPage.clickRemoveButton()
        ItemPage.verifyAddToCartButton()
    })

})