/// <reference types="Cypress" />

import CarPageElements from "../pageelements/CarPageElements";


export default class AutosPageActions
{
    element: CarPageElements;

    constructor()
    {
        this.element = new CarPageElements();
    }
    
    clickRequestCar()
    {
        this.element.getRequestButton().click();

    }

}