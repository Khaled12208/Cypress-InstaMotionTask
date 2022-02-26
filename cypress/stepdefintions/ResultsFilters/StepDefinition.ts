import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import AllAutosPageActions from "../../pageobjects/pagefunctions/AllAutosPageActions";
import HomePageActions from "../../pageobjects/pagefunctions/HomePageActions";
import NavigationBarAction from "../../pageobjects/pagefunctions/NavigationBarActions";
import CarPageActions from '../../pageobjects/pagefunctions/CarPageActions';



const bar = new NavigationBarAction();
const home = new HomePageActions();
const autos = new AllAutosPageActions();

Given('As user given i am in all atuos page and need to change payment to full payment price', function () {
    cy.viewport(1280, 720)
    cy.visit("https://www.instamotion.com");
    home.AcceptCookies();
    bar.vistAllCars()
        
  });

  When('I click on Kaufpreis in the filters', function () {

      autos.changeToPaymentPrice();

  });

  Then('The displyment payment should be full payment price', function () {

    var pricesList:string []=autos.getAllPriceses();
    pricesList.forEach((price)=>{

        expect(price).to.not.contains("monate");
    });
  });


  
Given('As user given i am in all atuos page and need to filters cars with brand', function () {
  cy.viewport(1280, 720)
  cy.visit("https://www.instamotion.com");
  home.AcceptCookies();
  bar.vistAllCars()
      
});

var numberOfAvilableCars;
And('look for number of total avilable cars', function () {
  numberOfAvilableCars = autos.getNumberOfAvilableAutos();
      
});

When('I select Brand {string}', function (carBrand:string) {

  autos.filterByCarBranc(carBrand);

});

var numberOfAvilableCarsAfterFilter;
And('look for the number of avilable after filter', function () {
  numberOfAvilableCarsAfterFilter = autos.getNumberOfAvilableAutos();      
});

Then('The number of avilable cars after filter should be less than the total number', function () {
  assert.isTrue(numberOfAvilableCars >= numberOfAvilableCarsAfterFilter);

});