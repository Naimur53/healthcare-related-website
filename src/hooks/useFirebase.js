import firebaseAuthInitializeApp from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [name, setName] = useState();
    const [loading, setLoading] = useState(true);
    firebaseAuthInitializeApp();
    const auth = getAuth();
    const handleCreateEmailPassword = (email, password, userName) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in  

                setName(userName);
                setUser(result.user);
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });
    }
    const handleSignInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            setLoading(false);

        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);

    }
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (result) => {
            if (result) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User  
                console.log('hi', result.photoURL);
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
                setLoading(false);

                // ...
            } else {
                // User is signed out
                // ... 
                setLoading(false);

            }
        });
    }, [])


    return { user, handleCreateEmailPassword, handleSignInWithEmailPassword, handleLogOut, loading, error, setError, setUser, setLoading, handleGoogleSignIn }
};

export default useFirebase;