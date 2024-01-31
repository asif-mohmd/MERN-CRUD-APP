
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./Slices/authSlice"
import userDataSlice from "./Slices/userDataSlice"

const appStore = configureStore({

    reducer:{
       auth:authReducer,
       userData:userDataSlice
    }
})

export default appStore