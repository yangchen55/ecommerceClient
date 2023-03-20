import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import catReducer from "./pages/category/categorySlice";
import systemReducer from "./system/systemSlice";
import pmReducer from "./pages/payment-method/pmSlice";
import productReducer from "./pages/products/productSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    category: catReducer,
    system: systemReducer,
    pm: pmReducer,
    product: productReducer,
  },
});

export default store;
