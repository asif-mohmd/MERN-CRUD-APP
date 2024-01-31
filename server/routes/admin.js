import express from "express"
import { addUser, adminLogin, deleteUser, getUsers, searchUser, updateUser } from "../controllers/adminController.js"
import { authorization } from "../middleware/authMiddleware.js"
const router = express.Router()

// POST Routes
router.route("/login").post(adminLogin)
router.route("/searchUser").post(searchUser)
router.route("/deleteUser/:id").post(deleteUser)
router.route("/updateUser/:id").post(updateUser)
router.route("/addUser").post(addUser) 



// GET Routes
router.route("/userData").get(getUsers)


export default router