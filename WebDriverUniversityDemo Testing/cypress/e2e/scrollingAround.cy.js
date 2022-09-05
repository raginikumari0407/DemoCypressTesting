import ScrollingAround from "../pageObjects/Scrolling_Page";

describe('verify scrolling around page', () => {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
         })
    })

   
    const scroll = new ScrollingAround();

    it('testing scrolling feature', function(){
        cy.visit(this.data.url)
        scroll.getScrollingPage().click()

        scroll.getFirstDivScroll().trigger('mouseover').should('have.text', 'Well done for scrolling to me!')
        scroll.getSecondDivScroll().trigger('mouseover')
      scroll.getThirdDivScroll().trigger('mouseover')
     })
})