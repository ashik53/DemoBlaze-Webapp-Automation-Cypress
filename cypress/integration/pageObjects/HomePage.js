class HomePage {
    getClickSignUpButton(){
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
    getSignUpPassword(){
        return cy.get('#sign-password')
    }
    getSignUpUserName(){
        return cy.get('#sign-username')
    }
    getSignUpButton(){
        return cy.get('#signin2')
    }
    getLoginButton(){
        return cy.get("#login2")
    }
    getClickLoginButton(){
        return cy.get("#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary")
    }
    getWelcomeUserNameID(){
        return cy.get("#nameofuser")
    }
    getUserNameField(){
        return cy.get("#loginusername")
    }
    getPasswordField(){
        return cy.get("#loginpassword")
    }
    getWebsiteTitle(){
        return cy.get("#nava");
    }
    getNavigationItems(){
        return cy.get("#navbarExample ul li")
    }
    getCategorizes(){
        return cy.get("a#itemc")
    }
    getFooterContents(){
        return cy.get("#fotcont .thumbnail .caption p")
    }
    getCoywrightTextID(){
        return cy.get('.m-0')
    }
    getContactPage(){
        return cy.get("#navbarExample ul li:nth-child(2)")
    }
}

export default HomePage;