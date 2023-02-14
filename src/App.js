import './App.css';
import { Button, ToastContainer } from 'react-toastify';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import NewAccVerify from './verify/NewAccVerify';
import Dashboard from './dashboard/Dashboard';



function App() {
  return (
    <div className="">


      <Browser>
        <Routes>
          {/* public router  */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/verify" element={<NewAccVerify />} />
          {/* private router */}

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={< Dashboard />} />

        </Routes>
      </Browser>
      <ToastContainer />


    </div>
  );
}

export default App;
