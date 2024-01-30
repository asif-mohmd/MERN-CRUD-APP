
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./Slices/authSlice"

const appStore = configureStore({

    reducer:{
       auth:authReducer
    }
})

export default appStore