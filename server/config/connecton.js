

const mongoose = require('mongoose')

const dotenv = require("dotenv");
dotenv.config();


const DB = process.env.MONGOLAB_URI;

mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})