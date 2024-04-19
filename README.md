# Todo List

Use chatgpt to help update the task id when it's pushed to projectManager. '

Frontend environment for building JavaScript applications. 
What's left to do: 

When a user clicks on Add Project Button, a new button appears under it with a default title: New Project. The page is then loaded to render the new project page. 
Then the user can add their title and description of the project. The title of the project will sync up with the title of the generated button on the left navbar. 

Then a Add Task button is underneath which will allow user to add a task list to the project. 

Project Stuff
Steps to Create the Project Section
1. Project Data Structure: Define a Project class or constructor function that includes properties for title, description, dueDate, and tasks (an array of tasks).

2. ProjectManager Logic: Implement projectManager.js to handle creating, updating, deleting, and retrieving projects. This will be similar to your TaskManager but focused on handling collections of projects.

3. User Interface for Projects:

* createProjectForm.js: Handles creating the form HTML for adding a new project.
* renderProjectForm.js: Manages rendering the project form on the page.
* renderProject.js: Deals with creating the visual representation of a project to be inserted into the DOM, perhaps as list items in your navbar.

4. Rendering Projects in the Navbar:

* Modify your navbar to include a container for projects that has a scrollbar. This could be a simple div with a set max height and the CSS property overflow-y set to scroll.
* Whenever a new project is added or the list of projects changes, re-render the list of projects in this container.

* We've started semi fresh. 
* Create a module called createTaskForm which will be responsible for creating the new task form html. 
* Create a renderNewTaskOverlay. This will be responsible for rendering the new task form and overaly to the UI. 
* Create handleNewTaskUserInput, which will handle the user input from the form. 
* Create new module updateTaskList, which will handle updating the task list


///////
* Got checkboxes working, kind of.... handlecomplete isn't working well. Also, we can't uncheck something. So figure that out. 
* Add a completed section below Today and All Tasks that appears only if there are completed tasks. Make it a drop down. 
* Add logic so that a caution message appears if title is a duplicate within the task list. in renderAddTask.js
* Add a way to delete/edit tasks - Add small icon section to right of task that appears when you hover over it. 
* Make tasks complet-able
* Project Stuff/Creation
