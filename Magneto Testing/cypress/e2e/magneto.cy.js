/// <reference types = "cypress"/>


describe('Magneto website', () => {
  before(() =>{
    cy.visit('https://magento.softwaretestingboard.com/')
  })

  it('create an Account', () => {
    cy.get('ul >li > a:visible').eq(1).click()
    //cy.contains('Create New Customer account')
    cy.get('#firstname').type('Ragi')
    cy.get('#lastname').type('Kumari')

    cy.get('#email_address').type('demo1@gmail.com')
    cy.get('#password').type('Admin123')
    cy.get('#password-confirmation').type('Admin123')
    
    cy.get('button[title="Create an Account"]').click()



  })

  it.only('Sign in ', () => {
    //cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('ul >li > a:visible').eq(0).click()

      cy.get('#email').type('demo@gmail.com')
      cy.get('#pass').type('admin123')
      cy.get('#send2').click()


  })
 })