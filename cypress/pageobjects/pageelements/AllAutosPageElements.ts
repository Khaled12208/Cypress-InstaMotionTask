/// <reference types="Cypress" />

export default class AllAutosPageElements
{

    
    getNumberOfAvilableAutos()
    {
        return cy.xpath("//div[contains(@class,'sc-guztPN')]").get("a").first();
    }

    getNumberOfAvilableAutosWithoutSeach()
    {
        return cy.xpath("//div[contains(@class,'sc-guztPN')]").get("b").first();
    }


    getCarName()
    {
        return cy.xpath("//div[contains(@class,'sc-guztPN')]//b[2]");
    }

    getCarModel()
    {
        return cy.xpath("//div[contains(@class,'sc-guztPN')]//b[3]");

    }

    getAllResultsInPage(){

        return cy.xpath("//div[contains(@class,'Results')]/a");

    }

    getAllResultsImages(){

        return cy.xpath("//div[contains(@class,'Results')]//a//img");

    }

    getAllResultsNames()
    {
        return cy.xpath("//div[contains(@class,'Results')]//h3[@property='name']");

    }

    getBrancFilter()
    {

        return cy.get("[data-testid='filters-make-dropdown']");
    }

    getModelFilter()
    {

        return cy.xpath("//input[contains(@id,'downshift-21-input')]");
    }

    getMothelyRateTab()
    {

        return cy.xpath("//div[contains(@class,'FiltersBar')]//label[contains(@for,'paymentMonthly')]");
    }

    getPaymentPriceTab()
    {

        return cy.xpath("//div[contains(@class,'FiltersBar')]//label[contains(@for,'paymentPrice')]");
    }

    getCarPaymentMainPrice()
    {
        return cy.xpath("//div[contains(@property,'itemOffered')]/div[5]/div[1]");

    }

    getFirstCarOffer()
    {

        return cy.xpath("//div[contains(@property,'itemOffered')]").first();

    }

    
    



}