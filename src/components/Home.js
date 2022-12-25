import React from 'react'
import { useNavigate } from 'react-router-dom';
import './app.css';

const Home = () => {
    const navigate = useNavigate();

    const otp = () => {
        navigate('/otp');
    }
    
    const aes = () => {
        navigate('/aes')
    }

    const tdes = () => {
        navigate('/tdes')
    }
    
  return (
    <div className='intro'>
      <h1 className='info'>Encryption and Decryption Algorithm</h1>
      <p className='question'>Choose one of the following algorithm options to proceed</p>
      <div className='choice'>
      <button className='otp' onClick={otp}>OTP</button>
      <button className='aes' onClick={aes}>AES</button>
      <button className='tdes' onClick={tdes}>TDES</button>
      </div>
    </div>
  )
};

export default Home;
