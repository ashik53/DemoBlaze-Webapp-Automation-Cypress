// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HomePage from "../integration/pageObjects/HomePage";

const homePage = new HomePage();

Cypress.Commands.add('login', (username, password)=> {
    cy.visit(Cypress.env("url"));
    cy.get("#login2").click();
    cy.wait(4000);

    cy.fixture("home_page").then(function (data) {
      this.data = data;
      cy.get("#loginusername").type(username);
      cy.get("#loginpassword").type(password);
    });
    homePage.getClickLoginButton().click();

    cy.wait(7000);
})