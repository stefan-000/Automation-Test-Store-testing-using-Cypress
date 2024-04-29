export class NavigationPage {
  navigateToHomePage() {
    cy.get("div").find('[class="navbar-header header-logo"]').click();
  }
  navigateToLoginOrRegister() {
    cy.get("ul a").contains("Login or register").click();
    cy.get("h1").should("contain", "Account Login");
    cy.url("/").should("include", "/login");
  }
  navigateToSpecialsPage() {
    cy.getDataId("menu_specials").first().click();
  }
  navigateToAccountPage() {
    cy.getDataId("menu_account").contains("Account").click();
  }
  navigateToCartPage() {
    cy.getDataId("menu_cart").first().click();
  }
}
export const navigateTo = new NavigationPage();
