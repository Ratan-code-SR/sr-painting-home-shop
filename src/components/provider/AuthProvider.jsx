import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../../firebase/firebase.config"

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

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
    const userInfo = { emailPasswordRegister, googleLogin, emailPasswordLogin }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;