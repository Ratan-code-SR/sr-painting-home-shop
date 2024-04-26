import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../../firebase/firebase.config"

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    // emailPasswordLogin
    const emailPasswordLogin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
// google login
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    const userInfo = { emailPasswordLogin,googleLogin }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;