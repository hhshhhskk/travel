import { createSlice } from '@reduxjs/toolkit';

const loginStatusSlice = createSlice({
    name: 'loginStatus',
    initialState: { value: false },
    reducers: {
        status: (state, action) => {
            state.value = action.payload
        } 
    },
})


export default loginStatusSlice;
export const { status } = loginStatusSlice.actions;