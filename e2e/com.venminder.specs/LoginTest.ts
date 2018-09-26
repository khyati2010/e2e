import { browser, element, by, protractor, Browser } from "protractor";
import { LoginPage } from "../com.venminder.page/LoginPage";

describe("Automate Login Functionality with all possible scenario", function() {
  let loginPage = new LoginPage();
  loginPage.openUrl();

  // TC_1
  it("Login without Username", function() {
    loginPage.loginWithoutUsername();
    loginPage.getErrorMessage("The Username field is required.");
    browser.refresh();
    browser.sleep(5000);
  });

  // TC_2
  it("Login without Password", function() {
    loginPage.loginWithoutPassword();
    loginPage.getErrorMessage("The Password field is required.");
    browser.refresh();
    browser.sleep(5000);
  });

  // TC_3
  it("Login with valid Username and Password", function() {
    loginPage.login();
    browser.sleep(20000);
    expect(browser.getTitle()).toEqual("Venminder | Home");
  });
});
