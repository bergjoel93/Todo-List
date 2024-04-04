//import generateJoke from "./generateJoke.js"
import './styles/style.css'
//import laughing from './assets/laughing.svg'
import Task from './task.js';
import TaskList from './taskList.js';
import renderToday from './renderToday.js';

const taskList  = new TaskList(); // create an instance of TaskList
const taskArr = taskList.getAllTasks();

let testTask1 = new Task("Water Plants", "Here's a description of the task. You must water the plants daily. Use the watering can in the closet. Use distilled water for the prayer plant.", '2024-04-04T08:00', 'HIGH', false);
taskList.addTask(testTask1);

let testTask2 = new Task("Make Bed", "You must make your bed every morning",'2024-04-04T08:00','REGULAR', false );
taskList.addTask(testTask2);

const mainContent = document.querySelector('#main-content');
mainContent.innerHTML = '';

mainContent.appendChild(renderToday(taskArr));
//console.log(taskList);
console.log('Today stuff rendered success');



