import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log('Authslice login method: ', action);
            state.status = true;
            state.userData = action.payload.userData;
            // state.userData = action.payload
        },

        logout: state => {
            console.log('Authslice logout method: ');
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;