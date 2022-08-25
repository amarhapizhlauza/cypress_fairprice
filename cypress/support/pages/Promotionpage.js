const locator = require('../locator/PromotionpageLocator');

class Promotionpage {

    async visit(path){
        cy.visit(path);
        return cy.url().should('eq','https://www.fairprice.com.sg/promotions/');

    }

    async verify_3label(pwp,weekly,digital){
        cy.get(locator.selector.label_pwp).should($text => {
            expect($text).to.contain(pwp)
        })
        cy.get(locator.selector.label_weekly).should($text => {
            expect($text).to.contain(weekly)
        })
        cy.get(locator.selector.label_digital).should($text => {
            expect($text).to.contain(digital)
        })
        return

    }

    async tab_promotion(){
        return cy.get(locator.selector.btn_pwp).click();
    }

    async verify_product(label){
        cy.get(locator.selector.label_product).then($ListProduct => {
            for (let j = 0; j < ListProduct.lenght; j++) {
                expect($ListProduct.eq(j)).to.contain(label)
            }
        })

        return
    }
}


module.exports = Promotionpage;


