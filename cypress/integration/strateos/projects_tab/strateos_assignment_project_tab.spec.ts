import ProjectsPage from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/robots/strateos/projects_tab/ProjectsPage';
// import ProjectTab from 'cypress/fixtures/locators/project_tab.json';
context('Strateos Project Tab Test', () => {
const Page = new ProjectsPage();

    describe('Strateos Project Tab assignemnt', ()=>{

        it("login into the strateos application and create a project", () => {
            Page.visitStrateos();
            Page.login();
            Page.openProjectsTab('.user-nav-bar__content-left > .subtabs > :nth-child(2) > .subtabs__tab-link');
            Page.wait(5000);
            Page.createNewProject('.project-square--create-new > .project-square__contents');
            Page.enterProjectName(':nth-child(1) > .validated-input > .validated-input__input > .text-input','Test project');
            Page.clickOnSubmit('.create-org > .btn__content');
            Page.openProjectsTab('.user-nav-bar__content-left > .subtabs > :nth-child(2) > .subtabs__tab-link');
            Page.assertProjectName(':nth-child(2) > .project-square__contents > .project-square__header-content > .project-square__headers > .project-square__header > .highlighted > span', 'Test project');
            Page.favoriteTheProject(':nth-child(2) > .project-square__contents > .project-square__header-content > div.project-square__favorite-icon > .project-square__favorite-icon');
            Page.assertIfProjectGotFavorited('.project-square--hovered > .project-square__contents > .project-square__header-content > div.project-square__favorite-icon > .project-square__favorite-icon','project-square__favorite-icon.fas.fa-star.project-square__favorite-icon--active.project-square__favorite-icon--active');
        });
    });
});