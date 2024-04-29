export class CheckoutPage {
  verifyOrderConfirmation() {
    cy.get("h1").should("contain", " Your Order Has Been Processed!");
  }
  guestFirstName(firstname) {
    cy.get("#guestFrm_firstname").clear().type(firstname);
  }
  guestLastName(lastname) {
    cy.get("#guestFrm_lastname").clear().type(lastname);
  }
  guestEmail(email) {
    cy.get("#guestFrm_email").clear().type(email);
  }
  guestAddress(address) {
    cy.get("#guestFrm_address_1").clear().type(address);
  }
  guestCity(city) {
    cy.get("#guestFrm_city").clear().type(city);
  }
  guestCountry(country) {
    cy.get("#guestFrm_country_id").select(country);
  }
  guestZone(zone) {
    cy.get("#guestFrm_zone_id").select(zone);
  }
  guestPostcode(postcode) {
    cy.get("#guestFrm_postcode").clear().type(postcode);
  }
}
export const checkoutPage = new CheckoutPage();
