import firebaseAuthInitializeApp from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState();
    const [name, setName] = useState();
    firebaseAuthInitializeApp();
    const auth = getAuth();
    const handleCreateEmailPassword = (email, password, userName) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in  
                setUser(result.user);
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });
        setName(userName);
        console.log(userName);
    }
    const handleSignInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User  
                console.log('hi', result);
                if (name) {
                    updateProfile(auth.currentUser, {
                        displayName: `${name}`, photoURL: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
                    }).then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                }
                setUser(result);

                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])


    return { user, handleCreateEmailPassword, handleSignInWithEmailPassword, handleLogOut }
};

export default useFirebase;