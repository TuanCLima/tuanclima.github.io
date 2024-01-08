  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig } from "./config.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  console.log('###', { processEnv: process.env });

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach(async (_doc) => {
    console.log(`${_doc.id} => ${_doc.data()}`);

    await updateDoc(doc(db, "users", _doc.id), {
      middle: 'mutation worked'
    })
  });


  /* try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  } */

