import { configureStore } from "@reduxjs/toolkit";
import signUpMassageSlice from "./signUpmassageSlice";
import signUpStatusSlice from "./signUpStatusSlice";

const store = configureStore({
    reducer: {
        signUpMassage: signUpMassageSlice.reducer,
        signUpStatus: signUpStatusSlice.reducer
    }
})

export default store;