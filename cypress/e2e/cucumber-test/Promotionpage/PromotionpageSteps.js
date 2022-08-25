import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

const Promotionpage = require ('../../../support/pages/Promotionpage');
let promotionpage = new Promotionpage (); 

Given(/^I open fairprice promotion tab$/, ()=>{
    promotionpage.visit('');
})
When(`I verify label {string}, {string} and {string}`,(pwp,weekly,digital)=>{
    promotionpage.verify_3label(pwp,weekly,digital);
})
And(/^I click button PWP$/,()=>{
    promotionpage.tab_promotion();
})
Then(/^I verify label product (.+)$/,(label)=>{
    promotionpage.verify_product(label);
})