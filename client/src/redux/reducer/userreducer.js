import{
    LOGOUT,
 LOGIN ,
//  SIGNUP ,
 LOGINERROR ,
 SIGNUPERROR ,
 ADDNOTE ,
 ADDNOTEERROR 
//  DELETENOTE ,
//  DELETENOTEERROR,
//   UPDATENOTE,
//  UPDATENOTEERROR,
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
const initialstate={
    authordata:null,
    login:false,
    loginerror:"",
    signuperror:"",
    logout:false,
    addnote:false,
    addnoteerror:"" 
}  

const user =(state=initialstate , action) =>{
    switch(action.type){
        case LOGIN:
            const info = action.payload;
            console.log(typeof(info));
                localStorage.setItem("user",JSON.stringify({info}));
                return state;
        case LOGOUT:
            localStorage.removeItem("user");
            localStorage.removeItem("temp");
            return{
                ...state , logout:action.payload
            }
        case LOGINERROR:
            return{
                ...state , loginerror:action.payload
            }
         case SIGNUPERROR:
            return{
                 ...state , signuperror:action.payload
            }
         case ADDNOTE:
            return{
                ...state , addnote:action.payload
            }
         case ADDNOTEERROR:
            return{
                ...state , addnoteerror:action.payload
            }          

        default:
            return state;    
    }
}
export default user;