/// <reference types="cypress" />
class HomeSaucePage {

     getEnterUserName(){
        return cy.get('#user-name');
    }

    getEnterPassword(){
        return cy.get('#password');
    }

    getEnterLoginBtn(){
        return cy.get('#login-button');
    }

    getErrorMessage() {
       return cy.get('h3[data-test="error"]');
    }

}

export default HomeSaucePage;