import LoginPage from "../../support/pageObject/page/LoginPage"
import testData from "../../fixtures/credentials.json"

describe('Login ', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    it('Login', () => {
        LoginPage.login(testData.username, testData.password);
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })
})