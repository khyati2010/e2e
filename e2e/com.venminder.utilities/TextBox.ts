import {
  browser,
  element,
  by,
  protractor,
  ElementFinder,
  ExpectedConditions,
  ElementArrayFinder
} from "protractor";

export class TextBox {
  /**
   * setTextValue
   */
  public setTextValue(locator: ElementFinder, data: string) {
    if (locator != null) {
      browser.wait(ExpectedConditions.presenceOf(locator), 20000);
      locator.clear();
      locator.sendKeys(data);
    } else throw new Error("Element not Present Exception");
  }

  /**
   * getTextValue
   */
  public getTextValue(locator: ElementFinder) {
    let data: any = null;
    if (locator != null) {
      browser.wait(ExpectedConditions.presenceOf(locator), 20000);
      locator.getText().then(function(text) {
        data = text;
        console.log(data);
      });
    } else throw new Error("Element not Visiable Exception");
    return data;
  }

  // public getTextValueWithIndex(locator: ElementArrayFinder, index:number) {
  // 	let data: string = null;
  // 	let count: number = 0;
  // 	if (findElements(locator != null) {
  // 		List<WebElement> list = findElements(locator);
  // 		for (WebElement element : list) {
  // 			if (verifyElement.isElementPresent(element)) {
  // 				if (count == index) {
  // 					text = element.getText();
  // 				}
  // 			}
  // 			count++;
  // 		}
  // 	} else {
  // 		Loggers.error("Get text Web Element Not Located : " + locator);
  // 		throw new Exception("Get text Web Element Not Located : " + locator);
  // 	}
  // 	return text;
  // }

  // public getAttributeValue(locator: ElementFinder, attributeName:string) {
  // 	let attributeValue: string = null;
  // 	element = findElement(locator);
  // 	if (element != null)
  // 		attributeValue = element.getAttribute(attributeName);
  // 	else {
  // 		Loggers.error("Get text Web Element Not Located : " + locator);
  // 		throw new Exception("Get text Web Element Not Located : " + locator);
  // 	}
  // 	return attributeValue;
  // }

  //  public String getElementColour(By locator, String attributeName) throws Exception {
  //   String attributeValue = null;
  //   element = findElement(locator);
  //   if (element != null)
  //    attributeValue = element.getCssValue(attributeName);
  //   else {
  //    Loggers.error("Get colour Web Element Not Located : " + locator);
  //    throw new Exception("Get colour Web Element Not Located : " + locator);
  //   }
  //   return attributeValue;
  //  }

  //  public String getElementColour(By locator, int index, String attributeName) throws Exception {
  //   String attributeValue = null;
  //   element = findElement(locator, index);
  //   if (element != null)
  //    attributeValue = element.getCssValue(attributeName);
  //   else {
  //    Loggers.error("Get colour Web Element Not Located : " + locator);
  //    throw new Exception("Get colour Web Element Not Located : " + locator);
  //   }
  //   return attributeValue;
  //  }
}
