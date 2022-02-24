import { BasePage } from '../../BasePage';
export default class VendorsPage extends BasePage {

    clickOnMenu(domElement: string){
      this.clickOnDomElement(domElement);
    }

    clickOnVendorsTab(domElement: string){
      this.clickOnDomElement(domElement);
    }

    clickOnVendorsSubtab(domElement: string){
      this.clickOnDomElement(domElement);
    }
    
    clickOnPlusIcon(domElement: string){
      this.clickOnDomElement(domElement);
    }

    enterVendorName(domElement: string, text: string){
      this.typeTextOnSelectedElement(domElement,text);
    }

    clickOnCreateVendor(domElement: string){
      this.clickOnDomElement(domElement);
    }

    assertVendorCreation(domElement: string,text: string){
      this.seesDomContainText(domElement,text);
    }
}