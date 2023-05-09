const nomarea = document.querySelector('#nom');
const imagearea = document.querySelector('#image');
const dureearea = document.querySelector('#duree');
const descriptionarea = document.querySelector('#description');
const lieuxarea = document.querySelector('#lieux');
const numeroarea = document.querySelector('#numero');

const nom = nomarea.value;
const image = imagearea.value;
const duree= dureearea.value;
const description = descriptionarea.value;
const lieux = lieuxarea.value;
const numero = numeroarea.value;

const bouton = document.querySelector('#bouton')



// bouton.addEventListener('click', () => {
//     updatedocument("tache", json,{
//         nom:  nom, 
//         image: image,
//         duree: duree,
//         description: description,
//         numero: numero,
//         lieux: li
//       })
// })


// const updateDocument = async (collectionName, newObj) => {
//     const donne = await fetch('https://datajsonhugo.glitch.me/data.json') //on récupère le json avec fetch
//     const json = await donne.json();
//     console.log('updateDocument', newObj)
//     const DocumentColRef = doc(db, collectionName, newObj.id)
//     const DocumentSnapshot = await updateDoc(DocumentColRef, newObj);
// }