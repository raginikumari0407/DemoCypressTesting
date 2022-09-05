import SignUpPage from '../../cypress/pageObjects/signUp_Page'

describe('Demoblaze test', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {

    return false;

  });
  before(function(){
    cy.visit('https://www.demoblaze.com/')
    cy.location('protocol').should('eq' , 'https:')
   })

   const signup = new SignUpPage();

  it('should signed up', () => {
    signup.clickSignUp().click()
    signup.enterUserName().type('ragini@gmail.com')
  signup.enterPassword().type('admin123')
  signup.clickSignUpBtn()
  
  
  })

  

 })