import backgroundIcon from './images/background.jpg';
const content = document.querySelector('.content');

const header = document.createElement('div');
function initialize(){
    const title = createTitle();
    const optionsButtons = createOptionsButtons();

    
    content.append(title);
    content.append(optionsButtons);
    
}

function createTitle(){
    
    header.classList.add('init-header');
    const title = document.createElement('div');
    title.innerHTML = "Joseph Steak House";
    header.appendChild(title);
    return header;
}

function createOptionsButtons(){
    const optionsButtons = document.createElement('div');
    optionsButtons.classList.add('option-buttons');
    header.appendChild(optionsButtons);

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-button');

    homeButton.innerHTML = "Home";
    menuButton.innerHTML = "Menu";
    contactButton.innerHTML = "Contact";

    optionsButtons.appendChild(homeButton);
    optionsButtons.appendChild(menuButton);
    optionsButtons.appendChild(contactButton);
    return optionsButtons;
}

export default initialize;