import bcrypt from "bcryptjs";
import usersetup from "../models/userdetail.js";

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
        // const daatas = await otherinfos.findOne({});
        return res.status(200).send({message:"login successfull" });
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

// export const Addnote = async(req,res)=>{
//   const errors={backenderror:String}
//     try{
//       const data = req.body;
//       if(data){
//         errors.emailError="email already exists";
//         return  res.status(404).send({error:errors});
//        }
//        let hashedPassword;
//        hashedPassword = await bcrypt.hash(password, 10);
//        const user = new usersetup({
//           username:username,
//           email:email,
//           password:hashedPassword
//        })
//        await user.save();
//        return res.status(200).send({message:"success"});
//     }catch(err){
//       errors.backenderror=err;
//       console.log(err);
//       return res.status(404).send({error:errors})
//     }
// };



