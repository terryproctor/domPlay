//variables
let foodStatus = document.getElementsByClassName('menuItem');
let foodItems = document.getElementsByClassName('menuText');

function Green() {
    this.style.backgroundColor = 'green';
    this.removeEventListener('click', Green);
    this.addEventListener('click', changeToRed, false)
}

function changeToRed() {
    this.style.backgroundColor = 'red';
    this.removeEventListener('click', changeToRed);
    this.addEventListener('click', Green);
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

let secondItem = document.getElementsByClassName('menuText')[1]
secondItem.textContent = 'Hot dogs';
secondItem.parentNode.style.backgroundColor= 'darkorange';

newDiv = document.createElement('div');
newDiv.className = 'menuItem'; 
newDiv.style.backgroundColor = 'yellow';
newHeader = document.createElement('h3');
newHeader.className = 'menuText'
newHeaderText = document.createTextNode('Cookies');
newHeader.appendChild(newHeaderText);
newDiv.appendChild(newHeader);
position.appendChild(newDiv);

position.removeChild(editable[0]);

//make divs listen to clicks
for (let i = 0; i<foodStatus.length; i++) {
    foodStatus[i].addEventListener('click', changeToRed, false);

    }

