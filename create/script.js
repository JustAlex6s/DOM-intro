
//Modifiez le script.js pour créer une nouvelle <section> avec une couleur de fond aléatoire pour chaque apprenant de votre groupe. Cette section doit contenir un paragraphe avec le nom de l'apprenant. Ces sections doivent être ajoutées dans la section <article>.

function creationDiv(nom) {
    let articles = document.querySelectorAll('article');

    for (let article of articles) {
        let newSection = document.createElement('section');
        let newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        let newParagraph = document.createElement('p');
        newParagraph.innerHTML = nom;
        newSection.appendChild(newParagraph);
        newSection.style.backgroundColor = newColor;

        // Ajouter la classe pour identifier le texte à ajuster
        newParagraph.classList.add('adjust-text-color');

        article.appendChild(newSection);

        // Appeler la fonction pour ajuster la couleur du texte
        ajusterCouleurTexte();
    }
}
// Changer le couleur de mon texte en fonction de la couleur background

function ajusterCouleurTexte() {
    let textElements = document.querySelectorAll('.adjust-text-color');

    for (let textElement of textElements) {
        // Obtenir la couleur de fond calculée
        let backgroundColor = getComputedStyle(textElement.parentElement).backgroundColor;
        let rgb = backgroundColor.match(/\d+/g);

        if (rgb) {
            let brightness = calculateBrightness(rgb);

            // Définir la couleur du texte en fonction du contraste
            textElement.style.color = brightness > 128 ? 'black' : 'white';
        } else {
            console.error('Impossible de lire la couleur de fond.');
        }
    }
}

function calculateBrightness(rgb) {
    // Assurez-vous que les valeurs RVB sont des nombres
    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    return (r * 299 + g * 587 + b * 114) / 1000;
}

let tab = ["alice", "julien", "alexis", "cassidy", "winona", "hanen"];
shuffleArray(tab);
for (let i = 0; i < tab.length; i++) {
    creationDiv(tab[i]);
}

//Trouvez un moyen pour que chaque fois que vous chargez la page, l'ordre des éléments change !
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
