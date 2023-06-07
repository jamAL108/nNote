import express from "express";
import { Login ,
         Signup,
         Addnote,
         Updatenote
        } from "../controller/usercontroller.js";


const router = express.Router();
 
router.post("/login",Login);
router.post("/signup",Signup);
router.post("/addnote",Addnote);
router.post("/updatenote",Updatenote);

export default router;