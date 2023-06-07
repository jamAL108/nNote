import bcrypt from "bcryptjs";
import usersetup from "../models/userdetail.js";
import notes from "../models/notes.js";

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
        console.log(data.id);
        const note = await notes.find({user:data.id});
        console.log(note);
        let array = [];
        if(notes.length!==0){
           array=note;
        }
        const user={
          note:array,
          id:data._id,
          username:data.username
        }
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



