// <reference types="cypress" />

import HomePage from "../integration/pageObjects/HomePage";

const homePage = new HomePage();

describe("After Login - Home Page content verification", function () {
  beforeEach(() => {
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

    //Verify after login Welcome {username} will be displayed

    cy.fixture("home_page").then(function (data) {
      this.data = data;
      cy.get("#nameofuser").then(($el) => {
        expect($el.text()).to.be.equal("Welcome " + this.data.user_name);
      });
    });
  });

  it("Verify Website title href ", function () {
    //verify website  property href=
    homePage
      .getWebsiteTitle()
      .should("have.attr", "href")
      .and("include", "index.html");
  });

  it("Verify Website title text", function () {
    homePage.getWebsiteTitle().then(($el) => {
      let websiteTitle = $el.text();
      expect(websiteTitle.includes(this.data.website_title)).to.be.true;
    });
  });

  it("Verify Website navbar contents", function () {
    const contents = this.data.contents;
    const generatedContents = [];
    homePage
      .getNavigationItems()
      .each(($el, index, $list) => {
        generatedContents.push($el.text());
      })
      .then(() => {
        let count = 0;
        for (let i = 0; i < contents.length; i++) {
          for (let j = 0; j < generatedContents.length; j++) {
            if (generatedContents[j].includes(contents[i])) count++;
          }
        }
        expect(this.data.navbar_length).to.be.equal(count); // verified that All siX items is found on the UI
      });
  });

  it("Verify Categorizes in Home Page", function () {
    const categorizes = this.data.categorizes;
    let generatedCategorizes = [];
    homePage.getCategorizes().should("have.length", categorizes.length);
    homePage
      .getCategorizes()
      .each(($el, index, $list) => {
        generatedCategorizes.push($el.text());
      })
      .then(() => {
        let count = 0;
        for (let i = 0; i < categorizes.length; i++) {
          for (let j = 0; j < generatedCategorizes.length; j++) {
            if (generatedCategorizes[j].includes(categorizes[i])) count++;
          }
        }
        expect(categorizes.length).to.be.equal(count); // verified that All siX items is found on the UI
      });
  });

  it.only("Verify each category has items", function () {
    homePage.getCategorizes().each(function ($el, index, $list) {
      cy.wrap($el).click()
      cy.wait(4000)
      cy.log($el.text())
      
      cy.get("#tbodyid div.col-lg-4.col-md-6.mb-4").should('have.length.greaterThan',0)
      
    });
  });

  it("Verify footer contents", function () {
    //Verify about us text
    homePage
      .getFooterContents()
      .eq(0)
      .then(($el) => {
        let aboutUsText = this.data.aboutUsText;
        aboutUsText = aboutUsText.replace(/[^a-z]/gi, ""); //filter by alphnumeric only
        let generatedText = $el.text().replace(/[^a-z]/gi, ""); ////filter by alphnumeric only

        expect(generatedText.includes(aboutUsText)).to.be.true;
      });

    //Verify Get in touch infos
    //verify address
    homePage
      .getFooterContents()
      .eq(1)
      .then(($el) => {
        expect($el.text().includes(this.data.address)).to.be.true;
      });

    //verify phone
    homePage
      .getFooterContents()
      .eq(2)
      .then(($el) => {
        expect($el.text().includes(this.data.phone)).to.be.true;
      });
    //verify email
    homePage
      .getFooterContents()
      .eq(3)
      .then(($el) => {
        expect($el.text().includes(this.data.email)).to.be.true;
      });

    //verify footer text

    homePage.getCoywrightTextID().then(($el) => {
      expect($el.text().includes(this.data.copywright_text)).to.be.true;
    });
  });
});
