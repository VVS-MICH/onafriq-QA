/// <reference types="cypress" />
import ShopPage from "../pages/shopPage.js";

describe("Tests", function () {

  let accessData;
  before("load fixture and visit site", () => {
    cy.fixture("access").then((data) => {
      accessData = data;
    });
    cy.visit("/");
  });


     
  it("log in and places an order", () => {
        //click on sign in button
        cy.contains(" Signup / Login").click();
        //sign in with email and password
        ShopPage.usernameField().type(accessData.username);
        ShopPage.passwordField().type(accessData.password);
        ShopPage.loginButton().click();
        //Assert that user is signed in by checking to see that the log out and delete account button exists after loging in
        ShopPage.deleteAccount()
          .should("have.text", " Delete Account")
          .should("exist");
        ShopPage.logoutButton()
          .parent()
          .should("have.text", " Logout")
          .should("exist");
    
          //getting the list of Featured items and their prices
        const getTexts = ($el) => {
          return Cypress._.map($el, "innerText");
        };
    
        ShopPage.featuredItems().then(($products) => {
          const products = [];
    
          $products.each((index, product) => {
            const label = Cypress.$(product).find("p").text();
            const priceString = Cypress.$(product).find("h2").text();
    
            // Extract numerical value from the price string by trimming and removing the currency
            const price = parseFloat(priceString.replace("Rs. ", "").trim());
    
            // Push the product object to the array
            products.push({ label, price });
          });
          ``;
          // Sorting the array by price in ascending order
          products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    
          //creating an alias for the array
          cy.wrap(products).as("sortedProducts");
        });
        // Accessing the sorted products
        cy.get("@sortedProducts").then((sortedProducts) => {
          // printing the sorted products to console
          cy.log(sortedProducts);
        });
    
        //testing out teh scrollability of the app
        cy.scrollTo("bottom");
        cy.scrollTo("top");


    // Add Blue Top to cart
    ShopPage.addToCartButton("Blue Top").click();
    cy.contains("Your product has been added to cart.")
      .should("exist")
      .should("be.visible");
    cy.contains("Continue Shopping").click();

    // Add Fancy Green Top to cart
    ShopPage.addToCartButton("Fancy Green Top").click();
    cy.contains("Your product has been added to cart.")
      .should("exist")
      .should("be.visible");
    cy.contains("Continue Shopping").click();

    // Go to cart and verify items
    ShopPage.cartLink().click();
    ShopPage.cartItemName("Blue Top").should("exist");
    ShopPage.cartItemName("Fancy Green Top").should("exist");

    // Checkout process
    ShopPage.checkoutButton();
    ShopPage
      .commentField()
      .type("Order placed.")
      .should("contain.value", "Order placed.");
    ShopPage.placeOrderButton().click();

    // Fill payment card details
    ShopPage
      .nameOnCardField()
      .type(accessData.name);
    ShopPage
      .cardNumberField()
      .type(accessData.cardNumber);
    ShopPage
      .cvcField()
      .type(accessData.cvc);
    ShopPage
      .expiryMonthField()
      .type(accessData.expirationMonth);
    ShopPage
      .expiryYearField()
      .type(accessData.expirationYear);
    ShopPage.payButton().click();

    // Verify order confirmation
    ShopPage.orderConfirmation().should("exist");
  });
});
