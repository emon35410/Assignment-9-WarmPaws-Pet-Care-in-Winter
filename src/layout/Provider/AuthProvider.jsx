import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/firebase.init';

export const AuthConntext = createContext();

const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            SetUser(currentUser);
        });

        return () => Unsubscribe();
    }, []);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logout =()=>{
        return signOut(auth);
    }

    const authData = {
        user,
        SetUser,
        createUser,
        logout,
    };

    return (
        <AuthConntext.Provider value={authData}>
            {children}
        </AuthConntext.Provider>
    );
};

export default AuthProvider;
