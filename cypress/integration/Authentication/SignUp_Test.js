/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();

describe("Sign Up Test Suite", function () {
  beforeEach(() => {
    cy.fixture("credentials").then(function (data) {
      this.data = data;
    });

    cy.visit(Cypress.env("url"));
    homePage.getSignUpButton().click();
    cy.wait(2000);
  });

  it("Verify Sign Up with valid credentials", function () {
     
    homePage.getSignUpUserName().type(generateRandomString(9))
    homePage.getSignUpPassword().type(generateRandomString(10))
    homePage.getClickSignUpButton().click()
    cy.on('window:alert', function(str){
        expect(str).to.be.equal('Sign up successful.')
    })
    //cy.get
  });
  it("Verify Sign Up with an Existing User credentials", function () {
     
    homePage.getSignUpUserName().type(this.data.username);
    homePage.getSignUpPassword().type(generateRandomString(10));
    homePage.getClickSignUpButton().click()
    cy.on("window:alert", function(str){
        expect(str).to.be.equal('This user already exist.')
    })
    //cy.get
  });
});


function generateRandomString(numberOfCharacters) {
    var randomValues = '';
    var stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';
    var sizeOfCharacter = stringValues.length;
    for (var i = 0; i < numberOfCharacters; i++) {
       randomValues = randomValues+stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
    }
    return randomValues;
}
 