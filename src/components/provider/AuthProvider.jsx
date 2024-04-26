import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config"

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // emailPassword register
    const emailPasswordRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // google login
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }


    // email password login
    const emailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          
                setUser(currentUser)
                setLoading(false)
            
        })
        return () => {
            unSubscribe()
        }
    }, [])

    console.log(user);


    const userInfo = { logOutUser, emailPasswordRegister, googleLogin, emailPasswordLogin, user, setUser }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;