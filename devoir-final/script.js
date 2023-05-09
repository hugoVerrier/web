    



const getDataAct = async() => {
  const donne = await fetch('https://datajsonhugo.glitch.me/data.json') //on récupère le json avec fetch
  const json = await donne.json();
  console.log("taches", json) // on vérifie que cela marche correctement
  const container = document.querySelector('#container'); //on récupère l'id de l'html
  json.tache.forEach((tache) => { //on parcout le fichier avec un foreach
    container.innerHTML += `
      <div class="p-2 border-black border-2  rounded rounded-xl m-24 ">
  
              
              <div class="px-4 py-8 flex-col  ">
              <div class="flex justify-between">
                  <h2 class="flex p-4 text-3xl underline py-8 justify-self-start "> ${tache.nom} </h2>
                  <img class="h-24 rounded-xl" src="${tache.img}">
              </div>
                   <p class=" text-2xl text-justify py-8  " >${tache.description} </p>
  
              <div class="flex justify-between">
              <p class=" text-lg py-4 text-justify underline">durée estimme  : ${tache.duree} min</p>
              <p class=" text-lg py-4 underline " > lieux: ${tache.lieux}  </p>
              <p class=" text-lg py-4 underline " > numero: ${tache.numero}  </p>
              </div>
  
              </div>
  
      </div>
      `;   
  })
}


getDataAct(); //on appelle la fonction pour l'utiliser
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