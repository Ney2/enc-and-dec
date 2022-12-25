import React from "react";
import { useState } from "react";
import './app.css';

var CryptoJS = require("crypto-js");

const TDES = () => {
    let encryptedMessage, decryptedMessage;

  const [state, setState] = useState({
    message: "",
    key: ""
  })

  const [update, setUpdate] = useState('');
  const [encryption, setEncryption] = useState('');
  const [decryption, setDecryption] = useState('');

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

 const handleUpdate = (evt) => {
    const value = evt.target.value;
    setUpdate(value);
  }

  const handleEncryption = event => {
    event.preventDefault();
   var key = CryptoJS.enc.Utf16LE.parse(state.key);
    key = CryptoJS.MD5(key)
    key.words.push(key.words[0], key.words[1])
    var options = {mode: CryptoJS.mode.ECB,};
    var textWordArray = CryptoJS.enc.Utf16LE.parse(state.message);
    var encrypted = CryptoJS.TripleDES.encrypt(textWordArray, key, options);
    encryptedMessage = encrypted.toString()
    setEncryption(encryptedMessage);
  };

  const handleDecryption = event => {
    event.preventDefault();
    var key = CryptoJS.enc.Utf16LE.parse(state.key);
    key = CryptoJS.MD5(key)
    key.words.push(key.words[0], key.words[1])
    var options = {mode: CryptoJS.mode.ECB,};
    var decrypted = CryptoJS.TripleDES.decrypt( {
    ciphertext: CryptoJS.enc.Base64.parse(encryption)}, key, options);
    decryptedMessage = decrypted.toString(CryptoJS.enc.Utf16LE);
    setDecryption(decryptedMessage);
  };

  const handleCopyEncryption = event => {
    event.preventDefault();
    navigator.clipboard.writeText(encryption);
  };

  const handleCopyDecryption = event => {
    event.preventDefault();
    navigator.clipboard.writeText(decryption);
  };

  return (
    <div>
      <h1 className="title">Triple Data Encryption Standard (3DES)</h1>
    <div className="container">
        <div className="enc-container">
        <h3>Message to Encrypt</h3>
        <textarea
          type="text"
          name="message"
          rows={7}
          cols={40}
          value={state.message}
          onChange={handleChange}
          placeholder="Enter message"
        />
        <div className="key">
        <p>Encryption Key</p>
        <input
          type="text"
          name="key"
          rows={7}
          cols={40}
          value={state.key}
          onChange={handleChange}
          placeholder="Enter key"
        />
        </div>
        <div className="buttons">
        <button className="encrypt" onClick={handleEncryption}>Encrypt</button>
        <button className="copy" onClick={handleCopyEncryption}>Copy Encryption</button>
        </div>
        <div className="response">
        <textarea           
          rows={7}
          cols={40} 
          value={encryption} />
        </div>
        </div>

        <div className="dec-container">
        <div className="dec-msg">
        <h3>Message to Decrypt</h3>
        <textarea
          type="text"
          name="encryptedmessage"
          rows={7}
          cols={40}
          value={update.encryptedmessage}
          onChange={handleUpdate}
          placeholder="Enter encrypted message"
        />
        <div className="key">
        <p>Decryption Key</p>
        <input
          type="text"
          name="key"
          rows={7}
          cols={40}
          value={state.key}
          onChange={handleUpdate}
          placeholder="Enter key"
        />
        </div>
        </div>

        <div className="buttons">
        <button className="decrypt" onClick={handleDecryption}>Decrypt</button>
        <button className="copy" onClick={handleCopyDecryption}>Copy Decryption</button>
        </div>
    
        <div className="response">
        <textarea           
          rows={7}
          cols={40} 
          value={decryption} />
        </div>
        </div>
        </div>
        </div>
  );
}

export default TDES;