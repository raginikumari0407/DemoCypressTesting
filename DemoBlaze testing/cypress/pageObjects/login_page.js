class LoginPage {
    

clickLogin() {
     return cy.get('#login2')
    }

 enterUserName(){
     return cy.get('#loginusername');
 }

 enterPassword(){
    return cy.get('#loginpassword');
 }

 clickLoginBtn(){
     return cy.get('button[onclick="logIn()"]');
 }

}

export default LoginPage;