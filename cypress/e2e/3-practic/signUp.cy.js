describe('Sing up page test', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
    })

    it('Check header', () => {
        cy.get('.hero-descriptor_btn.btn.btn-primary').contains('Sign up');
        cy.get('.btn.btn-outline-white.header_signin').contains('Sign In');
    })

    it('Check contacts', () => {
        cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').should('be.visible');
        cy.get('a[href="https://t.me/ithillel_kyiv"]').should('be.visible');
        cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('be.visible');
        cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').should('be.visible');
        cy.get('a[href="https://www.linkedin.com/school/ithillel/"]').should('be.visible');
    })

    it('Check contact links', () => {
        cy.get('a[href="https://ithillel.ua"]').should('have.text', 'ithillel.ua');
        cy.get('a[href="mailto:developer@ithillel.ua"]').should('have.text', 'support@ithillel.ua');
    })
})