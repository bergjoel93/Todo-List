function renderAddTask() {
    // Create a dialog element
    const addTaskDialog = document.createElement('dialog');

    // Set the HTML content for the dialog box
    addTaskDialog.innerHTML = `
        <div class="dialog-container">
            <form id="newTaskForm">
                <h2>Add New Task</h2>
                <input type="text" name="title" id="title" placeholder="Title" required maxlength="20">
                <input type="text" name="description" id="description" placeholder="Description..." required maxlength="100">
                <input type="datetime-local" id="dueDate" required>
                <label for="priority">Priority Level</label>
                <select id="priority" required>
                    <option value="Low">Low</option>
                    <option value="Regular">Regular</option>
                    <option value="High">High</option>
                </select>
                <label for="complete">Complete?</label>
                <input type="checkbox" id="complete" name="complete">
                <input type="submit" name="submit" value="Add Task">
                <button type="button" id="cancel">Cancel</button>
            </form>
        </div>
    `;

    // Append the dialog to the document body
    document.body.appendChild(addTaskDialog);

    // Get reference to the form
    const newTaskForm = addTaskDialog.querySelector('#newTaskForm');

    // Add event listener for form submission
    newTaskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form input values
        const title = newTaskForm.elements.title.value;
        const description = newTaskForm.elements.description.value;
        const dueDate = newTaskForm.elements.dueDate.value;
        const priority = newTaskForm.elements.priority.value;
        const complete = newTaskForm.elements.complete.checked;

        // Create a new task object with the form input values
        const newTask = new Task(title, description, dueDate, priority, complete);

        // Add logic to add the new task to localStorage or wherever needed
        // For example, you can call a function from another module to handle task addition

        // Close the dialog box
        addTaskDialog.close();
    });

    // Add event listener for cancel button to close the dialog box
    const cancelButton = addTaskDialog.querySelector('#cancel');
    cancelButton.addEventListener('click', function() {
        addTaskDialog.close();
    });

    // Show the dialog box
    addTaskDialog.showModal();
}

export default renderAddTask;
