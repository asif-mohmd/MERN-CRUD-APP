
// const adminRouter = require("")
import connectDB from "./config/connecton.js"
import userRouter from "./routes/user.js"
import adminRouter from "./routes/admin.js"
import express  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

const app = express()

connectDB()

app.use(express.json())
app.use(cors({ credentials: true }));
app.use(cookieParser())

app.use("/",userRouter)
app.use("/admin",adminRouter)


app.use(notFound)
app.use(errorHandler)



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

