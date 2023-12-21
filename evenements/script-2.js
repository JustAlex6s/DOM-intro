const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000 ).toFixed(2) + 's';
};

const clickOnSquare = (e) => {
  const color = e.target.classList[1];
  const elapsedTime = getElapsedTime();

  // Créez un nouvel élément <div> pour le carré affiché
  const displayedsquare = document.createElement('div');
  displayedsquare.className = 'displayedsquare';

  // Définir la couleur du carré affiché en fonction du carré cliqué
  displayedsquare.classList.add(color);

  // Ajoutez le carré affiché à la section displayedsquare-wrapper
  const displayWrapper = document.querySelector('.displayedsquare-wrapper');
  displayWrapper.appendChild(displayedsquare);

  
};
// ECRITURE DU TEMPS
const information = (e) =>  {

let ul = document.querySelector('ul');
let li = document.createElement ('li');
let sentence = "[" + getElapsedTime() + "] Created a new "+ e.target.classList[1] + " square";
li.innerHTML = sentence;
ul.appendChild(li);

};

const actionSquares = document.querySelectorAll('.actionsquare');

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
  actionSquare.addEventListener('click', information);
}





document.body.addEventListener('keypress', function (event) {
  // Spacebar is pressed
  if (event.code === 'Space') {
    // Change the background color of the whole page
    document.body.style.backgroundColor = getRandomColor();
    // Log when the spacebar is used
    logAction('Spacebar used');
  }

  // 'l' key is pressed
  if (event.key === 'l') {
    // Clear the logs (remove generated <li>s)
    clearLogs();
   
  }

  // 's' key is pressed
  if (event.key === 's') {
    // Clear the squares (remove generated squares)
    clearSquares();
 
  }
});

document.body.addEventListener('click', function (event) {
  // If the clicked element has the class 'actionsquare'
  if (event.target.classList.contains('displayedsquare')) {
    // Show an alert with the color of the clicked square
    showAlert(event.target.classList[1]);
    console.log(event);
  }
});

// GENERE COULEUR RANDOM
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to log an action
function logAction(action) {
  console.log(action);
  
  // Create a new <li> in the log
  let logElement = document.querySelector('ul');
  let newListItem = document.createElement('li');
  newListItem.textContent = action + ' - ' + getElapsedTime();
  logElement.appendChild(newListItem);
}

// SUPPRIMER LES LOGS
function clearLogs() {
  let logElement = document.querySelector('ul');
  logElement.innerHTML = ''; // Remove all child elements
}

// SUPPRIMER LES CARRE
function clearSquares() {
  let displayWrapper = document.querySelector('.displayedsquare-wrapper');
  displayWrapper.innerHTML = ''; // Remove all child elements
}


// MONTRE ALERTE AVEC COULEUR
function showAlert(color) {
  alert('Couleur choisie : ' + color);
}

