
import express from "express"
import {registerUser, authUser, upadatePicture} from "../controllers/userController.js"

const router = express.Router()


router.route("/signup").post(registerUser)
router.route("/login").post(authUser)
router.route('/updatePicture/:id').post(upadatePicture)

export default router
