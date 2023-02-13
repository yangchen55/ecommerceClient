import './App.css';
import { Button, ToastContainer } from 'react-toastify';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import NewAccVerify from './verify/NewAccVerify';


function App() {
  return (
    <div className="">


      <Browser>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify" element={<NewAccVerify />} />
        </Routes>
      </Browser>
      <ToastContainer />


    </div>
  );
}

export default App;
