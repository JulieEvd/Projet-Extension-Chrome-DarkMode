//alert("Hi");

//cette fonction permettra d'effectuer le darkmode

(function (){
    //convertir chaque couleur en son contraire de 100%,et faire pivoter la teinte de 180° et la propriété qui permet cela senomme "filter"
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

    //ici on va stocker ds la variable le fait d'aller selectionner ds la page html toutes les images et vidéo pour redevenir à son état initial
    let media = document.querySelectorAll("img, picture, vidéo"); 
    // boucle pour agir sur chacun des médias
    media.forEach ((mediaItem)=>{
        //ici on définit l'élément mediaItem et on lui donne le même style que plus haut pr revenir à son éta initial
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";

    })
})();  //ici les parenthèse vides, indique que c'est une fonction auto-invoquante = on a appelle la fonction!  (s'exécute immédiatement lorsqu'elle est suivie du jeu de parenthèses () )


