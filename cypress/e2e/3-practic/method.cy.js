describe('Basic query', () => {
    it('GET', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        cy.get('input[type=file]').selectFile("cypress/fixtures/example.json");
        cy.get('form').submit()
        cy.go('back')
        cy.go('forward')
        cy.url().should('include', 'inventory.html')
        cy.wait(2000)
        cy.reload()
        cy.get('[data-test="username"]').should('have.attr', 'placeholder','Username')

    })

    it('expect', () => {
        const number = 1
        expect(number).to.be.at.least(1)
    })

    it('expect', () => {
        cy.url().then((url) => {
            expect(url).to.include('https://')
        })
    })
})