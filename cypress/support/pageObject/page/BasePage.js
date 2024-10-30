/// <reference types="cypress" />


export default class BasePage {
    constructor(){
        this.BaseUrl = 'https://www.saucedemo.com/'
    }
    open(url){
        cy.visit(`${this.BaseUrl}${url}`)
    }

}