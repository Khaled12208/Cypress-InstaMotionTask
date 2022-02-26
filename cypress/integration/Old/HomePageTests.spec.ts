/// <reference types="Cypress" />

import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions"
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions"
import AllAutosPageActions from "../../pageobjects/pagefunctions/AllAutosPageActions"
import { each } from "cypress/types/bluebird"


describe("Home Page Tests ", ()=>{

    beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1280, 720)
          cy.visit("https://www.instamotion.com");

    })

    it("Search Box Validation",()=>{

        const bar = new NavigationBarAction();
        const home = new HomePageActions();
        const autos = new AllAutosPageActions();

    home.AcceptCookies();
    home.searchForCar("bmw" ,"x6");
    autos.getNameOfCars().should('contain', 'BMW');

    })

    it("Find All cars",()=>{

        const home = new HomePageActions();
        const autos = new AllAutosPageActions();

    home.AcceptCookies();
    home.scrollToFindAuto();
    home.clickFindAuto();
    cy.url().should('contain', 'autos')

    })


})

