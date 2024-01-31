import AdminModel from "../models/AdminModel.js";
import AsyncHandler from "express-async-handler";

export const adminLogin = AsyncHandler(async (req, res) => {
  console.log("keriiiii");
  const { email, password } = req.body;

  const adminData = await AdminModel.findOne({ email: email });
  console.log(adminData, ":adminData");
  if (adminData && (await adminData.matchPassword(password))) {
    console.log("admin workss");
    res.json({
      name: "Admin",
    });
  } else {
    console.log("user does not exists");
    res.status(400);
    throw new Error();
  }
});
