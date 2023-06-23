import { createSlice } from '@reduxjs/toolkit';

const signUpStatusSlice = createSlice({
    name: 'signUpStatus',
    initialState: { value: " " },
    reducers: {
        status: (state, action) => {
            state.value = action.payload
        } 
    },
})


export default signUpStatusSlice;
export const { status } = signUpStatusSlice.actions;