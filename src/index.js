import './style.css';
import {initialize, clearContent, buttons} from './init.js';
import displayHome from './home.js';
import displayMenu from './menu.js';

initialize();
displayHome();

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        clearContent();
        switch(button.className){
            case 'home-button':
                displayHome();
                break;
            case 'menu-button':
                displayMenu();
                break;
        }
    })

})



// displayMenu();




