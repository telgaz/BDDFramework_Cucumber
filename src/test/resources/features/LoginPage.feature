@loginPage

  Feature: Login Feature
    Given I am on home page

   @login
   Scenario Outline: Verify invalid login for multiple users

     When I enter <username> into username text field on home screen
     And I enter <password> into password text field on home screen
     And I click on login button on home screen
     And I verify that invalid credentials


     Examples:
     |username         | password  |
     |tugba@sample.com | test123   |
     |jim@gmail.com    | test345   |
     |liz@yahoo.com    | 1234test  |
