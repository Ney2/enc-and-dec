import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import jwt_decode from "jwt-decode";
import Home from './components/Home';
import OTP from './components/OTP';
import AES from './components/AES';
import TDES from './components/TDES';
import OAuth from './components/OAuth';
// import React , { useEffect, useState } from 'react';

const App = () => {

  // const google = window.google;

  // const [ user, setUser ] = useState({});

  // function handleCallbackResponse(response){
  //   console.log(response.credential);
  //   var userObject = jwt_decode(response.credential);
  //   console.log(userObject)
  //   setUser(userObject);
  //   document.getElementById('signInDiv').hidden = true;
  // }

  // function handleSignOut(e){
  //   setUser({});
  //   document.getElementById('signInDiv').hidden = false;
  // }

  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: '854040313831-aa0jkcl87pka1k0g5p9tsndh60n85jp9.apps.googleusercontent.com',
  //     callback: handleCallbackResponse
  //   });
  //   google.accounts.id.renderButton(
  //     document.getElementById('signInDiv'),
  //     {
  //       theme: "outline", size: "large"
  //     }
  //   );

  //   google.accounts.id.prompt();
  // }, []);

  return (
    // <div className="App">
    //   <div id="signInDiv"></div>
    //   {
    //     Object.keys(user).length != 0 &&
    //     <button onClick={ (e) => handleSignOut(e) }>Sign Out</button>
    //   }
    //   { user && 
    //   <div>
    //     <img src={user.picture} alt="user image"/>
    //     <h3>{user.name}</h3>
    //     </div>
    //   }
    // </div>
  //   <div className="App">
  //   <h1>Google Login Demo</h1>
  //   <a id="loginButton">Sign in with Google</a>
  // </div>
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={<OAuth />} />
      <Route path="/home"  element={<Home />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/aes" element={<AES />} />
      <Route path="/tdes" element={<TDES/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
