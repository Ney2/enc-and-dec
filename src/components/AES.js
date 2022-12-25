import React from "react";
import { useState } from "react";

var CryptoJS = require("crypto-js");

const AES = () => {
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
    var ciphertext = CryptoJS.AES.encrypt(state.message, state.key);
    encryptedMessage = ciphertext.toString()
    setEncryption(encryptedMessage);
  };

  const handleDecryption = event => {
    event.preventDefault();
    var bytes  = CryptoJS.AES.decrypt(encryption, state.key);
    decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
    setDecryption(decryptedMessage);
  };

  const handleCopy = event => {
    event.preventDefault();
    navigator.clipboard.writeText(encryption);
  };

  return (
<div>
      <h1 className="title">Advanced Encryption Standard (AES)</h1>
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
        <button className="copy" onClick={handleCopy}>Copy Encryption</button>
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
        <button className="copy" onClick={handleCopy}>Copy Decryption</button>
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

export default AES;