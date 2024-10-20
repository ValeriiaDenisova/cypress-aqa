/// <reference types="cypress" />

import BasePage from "./BasePage";

class InventoryPage extends BasePage {

    get burgerMenuButton() {
        return cy.get('#react-burger-menu-btn');
    }

    get shoppingCartContainer() {
        return cy.get('#shopping_cart_container');
    }

    get productSortContainer() {
        return cy.get('[data-test="product-sort-container"]');
    }

    shouldSeeUIElements() {
        this.burgerMenuButton.should('be.visible');
        this.shoppingCartContainer.should('be.visible');
        this.productSortContainer.should('be.visible');
    }

    checkProductSortContainer() {
        this.productSortContainer.find('option') // знайти всі опції всередині дропдауна
            .should('have.length', 4);
    }

    clickShoppingCartContainer() {
        this.shoppingCartContainer.click()
    }

    selectItemByText(text) {
        cy.contains(text).click();
    }

}

export default new InventoryPage();