/// <reference types='cypress'/>


class FileUpload {
 getFileUploadPage(){
    return cy.get('a#file-upload').invoke('removeAttr','target')
 }

 clickChooseFile() {
     return cy.get('#myFile')
 }

 clickSubmitBtn() {
    return cy.get('#submit-button')
 }




}

export default FileUpload;