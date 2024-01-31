import AdminModel from "../models/AdminModel.js";
import AsyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js"
import generateToken from "../utils/generateToken.js";

export const adminLogin = AsyncHandler(async (req, res) => {
  console.log("keriiiii");
  const { email, password } = req.body;

  const adminData = await AdminModel.findOne({ email: email });
  console.log(adminData, ":adminData");
  if (adminData && (await adminData.matchPassword(password))) {
    console.log("admin workss");
    let token = generateToken(adminData._id);
    console.log("Generated Token:", token);
    res.cookie('access_token', token, { httpOnly: true, secure: process.env.JWT_TOKEN === "Asif123", maxAge: 3600000 }).status(200).json({
      name: "Admin",
    });
    
  } else {
    console.log("user does not exists");
    res.status(400);
    throw new Error();
  }
});

export const adminLogout = AsyncHandler(async(req,res)=>{
  console.log("logout")
  return res.clearCookie("access_token").status(200).json({message: "You're now logged out"})
})


export const deleteUser = AsyncHandler(async (req,res)=>{
    console.log("delete route")
    const userId = req.params.id

    console.log("User id",userId)

    if(userId && (await UserModel.deleteOne({_id:userId}))){
        res.json({msg:"deleted successfully"})
    } else {
        console.log("Not Deleted");
        res.status(400);
        throw new Error();
      }


})


export const updateUser = AsyncHandler (async (req,res)=>{
 
  const {name, age, email , location, job} = req.body
  const userId = req.params.id
   
  const userUpdate = await UserModel.updateOne({_id:userId},{$set: {name:name,age:age,email:email,location:location,job:job} })
  
  if(userUpdate){
    res.status(200).json({
      msg:"User details updated"
    })
  }else {
    console.log("Not Deleted");
    res.status(400);
    throw new Error();
  }

})

export const addUser = AsyncHandler(async (req,res)=>{
  const {name, age, email, location, job} = req.body
  const password = "123"

  const userExist = await UserModel.findOne({email:email})

  if(userExist){
    res.status(400).json({msg:"user already exists"})
    throw new Error();

  }

  const addUser = await UserModel.create({
    name,
    age,
    email,
    location,
    job,
    password
  })

  if(addUser){
    res.status(201).json({
      msg:"user added succcesfully"
    })
  }else {
    console.log("Not Deleted");
    res.status(400);
    throw new Error();
  }

})

export const searchUser = AsyncHandler (async (req,res)=>{

  const {name} = req.body

  console.log("name:",name)

  const users = await UserModel.find({name: {$regex: new RegExp(name,"i")}, __v:0})

  if(users){
    res.status(201).json(users)
  }else {
    console.log("Not Deleted");
    res.status(400);
    throw new Error();
  }

})



export const getUsers = AsyncHandler(async (req,res)=>{
 
    console.log("cookie:",req.cookies)

    const userData = await UserModel.find()
    res.json({
        userData:userData
    })
  
   
})
