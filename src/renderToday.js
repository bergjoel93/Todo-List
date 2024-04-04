import { formatDueDate } from './dateUtils.js';

function renderToday(taskArr) {
    const tasks = document.createElement('div');
    tasks.setAttribute('id','tasks');
    // console.log(taskArr.length);
    // console.log(taskArr);
    for(let i = 0; i < taskArr.length; i++){
        const task = taskArr[i];
        const title = taskArr[i].title;
        const description = taskArr[i].description;
        const dueDate = formatDueDate(new Date(task.dueDate)); 
        const priority = taskArr[i].priority;
        const complete = taskArr[i].complete;

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
    
    return taskContent;

}

export default renderToday;


