import express from "express"
import { adminLogin } from "../controllers/adminController.js"
const router = express.Router()


router.route("/login").post(adminLogin)
router.route("/userData").get(getUsers)


export default router