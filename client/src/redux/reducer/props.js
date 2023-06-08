import {
    FONTHIDE,
    FONTSE,
    FONT,
    NEWNOTE,
    MAINFONT,
    FONTDISPLAY,
    COLORHIDE,
    COLORSHOW,
    OUTER,
    PINSHORT,
    GRID , 
    CLOSED,
    SHADES,
    ARCHIVESHADES,
    ARCHIVEGRID
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
    outer:false,
    pinshort:false,
    grid:false,
    closed:false,
    shades:false,
    archiveshades:false,
    archivegrid:false
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
        case PINSHORT:
            return{
                ...state , pinshort:action.payload
            }
        case GRID: 
            return{
                ...state , grid:action.payload
            } 
        case CLOSED:
            return{
                ...state , closed:action.payload
            }
        case SHADES:    
            return{
                ...state , shades:action.payload
            }
        case ARCHIVESHADES:
            return{
                   ...state , archiveshades:action.payload
            }
        case ARCHIVEGRID:    
            return{
                ...state , archivegrid:action.payload
            }                                               
        default:
            return state;
    }
}

export default props;