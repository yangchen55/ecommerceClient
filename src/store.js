import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import catReducer from "./pages/category/categorySlice";
import systemReducer from "./system/systemSlice";
import paymentReducer from "./pages/paymentMethod/payMethodSlice"

const store = configureStore({
  reducer: {
    user: authReducer,
    category: catReducer,
    system: systemReducer,
    payment: paymentReducer,
  },
});

export default store;
