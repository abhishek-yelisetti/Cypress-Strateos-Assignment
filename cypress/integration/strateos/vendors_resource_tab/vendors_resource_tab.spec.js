import VendorsResourcePage from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/robots/strateos/vendors_resource_tab/VendorsResourcePage.ts';

context('Strateos Vendors Resource Tab Test', () => {
const Page = new VendorsResourcePage();

    describe('Strateos Vendors Resource Tab assignment', ()=>{

        it("should create a new resource of type ChemicalStructure and test the filter resources filter", () => {
            Page.visitStrateos();
            Page.login();
            Page.clickOnMenu('.subtabs__tab-link > span');
            Page.clickOnVendors(':nth-child(2) > .input-suggestions__suggestion-content > .input-suggestions__suggestion-content-text > .submenu-link__dropdown-item');
            Page.clickOnResourceSubtab('.page-layout__tabs > .subtabs > :nth-child(3) > .subtabs__tab-link');
            Page.clickOnAddResourceButton('.tx-stack__block--sm > .btn > .btn__content');
            Page.enterNameOfTheResource('.text-input','Resource123');
            Page.selectKindOfResource(':nth-child(2) > .labeled-input > .select > .select-input__container > .select-input__wrapper');
            Page.selectChemicalStructure(':nth-child(2) > .input-suggestions__suggestion-content > .input-suggestions__suggestion-content-text');
            Page.clickOnLinkCompundButton('.labeled-input > .btn > .btn__content');
            Page.addLinkCompound(':nth-child(1) > :nth-child(1) > .amino-table__cell-content > .tx-checkbox > .tx-checkbox__content > .tx-checkbox__icon-container > .fa');
            Page.clickOnAddButton('.create-org > .btn__content');
            Page.clickKindFilterDropDown(':nth-child(1) > :nth-child(1) > .search-filter-bar-title-wrapper > .search-filter-wrapper__title > .fa');
            Page.selectChemicalStructure(':nth-child(1) > :nth-child(1) > .search-filter-wrapper__vertical-options > .search-filter > .radio-group > :nth-child(2) > .tx-radio__content > .tx-radio__toggle');
            Page.clickStorageConditionDropDown(':nth-child(2) > :nth-child(1) > .search-filter-bar-title-wrapper > .search-filter-wrapper__title > .fa');
            Page.selectCold_4(':nth-child(2) > :nth-child(1) > .search-filter-wrapper__vertical-options > .search-filter > .radio-group > :nth-child(3) > .tx-radio__content > .tx-radio__toggle');
            Page.assertResource(':nth-child(1) > .resource-card__card','Resource123');
        });
    });
});