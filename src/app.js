

import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//configuration for the various type of data 
app.use(express.json({limit:"16kb"})) // data which is in json format
app.use(express.urlencoded({extended:true,limit:"16kb"})) // data which is in url format
app.use(express.static("public")) // data which is in image,file format this can be stored into the "public".
app.use(cookieParser()) // this is for the cookie which is in the users server to track the cookies



export {app}