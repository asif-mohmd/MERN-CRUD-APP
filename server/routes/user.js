
import express from "express"
import {register, authUser} from "../controllers/userController.js"

const router = express.Router()



router.post("/signup",register)
router.post("/login",authUser)

export default router
