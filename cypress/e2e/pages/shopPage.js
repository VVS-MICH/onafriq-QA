class ShopPage {
    
    header() {
      return cy.get(".shop-menu > .nav");
    }
  
    signInButton() {
      return this.header().contains(" Signup / Login");
    }
  
    loginButton() {
      return cy.get('[data-qa="login-button"]');
    }
  
    usernameField() {
      return cy.get('[data-qa="login-email"]');
    }
  
    passwordField() {
      return cy.get('[data-qa="login-password"]');
    }
  
    logoutButton() {
      return cy.get('[class="fa fa-lock"]').parent();
    }

    deleteAccount() {
      return cy.get('[class="fa fa-trash-o"]').parent();
    }
  
    featuredItems() {
      return cy.get(".features_items .productinfo.text-center");
    }
  
    featuredItemByName(name) {
      return this.featuredItems().contains(name).parent();
    }
  
    addToCartButton(itemName) {
      return this.featuredItemByName(itemName).contains("Add to cart");
    }
  
    cartLink() {
      return this.header().contains("Cart");
    }
  
    cartItems() {
      return cy.get(".cart_description");
    }
  
    cartItemName(name) {
      return this.cartItems().contains(name);
    }
  
    checkoutButton() {
      return cy.contains("Checkout").click({ force: true });
    }
  
    commentField() {
      return cy.get(".form-control");
    }
  
    placeOrderButton() {
      return cy.get('[class="btn btn-default check_out"]');
    }
  
    nameOnCardField() {
      return cy.get('[data-qa="name-on-card"]');
    }
  
    cardNumberField() {
      return cy.get('[data-qa="card-number"]');
    }
  
    cvcField() {
      return cy.get('[data-qa="cvc"]');
    }
  
    expiryMonthField() {
      return cy.get('[data-qa="expiry-month"]');
    }
  
    expiryYearField() {
      return cy.get('[data-qa="expiry-year"]');
    }
  
    payButton() {
      return cy.get('[data-qa="pay-button"]');
    }
  
    orderConfirmation() {
      return cy.contains('Congratulations! Your order has been confirmed!');
    }
  }

  export default new ShopPage();
