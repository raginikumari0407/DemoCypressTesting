import LoginPage from '../pageObjects/login_page'

describe('Demoblaze test', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {

        return false;
    
      });
    beforeEach(function(){
      cy.visit('https://www.demoblaze.com/')
      cy.location('protocol').should('eq' , 'https:')
     })

     const login = new LoginPage()
  
    it('should logged in', () => {
       login.clickLogin().click()
       login.enterUserName().type('ragini@gmail.com', {force:true})
        login.enterPassword().type('admin123',{force:true})
        login.clickLoginBtn().click()
    
    
    })
  
})