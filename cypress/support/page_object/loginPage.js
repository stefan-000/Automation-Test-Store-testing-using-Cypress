export class LoginPage {
  typeLoginname(loginname) {
    cy.get("#loginFrm_loginname").clear().type(loginname);
  }
  typePassword(password) {
    cy.get("#loginFrm_password").clear().type(password);
  }
  verifyLoginOutcome() {
    cy.get("h1").should("contain", "My Account");
  }
  logout() {
    cy.get("ul a").contains("Logout").click({ force: true });
  }
  verifyLogout() {
    cy.get("h1").should("contain", "Account Logout");
  }
}
export const loginPage = new LoginPage();
