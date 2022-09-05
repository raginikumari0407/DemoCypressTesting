import ContactPage from '../../cypress/pageObjects/Contact_Page' 
 
describe('verify Contact us Page', () => {

  const contact = new ContactPage();
  it('should visit contact us page', () => {
    cy.visit('http://webdriveruniversity.com/index.html')

    contact.getContactUsPage().click().should('contain', 'CONTACT US')

    contact.getFirstName().type('Ragini').should('be.visible')
    contact.getLastName().type('Rai').should('be.visible')
    contact.getEmail().type('admin@gmail.com').should('have.value', 'admin@gmail.com')
    contact.getComments().type('want to connect')

    contact.clickSubmit().click()
    cy.go(-1)
    contact.clickReset().click()
  })
})