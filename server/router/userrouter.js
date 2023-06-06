import express from "express";
import { Login ,
         Signup,
         Addnote
        } from "../controller/usercontroller.js";


const router = express.Router();
 
router.post("/login",Login);
router.post("/signup",Signup);
router.post("/addnote",Addnote);

export default router;