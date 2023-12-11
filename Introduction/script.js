console.log(document.title);
document.title ="javascript - second titre";
document.body.style.backgroundColor ="#FF69B4";
document.body.style.backgroundColor ="rgb(255,125,100)";
let secondElementEnfant = document.body.children;

console.log(secondElementEnfant);

for (let enfant of secondElementEnfant){
    console.log(enfant);
}

const allAnchors = document.querySelectorAll('a')