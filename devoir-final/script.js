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
// createDocument("burgers", {name: "cheeseburger"})

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

 
const getDataFirebase = async() => {
  
  const taches = await getDocument("tache")
  const container = document.querySelector('#container')
  
  taches.forEach((tache, index) => {
      container.innerHTML += `
      <div class="">
      <div class="p-2 border-black border-2  rounded rounded-xl mx-20 mt-20 mb-4 bg-[#FBE7C6] ">  
  
              
      <div class="px-4 py-8 flex-col  ">
      <div class="flex justify-between">
          <h2 class="flex p-4 text-3xl underline py-8 justify-self-start "> ${tache.nom} </h2>
          <img class="h-24 rounded-xl" src="${tache.img}">
      </div>
           <p class=" text-2xl text-justify py-8  " >${tache.description} </p>

      <div class="grid grid-cols-2">
      <p class=" text-lg py-4 underline flex justify-center items-center">durée estimme  : ${tache.durée}</p>
      <p class=" text-lg py-4 underline flex justify-center items-center" > lieux: ${tache.lieux}  </p>
      <p class=" text-lg py-4 underline flex justify-center items-center" > numero: ${tache.numero}  </p>
      <p class=" text-lg py-4 underline flex justify-center items-center" > date : ${tache.date} <p>
      </div>

      </div>
      </div>
      </div>
      

</div>
`  })
  console.log('tache', taches)


 
}

getDataFirebase();


const suppr = document.querySelector('#suppr');
const modif = document.querySelector('#modif');


  suppr.addEventListener('click', async () => {
    console.log(1)
    
  })

  modif.addEventListener('click', async() => {
    console.log(1)
  })
  





// const getDataAct = async() => {
//   const donne = await fetch('https://datajsonhugo.glitch.me/data.json') //on récupère le json avec fetch
//   const json = await donne.json();
//   console.log("taches", json) // on vérifie que cela marche correctement
//   const container = document.querySelector('#container'); //on récupère l'id de l'html
//   json.tache.forEach((tache) => { //on parcout le fichier avec un foreach
//     container.innerHTML += `
//       <div class="p-2 border-black border-2  rounded rounded-xl m-24 ">  
  
              
//               <div class="px-4 py-8 flex-col  ">
//               <div class="flex justify-between">
//                   <h2 class="flex p-4 text-3xl underline py-8 justify-self-start "> ${tache.nom} </h2>
//                   <img class="h-24 rounded-xl" src="${tache.img}">
//               </div>
//                    <p class=" text-2xl text-justify py-8  " >${tache.description} </p>
  
//               <div class="flex justify-between">
//               <p class=" text-lg py-4 text-justify underline">durée estimme  : ${tache.duree} min</p>
//               <p class=" text-lg py-4 underline " > lieux: ${tache.lieux}  </p>
//               <p class=" text-lg py-4 underline " > numero: ${tache.numero}  </p>
//               </div>
  
//               </div>
  
//       </div>
//       `;   
//   })
// }


// ; //on appelle la fonction pour l'utiliser
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


//<img class="h-full w-full rounded rounded-full " src="${tache.img}">


//   const userExist = async (name, password) => {
  
//     const DocumentColRef = collection(db, "users");
//     const q = await query(DocumentColRef, where("name", "==", name), where("password", "==", password))
//     const querySnapshot = await getDocs(q);
//     console.log("querySnapshot docs", querySnapshot.docs)
//     const DocumentList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
//     console.log('test user already exists', name, password, DocumentList);
//     return DocumentList;
//   };