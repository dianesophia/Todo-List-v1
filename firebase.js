
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNQu7a4E_AdcoKrtWXLOukX-_hngu7oV0",
  authDomain: "todo-listv1-cb6f4.firebaseapp.com",
  projectId: "todo-listv1-cb6f4",
  storageBucket: "todo-listv1-cb6f4.appspot.com",
  messagingSenderId: "782475264856",
  appId: "1:782475264856:web:39ca8e12bcd8849cc51b2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
