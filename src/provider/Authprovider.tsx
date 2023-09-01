import React, { useEffect, useState, createContext } from 'react';
import app from '../firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { BiLoaderCircle } from 'react-icons/bi'

export const contextProvider = createContext({});
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setSetLoading] = useState(false)

    const userLogin = (email, password) => {
        setSetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userCreation = (email, password) => {
        setSetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setSetLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const userLogout = () => {
        setSetLoading(true)
        return signOut(auth)
    }
    const userUpdate = (name, photo) => {
        setSetLoading(true)
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setSetLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])
    const infoProvider = {
        user,
        userLogin,
        userCreation,
        googleLogin,
        userLogout,
        userUpdate,
    }
    return (
        <contextProvider.Provider value={infoProvider}>
            {loading ?
                <p><BiLoaderCircle className='w-12 h-12 animate-spin'></BiLoaderCircle></p>
                :
                children
            }
        </contextProvider.Provider>
    );
};

export default Authprovider;