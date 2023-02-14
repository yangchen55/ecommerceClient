import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./pages/login/authSlice.js"

const store = configureStore({
    reducer: {
        user: authReducer

    }
})
export default store