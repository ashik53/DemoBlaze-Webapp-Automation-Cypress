/// <reference types="cypress" />

import HomePage from "./pageObjects/HomePage";

const homePage = new HomePage();
let summation
describe("Purchase products", function () {
  //login before purchasing/

  beforeEach(function () {
    cy.fixture("home_page").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("url"));
    cy.get("#login2").click();
    cy.wait(4000);

    cy.fixture("home_page").then(function (data) {
      this.data = data;
      cy.get("#loginusername").type(this.data.user_name);
      cy.get("#loginpassword").type(this.data.user_password);
    });
    homePage.getClickLoginButton().click();

    cy.wait(7000);
  });

  it("Verify purchase product to place order is successful", function () {
    //Buy at least one from each group
    
    let sum  = 0
    this.data.categorizes.forEach(function (category) {
      cy.wait(5000);
      cy.contains(category).click();

      cy.wait(5000);
      //Buy nth category product
      cy.get("#tbodyid a.hrefch").eq(0).click();

      cy.wait(4000);

      cy.contains("Add to cart").click();
      cy.get("h3.price-container").then(($el) => {
        let text = $el.text();
        text = text.replace(/[^0-9]/g, ""); //convert string

        sum += Number(text);
        summation = sum
      });
      cy.wait(4000);
      cy.go("back");
      cy.go("back");
      //wghen comes at last
    });
  });

  it("Verify order product after purchase is successful", function () {
    cy.contains("Cart").click();
    cy.wait(3000);
    cy.get("#totalp").then(($el) => {
      let total_cart_page = $el.text();
      total_cart_page = Number(total_cart_page);
      expect(summation).to.be.equal(total_cart_page);
    });

    //call place order functon
    cy.contains("Place Order").click();
    cy.wait(2000);
    cy.get("#name").type("abc");
    cy.get("#card").type("abc");
    cy.contains("Purchase").click();
    cy.on("window:alert", function (str) {
      expect(str).to.be.equal("Thank you for your purchase!");
    });
  });
});
