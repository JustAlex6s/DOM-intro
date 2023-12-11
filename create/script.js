// Function to generate a random hexadecimal color
function getRandomColor() {
return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Learners and their corresponding random background colors
const learners = [
{ name: 'Julien', color: getRandomColor() },
{ name: 'Jeremy', color: getRandomColor() },
{ name: 'Alice', color: getRandomColor() }
];

// Reference to the article element
const article = document.querySelector('article');

// Loop through the learners array
for (let i = 0; i < learners.length; i++) {
// Create a section element
const section = document.createElement('section');

// Set background color
section.style.backgroundColor = learners[i].color;

// Create a paragraph for the learner's name
const paragraph = document.createElement('p');
paragraph.textContent = learners[i].name;

// Append paragraph to section
section.appendChild(paragraph);

// Append section to the article
article.appendChild(section);
}