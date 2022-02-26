import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import AllAutosPageActions from "../../pageobjects/pagefunctions/AllAutosPageActions";
import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions";
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions";
import CarPageActions from '../../pageobjects/pagefunctions/CarPageActions';



const bar = new NavigationBarAction();
const home = new HomePageActions();
const autos = new AllAutosPageActions();

Given('As user given i am in home page for InstaMotion DeskTop Orientation', function () {
    cy.viewport(1280, 720)
    cy.visit("https://www.instamotion.com");
    home.AcceptCookies();
        
  });

  When('I click on all autos in navigation bar', function () {

      bar.vistAllCars();

  });

  Then('I should redirected to all autos page', function () {

    cy.url().should('contain', 'autos')

  });


  Given('As user given want to navigate to Favortes', function () {
    cy.viewport(1280, 720)
    cy.visit("https://www.instamotion.com");
    home.AcceptCookies();
        
  });

  When('I click on Favoriten from navigate bar', function () {

      bar.vistFavorets()

  });

  Then('I should redirected to Favoriten page', function () {

    cy.url().should('contain', 'favoriten')

  });


  Given('As user given want to navigate to So funktionierts', function () {
    cy.viewport(1280, 720)
    cy.visit("https://www.instamotion.com");
    home.AcceptCookies();
        
  });

  When('I click on So funktionierts from navigate bar', function () {

      bar.vistHowItWorks();

  });

  Then('I should redirected to So funktionierts page', function () {

    cy.url().should('contain', 'deine-vorteile')

  });


  Given('As user given want to navigate to top deals', function () {
    cy.viewport(1280, 720)
    cy.visit("https://www.instamotion.com");
    home.AcceptCookies();
    
        
  });

  When('I click on Topangebote from navigate bar', function () {

      bar.vistOffers();

  });

  Then('I should redirected to So Topangebote page', function () {

    cy.url().should('contain', 'deals')

  });

