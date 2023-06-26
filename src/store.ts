import { configureStore } from "@reduxjs/toolkit";
import signUpMassageSlice from "./signUpmassageSlice";
import signUpStatusSlice from "./signUpStatusSlice";
import loginStatusSlice from "./loginStatusSlice";

const store = configureStore({
    reducer: {
        signUpMassage: signUpMassageSlice.reducer,
        signUpStatus: signUpStatusSlice.reducer,
        loginStatus: loginStatusSlice.reducer,
    }
})

export default store;