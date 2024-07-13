import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);

    // load products
    useEffect(()=>{
        fetch('/products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    

    // load customers
    useEffect(()=>{
        fetch('/customers.json')
        .then(res=> res.json())
        .then(data => setCustomers(data))
    }, [])
    
    
    // load orders
    useEffect(()=>{
        fetch('/orders.json')
        .then(res=> res.json())
        .then(data => setOrders(data))
    }, [])

    const [user, setUser] = useState('');

    // signup
    const createUser = (email, password) =>
    {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logOut
    const logOut = () =>{
        return signOut(auth);
    }

    // to observe the use is login or not
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
        }) 
        return ()=>{
            unsubscribe();
        } 
    }, [])

    const authInfo = {
        user, createUser, signIn, logOut, products, setProducts, orders, setOrders, customers, setCustomers
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;