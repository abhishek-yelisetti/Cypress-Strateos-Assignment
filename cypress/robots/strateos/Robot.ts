import { expect } from 'chai';
import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitStrateos(){
        this.accessUrl('http://localhost:5555/');
    }

    login() {
        cy.get('#emailInput').type('ben.miles@strateos.com'); //Cypress.env('USER_NAME')
        cy.get('#passwordInput').type('Testing123!'); //Cypress.env('PASSWORD')
        cy.get('#submitButton').click();
        return this;
    }


}

export class RobotEyes extends BaseEyes{

    seesTextOnSelectedElement(domElement: string,value: string){
        cy.get(domElement).should('have.text',value);
        return this;
    }

    seesClassOnDomElement(domElement: string,className: string){
        cy.get(domElement).should('have.class',className);
        return this;
    }

}

export class RobotHands extends BaseHands{
    clickOnElement(element: string) {
        cy.get(element).click({force: true});
        return this;
    }

    typeTextOnSelectedElement(domElement: string,value: string){
        cy.get(domElement).type(value);
        return this;
    }

    clickOnDomElement(dom: string, timeout?: number) {
        cy.get(dom, {timeout: timeout}).click();
        return this;
    }
}