import React, { createContext, useState, useContext } from 'react';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [password, setPassword] = useState(null);
    const login = (password) => {
        setPassword(password);
    };
    const logout = () => {
        setPassword(null);
    };
    return (
        <AuthContext.Provider value={{ password, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
