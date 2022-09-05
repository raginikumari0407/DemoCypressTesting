class SignUpPage {
    


 clickSignUp() {
     return cy.get('#signin2');
 }

 enterUserName(username){
    return  cy.get('#sign-username');
 }

 enterPassword(password){
     return cy.get('#sign-password');
 }

 clickSignUpBtn(){
     return cy.get('button[onclick="register()"]')
 }

}

export default SignUpPage;