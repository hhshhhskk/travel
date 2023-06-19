import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
    name: 'signUp',
    initialState: { value: false },
    reducers: {
        show: (state, action) => {
            state.value = action.payload
        } 
    }
})

export default alertSlice;
export const { show } = alertSlice.actions;