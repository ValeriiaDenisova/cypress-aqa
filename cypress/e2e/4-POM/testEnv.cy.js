describe('Env Test', () => {
    it('Should log in with valid credentials', () => {
        cy.visit(Cypress.env('BASE_URL'));
        cy.get('[data-test="username"]').type(Cypress.env('USER_NAME'));
        cy.get('[data-test="password"]').type(Cypress.env('USER_PASSWORD'));
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
    });
});