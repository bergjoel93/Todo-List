import createTaskForm from "./createTaskForm";
import handleNewTaskUserInput from "../handlers/handleNewTask";
/**
 * Responsible for rendering the new task form and overlay to the UI. 
 */

const body = document.querySelector('body');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

function openOverlay(task = null) {
    const taskForm = createTaskForm(task); // Create a new form each time overlay is called. 
    overlay.innerHTML = ''; // Clear previous contents. 
    overlay.appendChild(taskForm); // append newly created form. 
    body.appendChild(overlay);
    handleNewTaskUserInput(task);
}

function closeOverlay() {
    body.removeChild(overlay);
}

export {openOverlay, closeOverlay};


