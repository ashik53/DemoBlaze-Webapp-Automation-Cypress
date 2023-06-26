# DemoBlaze-WebApp-Automation-Framework-Cypress
### [DemoBlaze E-commerce Web Application](https://www.demoblaze.com/) Automation by Cypress 12
### Used Tools/Languages/Frameworks
- Cypress
- Chai
- Jquery
- Javascript
- Mocha & Mochawesome
- JSON
### Special Technical Features
- Page Object Model (POM) is designed for automation script files for different webpages
- Data-Driven Testing(DDT) is implemented through fixtures
- Used beforeEach() hook to serve as a prerequisite before each test
- Used the custom Login command to avoid repetitive Login code where required
- Separate Authentication (SignIn, Sign Out, Sign Up) Module 
### Detailed Features
- Home, Contact, About page content test script
- End to End Test script (From Sign Up to Product Purchase/Order)
### Videos
Sample Product Purchase and Order end-to-end workflow

<img src ="https://github.com/ashik53/DemoBlaze-Webapp-Automation-Cypress/blob/master/cypress/reports/html/PurchaseOrderProduct_Test.js.gif" >

### Installation
1. Install Node.js and npm in your system
2. Clone the project
   ```
   git clone https://github.com/ashik53/DemoBlaze-Webapp-Automation-Cypress.git
   ```
3. cd into the Project repository
   ```
   cd DemoBlaze-Webapp-Automation-Cypress
   ```
4. Install npm
     ```
   npm install
   ```
5. run the following command to run your automation scripts
    ```
   npx cypress open
   ```


