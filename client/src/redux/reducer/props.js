import {
    FONTHIDE,
    FONTSE,
    FONT,
    NEWNOTE,
    MAINFONT,
    FONTDISPLAY,
    COLORHIDE,
    COLORSHOW,
    OUTER
} from '../propsactions.js';

const initialstate={
    fonthide:false,
    fontfamily:"Roboto",
    newnote:false,
    font:{},
    oldnote:false,
    mainfont:{},
    fontdisplay:false,
    colorshow:false,
    colorhide:false,
    outer:false
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
        case COLORHIDE:
            return{
                ...state , colorhide:action.payload
            }
            case OUTER:
                console.log(action.payload);
                return{
                    ...state , outer:action.payload
                } 
        case COLORSHOW:
            return{
                ...state , colorshow:action.payload
            }                         
        default:
            return state;
    }
}

export default props;