import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn with email and password 
  const  signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};



  // google signIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  

useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
        console.log('Current user: ',currentUser);
        setLoading(false)
    })
    return () => {
        return unsubscribe();
    }
}, []);
 
const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
