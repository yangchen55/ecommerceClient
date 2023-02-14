import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    isLoading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        requestPending: (state) => {
            state.isLoading = true
            state.loggedIn = false
        },

        requestSuccess: (state, { payload }) => {
            state.isLoading = false
            state.user = payload
            state.loggedIn = true
        },
        requestFailed: (state, { payload }) => {
            state.isLoading = false
            state.loggedIn = false
            state.user = payload
        }
    }
})















const { reducer, actions } = userSlice
export const { requestPending, requestSuccess } = actions
export default reducer