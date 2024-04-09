// Import necessary modules
import renderToday from './renderToday.js';

import renderAddTask from './renderAddTask.js';
import renderAllTasks from './renderAllTasks.js';
/**
 * Purpose of this module: To setup Nav event handlers and to handle logic of what happens when you click a particular button in the nav sidebar. 
 */

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

function removeActive(){
    let activeClasses = document.querySelectorAll('.active');
    activeClasses.forEach(deactive => {
        deactive.classList.remove('active');
    })
}

// Function to handle navigation actions
function handleNavigation(navItem) {

    // Determine which navigation item was clicked
    switch (navItem) {
        case 'todayBtn':
            renderToday();
            removeActive();
            document.querySelector(".todayBtn").classList.add("active");
            break;
        // Add more cases for other navigation items as needed
        case 'addTaskBtn':
            renderAddTask();
            break;
        case 'allTasksBtn':
            renderAllTasks();
            removeActive();
            document.querySelector(".allTasksBtn").classList.add("active");
            break;
        default:
            break;
    }
}

// Function to clear the main content
// function clearMainContent() {
//     const mainContent = document.querySelector('main');
//     mainContent.innerHTML = ''; // Clear the content
// }

// // Function to render "Today" content
// function renderTodayContent() {
//     const mainContent = document.querySelector('main');
//     const todayContent = renderToday(tasks); // Assuming renderToday returns the content
//     mainContent.appendChild(todayContent);
// }

// Export the functions
export { handleNavigation, setupNavEventListeners };
