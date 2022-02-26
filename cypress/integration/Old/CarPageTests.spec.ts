/// <reference types="Cypress" />

import { assert } from "chai";
import AllAutosPageActions from "../../pageobjects/pagefunctions/AllAutosPageActions";
import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions"
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions"
import CarPageActions from '../../pageobjects/pagefunctions/CarPageActions';

describe("Car Page - Request  a car", ()=>{

    const bar = new NavigationBarAction();
    const home = new HomePageActions();
    const autos = new AllAutosPageActions();
    const auto = new CarPageActions();
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
        cy.viewport(1280, 720)  
        cy.visit("https://www.instamotion.com");
        home.AcceptCookies();
        bar.vistAllCars();
    
        })

    it("Validate Requesting a car button",()=>{

        autos.visitFirstOffer();
        auto.clickRequestCar();

    })





})

