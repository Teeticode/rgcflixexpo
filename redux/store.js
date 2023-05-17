import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthSlice from "./slices/AuthSlice";


export const store = configureStore({
    reducer:{
        auth:AuthSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})