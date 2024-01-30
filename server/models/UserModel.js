import mongoose from "mongoose"

const UserModelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    job : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const UserModel = mongoose.model('UserModel',UserModelSchema)

export default UserModel