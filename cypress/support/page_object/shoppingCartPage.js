export class ShoppingCartPage {
  verifyShoppingCartPage() {
    cy.get("h1").should("contain", "Shopping Cart");
  }
  addingItemsToCart(itemId) {
    cy.getDataId(itemId).click();
  }

  verifyItemAddedToCart() {
    cy.get("tbody tr td").contains("Total").should("exist");
  }
}
export const shoppingCartPage = new ShoppingCartPage();
