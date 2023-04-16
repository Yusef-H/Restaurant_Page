const content = document.querySelector('.content');
function displayHome(){
    const board = document.createElement('div');
    board.classList.add('home-board');

    const title = document.createElement('div');
    title.innerHTML = "The best Steak House in the country! <br>Juicy and Delicious steaks cooked on coal";
    title.classList.add('home-title');
    board.appendChild(title);

    const hoursTitle = document.createElement('div');
    hoursTitle.innerHTML = "Hours: ";
    hoursTitle.classList.add('hours-title');
    board.appendChild(hoursTitle);

    const hours = document.createElement('div');
    hours.innerHTML = "Sunday: Closed <br> Monday: 11 A.M - 9 P.M <br>"+
                      "Tuesday: 11 A.M - 6 P.M<br>Wednesday: 10 A.M - 9 P.M<br>"+
                      "Thursday: 11 A.M - 6 P.M<br>Friday: 11 A.M - 11 P.M<br>"+
                      "Saturday: 1 P.M - 3 A.M";
    
    hours.classList.add('hours');
    board.appendChild(hours);

    const locationTitle = document.createElement('div');
    locationTitle.innerHTML = "Location: ";
    locationTitle.classList.add('location-title');
    board.appendChild(locationTitle);

    const location = document.createElement('div');
    location.innerHTML = "Dalyet El Carmel - Main Street";
    location.classList.add('location');
    board.appendChild(location);
    
    content.appendChild(board);
}
export default displayHome;