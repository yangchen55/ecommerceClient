import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    orderList: []
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrderList: (state, { payload = [] }) => {
            state.orderList = payload

        }
    }

})
const { reducer, actions } = orderSlice;
export const { setOrderList } = actions
export default reducer