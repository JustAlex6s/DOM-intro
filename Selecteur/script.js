//Ajoutez un attribut de titre à chaque élément ayant la classe important, en indiquant Ceci est un élément important. Conseil : l'ajout d'un attribut title à un élément est différent de la modification du titre d'un document.

let title = document.querySelectorAll('.important');
for (let element of title){
    element.setAttribute("title", "This is an important item");
}

//Sélectionnez toutes les balises img et parcourez-les. Si elles n'ont pas de classe important, changez leur propriété display en ennone

let img = document.querySelectorAll('img');
for (let imgElement of img){
    if(!imgElement.classList.contains("important")) {
        imgElement.style.display = "none";
    }

}

//Parcourez tous les paragraphes et affichez leur contenu dans la console. Si le paragraphe possède une classe, affichez également son nom.


let p = document.querySelectorAll('p');
for (let para of p){
    console.log(para.innerHTML);
    if(!para.classList!= ""){
        console.log(para.classList.value);
    }
}

//Donnez à chaque paragraphe une couleur de texte aléatoire (différente pour chaque paragraphe) SAUF s'il a une classe, alors laissez-le tel quel.

for (let para of p ){
    if(para.classList != ""){}
    else {
    var myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    paragraphe.style.color = myRandomColor;
    }
    }


/*
    //TEST

    ////Ajoutez un attribut de titre à chaque élément ayant la classe important, en indiquant Ceci est un élément important. Conseil : l'ajout d'un attribut title à un élément est différent de la modification du titre d'un document.

    const title = document.querySelectorAll('.important');
    for (let element of title){
        element.setAttribute("title", "This is an important item");
    }

    //Sélectionnez toutes les balises img et parcourez-les. Si elles n'ont pas de classe important, changez leur propriété display en ennone

    const img = document.querySelectorAll('img');
    for (let element of img){
        if(!element.classList.contains("important")) {
            element.style.display = "none";
        }
    }
    //Parcourez tous les paragraphes et affichez leur contenu dans la console. Si le paragraphe possède une classe, affichez également son nom.

    const para = document.querySelectorAll('p');
    for (let element of para){
        console.log(element.innerHTML);
        if(element.classList!= ""){
            console.log(element.classList.value);
        }
    }
    
 //Donnez à chaque paragraphe une couleur de texte aléatoire (différente pour chaque paragraphe) SAUF s'il a une classe, alors laissez-le tel quel.

 const parag = document.querySelectorAll('p');
 for(let elementp of parag){
    if(elementp.classList!= ""){
        console.log(elementp.innerHTML);
    }else{
        var myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        elementp.style.color = myRandomColor;
    }
 }*/