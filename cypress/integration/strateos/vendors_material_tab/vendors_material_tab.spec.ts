import VendorsMaterialPage from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/robots/strateos/vendors_material_tab/VendorsMaterialPage';
import VendorsMaterialTab from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/fixtures/locators/vendors_material_tab.json';
context('Strateos Vendors Material Tab Test', () => {
const Page = new VendorsMaterialPage();

    describe('Strateos Vendors Material Tab assignment', ()=>{

        it("should create a new material based on the resource created in vendors resource tab", () => {
            Page.visitStrateos();
            Page.login();
            Page.clickOnMenu(VendorsMaterialTab.menu);
            Page.clickOnVendors(VendorsMaterialTab.vendors);
            Page.clickOnMaterialSubTab(VendorsMaterialTab.material);
            Page.clickOnNewButton(VendorsMaterialTab.new_button);
            Page.clickOnAddButton(VendorsMaterialTab.add_button);
            Page.selectTheCompound(VendorsMaterialTab.compound);
            Page.clickOnContinue(VendorsMaterialTab.continue);
            Page.selectResource(VendorsMaterialTab.resource);
            Page.clickSelect(VendorsMaterialTab.select);
            Page.selectVendor(VendorsMaterialTab.vendor);
            Page.selectVendorType(VendorsMaterialTab.vendor_type);
            Page.clickAddCostItem(VendorsMaterialTab.add_cost_item_input);
            Page.enterAmount(VendorsMaterialTab.amount_input,'12345');
            Page.selectUnit(VendorsMaterialTab.select_unit);
            Page.selectUnitType(VendorsMaterialTab.unit_type_suggestion);
            Page.enterCost(VendorsMaterialTab.cost_input, '12345');
            Page.enterSKU(VendorsMaterialTab.sku_input,'12345');
            Page.clickCheckMark(VendorsMaterialTab.check_icon);
            Page.clickOnCreate(VendorsMaterialTab.create_button);
        });
    });
});