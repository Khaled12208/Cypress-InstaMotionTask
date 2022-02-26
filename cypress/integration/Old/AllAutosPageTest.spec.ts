/// <reference types="Cypress" />

import { assert } from "chai";
import AutosPageActions from "../../pageobjects/pagefunctions/AllAutosPageActions";
import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions"
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions"

describe("Find Autos tests 1st Page Only", ()=>{

    const bar = new NavigationBarAction();
    const home = new HomePageActions();
    const autos = new AutosPageActions();
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
        cy.viewport(1280, 720)  
        cy.visit("https://www.instamotion.com");
        home.AcceptCookies();
        bar.vistAllCars();

        })

    it("Validate All Cars Pics are visible",()=>{

    autos.getResultsImage().should('be.visible');


    })

    it("Validate All Cars Names are visible",()=>{

        autos.getResultsNames().should('be.visible');

    })

    it("Validate Filtering Functionality",()=>{

       var numberOfAvilableCars = autos.getNumberOfAvilableAutos();
       autos.filterByCarBranc('BMW');
       var numberOfAvilableCarsAfterFilter = autos.getNumberOfAvilableAutos();
       assert.notEqual(numberOfAvilableCars,numberOfAvilableCarsAfterFilter);
      assert.isTrue(numberOfAvilableCars >= numberOfAvilableCarsAfterFilter);

    })

    it("Validate Change Payment to Payment Price ",()=>{

        autos.changeToPaymentPrice();
        var pricesList:string [] =autos.getAllPriceses();
        pricesList.forEach((price)=>{

            expect(price).to.not.contains("monate");
        });
 
     })





})

