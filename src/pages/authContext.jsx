import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {   
        setIsLoggedIn(true);
    };
    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <authContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}
