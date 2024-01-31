const { createSlice } = require("@reduxjs/toolkit");


initialState = {
    userData : null,
    loading : null,
    error : null,
    userImg : ''
    
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
        },
        updatePicture:(state,action)=>{
            state.userImg = action.payload;
        }

    }
   
})

export const {setUserData,clearUserData,updatePicture} = userDataSlice.actions

export default userDataSlice.reducer