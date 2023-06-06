import {
    FONTHIDE,
    FONTSE,
    FONT,
    NEWNOTE,
    MAINFONT,
    FONTDISPLAY
} from '../propsactions.js';

const initialstate={
    fonthide:false,
    fontfamily:"Roboto",
    newnote:false,
    font:{},
    oldnote:false,
    mainfont:{},
    fontdisplay:false
}  

const props =(state=initialstate , action) =>{
    switch(action.type){
    case FONTHIDE:
        return{
            ...state , fonthide:action.payload 
        }
        case FONTSE:
            return{
                ...state , fontfamily:action.payload
            }
        case NEWNOTE:
            return{
                ...state , newnote:action.payload
            }
        case FONT:
            return{
                ...state , font:action.payload
            } 
        case MAINFONT:
            return{
                ...state , mainfont:action.payload
            }
        case FONTDISPLAY:
            return{
                ...state , fontdisplay:action.payload
            }              

        default:
            return state;
    }
}

export default props;