import {burgerList} from './data.js'


// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
console.log('burgerList', burgerList)
const container = document.querySelector('#burger-container')

// Indice :
// Utiliser la méthode forEach pour parcourir la liste des burgers  
// Pour chaque burger, créer un élément HTML (div) et l'ajouter dans #burger-container avec la méthode innerHTML

// Etape 1
// Pour chacun des burgers affiche le nom dans la console

burgerList.forEach((burger, index) => {
    console.log(index, burger.nom)
})

// Etape 2
// Dans #burger-container afficher le nom des burgers


container.innerHTML=`

    <section class="p-2 m-8 col-span-2">

    <div >
        <p class="flex justify-center text-xl  text-center "> 
        Bienvenue,<br> ici c'est le paradis des burger !!
        <br> choissisez le burger de vos rêves les plus fou
        <img class="h-8 w-auto my-14" src="image_2023-04-24_212752491-removebg-preview.png"
        </p>
        </div>
       

    </section>`

burgerList.forEach((burger,index) =>{
    container.innerHTML += `
    
    <div class="p-2 border-black border-2 bg-[#FF6D60] grid grid-cols-2 rounded rounded-xl">

            <div class="">
            <img class="h-full w-full rounded rounded-full " src="${burger.img}">

            </div>
            <div class="px-4 py-8 flex-col">
                <h2 class="p-4 text-3xl underline py-8"> ${burger.nom} </h2>

                 <p class=" text-2xl text-justify py-8" >${burger.description} </p>
                 <p class=" text-lg py-4"> ${burger.ingredients}</p>
                 <p class=" text-2xl flex float-right justify-end border-2 border-black bg-[#F3E99F] rounded-full p-2" > ${burger.prix} € </p>

            </div>

    </div>
    `      
}
)

// Etape 3 
// Ajouter la description et le prix 

//voir ligne 51 pour le prix et ligne 50 pour la description

// Etape 4 
// Afficher l'image du burger

//voir ligne 44

// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js

//voir la 4eme recette

// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

// Etape 8 (Bonus)
// Afficher la liste des ingrédients

//voir ligne 51