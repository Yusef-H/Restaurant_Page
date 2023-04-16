import backgroundIcon from './images/background.jpg';
const content = document.querySelector('.content');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');
const buttons = [homeButton, menuButton, contactButton];

const header = document.createElement('div');
function initialize(){
    const title = createTitle();
    const optionsButtons = initOptionsButtons();

    
    content.append(title);
    content.append(optionsButtons);
    
}

function clearContent(){
    content.removeChild(content.lastChild);
}

function createTitle(){
    
    header.classList.add('init-header');
    const title = document.createElement('div');
    title.innerHTML = "Joseph Steak House";
    header.appendChild(title);
    return header;
}

function initOptionsButtons(){
    const optionsButtons = document.createElement('div');
    optionsButtons.classList.add('option-buttons');
    header.appendChild(optionsButtons);

    homeButton.classList.add('home-button');    
    menuButton.classList.add('menu-button');
    contactButton.classList.add('contact-button');

    homeButton.innerHTML = "Home";
    menuButton.innerHTML = "Menu";
    contactButton.innerHTML = "Contact";

    optionsButtons.appendChild(homeButton);
    optionsButtons.appendChild(menuButton);
    optionsButtons.appendChild(contactButton);
    return optionsButtons;
}

export {initialize, clearContent, buttons};