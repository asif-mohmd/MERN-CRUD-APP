
// const adminRouter = require("")
import connectDB from "./config/connecton.js"
import userRouter from "./routes/user.js"
import express  from "express"
import cors from "cors"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

const app = express()

connectDB()

app.use(express.json())
app.use(cors())
app.use(notFound)
app.use(errorHandler)

app.use("/",userRouter)



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

