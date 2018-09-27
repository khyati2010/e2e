import { browser, element, by, protractor } from "protractor";

export class LoginPageOR {
  username = element(by.name("Username"));
  password = element(by.name("Password"));
  login_button = element(by.name("button"));
  error_message = element(by.css("div.validation-summary-errors>ul>li"));
}
