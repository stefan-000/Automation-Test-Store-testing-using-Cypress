export class RegistrationPage {
  typeFirstname(firstname) {
    cy.get('[name="firstname"]').clear().type(firstname);
  }
  typeLastname(lastname) {
    cy.get('[name="lastname"]').clear().type(lastname);
  }
  typeEmail(email) {
    cy.get("#AccountFrm_email").clear().type(email);
  }
  typeAddress(address) {
    cy.get("#AccountFrm_address_1").clear().type(address);
  }
  typeCity(city) {
    cy.get("#AccountFrm_city").clear().type(city);
  }
  typeCountry(country) {
    cy.get("#AccountFrm_country_id").select(country);
  }
  typeZone(zone) {
    cy.get("#AccountFrm_zone_id").select(zone);
  }
  typePostcode(postcode) {
    cy.get("#AccountFrm_postcode").clear().type(postcode);
  }
  typeLoginname(loginname) {
    cy.get("#AccountFrm_loginname").clear().type(loginname);
  }
  typePassword(password) {
    cy.get("#AccountFrm_password").clear().type(password);
  }
  typeConfirm(confirm) {
    cy.get("#AccountFrm_confirm").clear().type(confirm);
  }
  checkNewsletter() {
    cy.get("#AccountFrm_newsletter0").check();
  }
  checkPrivacyPolicy() {
    cy.get("#AccountFrm_agree").check();
  }

  verifyRegistrationOutcome() {
    cy.get("body").then(($body) => {
      if ($body.find('[class="alert alert-error alert-danger"]').length > 0) {
        cy.get('[class="alert alert-error alert-danger"]').then(($alert) => {
          if (
            $alert
              .text()
              .includes("Error: E-Mail Address is already registered!")
          ) {
            cy.get('[class="alert alert-error alert-danger"]').should(
              "contain",
              "Error: E-Mail Address is already registered!"
            );
          } else if (
            $alert
              .text()
              .includes(
                "This login name is not available. Try different login name!"
              )
          ) {
            cy.get('[class="alert alert-error alert-danger"]').should(
              "contain",
              "This login name is not available. Try different login name!"
            );
          }
        });
      } else {
        cy.get("h1").should("contain", " Your Account Has Been Created!");
      }
    });
  }
}
export const registrationPage = new RegistrationPage();
