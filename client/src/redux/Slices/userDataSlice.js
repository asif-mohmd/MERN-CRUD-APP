const { createSlice } = require("@reduxjs/toolkit");


initialState = {
    userData : null,
    loading : null,
    error : null
    
}

const userDataSlice = createSlice({
    name:"userData",
    initialState,
    reducers : {
        setUserData : (state,action)=>{
            state.userData = action.payload
        },
        clearUserData : (state)=>{
            console.log("clear called")
            state.data = null
        }

    }
   
})

export const {setUserData,clearUserData} = userDataSlice.actions

export default userDataSlice.reducer