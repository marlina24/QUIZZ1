const form = document.querySelector('.form-quizz');
let tableauResults=[];

form.ddEventListener('submit',(e) =>{

    e.preventDefault();
})

/* on cible l'element HTML, ici la classe du formulaire avec la fonction querySelector

/*Ici on recupere les donnes dans un tableau 

/*Ici l'evenement "soumettre"

/*Ici on ajoute un ecouteur d'evenement

/*Pas de rechargement de la page ou de redirection apres soum ission du formulaire 

/*Mise en place d'une boucle qui va parcourir les 5 questions */

for(i = 1; i < 6; i++){
    tableauResults.push(document.querySelector(' input[name"=q${i}"]:checked')
    value)
}
console.log(tableauResults);
tableauResults = [];


//console.log(tableauResultats);on va declarer une fonction de verification
veriffunc(tableauResults); /* on va ajouter une fonction de verification a la place de console.log*/
tableauResults = []; /*Remise a o du tableau de resultats pour ne pas cumuler 
avec le resultat precedent */

/*Déclaration des variables qui vont nous permettre de 
mettre des messages et des emojis en foction des resultats*/

const reponses = ['c', 'a', 'b','a','c'];
const emojis =['✅','✨','👀','👎']  /* green mark , sparkles, eyes,thubs
Down*/
const titreresultas =document.querySelector('.resultats h2');
const texteResultat= document.querySelector('note' );
const aideResultat= document.querySelector('.aide');
const touteLesQuestions= document.querySelectorAll('.question-block');
let verifTableau = [];

Declaration de la fontion de verification 
funtion verifFunc(tabResultats){
    for(let a=0; a<5; a++){
        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
    
        }
    }
}console.log(verifTableau);
verifTableau


/* on va filtrer le nombre de False et de True afin de pouvoir afficher un message*/


//console.log(veriftableau);
afficheResultutat



Creation de la fonction qui vas filtrer les tabResultats

fuction afficher(tabCheck) {
    const nbDeFautes = tabCheck.filtrer(el => el !==  true).length;

    console.log(nbDeFautes);
}
/* La methode .filter va filtrer un tableau et en retourner un nouveau avec les elements qui ont ete filtrés*/
/* .length : longeur de tableau pour savoir combien il y a de reponses fausses */

/* el (l'élelement):
on va filtrer chaque élément qui est différent de true */

/*Mise en place de differents cas en fonction 
du nombre de bonnes reposes obtenus*/ 

/*$= pour pointer un tableau */

switch (nbDeFautes) {
    case 0: 
    titreResultat.innerText = `${emojis[0]}Bravo, c'est un sans faute ! ${emojis[0]}`;
    aideResultat.innerText = '';
    noteResultat.innerText = '5/5';
    break;
    case 1:
    titreResultat.innerText = `${emojis[1]}Tu y es presque !`;
    aideResultat.innerText = 'Retente une autre réponse dans la case rouge, puis re-valide !';
    noteResultat.innerText = '4/5';
    break;
    case 2: 
    titreResultat.innerText = `${emojis[1]}Encore un effort ....${emojis[2]} `;
    aideResultat.innerText = 'Retente une autre réponse dans la case rouge, puis re-valide !';
    noteResultat.innerText = '3/5';
    break;
    case 3: 
    titreResultat.innerText = `${emojis[2]}Il reste quelques erreurs.${emojis[4]} `;
    aideResultat.innerText = 'Retente une autre réponse dans la case rouge, puis re-valide !';
    noteResultat.innerText = '2/5';
    break;
    case 4:
    titreResultat.innerText = `${emojis[4]}Ne lâche rien !${emojis[4]} `;
    aideResultat.innerText = 'Retente une autre réponse dans la case rouge, puis re-valide !';
    noteResultat.innerText = '1/5';
    break;
    case 5:
    titreResultat.innerText = `${emojis[3]}Ne lâche rien !${emojis[3]} `;
    aideResultat.innerText = 'Retente une autre réponse dans la case rouge, puis re-valide !';
    noteResultat.innerText = '0/5';
    break;
    default:
        titreResultat.innerText = 'Woops, cas inattendu.';
        break;
}
function couleursFonction(tabValBool){//le tableau des valeurs booléennes true et false
    for(let j = 0; j< tabValBool.length;j++){
        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';//si la réponse est true alors le bloc question sera de couleur verte
    }else{
        toutesLesQuestions[j].style.background = '#ffb8b8';//si la réponse est false alors le bloc question sera de couleur rouge
        toutesLesQuestions[j].classList.add('echec');

        setTimeout(()=>{//fonction qui permet d'arrêter l'animation.
            toutesLesQuestions[j].classList.remove('echec');//propriété .remove qui supprime la classe 'echec' du DOM (l'animation)au cas où l'utilisateur se retromperait.
        },500)//(500 millisecondes)
    }
}
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click',() =>{
        item.style.background='rgb(169, 131, 205)';
    })
})