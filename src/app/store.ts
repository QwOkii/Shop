import { Auth } from './Auth/Auth';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        Auth
    }
})
