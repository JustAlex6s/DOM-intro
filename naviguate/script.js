/*Select the last child of the <ol> tag and put it at the beginning of the list
*/

const ol = document.querySelector('ol')
const a = ol.children[0]
const b = ol.children[1]
const c = ol.children[2]
const d = ol.children[3]
const e = ol.children[4]
e.appendChild(a)

/*Move the <h2> of the third section in the second one and vice-versa*/

let section = document.querySelectorAll('section');
let h2 = document.querySelectorAll('h2');
let lasth2 = h2[2];
let secondh2 = h2[1];
section[1].insertBefore(lasth2, section[1].firstElementChild);
section[2].insertBefore(secondh2, section[2].firstElementChild);

//Supprimez la dernière section du DOM, nous n'en avons pas besoin de toute façon
section[2].firstElementChild.remove()
