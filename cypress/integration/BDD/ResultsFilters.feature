Feature: Results Filters

  Scenario: Change the payment to full payment
    Given As user given i am in all atuos page and need to change payment to full payment price
    When I click on Kaufpreis in the filters
    Then The displyment payment should be full payment price

  Scenario: Filters avilable cars with brand
    Given As user given i am in all atuos page and need to filters cars with brand
    And look for number of total avilable cars
    When I select Brand "Audi"
    And look for the number of avilable after filter
    Then The number of avilable cars after filter should be less than the total number