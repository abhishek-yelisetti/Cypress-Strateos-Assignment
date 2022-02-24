import { BasePage } from '../../BasePage';
export default class VendorsResourcePage extends BasePage {

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