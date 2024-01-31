import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const AdminModelSchema = new mongoose.Schema({
  
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
},

)



AdminModelSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


const AdminModel = mongoose.model('AdminModel',AdminModelSchema)


export default AdminModel


