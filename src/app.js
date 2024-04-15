import TaskManager from './TaskManager.js'

/**
 * This file serves as a central hub for initializing and managing core application logic. 
 */

// Initialize the TaskManager instance
const taskManager = new TaskManager();

// The app could potentially have more setup logic here.
// For example, setting up event listeners, routing (if applicable), etc.

// Export the taskManager instance for use in other parts of the application
export { taskManager };