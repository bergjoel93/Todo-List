import './styles/style.css'
import renderTasks from './UI/renderTasks.js';
import { setupNavEventListeners } from './navigation.js';
import renderNavProjects from './project/renderNavProjects.js';
import handleNavProject from './project/handleNavProject.js';

//Nav listeners
setupNavEventListeners();
renderNavProjects();
handleNavProject();

// Upon page load
renderTasks();




