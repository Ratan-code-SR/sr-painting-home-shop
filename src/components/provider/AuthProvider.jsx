import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../../firebase/firebase.config"

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    // emailPasswordLogin
    const emailPasswordLogin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = { emailPasswordLogin }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;