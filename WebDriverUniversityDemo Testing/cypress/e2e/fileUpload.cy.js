/// <reference types='cypress'/>

import FileUpload from "../pageObjects/FileUpload_Page";


describe('verify file uploading', () => {

    const fileUpload = new FileUpload();
    it('should be uploaded file', () =>{
        cy.visit('http://webdriveruniversity.com/index.html')
        const path = 'images/demo.png'

        fileUpload.getFileUploadPage().click()

       fileUpload.clickChooseFile().attachFile(path).should('be.visible')

       fileUpload.clickSubmitBtn().click()
       cy.on('window:alert',(str) => {
        expect(str).to.equal('Your file has now been uploaded!')
    })
       
    })
})