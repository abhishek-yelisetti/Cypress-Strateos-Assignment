import ProjectsPage from 'robots/strateos/projects_tab/ProjectsPage';
import ProjectTab from 'fixtures/locators/projects_tab.json';
import Data from 'fixtures/data/data.json';
import Cypress from '../../../../cypress.json';

context('Strateos Project Tab Test', () => {
const Page = new ProjectsPage();

    describe('Strateos Project Tab assignment', ()=>{

        it("should login into the strateos application and create a project and assert if it is created", () => {
            Page.accessUrl(Cypress.env.URL);
            Page.login();
            Page.openProjectsTab(ProjectTab.projects_tab);
            Page.wait(5000);
            Page.createNewProject(ProjectTab.create_project_icon);
            Page.enterProjectName(ProjectTab.project_name_input,Data.project_name);
            Page.clickOnSubmit(ProjectTab.create_project);
            Page.openProjectsTab(ProjectTab.projects_tab);
            Page.assertProjectName(ProjectTab.project_name_display, Data.project_name);
            Page.favoriteTheProject(ProjectTab.project_favourite_icon);
            Page.assertIfProjectGotFavorited(ProjectTab.project_star,ProjectTab.project_star_active_class);
        });
    });
});