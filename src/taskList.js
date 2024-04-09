
// TaskList class responsible for managing an array of tasks
class TaskList {
    constructor() {
        // Check if tasks exist in localStorage and parse them
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
    
    // Method to add a task to the task list and localStorage
    addTask(task) {
        // Check if a task with the same ID already exists in the task list
        const existingTask = this.tasks.find(existingTask => existingTask.title === task.title);

        // If the task doesn't already exist, add it to the task list and localStorage
        if (!existingTask) {
            this.tasks.push(task);
            this.saveTasksToLocalStorage();
        }
    }

    // Method to remove a task from the task list and localStorage
    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.saveTasksToLocalStorage();
        }
    }

    // Method to save tasks to localStorage
    saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Method to get the length of the tasks array
    get length() {
        return this.tasks.length;
    }

    // Method to retrieve all tasks as an array
    getAllTasks() {
        return this.tasks;
    }

    // Method to get a specific property of a task by index
    getTaskProperty(index, propertyName) {
        const task = this.tasks[index];
        if (task && propertyName in task) {
            return task[propertyName];
        }
        return undefined;
    }

    // Other methods for managing tasks (update, filter, etc.) can go here
}
const taskList = new TaskList();

export default taskList;
