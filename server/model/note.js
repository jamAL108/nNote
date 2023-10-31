import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const Note = new mongoose.Schema({
    name:{
        type:String
    },
    note:{
        type:String
    }
});

export default mongoose.model("Note",Note)
