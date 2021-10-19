import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cofig";

const firebaseAuthInitializeApp = () => {
    initializeApp(firebaseConfig);
}
export default firebaseAuthInitializeApp