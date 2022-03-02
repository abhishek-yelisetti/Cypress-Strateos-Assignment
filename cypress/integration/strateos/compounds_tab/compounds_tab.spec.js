import CompoundsPage from 'robots/strateos/compounds_tab/CompoundsPage';
import CompoundTab from 'fixtures/locators/compounds_tab.json';
import Data from 'fixtures/data/data.json';
import Cypress from '../../../../cypress.json';

context('Strateos Compounds Tab Test', () => {
const Page = new CompoundsPage();

    describe('Strateos Compound Tab assignment', ()=>{

        it("should go to Compounds Subtab and create a public compound and assert the creation of the compound", () => {
            Page.accessUrl(Cypress.env.URL);
            Page.login();
            Page.openCompoundsTab(CompoundTab.compounds_tab);
            Page.clickOnRegisterCompoundBtn(CompoundTab.register_compound_btn);
            Page.clickOnDrawStructure(CompoundTab.draw_structure_btn);
            Page.registerAsPublicCompound(CompoundTab.public_compound_toggle);
            Page.enterSmileString(CompoundTab.smile_string_input, Data.smile_string_input);
            Page.clickOnNextBtn(CompoundTab.next_btn);
            Page.wait(5000);
            Page.enterNickname(CompoundTab.compound_nickname_input, Data.nickname);
            Page.clickOnCreateCompound(CompoundTab.create_compound_button);
            Page.openCompoundsTab(CompoundTab.compounds_tab);
            Page.assertCreatedCompound(CompoundTab.compound_nickname_view, Data.nickname);
        });
    });
});