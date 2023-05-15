import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import catReducer from "./pages/category/categorySlice";
import systemReducer from "./system/systemSlice";
import pmReducer from "./pages/payment-method/pmSlice";
import productReducer from "./pages/products/productSlice";
import orderReducer from "./pages/order/orderSlice"

const store = configureStore({
  reducer: {
    user: authReducer,
    category: catReducer,
    system: systemReducer,
    pm: pmReducer,
    product: productReducer,
    order: orderReducer
  },
});

export default store;
