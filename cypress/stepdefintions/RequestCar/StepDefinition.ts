import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import AllAutosPageActions from "../../pageobjects/pagefunctions/AllAutosPageActions";
import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions";
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions";
import CarPageActions from '../../pageobjects/pagefunctions/CarPageActions';



const bar = new NavigationBarAction();
const home = new HomePageActions();
const autos = new AllAutosPageActions();
const auto = new CarPageActions();

  
Given('As user given i am in all atuos page and request car', function () {
  cy.viewport(1280, 720)
  cy.visit("https://www.instamotion.com");
  home.AcceptCookies();
  bar.vistAllCars()
      
});


When('I select any car', function () {
  autos.visitFirstOffer();


});


Then('I should redirected to the care page and i can request car by click on Anfrage starten', function () {
  auto.clickRequestCar();

});