import{
    LOGOUT
//  LOGIN ,
//  SIGNUP ,
//  LOGINERROR ,
//  SIGNUPERROR ,
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
    facultylogin:false,
    facultyloginerror:"",
    facultyupdated:false,
    markuploaded:false,
    marksuploaderror:"",
    attendancemarked:false,
    test:[],
    students:[],
    getstudenterror:"",
    addtest:false,
    techupdatepassword:false,
    techupdatepassworderror:"",
    notice:[],
    getnoticeerror:"",
    attendancedone:false,
    attendanceerror:"",
    ccdef:{},
    otherdef:{},
    deferror:"",
    subject:[]
}  

const user =(state=initialstate , action) =>{
    switch(action.type){
       case LOGOUT:
            return {
                ...state, facultyloginerror:action.payload
            } 
        default:
            return state;    
    }
}
export default user;