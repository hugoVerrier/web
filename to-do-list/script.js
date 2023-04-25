import { toDoListe } from "./data"

const defaultTodo = [
    {done: true, name: "Coucou"},
    {done: true, name: "Coucou"},
]

const displayTodos = (listTodo) => {

}


// #1 selectionner le bouton avec l'id #add, le container #container-list, le input #new

const ajouter = document.querySelector('#ajouter')
const list = document.querySelector('#liste-to-do')
const text = document.querySelector('#new')


console.log(ajouter,'test')
console.log(list,'test')
console.log(text,'test')



// #2 Afficher les todos dans le container avec une fonction displayTodos

toDoListe.forEach((task,list) => {
    list.innerHTML += `
    <div>
    
        <h1>toDoListe.nom</h1>
    </div>
    `
});

// #3 Ajouter un event listener sur le bouton pour ajouter un todo


// BONUS

// #5 Faire un filtre 

// #6 Suprimer un éléments

// #4 Cocher les checkbox pour marquer un todo comme fait



































