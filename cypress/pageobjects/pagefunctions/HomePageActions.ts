/// <reference types="Cypress" />

import HomePageElements from "../pageelements/HomePageElements";

export default class HomePageActions
{

    home: HomePageElements;

    constructor()
    {
        this.home = new HomePageElements();
    }
    AcceptCookies()
    {

        this.home.getAcceptCookiesButton().click();  
        
    }
    scrollToFindAuto()
    {
        this.home.getAtuFindeButton().scrollIntoView();

    }
    clickFindAuto()
    {
        this.home.getAtuFindeButton().click();
    }

    searchForCar(brand:string ,model:string)
    {
        var searchBox= this.home.getSeachforCarBox();
        this.home.getSeachBoxBrandlList().click();

        searchBox.get('ul').first().get("li").each(($el, index, $list) => {
            // condition matching check
            if($el.text().toLowerCase() === brand.toLowerCase()){
               // click() on that option for selection
               $el.click();
            }
         })
         this.home.getSeachBoxModelList().click();
         searchBox.get('ul').first().get("li").each(($el, index, $list) => {
            // condition matching check
            if($el.text().toLowerCase() === model.toLowerCase()){
               // click() on that option for selection
               $el.click();
            }
         })
         
         this.home.getSeachBoxButton().click();

    }







}