/// <reference types="Cypress" />

export default class HomePageElements
{

    
    getAcceptCookiesButton()
    {
        return cy.xpath("//div[@class='banner-actions-container']/button");
        
    }

    getAtuFindeButton()
    {
        return cy.xpath("//div[contains(@class,'AutoFinde')]//button");
    }

    getSeachforCarBox()
    {
        return cy.get(".HeroSearchstyled__SearchSectionBlock-sc-1c6baod-0");

    }

    getSeachBoxButton()
    {
       return cy.xpath("//a[@data-testid='landing-search-button']");
    }

    getSeachBoxBrandlList()
    {
        return cy.xpath("//div[contains(@class,'SearchSectionBlock')]/div[1]");
    }

    getSeachBoxModelList()
    {
        return cy.xpath("//div[contains(@class,'SearchSectionBlock')]/div[2]");
    }

}