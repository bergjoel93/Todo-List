// Import necessary modules
import renderToday from './renderToday.js';
import dataStore from './dataStore.js';
import renderAddTask from './renderAddTask.js';

const tasks = dataStore.getAllTasks();
console.log(tasks); // Log the tasks retrieved from localStorage

function setupNavEventListeners() {
    // Get all buttons in nav
    const nav = document.querySelector('nav');
    const navBtns = nav.querySelectorAll('button');

    // Add event listener to each button
    navBtns.forEach(button => {
        button.addEventListener('click', () => {
            const buttonClass = button.classList[0]; // buttons can only have 1 class. 
            console.log(buttonClass + " was clicked");
            // You can add your navigation logic here
            handleNavigation(buttonClass);
        });
    });
}

// Function to handle navigation actions
function handleNavigation(navItem) {
    // Clear the main content
    clearMainContent();

    // Determine which navigation item was clicked
    switch (navItem) {
        case 'todayBtn':
            renderTodayContent();
            break;
        // Add more cases for other navigation items as needed
        case 'addTaskBtn':
            renderAddTask();
            break;
        default:
            // Handle default case or unsupported navigation item
            break;
    }
}

// Function to clear the main content
function clearMainContent() {
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = ''; // Clear the content
}

// Function to render "Today" content
function renderTodayContent() {
    const mainContent = document.querySelector('main');
    const todayContent = renderToday(tasks); // Assuming renderToday returns the content
    mainContent.appendChild(todayContent);
}

// Export the functions
export { handleNavigation, setupNavEventListeners };
