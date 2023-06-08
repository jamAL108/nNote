import bcrypt from "bcryptjs";
import usersetup from "../models/userdetail.js";
import notes from "../models/notes.js";
import deleted from '../models/deleted.js';
// import Auth from '../auth/auth.js';
// import jwt from 'jsonwebtoken';
export const Login = async(req,res)=>{
    const errors={passwordError:String , emailError:String , backenderror:String}
      try{
        const { email, password} = req.body;
        const data =   
        await usersetup.findOne({email})
        if(!data){
          errors.emailError="email doesnt exits";
          return  res.status(404).send({error:errors});
         }
        const passwordcorrect = await bcrypt.compare(password , data.password);
       if(passwordcorrect){
        const note = await notes.find({user:data._id});

        const del = await deleted.find({user:data._id});
        let array = [];
        let delet = [];
        if(notes.length!==0){
           array=note;
        }
        if(del.length!==0){
            delet =del;
        }
        const user={
          note:array,
          id:data._id,
          del:delet,
          username:data.username,
          totalnote:array.length
        }
        console.log(user);
        return res.status(200).send({message:"login successfull",response:user});
        }else if(!passwordcorrect){
          errors.passwordError="invalid credentials";
          return res.status(404).send({error:errors});
        }
      }catch(err){
        errors.backenderror=err;
        console.log(err);
        return res.status(404).send({error:errors})
      }
};

export const Signup = async(req,res)=>{
    const errors={passwordError:String , emailError:String , backenderror:String}
      try{
        const {username ,email, password} = req.body;
        const data = await usersetup.findOne({email});
        if(data){
          errors.emailError="email already exists";
          return  res.status(404).send({error:errors});
         }
         let hashedPassword;
         hashedPassword = await bcrypt.hash(password, 10);
         const user = new usersetup({
            username:username,
            email:email,
            password:hashedPassword
         })
         await user.save();
         return res.status(200).send({message:"success"});
      }catch(err){
        errors.backenderror=err;
        console.log(err);
        return res.status(404).send({error:errors})
      }
};

export const Addnote = async(req,res)=>{
  const errors={backenderror:String}
    try{
      const data = req.body;
      if(!data){
        errors.emailError="No data";
        return  res.status(404).send({error:errors});
       }
       console.log(data);
       const newnote = new notes({
        user:data.id,
        bg:data.temp.bg,
        bgcolor:data.temp.bgcolor,
        fonts:data.temp.fonts,
        color:data.temp.color,
        archive:data.temp.archive,
        pin:data.temp.pin,
        fontstyle:data.temp.fontstyle,
        title:data.temp.title,
        note:data.temp.note
     });
     await newnote.save();
       return res.status(200).send({message:"success"});
    }catch(err){
      errors.backenderror=err;
      console.log(err);
      return res.status(404).send({error:errors})
    }
};

export const Updatenote = async(req,res)=>{
  const errors={backenderror:String}
    try{
      const data = req.body;
      if(!data){
        errors.emailError="No data";
        return  res.status(404).send({error:errors});
       }
        const notey = await notes.findOne({_id:data.temp._id , user:data.id});
        console.log(notey);
        notey.bg=data.temp.bg;
        notey.bgcolor=data.temp.bgcolor;
        notey.title=data.temp.title;
        notey.note=data.temp.note;
        notey.fonts=data.temp.fonts;
        notey.color=data.temp.color;
        notey.pin=data.temp.pin;
        notey.archive=data.temp.archive;
        notey.fontstyle=data.temp.fontstyle;
        const upp = await notey.save();
        console.log(upp);
    //  await newnote.save();
       return res.status(200).send({message:"success"});
    }catch(err){
      errors.backenderror=err;
      console.log(err);
      return res.status(404).send({error:errors})
    }
};




export const Deletenote = async(req,res)=>{
  const errors={backenderror:String}
  try{
     const data = req.body;
     if(!data){
      return  res.status(404).send({error:"no data received to delete"});
     }
     const newdeleted = new deleted({
      user:data.temp.user,
      bg:data.temp.bg,
      bgcolor:data.temp.bgcolor,
      fonts:data.temp.fonts,
      color:data.temp.color,
      archive:data.temp.archive,
      pin:data.temp.pin,
      fontstyle:data.temp.fontstyle,
      title:data.temp.title,
      note:data.temp.note
   });
   await newdeleted.save();
   console.log(newdeleted);
     const notey = await notes.deleteOne({_id:data.temp._id});
     return res.status(200).send({message:"success"});
  }catch(err){
    errors.backenderror=err;
    console.log(err);
    return res.status(404).send({error:errors})
  }
}



