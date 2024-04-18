
/**
 * Responsible for creating the project form that will be injected into main. 
 */

function createProjectPage(project = null) {
    const projectForm = document.createElement('div');
    projectForm.classList.add('project-form-container');
    projectForm.innerHTML = `
        <div class="project-info-container">
                <input type="text" id="projectTitle" value="${project.title}">
                <textarea name="projectDescription" id="projectDescription" cols="30" rows="3" placeholder="Description...">${project.description}</textarea> 
            </div>
            <div class="project-task-list">
                <h2>Tasks</h2>
                <div class="main-line"></div>
                <div class ="task-container"></div>
                <button class="add-project-task"> <span> + </span>Add Task</button>
        </div>
    `;

    return projectForm;
}

export default createProjectPage;