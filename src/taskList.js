
// TaskList class responsible for managing an array of tasks
class TaskList {
    constructor() {
        this.tasks = [];
    }

    // Method to add a task to the task list
    addTask(task) {
        this.tasks.push(task);
    }

    // Method to remove a task from the task list
    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    // Method to get the length of the tasks array
    get length() {
        return this.tasks.length;
    }

    //Method to retreive all tasks as an array
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

export default TaskList;