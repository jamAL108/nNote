import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FONTDISPLAY, FONTHIDE , FONTSE } from '../redux/propsactions';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import style from './font.js';
import './fonts.css';
const Fonts = () => {
  const store = useSelector((state)=>state);
  const temp = JSON.parse(localStorage.getItem("temp"));
  const [fons,setfons] = useState(temp.fonts);
  const [style1,setstyle1] =useState(temp.fontstyle);
    useEffect(()=>{
      if(store.props.fontdisplay===true){
        for(var i=1;i<=16;i++){
          if(fons[i]===true){
            var tee = "#box"+(i);
             var tt = document.querySelector(tee);
             tt.style.backgroundColor="#C3E7FF";
             tt.style.color="#0D50A7";
          }
        }
      }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[store.props.fontdisplay])
    useEffect(()=>{
       temp.fonts=fons;
       localStorage.setItem("temp",JSON.stringify(temp));
                 // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fons])
    useEffect(()=>{
      if(style1!==temp.fontstyle){
      temp.fontstyle=style1;
      localStorage.setItem("temp",JSON.stringify(temp));
      }
                // eslint-disable-next-line react-hooks/exhaustive-deps
   },[style1])
    const dispatch = useDispatch();
  return (
    <div className="font-list">
             <div className="top">
              <p className="title">fonts</p>
              <div className="pull">
                  <KeyboardArrowDownOutlinedIcon className='bttn' onClick={(e)=>{
                    e.preventDefault();
                    temp.fonts=fons;
                    localStorage.setItem("temp",JSON.stringify(temp));
                    dispatch({type:FONTDISPLAY,payload:false});
                    dispatch({type:FONTHIDE ,payload:true })
                  }} />
                </div>
             </div>
             <div className="bottom">
              {style.map((item,idx)=>(
                <div className="fontbox" id={`box${idx+1}`} style={{fontFamily:item.name}} key={idx} onClick={(e)=>{
                  e.preventDefault();
                  var temp = "#box"+(idx+1);
                  var tp = document.querySelector(temp);
                  tp.style.backgroundColor="#C3E7FF";
                  tp.style.color="#0D50A7";
                  var indi = idx+1;
                  fons[indi]=true;
                  setstyle1(item.name);
                  dispatch({type:FONTSE , payload:item.name})
                  var t9 = [...fons];
                  for(var i=1;i<=16;i++){
                    if(i!==(idx+1)){
                      var tempi = "#box"+(i);
                      t9[i]=false;
                      setfons(t9);
                      var tpi = document.querySelector(tempi);
                      tpi.style.backgroundColor="white";
                      tpi.style.color="black";
                    }
                  }
                }} >
                  <p style={{fontFamily:'Roboto'}}>{item.title} :</p>
                  <h1>Hello</h1>
                </div>
              ))}
             </div>
          </div>
  )
}

export default Fonts;
