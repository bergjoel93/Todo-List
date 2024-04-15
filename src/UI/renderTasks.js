import renderTask from "./renderTask";
import { taskManager } from "../app";
import { taskHandlers } from "../handlers/handleTask";
/**
 * Renders tasks dynamically under specific sections based on their completion status and due date.
 * @param {string} filter - The filter to apply when rendering tasks ("today" or "all").
 */
function renderTasks(filter = 'all') {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Normalize today's date to start at midnight makes it easier to compare later. 

    const allTasks = taskManager.getTasks(); // Retrieve all tasks

    const main = document.querySelector('main'); // Main section for incomplete tasks
    const tasks = document.createElement('div');
    tasks.classList.add('tasks')
    const completedTasks = document.createElement('div');
    completedTasks.classList.add('completed-tasks')

    // Clear existing tasks in the DOM to prevent duplicates
    main.innerHTML = '';

    allTasks.forEach(task => {
        const taskElement = renderTask(task); // Render each task using the renderTask function

        const taskDueDate = new Date(task.dueDate);
        taskDueDate.setHours(0,0,0,0);
        
        // Filter tasks based on the 'filter' parameter
        if (filter === 'today' && taskDueDate.getTime() !== today.getTime()) {
            return; // Skip tasks not due today if the filter is "today"
        }

        if (task.complete) {
            completedTasks.appendChild(taskElement); // Append to completed section if task is complete
        } else {
            tasks.appendChild(taskElement); // Otherwise, append to the main section
        }
    });
    const completedSection = document.createElement('div');
    completedSection.innerHTML = `
        <h1> Completed </h1>
        <div class ="main-line"></div>
    `;
    if(tasks.innerHTML !== ''){
        if(filter === 'today'){
            main.innerHTML=`
            <h1>Today</h1>
            <div class="main-line"></div>`;
        }
        else{
            main.innerHTML=`
            <h1>All Tasks</h1>
            <div class="main-line"></div>`;
        }
        
        main.appendChild(tasks);
        if(completedTasks.innerHTML !==''){
            main.appendChild(completedSection);
            main.appendChild(completedTasks);
        }
        
    }
    else{
        main.innerHTML = `
        <h1>There are currently no tasks. :)</h1>
        `;
    }

    taskHandlers(filter);

}

export default renderTasks;


