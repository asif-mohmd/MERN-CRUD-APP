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
      token:generateToken(userData._id)
    });
  } else {
    res.status(400);
    throw new Error();
  }
});

export const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });
  console.log(user, "user");
  if (user && (await user.matchPassword(password))) {
    console.log("keriiiiiiiiiiii");
    res.json({
      _id: user._id,
      name: user.name,
      age: user.age,
      location: user.location,
      job: user.job,
      token: generateToken(user._id),
    });
  } else {
    console.log("user does not exists");
    res.status(400);
    throw new Error();
  }
});
