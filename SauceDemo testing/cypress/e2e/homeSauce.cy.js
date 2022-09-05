
import HomeSaucePage from "../PomSauceDemo/homeSaucePage"
import inventoryPage from "../PomSauceDemo/inventoryPage"


const homePage = new HomeSaucePage()
  const inventory = new inventoryPage()
describe('POM Implementation', () => {
  
  
  // before(() => {
  //   cy.visit('https://www.saucedemo.com/')
  // })

  
  it('login to inventory page', () => {
    cy.visit('https://www.saucedemo.com/')
  
    homePage.getEnterUserName().type('standard_user');
    homePage.getEnterPassword().type('secret_sauce');
    homePage.getEnterLoginBtn().click();

    inventory.titleName().should('have.text', 'Products')
  })

  it(' should show locked out user', () => {
    cy.visit('https://www.saucedemo.com/')
    homePage.getEnterUserName('locked_out_user');
    homePage.getEnterPassword('secret_sauce');
    homePage.getEnterLoginBtn();

    homePage.getErrorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it(' should display incorrect user', () => {
    cy.visit('https://www.saucedemo.com/')
    homePage.getEnterUserName('locked_out_user');
    homePage.getEnterPassword('secret_sauce');
    homePage.getEnterLoginBtn();

    homePage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })
})






