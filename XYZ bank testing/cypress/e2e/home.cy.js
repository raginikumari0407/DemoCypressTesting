/// <reference types="cypress" />

describe('Home page test', () => {
  before(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })

  it('testing Customer login page', () => {

   cy.get('.home').should('contain', 'Home')
   cy.get('.mainHeading').should('have.text', 'XYZ Bank')

  cy.get('button[ng-click="customer()"]')
     .should('be.visible')
     .click()
     
     cy.get('.form-group').should('contain', 'Your Name :')

     cy.get('#userSelect')
     .select('1')
     .should('contain','Hermoine Granger')

     cy.get('button[type="submit"]').click()

    // cy.get('span[class="fontBig ng-binding"]').should('contain', 'Welcome Hermoine Granger')

     cy.get('.logout').should('contain', 'Logout').click()

     cy.get('.home').click()
  })


  it('Testing Bank Manager Login Page', () => {
    cy.get('button[ng-click="manager()"]')
    .should('have.text', 'Bank Manager Login')
    .click()

    cy.get('.center').should('contain', 'Add Customer').and('be.visible')

    cy.get('button[ng-click="addCust()"]').click()

    cy.get('.form-group').should('contain', 'First Name :')

    cy.get('input[placeholder="First Name"]').type('Ragini').should('have.text', 'Ragini')

  })
})