import UserModel from "../models/UserModel.js";
import AsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

export const registerUser = AsyncHandler(async (req, res) => {
  let { name, email, age, location, job, password } = req.body;

  console.log("name", name);

  const user = await UserModel.findOne({ email: email });

  if (user) {
    console.log("User Already exists");
    res.status(400);
    throw new Error("User exists");
  }

  const userData = await UserModel.create({
    name,
    email,
    age,
    location,
    job,
    password,
  });

  if (userData) {
    res.status(201).json({
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      age: userData.age,
      location: userData.location,
      job: userData.job,
    });
  } else {
    res.status(400);
    throw new Error();
  }
});

export const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
 
    let token =  generateToken(user._id)
    res.cookie('access_token',token, { httpOnly: true, secure: process.env.JWT_TOKEN, maxAge: 3600000 }).status(200).json({
      _id: user._id,
      name: user.name,
      age: user.age,
      location: user.location,
      job: user.job,
      
    });
  } else {
    console.log("user does not exists");
    res.status(402);
    throw new Error();
  }
});

export const upadatePicture =AsyncHandler(async(req,res)=>{

  const user = await UserModel.findById(req.params.id)

 if (user) {
    user.img = req.body.image; 
    await user.save(); 
   
    res.status(201).json({
      img: user.img,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }

})
