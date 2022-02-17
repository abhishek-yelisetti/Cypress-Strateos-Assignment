import { BasePage } from '../../BasePage';
import Cypress from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress.json';


export default class VendorsResourcePage extends BasePage {
   
    visitStrateos(){
      this.accessUrl('http://localhost:5555/');
    }

    login() {
      cy.get('#emailInput').type(Cypress.env.USER_NAME);
      cy.get('#passwordInput').type(Cypress.env.PASSWORD);
      cy.get('#submitButton').click();
      return this;
    }

    clickOnMenu(domElement: string){
      this.clickOnDomElement(domElement);
    }

    clickOnVendors(domElement: string){
      this.clickOnDomElement(domElement);
    }

    clickOnResourceSubtab(domElement: string){
      this.clickOnDomElement(domElement);
    }
    
    clickOnAddResourceButton(domElement: string){
      this.clickOnDomElement(domElement);
    }

    enterNameOfTheResource(domElement: string, text: string){
      this.typeTextOnSelectedElement(domElement,text);
    }

    selectKindOfResource(domElement: string){
      this.clickOnDomElement(domElement);
    }

    selectChemicalStructure(domElement: string){
      this.clickOnDomElement(domElement);
    }

    assertResource(domElement: string,text: string){
      this.seesDomContainText(domElement,text);
    }

    clickOnLinkCompundButton(domElement: string){
      this.clickOnDomElement(domElement);
    }

    addLinkCompound(domElement: string){
      this.clickOnDomElement(domElement);
    }

    clickOnAddButton(domElement: string){
      this.clickOnDomElement(domElement);
    }

    clickKindFilterDropDown(domElement: string){
      this.clickOnDomElement(domElement);
    }

    clickStorageConditionDropDown(domElement: string){
      this.clickOnDomElement(domElement);
    }

    selectCold_4(domElement: string){
      this.clickOnDomElement(domElement);
    }
}