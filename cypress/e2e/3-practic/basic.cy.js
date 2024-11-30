/// <reference types="cypress" />

describe('Basic query', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
    })
    it('GET', () => {

        cy.get('#APjFqb').type("Hello World!")
        cy.get('#APjFqb').type('Cypress.io{enter}')
        cy.get('#logo').should('be.visible')
    })
})