const connectDB = require("./config/connecton")
const userRouter = require("./routes/user")
// const adminRouter = require("")


const express = require('express')


const cors = require('cors')
const app = express()

connectDB()

app.use(express.json())
app.use(cors())

app.use("/",userRouter)



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

