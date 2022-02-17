import VendorsMaterialPage from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/robots/strateos/vendors_material_tab/VendorsMaterialPage';

context('Strateos Vendors Material Tab Test', () => {
const Page = new VendorsMaterialPage();

    describe('Strateos Vendors Material Tab assignment', ()=>{

        it("should create a new material based on the resource created in vendors resource tab", () => {
            Page.visitStrateos();
            Page.login();
            Page.clickOnMenu('.subtabs__tab-link > span');
            Page.clickOnVendors(':nth-child(2) > .input-suggestions__suggestion-content > .input-suggestions__suggestion-content-text > .submenu-link__dropdown-item');
            Page.clickOnMaterialSubTab('.page-layout__tabs > .subtabs > :nth-child(2) > .subtabs__tab-link');
            Page.clickOnNewButton('.samples > a > .btn');
            Page.clickOnAddButton('.validated-input__input > .btn')
            Page.selectTheCompound(':nth-child(1) > :nth-child(1) > .amino-table__cell-content > .tx-checkbox > .tx-checkbox__content > .tx-checkbox__icon-container > .fa')
            Page.clickOnContinue('span > .btn')
            Page.selectResource(':nth-child(1) > :nth-child(1) > .amino-table__cell-content > .tx-checkbox > .tx-checkbox__content > .tx-checkbox__icon-container > .fa')
            Page.clickSelect('span > .btn')
            Page.selectVendor('.validated-input__input > .select > .select-input__container > .select-input__wrapper')
            Page.selectVendorType(':nth-child(1) > .input-suggestions__suggestion-content > .input-suggestions__suggestion-content-text')
            Page.clickAddCostItem('.add-new-inplace > .btn > .btn__content')
            Page.enterAmount(':nth-child(1) > .validated-input > .validated-input__input > .labeled-input > .text-input','123');
            Page.selectUnit('.validated-input__input > .labeled-input > .select > .select-input__container > .select-input__wrapper')
            Page.selectUnitType(':nth-child(1) > .input-suggestions__suggestion-content > .input-suggestions__suggestion-content-text')
            Page.enterCost(':nth-child(3) > .validated-input > .validated-input__input > .labeled-input > .text-input', '123')
            Page.enterSKU(':nth-child(4) > .validated-input > .validated-input__input > .labeled-input > .text-input','123')
            Page.clickCheckMark('.icon > .fa-check')
            Page.clickOnCreate('.button-group > .btn-tall')
        });
    });
});