const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLogin : false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userLogin:(state,action)=> {
            state.isLogin = true
        },
        userLogout:(state,action) => {
            state.isLogin = false
        }
    }
})



export const {userLogin, userLogout} = authSlice.actions


export default authSlice.reducer