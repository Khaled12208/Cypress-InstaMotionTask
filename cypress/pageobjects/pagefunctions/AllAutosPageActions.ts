/// <reference types="Cypress" />

import AllAutosPageElements from "../pageelements/AllAutosPageElements";
import AutosPageActions from "./CarPageActions";


export default class AllAutosPageActions
{
    element: AllAutosPageElements;

    constructor()
    {
        this.element = new AllAutosPageElements();
    }
    
    getNumberOfCars()
    {
        return this.element.getNumberOfAvilableAutos().invoke('text').then(parseFloat);

    }

    getNumberOfAvilableAutos()
    {
        return this.element.getNumberOfAvilableAutosWithoutSeach().invoke('text').then(parseFloat);

    }

    getNameOfCars()
    {
        return this.element.getCarName().invoke('text');
    }

    getResultsImage()
    {

        return this.element.getAllResultsImages();
    }

    getResultsNames()
    {
        return this.element.getAllResultsNames();

    }

    changeToPaymentPrice()
    {

        this.element.getPaymentPriceTab().click();

    }

    getAllPriceses()
    {
        var pricesArray:string[]=[];

        this.element.getCarPaymentMainPrice().each(($el, index, $list) => {
            cy.log($el.text())
            pricesArray.push($el.text().toLowerCase())
            
         })
    
         return pricesArray;

    }

    filterByCarBranc(brand:string)
    {

    this.element.getBrancFilter().click();
    const brands = this.element.getBrancFilter().xpath("//ul[@role='listbox']/li")
    brands.each(($el, index, $list) => {
        if($el.text().toLowerCase() === brand.toLowerCase()){
            cy.log("Branc",$el.text())
            $el.click();

         }
        
     })
    }

    visitFirstOffer()
    {

    this.element.getFirstCarOffer().click();

    }

}