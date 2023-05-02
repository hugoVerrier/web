import { toDoListe } from "./data.js"

const defaultTodo = [
    {done: true, name: "Coucou"},
    {done: true, name: "Coucou"},
]


const test =1;
// #1 selectionner le bouton avec l'id #add, le container #container-list, le input #new

const ajouter = document.querySelector('#ajouter')
const list = document.querySelector('#liste-to-do')
const text = document.querySelector('#new')
const valeur = text.value;

console.log(ajouter,'test')
console.log(list,'test')
console.log(text,'test')



// #2 Afficher les todos dans le container avec une fonction displayTodos

const displayTodos = (listTodo) => {
    toDoListe.forEach((listetempo) => {
        list.innerHTML += `
            <div class="p-5 ">
            <h1> ${listetempo.name} </h1>
            </div>
        `
    })
}


displayTodos(); 

// #3 Ajouter un event listener sur le bouton pour ajouter un todo

ajouter.addEventListener('click', () =>{
    test +=1
}
)



// BONUS

// #5 Faire un filtre 

// #6 Suprimer un éléments

// #4 Cocher les checkbox pour marquer un todo comme fait



































