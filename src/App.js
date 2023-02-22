import './App.css';
import { Button, ToastContainer } from 'react-toastify';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import NewAccVerify from './verify/NewAccVerify';
import Dashboard from './dashboard/Dashboard';
import ResetPassword from './pages/reset-password/ResetPassword';



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
          <Route path="/resetPassword" element={< ResetPassword />} />

        </Routes>
      </Browser>
      <ToastContainer />


    </div>
  );
}

export default App;
