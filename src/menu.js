import tomaHawk from './images/tomahawk.jpg';
import fillet from './images/fillet.jpg';

const menuBoard = document.createElement('div');
const content = document.querySelector('.content');

function displayMenu(){    
    menuBoard.classList.add('menu-board');
    const title = document.createElement('div');
    title.innerHTML = "Menu";
    title.classList.add('home-title');
    menuBoard.appendChild(title);

    addMenuItem(tomaHawk);
    addMenuItem(fillet);

    content.appendChild(menuBoard);

    return menuBoard;
}

function addMenuItem(tomaHawk){
    const firstItem = document.createElement('div');
    firstItem.classList.add('menu-item');
    const firstItemImage = new Image();
    firstItemImage.src = tomaHawk;
    firstItemImage.classList.add('image');
    firstItem.appendChild(firstItemImage);
    const firstItemInfo = document.createElement('div');
    firstItemInfo.innerHTML = 'Juicy Tomahawk Steak';
    firstItemInfo.classList.add('item-info');
    firstItem.appendChild(firstItemInfo);
    menuBoard.append(firstItem);
}



export default displayMenu;