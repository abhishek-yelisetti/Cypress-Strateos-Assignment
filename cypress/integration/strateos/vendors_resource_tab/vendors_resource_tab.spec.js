import VendorsResourcePage from 'robots/strateos/vendors_resource_tab/VendorsResourcePage.ts';
import VendorsResourceTab from 'fixtures/locators/vendors_resource_tab.json';
import Data from 'fixtures/data/data.json';
import Cypress from '../../../../cypress.json';

context('Strateos Vendors Resource Tab Test', () => {
const Page = new VendorsResourcePage();

    describe('Strateos Vendors Resource Tab assignment', ()=>{

        it("should create a new resource of type ChemicalStructure and test the filter resources filter", () => {
            Page.accessUrl(Cypress.env.URL);
            Page.login();
            Page.clickOnMenu(VendorsResourceTab.menu);
            Page.clickOnVendors(VendorsResourceTab.vendors_tab);
            Page.clickOnResourceSubtab(VendorsResourceTab.vendors_resource_subtab);
            Page.clickOnAddResourceButton(VendorsResourceTab.add_resource_btn);
            Page.enterNameOfTheResource(VendorsResourceTab.resource_name_input,Data.resource_name);
            Page.selectKindOfResource(VendorsResourceTab.resource_kind_dropdown);
            Page.selectChemicalStructure(VendorsResourceTab.chemical_structure_option);
            Page.clickOnLinkCompundButton(VendorsResourceTab.link_compound_btn);
            Page.addLinkCompound(VendorsResourceTab.select_link_compound);
            Page.clickOnAddButton(VendorsResourceTab.add_link_compound);
            Page.clickKindFilterDropDown(VendorsResourceTab.kind_filter_dropdown);
            Page.selectChemicalStructure(VendorsResourceTab.kind_filter_chemical_structure_option);
            Page.clickStorageConditionDropDown(VendorsResourceTab.storage_condition_dropdown);
            Page.selectCold_4(VendorsResourceTab.storage_condition_cold4_option);
            Page.assertResource(VendorsResourceTab.resource_card,Data.resource_name);
        });
    });
});