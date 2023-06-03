import{
    LOGOUT,
 LOGIN ,
//  SIGNUP ,
 LOGINERROR ,
 SIGNUPERROR 
//  ADDNOTE ,
//  ADDNOTEERROR ,
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
    logout:false
    
}  

const user =(state=initialstate , action) =>{
    switch(action.type){
        case LOGIN:
            const data = action.payload;
                localStorage.setItem("user",JSON.stringify({data}));
                break;
        case LOGOUT:
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

        default:
            return state;    
    }
}
export default user;