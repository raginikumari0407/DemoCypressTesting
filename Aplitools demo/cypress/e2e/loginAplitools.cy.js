import {LoginPage} from "../pages/login_page"

const loginPage = new LoginPage()

describe('aplitools.com', () => {
  beforeEach(() => {
    cy.visit('https://demo.applitools.com/')

  })
    it('valid credentials', () => {
  
      cy.contains('Login Form')
      cy.get('.form-check-label').click()

      loginPage.enterUserName('raginikumar@gmail.com')
      loginPage.enterPassword('dsfhdhg')
      loginPage.clickLogin()
  
    //   cy.get('#username').type('raginikumari04@gmail.com')
    //   cy.get('#password').type('sdghjj')
    //   cy.get('#log-in').click()
    })

  })