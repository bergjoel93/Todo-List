import renderProjectPage from "./renderProjectPage";
import { projectManager } from "../app";
import { removeActive, addActive } from "../navigation";
/**
 * Responsible for handling all the projects in the nav bar when they're clicked. 
 */

function handleNavProject() {
    const projectButtons = document.querySelectorAll('#titleButton');

    projectButtons.forEach(projectButton => {
        projectButton.addEventListener('click', () => {
            //Extract button class
            const projectButtonClass = "."+projectButton.classList[0];
            console.log('project class: '+projectButtonClass);
            //extract ID
            const projectId = Number(projectButton.getAttribute('data-id'));
            console.log('Project Id clicked: '+projectId);
            // get project from id. 
            const project = projectManager.getProjectById(projectId);
            //render project page
            renderProjectPage(project);
            // change active class for underline. 
            removeActive();
            addActive(projectButtonClass);
            
        });
    });

}

export default handleNavProject;