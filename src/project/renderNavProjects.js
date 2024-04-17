import { projectManager } from "../app";

/**
 * Responsible for rendering the names of the projects under the Add Project Button
 */

function renderNavProjects() {
    const projectContainer = document.querySelector('.nav-project-container');

    const projects = projectManager.getProjects();
    
    const titles = projects.map(project => project.title); // extracts an array of project titles. 

    projects.forEach(project =>{
        const titleButton = document.createElement('button');
        titleButton.textContent = `# ${project.title}`;
        titleButton.setAttribute('data-id', `${project.id}`);
        titleButton.setAttribute('id', 'titleButton');
        titleButton.classList.add(`project-${project.id}`)
        projectContainer.appendChild(titleButton);
    });

}

export default renderNavProjects;