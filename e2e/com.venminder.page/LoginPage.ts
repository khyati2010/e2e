import { browser, element, by, protractor } from "protractor";
import { LoginPageOR } from "../com.venminder.page_object/LoginPageOR";
import { userData, siteUrls } from "../com.venminder.utilities/TestData";
import { TextBox } from "../com.venminder.utilities/TextBox";
import { Click } from "../com.venminder.utilities/Click";

export class LoginPage extends LoginPageOR {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();
  textbox = new TextBox();
  click = new Click();

  openUrl() {
    browser.get(this.siteUrls.sand_dev_1_url);
  }

  getErrorMessage(errorMessage: string) {
    let message: any = this.textbox.getTextValue(this.error_message);
    console.log("Error Message is:- " + message);
    expect(message).toEqual(errorMessage);
  }

  login() {
    this.textbox.setTextValue(this.username, this.userData.admin_username);
    this.textbox.setTextValue(this.password, this.userData.password);
    this.click.buttonClick(this.login_button);
  }

  loginWithoutUsername() {
    this.textbox.setTextValue(this.password, this.userData.password);
    this.click.buttonClick(this.login_button);
  }

  loginWithoutPassword() {
    this.textbox.setTextValue(this.username, this.userData.admin_username);
    this.click.buttonClick(this.login_button);
  }
}
