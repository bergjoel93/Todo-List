const dataStore = (() => {
    // Check if tasks exist in localStorage and parse them
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Private function to save tasks to localStorage
    const saveTasksToLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Public methods
    return {
        // Add a task to the data store
        addTask(task) {
            // Check if the task already exists in the data store
        const existingTask = tasks.find(existingTask => 
        existingTask.title === task.title &&
        existingTask.description === task.description &&
        existingTask.dueDate === task.dueDate &&
        existingTask.priority === task.priority &&
        existingTask.complete === task.complete
        );

        // If the task doesn't already exist, add it to the data store
        if (!existingTask) {
            tasks.push(task);
            saveTasksToLocalStorage();
        }
        },
        // Get all tasks from the data store
        getAllTasks() {
            return tasks;
        },
        // Other methods for updating or accessing data can be added here
        // Remove a task from the data store
        removeTask(taskToRemove) {
            // Retrieve tasks from localStorage
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

            // Find the index of the task to remove
            const indexToRemove = tasks.findIndex(task => 
                task.title === taskToRemove.title &&
                task.description === taskToRemove.description &&
                task.dueDate === taskToRemove.dueDate &&
                task.priority === taskToRemove.priority &&
                task.complete === taskToRemove.complete
            );

            // If the task was found, remove it from the tasks array
            if (indexToRemove !== -1) {
                tasks.splice(indexToRemove, 1);
                // Save the updated tasks array back to localStorage
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }
    };
    
})();

export default dataStore;
