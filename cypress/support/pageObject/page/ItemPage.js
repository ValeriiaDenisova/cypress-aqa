/// <reference types="cypress" />

import BasePage from "./BasePage";

class ItemPage extends BasePage {

    get addToCartButton() {
        return cy.get('#add-to-cart');
    }

    get picture() {
        return cy.get('img[data-test="item-sauce-labs-backpack-img"]');
    }

    get description() {
        return cy.get('[data-test="inventory-item-desc"]');
    }

    get price() {
        return cy.get('[data-test="inventory-item-price"]');
    }

    get removeButton() {
        return cy.get('#remove');
    }

    verifyTitle(text) {
        cy.contains(text).should('be.visible');
    }

    verifyAddToCartButton() {
        this.addToCartButton.should('be.visible');
    }

    verifyPicture() {
        this.picture.should('be.visible');
    }

    verifyDescription(description) {
        this.description.should('include.text', description)
    }

    verifyPrice(price) {
        this.price.should('include.text', price);
    }

    clickAddToCart() {
        this.addToCartButton.click();
    }

    verifyRemoveButton() {
        this.removeButton.should('be.visible');
    }

    clickRemoveButton() {
        this.removeButton.click()
    }
}

export default new ItemPage();