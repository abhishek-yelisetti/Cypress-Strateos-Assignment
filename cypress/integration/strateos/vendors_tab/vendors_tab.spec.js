import VendorsPage from 'robots/strateos/vendors_tab/VendorsPage.ts';
import VendorsTab from 'fixtures/locators/vendors_tab.json';
import Data from 'fixtures/data/data.json';
import Cypress from '../../../../cypress.json';

context('Strateos Vendors Tab Test', () => {
const Page = new VendorsPage();

    describe('Strateos Vendors Tab assignment', ()=>{

        it("should go to the Vendors subtab and create a new vendor and assert the newly created vendor", () => {
            Page.accessUrl(Cypress.env.URL);
            Page.login();
            Page.clickOnMenu(VendorsTab.menu);
            Page.clickOnVendorsTab(VendorsTab.vendors_tab);
            Page.clickOnVendorsSubtab(VendorsTab.vendors_subtab);
            Page.wait(2000);
            Page.clickOnPlusIcon(VendorsTab.plus_icon);
            Page.enterVendorName(VendorsTab.vendor_name_input,Data.vendor_name);
            Page.clickOnCreateVendor(VendorsTab.create_vendor);
            Page.assertVendorCreation(VendorsTab.vendors_list_item,Data.vendor_name);
        });
    });
});