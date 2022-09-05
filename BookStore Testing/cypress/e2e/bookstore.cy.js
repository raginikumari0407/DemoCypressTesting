describe('test for automation book store', () => {
  it('search a book', () => {
    cy.visit('https://automationbookstore.dev/')
    cy.get('#page-title')
    cy.get('#searchBar').type('automation')
    cy.wait(1000)
    cy.get('.ui-input-clear').click()
    cy.wait(1000)
    cy.get('#searchBar').type('google')
    cy.wait(1000)
    cy.get('.ui-input-clear').click()
  })
})