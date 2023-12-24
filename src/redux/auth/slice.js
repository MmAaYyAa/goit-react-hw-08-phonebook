import { createSlice } from '@reduxjs/toolkit';
import {register, logIn} from '../../redux/auth/operations';

const initialState = {
    user: {name: null, email: null},
    error: null,
    token: null,

};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        
        })
        .addCase(register.pending, (state, action) => {
            state.error = null;
        })
        .addCase(register.rejected, (state,action) => {
            state.error = action.payload;
        })

        .addCase(logIn.pending, (state,action) => {
            state.error = null;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        })
        .addCase(logIn.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
})