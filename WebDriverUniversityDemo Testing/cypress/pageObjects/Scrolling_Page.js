class ScrollingAround{
  
    getScrollingPage(){
        return cy.get('#scrolling-around').invoke('removeAttr', 'target')
    }

    getFirstDivScroll() {
        return cy.get('#zone1')
    }

    getSecondDivScroll() {
        return cy.get('#zone2-entries')
    }

    getThirdDivScroll() {
        return cy.get('#zone3-entries')
    }

}

export default ScrollingAround;