/// <reference types="cypress" />

import HomePage from "../integration/pageObjects/HomePage";

const homePage = new HomePage();

describe("About US Page Test", function () {
  beforeEach(() => {
    
    cy.visit(Cypress.env("url"));

  });

  it("Verify video is found and playable", function () {
    //verify website  property href=
    homePage.getAboutPopUp().click();
    cy.get('video').should('have.prop', 'paused', true).and('have.prop', 'ended', false).then(($video)=> {
      $video.trigger('play')
    })
    
    
  })

  

  
 } );
