import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const firebaseConfig = {
        apiKey: "AIzaSyAsvi8tBVlrvxb2eLFLxgSzEXo8qJ_XIMA",
        authDomain: "jwt-token-19f8a.firebaseapp.com",
        projectId: "jwt-token-19f8a",
        storageBucket: "jwt-token-19f8a.appspot.com",
        messagingSenderId: "1077579923435",
        appId: "1:1077579923435:web:aafbf48e9e29516a89e3ae"
    };
    initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
       
                const {displayName, email,photoURL} = result.user;
            const signedInUser = {name:displayName, email:email,image:photoURL} 
            setLoggedInUser(signedInUser);
            }).catch((error) => {
             
            });
            
    }

    const handleBooking = () =>{
        fetch('http://localhost:5000/user/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loggedInUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    // console.log(loggedInUser)
    return (
        <div>
            <button onClick={handleGoogleSingIn}>Google</button>
            <button onClick={handleBooking}>Add</button>
            <h1>{loggedInUser.name}</h1>
           
        </div>
    );
};

export default Login;