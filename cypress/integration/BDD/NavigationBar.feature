
Feature: Navigation bar 

  Scenario: Find all autos from NagationBar
    Given As user given i am in home page for InstaMotion DeskTop Orientation
    When I click on all autos in navigation bar
    Then I should redirected to all autos page

  Scenario: Favorerts autos from NagationBar
    Given As user given want to navigate to Favortes
    When I click on Favoriten from navigate bar
    Then I should redirected to Favoriten page

  Scenario: How it works from NagationBar
    Given As user given want to navigate to So funktionierts
    When I click on So funktionierts from navigate bar
    Then I should redirected to So funktionierts page

  Scenario: Top deals from NagationBar
    Given As user given want to navigate to top deals
    When I click on Topangebote from navigate bar
    Then I should redirected to So Topangebote page 