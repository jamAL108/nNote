import  mongoose from "mongoose";
const { Schema } = mongoose;
const note = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "userdetails"
    },
    bg:{
        type:String,
        required:true
    },   
     bgcolor:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    archive:{
        type:Boolean,
        required:true
    },
    pin:{
        type:Boolean,
        required:true
    },
    fontstyle:{
        type:String,
        required:true
    },
    color:{
        type:[],
        required:true
    },
    fonts:{
        type:[],
        required:true
    }
});

export default mongoose.model("note",note);

