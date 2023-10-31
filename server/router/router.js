import express from 'express'
import {
    addnote,
    getnote,
    deletenote,
    updatenote
} from '../controller/controller.js'

const router = express.Router()
router.post("/addnote",addnote)
router.get("/getnote",getnote)
router.patch("/updatenote",updatenote)
router.delete("/deletenode/:id",deletenote)

export default router