import Project from "./project";

/**
 * projectManager class to create, manage, and store a collection of projects. This class provides methods to add, delete, edit, and retrieve projects. 
 */

class ProjectManager {
    constructor() {
        this.projects = this.loadProjects(); // load projects array from local storage. 
        this.nextId = 0;
        this.initializeNextId();
    }

    /**
    * Retrieves all projects managed by the ProjectManager.
    * 
    * @returns {Array} An array of all Project objects.
    */
    getProjects() {
        return this.projects;
    }
    /**
     * Retrieves a project by its unique ID.
     * 
     * @param {number} projectId - The unique identifier of the project to retrieve.
     * @returns {Project|null} The project with the specified ID, or null if no such project exists.
     */
    getProjectById(projectId) {
        const project = this.projects.find(project => project.id === projectId);
        return project || null;  // Return the project if found, otherwise return null
    }
    

    /**
     * Initializes the 'nextId' property by finding the highest project ID currently in the projectss array and setting nextId to one more than the highest ID. 
     */
    initializeNextId() {
        // Iterate over each project in the current project list. 
        this.projects.forEach(project => {
            if (project.id >= this.nextId) {
                this.nextId = project.id + 1;
            }
        });
    }
    /**
     * Adds a new Project to the project collection and updates local storage.
     * 
     * @param {Project} project - The Project object to be added.
     */
    addProject(project) {
        project.id = this.nextId++;
        this.projects.push(project);
        this.saveProjects();
    }


    /**
     * Removes a Project from the collection by its index.
     * 
     * @param {number} projectIndex - The index of the Project to be removed.
     */

    deleteProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== projectId);
        this.saveProjects();
    }

    editProject(projectId, updatedDetails) {
        let index = this.projects.findIndex(project => project.id === projectId);
        if (index !== -1) {
            // Ensure dueDate is converted to Date object if it's coming as a string
            if (updatedDetails.dueDate && !(updatedDetails.dueDate instanceof Date)) {
                updatedDetails.dueDate = new Date(updatedDetails.dueDate);
            }
            this.projects[index] = {...this.projects[index], ...updatedDetails};
            this.saveProjects();
        }
        else {
            console.error("Project not found with ID: "+projectId);
        }
    }

    /**
     * Serializes and saves the projects array to local storage.
     */
    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    /**
     * Loads and deserializes the projects array from local storage.
     * Ensures that each project is an instance of Project.
     * 
     * @returns {Array} An array of Project objects.
     */
    loadProjects() {
        const projectData = localStorage.getItem('projects');
        if(projectData) {
            const projects = JSON.parse(projectData);
            return projects.map(projectData => 
                new Project(
                    projectData.id, 
                    projectData.title, 
                    projectData.description, 
                    new Date(projectData.dueDate), 
                    projectData.complete, 
                    projectData.projectss));
        }
        return [];
    }

}

export default ProjectManager;