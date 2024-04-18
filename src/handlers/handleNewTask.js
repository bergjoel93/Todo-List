import { closeOverlay } from "../UI/renderOverlay";
import renderTasks from "../UI/renderTasks";
import { taskManager } from "../app";
import Task from "../task";
/**
 * Responsibile for handling user input from new task form. 
 */

function handleNewTask(task = null, project = null) {
    const form = document.querySelector('#newTaskForm');
    const submitButton = form.querySelector('#submit');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        // Extract form data
        const title = form.querySelector('#title').value;
        const description = form.querySelector('#description').value;
        const dueDate = form.querySelector('#dueDate').value;
        const priority = form.querySelector('#priority').value;

        if(project == null){ // if there is no project associated with the task. 

        }
        if (task) {
            // Update existing task
            taskManager.editTask(task.id, { title, description, dueDate, priority, complete: task.complete });
            console.log("Task updated.");
        } else {
            // Create a new task using the Task constructor
            const newTask = new Task(null, title, description, dueDate, priority, false);
            taskManager.addTask(newTask);
            console.log("New task added.");
        }

        closeOverlay();
        renderTasks();
    });

    const cancelButton = form.querySelector('#cancel');
    cancelButton.addEventListener('click', function() {
        closeOverlay();
    });
}


export default handleNewTask;