import { registrationPage } from "../support/page_object/registrationPage";
import { loginPage } from "../support/page_object/loginPage";
import { navigateTo } from "../support/page_object/navigationPage";
import { shoppingCartPage } from "../support/page_object/shoppingCartPage";
import { checkoutPage } from "../support/page_object/checkoutPage";
import { buttons } from "../support/page_object/buttons";

describe("Test Page Object Model", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Verify registration", () => {
    navigateTo.navigateToLoginOrRegister();
    buttons.submitButton();
    registrationPage.typeFirstname("Henry");
    registrationPage.typeLastname("Doe");
    registrationPage.typeEmail("test1302@test.com");
    registrationPage.typeAddress("Street 1");
    registrationPage.typeCity("City");
    registrationPage.typeCountry("United States");
    registrationPage.typeZone("California");
    registrationPage.typePostcode("12345");
    registrationPage.typeLoginname("HenryDoe001");
    registrationPage.typePassword("password123");
    registrationPage.typeConfirm("password123");
    registrationPage.checkNewsletter();
    registrationPage.checkPrivacyPolicy();
    buttons.submitButton();
    registrationPage.verifyRegistrationOutcome();
  });
  it("Verify login and logout", () => {
    navigateTo.navigateToLoginOrRegister();
    loginPage.typeLoginname("HenryDoe001");
    loginPage.typePassword("password123");
    buttons.loginButton();
    loginPage.verifyLoginOutcome();
    loginPage.logout();
    loginPage.verifyLogout();
  });
  it("Adding items to cart", () => {
    navigateTo.navigateToLoginOrRegister();
    loginPage.typeLoginname("HenryDoe001");
    loginPage.typePassword("password123");
    buttons.loginButton();
    loginPage.verifyLoginOutcome();
    navigateTo.navigateToHomePage();
    shoppingCartPage.addingItemsToCart(53);
    buttons.addToCartButton();
    shoppingCartPage.verifyShoppingCartPage();
    shoppingCartPage.verifyItemAddedToCart();
  });
  it("Verify checkout", () => {
    navigateTo.navigateToLoginOrRegister();
    loginPage.typeLoginname("HenryDoe001");
    loginPage.typePassword("password123");
    buttons.loginButton();
    loginPage.verifyLoginOutcome();
    navigateTo.navigateToHomePage();
    shoppingCartPage.addingItemsToCart(123);
    buttons.addToCartButton();
    shoppingCartPage.verifyShoppingCartPage();
    buttons.checkoutButton();
    buttons.orderConfirmationButton();
    checkoutPage.verifyOrderConfirmation();
    loginPage.logout();
  });
  it("Verify ordering as a guest", () => {
    shoppingCartPage.addingItemsToCart(123);
    buttons.addToCartButton();
    shoppingCartPage.verifyShoppingCartPage();
    buttons.checkoutButton();
    buttons.orderAsGuestButton();
    buttons.submitButton();
    checkoutPage.guestFirstName("Henry");
    checkoutPage.guestLastName("Doe");
    checkoutPage.guestEmail("test1302@test.com");
    checkoutPage.guestAddress("Street 1");
    checkoutPage.guestCity("City");
    checkoutPage.guestCountry("United States");
    checkoutPage.guestZone("California");
    checkoutPage.guestPostcode("12345");
    buttons.submitButton();
    buttons.checkoutAsGuestButton();
    checkoutPage.verifyOrderConfirmation();
  });
});
