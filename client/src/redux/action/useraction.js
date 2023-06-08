import{
    LOGOUT,
 LOGIN ,
 SIGNUP ,
 LOGINERROR ,
 SIGNUPERROR ,
 ADDNOTE ,
 ADDNOTEERROR ,
 DELETENOTE ,
 DELETENOTEERROR,
  UPDATENOTE,
 UPDATENOTEERROR
//  GETNOTES ,
//  GETNOTESERROR ,
//  CREATELABELS ,
//  CREATELABELSERROR ,
//  GETLABELS ,
//  GETLABELSERROR ,
//  DELETELABEL ,
//  DELETELABELERROR,
//  UPDATELABELS ,
//   PUTARCHIVE,
//  GETARCHIVE,
//  GETARCHIVEERROR,
//  DELETEARCHIVE,
//  DELETED ,
//  DELETEDERROR,
//  SETTINGS
} from '../actiontypes.js';
const URL= "https://nnote.onrender.com" ;


export const login = (formdata,navigate)=>async(dispatch)=>{
    try{
       const api =`${URL}/user/login`;
       const res = await fetch(api,{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
         },
        body: JSON.stringify(formdata)
        });
       const msg = await res.json();
       console.log(msg);
       if(res.status === 200 ){
            navigate("/home");
            console.log(msg.response);
            dispatch({type:LOGIN ,payload:msg.response })
    }else if(res.status === 400 || res.status===404){
      console.log("mlfbnelrbn");
      dispatch({type:LOGINERROR ,payload:msg.error})
    }
    }catch(err){
      console.log(err);
    }
}

export const logout = (navigate)=>async(dispatch)=>{
  try{
    dispatch({type:LOGOUT ,payload:"bye" });
    navigate("/");
  }catch(err){
    console.log(err); 
  }
}

export const signup = (formdata,navigate)=>async(dispatch)=>{
  try{
     const api =`${URL}/user/signup`;
     const res = await fetch(api,{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
       },
      body: JSON.stringify(formdata)
      });
     const msg = await res.json();
     console.log(msg);
     if(res.status === 200 ){
          navigate("/login");
          dispatch({type:SIGNUP ,payload:msg.response });
  }else if(res.status === 400 || res.status===404){
    dispatch({type:SIGNUPERROR ,payload:msg.error});
  }
  }catch(err){
    console.log(err);
  }
}

export const addnote =(formdata)=>async(dispatch)=>{
  try{
    const api =`${URL}/user/addnote`;
    const res = await fetch(api,{
     method: "POST",
     headers: {
       "Content-Type":"application/json"
      },
     body: JSON.stringify(formdata)
     });
     console.log(formdata);
    const msg = await res.json();
    console.log(msg);
    if(res.status === 200 ){
         dispatch({type:ADDNOTE ,payload:msg.response });
 }else if(res.status === 400 || res.status===404){
   dispatch({type:ADDNOTEERROR ,payload:msg.error});
 }
 }catch(err){
   console.log(err);
 }
}

export const updatenote =(formdata)=>async(dispatch)=>{
  try{
    const api =`${URL}/user/updatenote`;
    const res = await fetch(api,{
     method: "POST",
     headers: {
       "Content-Type":"application/json"
      },
     body: JSON.stringify(formdata)
     });
     console.log(formdata);
    const msg = await res.json();
    console.log(msg);
    if(res.status === 200 ){
         dispatch({type:UPDATENOTE ,payload:msg.response });
 }else if(res.status === 400 || res.status===404){
   dispatch({type:UPDATENOTEERROR ,payload:msg.error});
 }
 }catch(err){
   console.log(err);
 }
}

export const deletenote =(formdata)=>async(dispatch)=>{
  try{
    const api =`${URL}/user/deletenote`;
    const res = await fetch(api,{
     method: "POST",
     headers: {
       "Content-Type":"application/json"
      },
     body: JSON.stringify(formdata)
     });
     console.log(formdata);
    const msg = await res.json();
    console.log(msg);
    if(res.status === 200 ){
         dispatch({type:DELETENOTE ,payload:msg.response });
 }else if(res.status === 400 || res.status===404){
   dispatch({type:DELETENOTEERROR ,payload:msg.error});
 }
 }catch(err){
   console.log(err);
 }
}