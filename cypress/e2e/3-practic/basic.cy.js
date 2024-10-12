/// <reference types="cypress" />

describe('Basic query', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
    })
    it('GET', () => {

        cy.get('#APjFqb').type("Hello World!")
        cy.get('.gNO89b').last().click()
        cy.get('#logo').should('be.visible')
    })
})