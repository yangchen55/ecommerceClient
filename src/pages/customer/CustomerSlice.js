import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    customerLists: [],
    isLoading: false,

};

const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        setCustomerList: (state, { payload = [] }) => {
            state.customerLists = payload

        }
    }

})
const { reducer, actions } = customerSlice;
export const { setCustomerList } = actions
export default reducer