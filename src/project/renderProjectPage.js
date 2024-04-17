import createProjectPage from "./createProjectPage";
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
}

export default renderProjectPage;