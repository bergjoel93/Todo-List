import taskList from "./taskList";
import Task from "./task";
const body = document.querySelector('body');
function renderAddTask() {
    // Create a dialog element
    const overlay = document.createElement('div'); //semi-transparent overlay over top of window. 
    overlay.classList.add('overlay');

    // Set the HTML content for the dialog box
    overlay.innerHTML = `
        <div class="dialog-container">
            <form id="newTaskForm">
                <h2>Add New Task</h2>
                <input type="text" name="title" id="title" placeholder="Title" required maxlength="20">
                <input type="text" name="description" id="description" placeholder="Description..." required maxlength="100">
                <input type="datetime-local" id="dueDate" required>
                <div class="priority-container">
                <label for="priority">Priority Level</label>
                <select id="priority" required>
                    <option value="Low">Low</option>
                    <option value="Regular">Regular</option>
                    <option value="High">High</option>
                </select>
                </div>
                <input type="submit" id="submit" name="submit" value="Add Task" style="cursor: pointer;">
                <button type="button" id="cancel">Cancel</button>
            </form>
        </div>
    `;

    // Append the dialog to the document body
    openOverlay();

    // Get reference to the form
    newTaskForm();

    function newTaskForm() {

        const submitBtn = document.querySelector('#submit');
        const cancelButton = document.querySelector('#cancel');
        // Add event listener for form submission
        submitBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default form submission behavior
            // Get form input values
            const title = document.querySelector("#title").value;
            const description = document.querySelector("#description").value;
            const dueDate = document.querySelector("#dueDate").value;
            const priority = document.querySelector("#priority").value;

            // Create a new task object with the form input values
            const newTask = new Task(title, description, dueDate, priority, false);
            // add task to task list
            console.log(newTask);
            taskList.addTask(newTask);
            console.log("added new task.");

            // Add logic to add the new task to localStorage or wherever needed
            // For example, you can call a function from another module to handle task addition
            // Close the dialog box
            closeOverlay();
        });
         // Add event listener for cancel button to close the dialog box
    cancelButton.addEventListener('click', function() {
        closeOverlay();
    });
    }

    function openOverlay() {
        body.appendChild(overlay);
    }
    function closeOverlay() {
        body.removeChild(overlay);
    }
}


export default renderAddTask;
