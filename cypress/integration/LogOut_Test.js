// <reference types="cypress" />

import HomePage from "../integration/pageObjects/HomePage";

const homePage = new HomePage();

describe("After Login - Home Page content verification", function () {
  beforeEach(() => {
    cy.fixture("credentials").then(function (data) {
      this.data = data;
    });

    cy.visit(Cypress.env("url"));
  });

  it("Verify Log out functionality  ", function () {
    
    homePage.getLoginButton().click()
    cy.wait(2000)
    homePage.getUserNameField().type(this.data.username);
    homePage.getPasswordField().type(this.data.password);

    homePage.getClickLoginButton().click();
    cy.wait(7000);

    //Verify Log in option  is invisible
    homePage.getLoginButton().should("have.css", "display").and("include", "none")
    //verify logout button is present and click log out
    cy.contains("Log out").click()
    cy.wait(3000)
    homePage.getLoginButton().should("have.css", "display").and("include", "block")

    //Verify Log in option  is visible
    
  });
});
