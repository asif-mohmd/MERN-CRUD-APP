import mongoose from "mongoose"
import bcrypt from "bcryptjs"

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
    },
    img:{
        type:String,
    }
},

{
    timestamps:true
}

)

UserModelSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

UserModelSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

const UserModel = mongoose.model('UserModel',UserModelSchema)




export default UserModel


