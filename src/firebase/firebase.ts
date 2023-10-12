// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmhwHmHbqnMn1N29eeo7HqNAw8axyi2As",
  authDomain: "housemaster-2023.firebaseapp.com",
  projectId: "housemaster-2023",
  storageBucket: "housemaster-2023.appspot.com",
  messagingSenderId: "372795560221",
  appId: "1:372795560221:web:6d5fb1d4f936cd3bd751f4"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);