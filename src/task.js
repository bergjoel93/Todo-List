class Task {
    constructor(title, description, dueDate, priority, complete ){
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.complete = complete;
    }
    //Method to get formatted due date
    getFormattedDueDate() {
        const options = {
            weekday: 'long', // displays full name of the day (e.g. Monday)
            month: 'long', // displays full name of the month (e.g. January)
            day: 'numeric' // displays day of the month (e.g. 1)
        };
        return this.dueDate.toLocaleDateString(undefined, options);
    }

    // Method to check if task is overdue
    isOverdue() {
        const currentDate = new Date();
        return this.dueDate < currentDate;
    }
}

export default Task;