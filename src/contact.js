const content = document.querySelector('.content');
function displayContact(){
    const contactBoard = document.createElement('div');
    contactBoard.classList.add('contact-board');

    const title = document.createElement('div');
    title.innerHTML = "Contact us";
    title.classList.add('contact-title');
    contactBoard.appendChild(title);

    const phoneNumbersTitle = document.createElement('div');
    phoneNumbersTitle.innerHTML = "Phone Numbers: ";
    phoneNumbersTitle.classList.add('phone-title');
    contactBoard.appendChild(phoneNumbersTitle);

    const phones = document.createElement('div');
    phones.innerHTML = "Joseph:  000-0000-0000 <br> Sam: 000-0000-0000<br>" + 
                       "Luffy: 000-0000-0000";
    
    phones.classList.add('phones');
    contactBoard.appendChild(phones);
    
    content.append(contactBoard);
}

export default displayContact;


