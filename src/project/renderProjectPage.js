import createProjectPage from "./createProjectPage";
import { handleProjectEdit } from "./handleProjectEdit";
import renderNavProjects from "./renderNavProjects";
/**
 * Renders the web page to show the project that was clicked on or was created. 
 */

function renderProjectPage(project) {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    projectContainer.appendChild(createProjectPage(project));

    // add project container to main. 
    main.appendChild(projectContainer);

    handleProjectEdit(project); // sets up event listeners
    renderNavProjects(); // re-renders project nav. 
    // ToDo need event listener for the task stuff. 
}

export default renderProjectPage;