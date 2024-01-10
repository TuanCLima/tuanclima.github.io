
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc
} from 'firebase/firestore/lite';
import { firebaseConfig } from "./config.js";

console.log('### firebaseConfig', firebaseConfig);

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach(async (_doc) => {
  console.log(`${_doc.id} => ${_doc.data().middle}`);

  await updateDoc(doc(db, "users", _doc.id), {
    middle: 'mutation worked 2'
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

