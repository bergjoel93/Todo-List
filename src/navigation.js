import { openOverlay } from './UI/renderOverlay.js';
import renderTasks from './UI/renderTasks.js';
//import renderToday from './renderToday.js';
//import renderAllTasks from './renderAllTasks.js';
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
            renderTasks('today');
            removeActive();
            document.querySelector(".todayBtn").classList.add("active");
            break;
        // Add more cases for other navigation items as needed
        case 'addTaskBtn':
            openOverlay();
            break;
        case 'allTasksBtn':
            renderTasks();
            removeActive();
            document.querySelector(".allTasksBtn").classList.add("active");
            break;
        default:
            break;
    }
}

export { setupNavEventListeners };
