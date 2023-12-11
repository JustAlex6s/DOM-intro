//Ajoutez un attribut de titre à chaque élément ayant la classe important, en indiquant Ceci est un élément important. Conseil : l'ajout d'un attribut title à un élément est différent de la modification du titre d'un document.

let title = document.querySelectorAll('.important');
for (let element of title){
    document.element.title ="This is an important item";
}
console.log(title);


//Sélectionnez toutes les balises img et parcourez-les. Si elles n'ont pas de classe important, changez leur propriété display en ennone

//Parcourez tous les paragraphes et affichez leur contenu dans la console. Si le paragraphe possède une classe, affichez également son nom.

//Donnez à chaque paragraphe une couleur de texte aléatoire (différente pour chaque paragraphe) SAUF s'il a une classe, alors laissez-le tel quel.