import {
  browser,
  element,
  by,
  protractor,
  ElementFinder,
  ExpectedConditions
} from "protractor";

export class Click {
  /**
   * Click
   */
  public buttonClick(locator: ElementFinder) {
    if (locator != null) {
      browser.wait(ExpectedConditions.elementToBeClickable(locator), 20000);
      locator.click();
    } else {
      throw new Error("Element not Clickable Exception");
    }
  }
}
