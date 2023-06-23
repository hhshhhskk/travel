import { createSlice } from '@reduxjs/toolkit';

const signUpMassageSlice = createSlice({
    name: 'signUpMassage',
    initialState: { value: " " },
    reducers: {
        message: (state, action) => {
            state.value = action.payload
        } 
    },
})

export default signUpMassageSlice;
export const { message } = signUpMassageSlice.actions;