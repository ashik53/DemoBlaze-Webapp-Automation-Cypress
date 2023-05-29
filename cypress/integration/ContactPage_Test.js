/// <reference types="cypress" />

import HomePage from "../integration/pageObjects/HomePage";

const homePage = new HomePage();

describe("After Login - Home Page content verification", function () {
  beforeEach(() => {
    
    cy.visit(Cypress.env("url"));

  });

  it("Veriify contact page and functionality ", function () {
    //verify website  property href=
    homePage.getContactPage().click();
    cy.wait(4000)
    cy.get("#recipient-email").type("abcedef") //any value will be accepted
    cy.get("#recipient-name").type("abcedef") //any value will be accepted
    cy.get("#message-text").type("abcedef")
    cy.contains("Send message").click()

    //verify a success alert will come
    cy.on("window:alert", function(str){
        expect(str).to.be.equal("Thanks for the message!!")
    })
  })

  it.only("Veriify empty contact info can be send ", function () {
    //verify website  property href=
    homePage.getContactPage().click();
    
    cy.contains("Send message").click()

    //verify a success alert will come
    cy.on("window:alert", function(str){
        expect(str).to.be.equal("Thanks for the message!!")
    })
  })

  
 } );
