import express from "express";
import cookieParser from 'cookie-parser';
import { Login ,
         Signup,
         Addnote,
         Updatenote,
         Deletenote
        } from "../controller/usercontroller.js";


const router = express.Router();
router.use(cookieParser())
router.post("/login",Login);
router.post("/signup",Signup);
router.post("/addnote",Addnote);
router.post("/updatenote",Updatenote);
router.post("/deletenote",Deletenote);

export default router;