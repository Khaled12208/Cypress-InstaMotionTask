import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import AllAutosPageActions from "../../pageobjects/pagefunctions/AllAutosPageActions";
import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions";
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions";
import CarPageActions from '../../pageobjects/pagefunctions/CarPageActions';



const bar = new NavigationBarAction();
const home = new HomePageActions();
const autos = new AllAutosPageActions();


    Given('As user in the home page, i want to search for a car', function () {
      cy.viewport(1280, 720)
      cy.visit("https://www.instamotion.com");
      home.AcceptCookies();
    });


    When('I enter car brand {string}, car model {string}', function (string, string2) {

      home.searchForCar(string,string2);
      
    });


    Then('I should redirected to autos page with title {string}', function (string) {
      autos.getNameOfCars().should('contain', string);
    });

    
Given('As user in the home page, i want to find all cars', function () {
  cy.viewport(1280, 720)
  cy.visit("https://www.instamotion.com");
  home.AcceptCookies();
});


When('I scroll down to button and click on Durchsuche Autos', function () {

  home.scrollToFindAuto();
  home.clickFindAuto();

});


Then('I should redirected to all autos page', function () {
  cy.url().should('contain', 'autos')
});