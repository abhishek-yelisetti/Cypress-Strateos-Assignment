import VendorsPage from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/robots/strateos/vendors_tab/VendorsPage.ts';
import VendorsTab from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/fixtures/locators/vendors_tab.json';
context('Strateos Vendors Tab Test', () => {
const Page = new VendorsPage();

    describe('Strateos Vendors Tab assignment', ()=>{

        it("should go to the Vendors subtab and create a new vendor and assert the newly created vendor", () => {
            Page.visitStrateos();
            Page.login();
            Page.clickOnMenu(VendorsTab.menu);
            Page.clickOnVendorsTab(VendorsTab.vendors_tab);
            Page.clickOnVendorsSubtab(VendorsTab.vendors_subtab);
            Page.wait(2000);
            Page.clickOnPlusIcon(VendorsTab.plus_icon);
            Page.enterVendorName(VendorsTab.vendor_name_input,'Vendor123');
            Page.clickOnCreateVendor(VendorsTab.create_vendor);
            Page.assertVendorCreation(VendorsTab.vendors_list_item,'Vendor123');
        });
    });
});