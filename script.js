//variables
let foodStatus = document.getElementsByClassName('menuItem');
let foodItems = document.getElementsByClassName('menuText');

//make divs listen to clicks
for (let i = 0; i<foodStatus.length; i++) {
    foodStatus[i].addEventListener('click', changeToRed, false);
    }

function changeToRed() {
    this.style.backgroundColor = 'red'
}

