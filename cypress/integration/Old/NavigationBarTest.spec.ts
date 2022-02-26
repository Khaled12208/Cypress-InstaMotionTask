/// <reference types="Cypress" />

import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions"
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions"

describe("Navigation bar tests ", ()=>{

    const bar = new NavigationBarAction();
    const home = new HomePageActions();
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
        cy.viewport(1280, 720)  
        cy.visit("https://www.instamotion.com");
        home.AcceptCookies();
        })

    it("Validate navigation to all cars",()=>{

        bar.vistAllCars();
        cy.url().should('contain', 'autos');
    })

    it("Validate navigation to Favorit",()=>{

        bar.vistFavorets();
        cy.url().should('contain', 'favoriten');
    })

    it("Validate navigation to How it work",()=>{

        bar.vistHowItWorks();
        cy.url().should('contain', 'deine-vorteile');
    })

    it("Validate navigation to Offer",()=>{

        bar.vistOffers();
        cy.url().should('contain', 'deals');
    })

})

