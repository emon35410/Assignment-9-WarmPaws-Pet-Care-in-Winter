import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/firebase.init';

export const AuthConntext = createContext();

const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            SetUser(currentUser);
            setLoading(false)
        });

        return () => Unsubscribe();
    }, []);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };
    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    const logout =()=>{
        return signOut(auth);
    }
    

    const authData = {
        user,
        SetUser,
        createUser,
        logout,
        login,
        loading,
        setLoading,
        updateUser
    };

    return (
        <AuthConntext.Provider value={authData}>
            {children}
        </AuthConntext.Provider>
    );
};

export default AuthProvider;
