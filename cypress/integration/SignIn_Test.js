import HomePage from "./pageObjects/HomePage";

const homePage = new HomePage();

describe("Sign In Test Suite", () => {
  beforeEach(() => {
    cy.fixture("credentials").then(function (data) {
      this.data = data;
      console.log(data);
    });

    cy.visit(Cypress.env("url"));
    cy.wait(2000);
    
  });

  it("Verify Sign In with valid credentials", function(){
    homePage.getLoginButton().click();
    
    homePage.getUserNameField().type(this.data.username);
    homePage.getPasswordField().type(this.data.password);

    homePage.getClickLoginButton().click();
    cy.wait(7000);

    //verify welcome user text  is displayed after sign In
    homePage.getWelcomeUserNameID().then(($el) => {
      expect($el.text()).to.be.equal("Welcome " + this.data.username);
    });
  });
  it("Verify Sign In with Invalid credentials(Wrong Password)", function()  {
    homePage.getUserNameField().type(this.data.username);
    homePage.getPasswordField().type(this.data.password+ "@");

    homePage.getClickLoginButton().click();
    cy.wait(10000);

    //verify welcome user text  is displayed after sign In
    cy.on('window:alert', function(str){
        expect(str).to.be.equal("Wrong password.")
    })
  });
  it("Verify Sign In with Invalid credentials(Wrong Username)", function() {
    homePage.getUserNameField().type(this.data.username+'@11');
    homePage.getPasswordField().type(this.data.password);

    homePage.getClickLoginButton().click();
    cy.wait(7000);

    //verify welcome user text  is displayed after sign In
    cy.on('window:alert', function(str){
        expect(str).to.be.equal("User does not exist.")
    })
  }); 
});
