import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import AllAutosPageActions from "../../pageobjects/pagefunctions/AllAutosPageActions";
import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions";
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions";
import CarPageActions from '../../pageobjects/pagefunctions/CarPageActions';



const bar = new NavigationBarAction();
const home = new HomePageActions();
const autos = new AllAutosPageActions();

Given('As user given i am in all atuos page', function () {
    cy.viewport(1280, 720)
    cy.visit("https://www.instamotion.com");
    home.AcceptCookies();
    bar.vistAllCars();
        
  });

  Then('I should see all avilable cars in cart with pics', function () {

    autos.getResultsImage().should('be.visible');

  });

  Given('As user given i am in all atuos page looking for cars names', function () {
    cy.viewport(1280, 720)
    cy.visit("https://www.instamotion.com");
    home.AcceptCookies();
    bar.vistAllCars();
        
  });

  Then('I should see all avilable cars in cart with name displayed uder pic', function () {

    autos.getResultsNames().should('be.visible');

  });





  