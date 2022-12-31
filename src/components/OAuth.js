import jwt_decode from "jwt-decode";
import React , { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import './app.css';

const OAuth = () => {
const google = window.google;

const [ user, setUser ] = useState({});

function handleCallbackResponse(response){
    console.log(response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
}

function handleSignOut(e){
    setUser({});
    document.getElementById('signInDiv').hidden = false;
}

useEffect(() => {
    google.accounts.id.initialize({
    client_id: '854040313831-aa0jkcl87pka1k0g5p9tsndh60n85jp9.apps.googleusercontent.com',
    callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
    document.getElementById('signInDiv'),
    {
        theme: "outline", size: "large"
    }
    );

    google.accounts.id.prompt();
}, []);

return (
    <div className="App">
        <h1>Welcome to the application</h1>
        <p>Please sign in to continue</p>
        <div id="signInDiv"></div>
        {
        Object.keys(user).length !== 0 &&
        <div>
        <button onClick={ (e) => handleSignOut(e) }>Sign Out</button>
        <img src={user.picture} alt="user image"/>
        <h3>{user.name}</h3>
        <Navigate to="/home" replace={true} />
        </div>
    }
    </div>
)
    };
export default OAuth;  