import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config({path:"./config.env"});
import router from "./router/router.js";
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api" , router);
const port = 8000;
const db = process.env.DB;
mongoose.connect(db).then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log(err)
});
app.get('/',(req,res)=>{
    res.send("hello");
})
app.listen(port,()=>{
    console.log("started")
})