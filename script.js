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

var editable = (document.getElementsByClassName('menuItem'));
var lastEditable = (editable[editable.length-1]);
lastEditable.firstChild.textContent = 'Chocolate';

var secondEditable = (editable[1]);
secondEditable.remove();

newEl = document.createElement('div');
newEl.className = ('menuItem');
newText = document.createTextNode('Test');
newEl.appendChild(newText);
let position = document.getElementById('wrapper')
position.appendChild(newEl);
newEl.style.display = 'none';
