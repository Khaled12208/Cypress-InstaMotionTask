/// <reference types="Cypress" />

export default class NavigationBarElements
{
    
    getHeader()
    {
        return cy.xpath("//header");

    }

    getAllCarsTab()
    {
        return  this.getHeader().xpath('//a[contains(@href,"autos")]').first();
    }

    getOffersTab()
    {
        return  this.getHeader().xpath('//a[contains(@href,"deals")]').first();
    }

    getHowItWorksTab()
    {
        return this.getHeader().xpath('//a[contains(@href,"deine-vorteile")]').first();
    }

    getFavoretsTab()
    {
        return this.getHeader().xpath('//a[contains(@href,"favoriten")]').first();
    }



}