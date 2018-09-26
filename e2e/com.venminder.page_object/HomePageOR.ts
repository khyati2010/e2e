import { browser, element, by, protractor } from 'protractor';

export class HomePageOR {
	inputVendorSearch_new = element(by.xpath("//form[@class='form-inline']//input"));
	inputVendorSearch_old = element(by.xpath("//form[@id='vendorProductSearchHeader']//input"));
	vendorNameSearchList = element.all(by.xpath("//div[@class='list-group']//div[@class='strong noWrap']"));
}