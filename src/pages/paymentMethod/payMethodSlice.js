import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentMethods: []
}

const paySlice = createSlice({
    name: "paymentMethods",
    initialState,
    reducers: {
        setPaymentMethod: (state, { payload = [] }) => {
            state.paymentMethods = payload
        }

    }


})

const { reducer, actions } = paySlice;
export const { setPaymentMethod } = actions;

export default reducer;