import  mongoose from "mongoose";
const user = mongoose.Schema({
    username:{
    type:String,
    required:true
   },
   email:{
    type:String
   },
   password:{
    type:String,
    required:true
   }
});

const usersetup = mongoose.model("userdetails",user);

export default usersetup;