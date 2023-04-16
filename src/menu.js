import tomaHawk from './images/tomahawk.jpg';
import fillet from './images/fillet.jpg';

const content = document.querySelector('.content');

function displayMenu(){    
    const menuBoard = document.createElement('div');
    menuBoard.classList.add('menu-board');
    const title = document.createElement('div');
    title.innerHTML = "Menu";
    title.classList.add('home-title');
    menuBoard.appendChild(title);

    addMenuItem(tomaHawk, 'Tomahawk Steak', menuBoard);
    addMenuItem(fillet, 'Fillet Steak', menuBoard);

    content.appendChild(menuBoard);

    return menuBoard;
}

function addMenuItem(menuItem, itemTitle, menuBoard){
    const firstItem = document.createElement('div');
    firstItem.classList.add('menu-item');
    const firstItemImage = new Image();
    firstItemImage.src = menuItem;
    firstItemImage.classList.add('image');
    firstItem.appendChild(firstItemImage);
    const firstItemInfo = document.createElement('div');
    firstItemInfo.innerHTML = itemTitle;
    firstItemInfo.classList.add('item-info');
    firstItem.appendChild(firstItemInfo);
    menuBoard.append(firstItem);
}



export default displayMenu;