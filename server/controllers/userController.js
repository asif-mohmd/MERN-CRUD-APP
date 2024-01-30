import UserModel from "../models/UserModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";


export const register = asyncHandler(async (req, res) => {
  let { name, email, age, location, job, password } = req.body;

  console.log("name", name);

  const user = await UserModel.findOne({ email: email });

  if (user) {
    console.log("User Already exists");
  }
  password = await bcrypt.hash(password, 10);
  const userData = await UserModel.create({
    name,
    email,
    age,
    location,
    job,
    password,
  });

  if (userData) {
    res.json(userData);
  } else {
    res.status(400);
    throw new Error();
  }
});


export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });
  console.log(user,"user")
  if (user) {
    if((await bcrypt.compare(password,user.password))){
        res.json({
          _id:user._id,
          name:user.name,
          age:user.age,
          location:user.location,
          job:user.job
        })
    }
  } else {
    console.log("user does not exists");
    res.status(400);
    throw new Error();
  }
});
