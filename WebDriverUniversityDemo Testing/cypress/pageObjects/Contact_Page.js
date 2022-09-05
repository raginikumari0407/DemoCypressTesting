/// <reference types='cypress'/>

class ContactPage{
   
getContactUsPage(){
    return cy.get('a#contact-us').invoke('removeAttr', 'target')

}

getFirstName() {
   return cy.get('[name="first_name"]')
}

getLastName(){
    return cy.get('[name="last_name"]')
}

getEmail() {
    return cy.get('[name="email"]')
}

getComments() {
    return cy.get('textarea.feedback-input')
}

clickSubmit(){
     return cy.get('[type="submit"]')
}

clickReset(){
    return cy.get('[type="reset"]')
}
}

export default ContactPage;