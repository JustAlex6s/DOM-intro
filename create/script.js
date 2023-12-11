function creationDiv(nom){
    let article = document.querySelectorAll('article');
    for (let elem of article){
    let newsection = document.createElement('section');
    let newcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let newparagraphe = document.createElement('p');
    newparagraphe.innerHTML = nom;
    newsection.appendChild(newparagraphe);
    newsection.style.backgroundColor = newcolor;
    elem.appendChild(newsection);
    
    }
    }
    let tab = ["alice", "julien", "alexis","cassidy", "winona","hanen"];
    for (let i = 0; i< tab.length; i++){
    creationDiv(tab[i]);
    }