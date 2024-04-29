export class Buttons {
  loginButton() {
    cy.get('button[type="submit"]').contains("Login").click();
  }
  orderAsGuestButton() {
    cy.get("#accountFrm_accountguest").check();
  }
  checkoutButton() {
    cy.get("#cart_checkout1").click();
  }
  checkoutAsGuestButton() {
    cy.get("#checkout_btn").click();
  }
  orderConfirmationButton() {
    cy.get("#checkout_btn").click();
  }
  submitButton() {
    cy.get('button[type="submit"]').contains("Continue").click();
  }
  addToCartButton() {
    cy.get("ul li a").contains("Add to Cart").click();
  }
}
export const buttons = new Buttons();
