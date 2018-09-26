import { browser, element, by, protractor } from 'protractor';
import { HomePageOR } from '../com.venminder.page_object/HomePageOR';
import { userData, siteUrls } from '../com.venminder.utilities/TestData';

export class HomePage extends HomePageOR {
    siteUrls: siteUrls = new siteUrls();
    userData: userData = new userData();

    // searchVendor(vendorName:string){
    // this.vendorNameSearchList.each(function(element, index) {
    // element.getText().then(function(text) {
    //     console.log(text);
    // });
}