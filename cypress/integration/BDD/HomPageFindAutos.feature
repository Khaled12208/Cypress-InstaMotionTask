
Feature: Find a car

  Scenario: Seach for auto from Home Page
    Given As user in the home page, i want to search for a car
    When I enter car brand "BMW", car model "X6"
    Then I should redirected to autos page with title "BMW"

  Scenario: Find all cars button
    Given As user in the home page, i want to find all cars
    When I scroll down to button and click on Durchsuche Autos
    Then I should redirected to all autos page