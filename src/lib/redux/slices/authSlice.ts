import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorise: (state) => {
            state.isAuth = true;
        },
        unauthorise: (state) => {
            state.isAuth = false;
        },
    },
});

export const { authorise, unauthorise } = authSlice.actions;

export default authSlice.reducer;