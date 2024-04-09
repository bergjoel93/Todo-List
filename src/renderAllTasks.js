import { formatDueDate } from './dateUtils.js';
import taskList from './taskList.js';
/**
 * Purpose of this module: To create the stuff that goes in the main content and to append it. Simply call renderToday() and it should reach into dataStore to pull out the objects to render them under Today. 
 */
function renderAllTasks() {
    const mainContent = document.querySelector('main');
    const tasks = document.createElement('div');
    const taskArr = taskList.getAllTasks();

    tasks.setAttribute('id','tasks');
    // console.log(taskArr.length);
    // console.log(taskArr);
    for(let i = 0; i < taskArr.length; i++){
        const task = taskArr[i];
        const title = taskArr[i].title;
        const description = taskArr[i].description;
        const unformattedDueDate = new Date(task.dueDate);
        const dueDate = formatDueDate(unformattedDueDate); 
        const priority = taskArr[i].priority;
        const complete = taskArr[i].complete;
         // Check if the task's due date matches today's date
        const taskElement = document.createElement('div'); // creates <div class="task">
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <div class="main-line"></div>
            <div class="task-1">
                <input type="checkbox" class="completed" id="completed">
                <label for="completed">${title}</label>
            </div>
            <div class="task-2">${description}</div>
            <div class="date"><span class="material-symbols-outlined">
            calendar_month
            </span>${dueDate}</div>
            <div class="main-line"></div>
        `;
        // console.log(taskElement);
        tasks.appendChild(taskElement); 
         
        
    };

    // create entire html content
    const taskContent = document.createElement('div');
    taskContent.classList.add('tasks-today');
    taskContent.innerHTML = `<h1>Today</h1>`;
    taskContent.appendChild(tasks);
    mainContent.innerHTML = '';// clear main content
    mainContent.appendChild(taskContent);

}

export default renderAllTasks;


