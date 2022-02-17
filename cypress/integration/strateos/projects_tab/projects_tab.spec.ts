import ProjectsPage from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/robots/strateos/projects_tab/ProjectsPage';
import ProjectTab from '/home/abhiy/vscode/Cypress/Cypress_Strateos_Assignment/cypress/fixtures/locators/projects_tab.json';
context('Strateos Project Tab Test', () => {
const Page = new ProjectsPage();

    describe('Strateos Project Tab assignment', ()=>{

        it("should login into the strateos application and create a project and assert if it is created", () => {
            Page.visitStrateos();
            Page.login();
            Page.openProjectsTab(ProjectTab.projects_tab);
            Page.wait(5000);
            Page.createNewProject(ProjectTab.create_project_icon);
            Page.enterProjectName(ProjectTab.project_name_input,'Test project');
            Page.clickOnSubmit(ProjectTab.create_project);
            Page.openProjectsTab(ProjectTab.projects_tab);
            Page.assertProjectName(ProjectTab.project_name_display, 'Test project');
            Page.favoriteTheProject(ProjectTab.project_favourite_icon);
            Page.assertIfProjectGotFavorited(ProjectTab.project_star,ProjectTab.project_star_active_class);
        });
    });
});