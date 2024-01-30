const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    _id:"",
    name:"",
    age:"",
    location:"",
    job:"",
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userLogin:(state,action)=> {
            state._id = action.payload._id,
            state.name = action.payload.name,
            state.age = action.payload.age,
            state.location = action.payload.location,
            state.job = action.payload.job
        }
    }
})

export const {userLogin} = authSlice.actions

export default authSlice.reducer