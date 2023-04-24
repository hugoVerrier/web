// selectionner bouton 
const bouton = document.querySelector('#play')
const ciseau = document.querySelector('#ciseau')


console.log('bouton')
// selectionner l'element
const element = document.querySelector('.element') 

var nbr=0;
console.log('element')

// ecouter le clique
bouton.addEventListener('click', ()=>{
    
    const nbr = randomNumber(0,2)
    
})
// creer une fonction printshifumi qui genere un emojie aléatoire

const randomNumber = (min, max)  => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



console.log(nbr)


// afficher l'omojie dans le body
// ecouter le clique du bouton et lancer la fonction