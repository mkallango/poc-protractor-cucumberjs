Feature: Login into Gmail
  As user I want to connect on Gmail

  Scenario: Login 
    Given I navigate to Gmail site
    When I input valid login
    Then inbox page shall be displayed