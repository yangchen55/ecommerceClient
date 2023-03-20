import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NewAccVerify } from "./pages/verify/NewAccVerify";
import Dashboard from "./pages/dashboard/Dashboard";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Category from "./pages/category/Category";
import PmPage from "./pages/payment-method/PmPage";
import { PrivateRouter } from "./components/private-router/PrivateRouter";
import Products from "./pages/products/Products";
import { NewProduct } from "./pages/products/NewProduct";

function App() {
  // const routers = [
  //   {
  //     path: "/",
  //     element: <LoginPage />,
  //   },
  //   {
  //     path: "register",
  //     element: <RegisterPage />,
  //   },
  // ];
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public router */}
          <Route path="/" element={<LoginPage />} />
          <Route path="verify" element={<NewAccVerify />} />
          <Route path="reset-password" element={<ResetPassword />} />
          {/* {routers.map((item) => (
            <Route {...item} />
          ))} */}

          {/* private router */}
          <Route
            path="register"
            element={
              <PrivateRouter>
                <RegisterPage />
              </PrivateRouter>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="category"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />
          <Route
            path="payment-methods"
            element={
              <PrivateRouter>
                <PmPage />
              </PrivateRouter>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRouter>
                <Products />
              </PrivateRouter>
            }
          />
          <Route
            path="products/new"
            element={
              <PrivateRouter>
                <NewProduct />
              </PrivateRouter>
            }
          />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
