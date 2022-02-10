import { RobotEyes, RobotHands, Dependencies } from '../../robots/strateos/Robot';

context('Strateos Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()

    describe('Strateos assignment', ()=>{

        it("login into the strateos application and create a project", () => {
            dependencies.visitStrateos();
            dependencies.login();
            robotHands.clickOnDomElement('.user-nav-bar__content-left > .subtabs > :nth-child(2) > .subtabs__tab-link');
            robotHands.wait(5000);
            robotHands.clickOnDomElement('.project-square--create-new > .project-square__contents');
            robotHands.typeTextOnSelectedElement(':nth-child(1) > .validated-input > .validated-input__input > .text-input','Test project');
            robotHands.clickOnDomElement('.create-org > .btn__content');
            robotHands.clickOnDomElement('.user-nav-bar__content-left > .subtabs > :nth-child(2) > .subtabs__tab-link');
            robotEyes.seesTextOnSelectedElement(':nth-child(2) > .project-square__contents > .project-square__header-content > .project-square__headers > .project-square__header > .highlighted > span', 'Test project');
            robotHands.clickOnDomElement(':nth-child(2) > .project-square__contents > .project-square__header-content > div.project-square__favorite-icon > .project-square__favorite-icon');
            robotEyes.seesClassOnDomElement(':nth-child(2) > .project-square__contents > .project-square__header-content > div.project-square__favorite-icon > .project-square__favorite-icon','project-square__favorite-icon.fas.fa-star.project-square__favorite-icon--active.project-square__favorite-icon--active');
        });

    });

});