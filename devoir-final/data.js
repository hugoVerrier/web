import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5SsCXdizdiZ7DzA7IvuNXaZ7mC6we-qo",
  authDomain: "test-989a5.firebaseapp.com",
  projectId: "test-989a5",
  storageBucket: "test-989a5.appspot.com",
  messagingSenderId: "983418155530",
  appId: "1:983418155530:web:0d4fa901a755528bb325f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// fonction pour récupèrer une collection (READ)
const getDocument = async (collectionName) => {
  const DocumentColRef = collection(db, collectionName);
  const DocumentSnapshot = await getDocs(DocumentColRef);
  const DocumentList = DocumentSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  return DocumentList
}

//fonction qui verifie si un users existe ou pas
const userExist = async (name, password) => {

  const DocumentColRef = collection(db, "users");
  const q = await query(DocumentColRef, where("name", "==", name), where("password", "==", password))
  const querySnapshot = await getDocs(q);
  console.log("querySnapshot docs", querySnapshot.docs)
  const DocumentList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  console.log('test user already exists', name, password, DocumentList);
  return DocumentList;
};


// fonction pour créer une collection (CREATE)
const createDocument = async (collectionName, newObj) => {
  console.log('createDocument', newObj)
  const DocumentColRef = collection(db, collectionName);
  const DocumentSnapshot = await addDoc(DocumentColRef, newObj);
}

// fonction pour mettre à jour une collection (UPDATE)
const updateDocument = async (collectionName, newObj) => {
  console.log('updateDocument', newObj)
  const DocumentColRef = doc(db, collectionName, newObj.id)
  const DocumentSnapshot = await updateDoc(DocumentColRef, newObj);
}
// fonction pour supprimer une collection (DELETE)
const deleteDocument = async (collectionName, id) => {
  console.log('deleteDocument', id)
  const DocumentColRef = doc(db, collectionName, id)
  console.log('DocumentColRef', DocumentColRef)
  await deleteDoc(DocumentColRef, id);
}


const nomarea = document.querySelector('#nom');
const imagearea = document.querySelector('#image');
const dureearea = document.querySelector('#duree');
const descriptionarea = document.querySelector('#description');
const lieuxarea = document.querySelector('#lieux');
const numeroarea = document.querySelector('#numero');
const pseudoarea = document.querySelector('#pseudo');
const mdparea = document.querySelector('#mdp');


const bouton = document.querySelector('#bouton')


bouton.addEventListener('click', () => {
    console.log(1)
    while(nomarea.value==""){
        alert("erreur, veuillez entrer un nom")
    }
    ajouterNVtache(nomarea.value,imagearea.value,dureearea.value,descriptionarea.value,lieuxarea.value,numeroarea.value,mdparea.value,pseudoarea.value)
})


 
const ajouterNVtache = async (nom,image,duree,description,lieux,numero,mdp,pseudo) => {
    const taches = {
        nom,
        image,
        duree,
        description,
        lieux,
        numero,
        mdp,
        pseudo

    }
    await createDocument("tache", taches);
    location.reload();
    alert("votre demande a été ajouter a la lsite des demandes")
    }






// const updateDocument = async (collectionName, newObj) => {
//     const donne = await fetch('https://datajsonhugo.glitch.me/data.json') //on récupère le json avec fetch
//     const json = await donne.json();
//     console.log('updateDocument', newObj)
//     const DocumentColRef = doc(db, collectionName, newObj.id)
//     const DocumentSnapshot = await updateDoc(DocumentColRef, newObj);
// }