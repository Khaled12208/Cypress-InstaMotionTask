/// <reference types="Cypress" />

import NavigationBarElements from "../pageelements/NavigationBarElements";


export default class NavigationBarActions
{
    element: NavigationBarElements;

    constructor()
    {
        this.element = new NavigationBarElements();
    }
    

    vistAllCars()
    {

        this.element.getAllCarsTab().click();
    }

    vistOffers()
    {
        this.element.getOffersTab().click();
    }

    vistHowItWorks()
    {
        this.element.getHowItWorksTab().click();
    }

    vistFavorets()
    {
        this.element.getFavoretsTab().click();
    }


}