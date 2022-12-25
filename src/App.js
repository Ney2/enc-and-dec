import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import OTP from './components/OTP';
import AES from './components/AES';
import TDES from './components/TDES';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/aes" element={<AES />} />
      <Route path="/tdes" element={<TDES/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
