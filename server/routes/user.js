
import express from "express"
import {register, authUser} from "../controllers/userController.js"

const router = express.Router()


router.route("/signup").post(register)
router.route("/login").post(authUser)

export default router
