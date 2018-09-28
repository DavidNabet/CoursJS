/*
    Différence entre tableau et objet JS

    let tab = [22, 21, 93];
    let obj = { 1: 22, 2: 21, 3: 93 };

    console.log(tab);
    console.log(obj);

*/

/********* Carrousel **********/

//stocke nos images dans un tableau
let imgCarrousel = [
    "https://www.filepicker.io/api/file/eWNdrudOSSFzrLwrI9wU",
    "https://blog.rh-flow.de/files/2015/03/oxid_responsive-960x360.jpg",
    "http://nayvii.com/wp-content/uploads/2018/07/form-design-inspiration-muzli-studio-1kpbkjanw-rgebwjbw-ui-best-practices-examples-element-in-html-ux-bootstrap-css-960x360.jpeg"
];

//Devient l'indice du tableau à partir de la boucle
let occurenceCarrousel = 0;

setInterval(function() {
    let img = document.querySelector("#slider img");
    //la source de l'image appelle le tableau avec la valeur de la variable occurenceCarrousel qui correspond à l'indice du tableau
    img.src = imgCarrousel[occurenceCarrousel];
    //parcoure le tableau
    occurenceCarrousel++;
    //On définit une boucle et on lui indique que lorsque la longueur du tableau arrive à la fin,
    if (occurenceCarrousel == imgCarrousel.length) {
        //on retourne à 0
        occurenceCarrousel = 0;
    }
}, 5000)

/********* Link **********/

/**
 * randomText - Rend une chaine de caractère de manière aléatoire
 * @param text: string - Chaine de caractère à mélanger
 */
function randomText(text = "Mikebourre") {
    let tableau = text.split(""); //Convetir une chaine de caractère en un tableau de caractère
    tableau = arrayToStringRandom(tableau).join(""); // Appel à la function
    //tableau est le paramètre de la valeur tab
    // tableau = tableau.join();
    return tableau; //Affichage du tableau aléatoire
}


/**
 *
 * arrayToStringRandom = Renvoit un nouveau tableau avec les éléments de l'ancien mais de manière aléatoire
 * @param tab=[]
 * @returns newArray = Un nouveau tableau
 */
function arrayToStringRandom(tab = []) {

    //Tableau des entiers déjà récupérer - Eviter les doublons de caractère
    let tabRandom = [];

    let random, newArray = []; //Création de deux variables - random est la variable aléatoire qui stockera le nombre aléatoire 
    //- newarray sera le nouveau tableau créé à partir des nombres éléments

    // Permet de générer les caractères, selon la taille du tableau (tab - c'est le tableau envoyé à l'appel de la fonction)
    for (let i = 0; i < tab.length; i++) {
        do {
            random = getRandomInt(0, tab.length); //Retour un entier aléatoire compris entre 0 et la taille du tableau (tab)
        }
        //Vérifie si l'entier à déjà été recuperer, si oui, relance l'appel de la fonction getRandomInt()
        while (tabRandom.includes(random));

        tabRandom.push(random); //Ajouter l'entier aléatoire dans le tableau (tabRandom)
        newArray.push(tab[random]); //Ajouter le caractère aléatoire dans le tableau (newArray)

        console.log(random);
    }
    return newArray; //Retourne le nouveau tableau aléatoire

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //sort de la fonction avec la donnée qu'il va envoyé
    return Math.floor(Math.random() * (max - min)) + min;
}


let baliseA = document.querySelectorAll("#header > nav a");
for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i].innerHTML);
}

console.log(baliseA);
//Appel à la fonction

/***** Chargement du Tableau d'images différentes ******/


let imageBas = [
    "https://s17404.pcdn.co/studio/wp-content/uploads/2018/08/changelog-BlogImageTemplate_1400x400-july-290x180.png",
    "https://s17404.pcdn.co/studio/wp-content/uploads/2018/05/header_1200x600-b-8d5f80-290x180.png",
    "http://static.wixstatic.com/media/ce7ec0_6502fba5645049b6b867df63d0e7e8c4.png"
];


let auClick = document.querySelectorAll("#services .one_third img");


for (let i = 0; i < auClick.length; i++) {
    auClick[i].addEventListener("click", function() {
        auClick[i].src = imageBas[i];

    });
}
console.log(auClick);