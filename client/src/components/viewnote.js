import React, { useEffect, useRef, useState } from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useNavigate } from 'react-router-dom';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import './addnote.css';
import { useSelector , useDispatch } from 'react-redux';
import { COLORHIDE, FONTSE } from '../redux/propsactions';
import Colorpicker from './colorpicker';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import Fonts from './fonts.js';
import { COLORSHOW, FONTDISPLAY, FONTHIDE  } from '../redux/propsactions';
import { updatenote , deletenote } from '../redux/action/useraction';
import { OUTER , OLDNOTE} from '../redux/propsactions';

const Viewnote = () => {
  const temp = JSON.parse(localStorage.getItem("temp"));
    const [pin,setpin] = useState(temp.pin);
    const temp1 = useRef(null);
    const dispatch= useDispatch();
    const [archive ,setarchive] = useState(temp.archive);
    const navigate = useNavigate();
    const store = useSelector((state)=>state);
    // const [date , setdate] = useState("");
    const [title,settitle]=useState(temp.title);
    const [note,setnote]=useState(temp.note);
    const [color , setcolor]= useState(false);
    const [menu , setmenu] = useState(false);
    const [font, setfont] = useState(false);
    const [ff,setff] = useState(temp.fontstyle);

    useEffect(()=>{
      if(menu===true){
        const temp3 = temp1.current;
        temp3.style.backgroundColor=temp.bgcolor;
      }
      if(menu===false){
        const temp3 = temp1.current;
        temp3.style.backgroundColor=temp.bg;
      }
          // eslint-disable-next-line react-hooks/exhaustive-deps
  },[menu])

  useEffect(()=>{
    if(font===true){
       const temp3 = temp1.current;
        temp3.style.backgroundColor=temp.bgcolor;
        dispatch({type:FONTDISPLAY,payload:true});
    }
    if(font===false){
      const temp3 = temp1.current;
      temp3.style.backgroundColor=temp.bg;
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[font])

  useEffect(()=>{
    if(store.props.fonthide===true){
      setfont(false);
      const temp4 = temp1.current;
      temp4.style.backgroundColor=temp.bg;
      dispatch({type:FONTHIDE , payload:false});
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.props.fonthide]);

  useEffect(()=>{
    if(store.props.fontfamily.length!==0){
      setff(store.props.fontfamily);
      temp.fontstyle=store.props.fontfamily;
      localStorage.setItem("temp",JSON.stringify(temp));
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.props.fontfamily])

  useEffect(()=>{
    if(title!==temp.title){
      temp.title = title;
      localStorage.setItem("temp",JSON.stringify(temp));
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[title])

  useEffect(()=>{
    if(note!==temp.note){
    temp.note = note;
    localStorage.setItem("temp",JSON.stringify(temp));
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[note])

    useEffect(()=>{
      if(color===true){
        const note = temp1.current;
        document.body.style.backgroundColor=temp.bgcolor;
        note.style.backgroundColor="inherit";
        dispatch({type:COLORSHOW , payload:true});
      }
          // eslint-disable-next-line react-hooks/exhaustive-deps
  },[color])

  useEffect(()=>{
    if(store.props.colorhide===true){
      const note = temp1.current;
      note.style.backgroundColor=temp.bg;
      setcolor(false);
      dispatch({type:COLORHIDE , payload:false});
    }     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.props.colorhide])

  return (
    <div ref={temp1} className="addnote">
      <header>
        <div className="left">
         <ArrowBackOutlinedIcon className='bttn' onClick={(e)=>{
          dispatch({type:OLDNOTE , payload:false});
          dispatch({type:FONTSE , payload:"Roboto"});
          if(title.length!==0){
            temp.pin=pin;
            temp.archive=archive;
            const user = JSON.parse(localStorage.getItem("user"));
            user.info.note[temp.index]=temp;
            localStorage.setItem("user",JSON.stringify(user));
            dispatch({type:OUTER, payload:true});
            console.log(store.props.outer);
            // dispatch(updatenote(temp));
          }
          navigate(-1);
         }} />
         </div>
         <div className="right">
         <div className="grid" onClick={(e)=>{
            setpin(!pin);
           }} >
          {pin ? <PushPinIcon className='bttn'/> : <PushPinOutlinedIcon className='bttn' />}
       </div>
       <div className="grid" onClick={(e)=>{
            setarchive(!archive);
           }} >
          {archive ? <ArchiveIcon className='bttn'/> : <ArchiveOutlinedIcon className='bttn'/>}
       </div>
         </div>
      </header>
      <div className="content">
       <input className='input1' value={title} style={{fontFamily:ff}} type="text" placeholder='Title' maxLength={15} onChange={(e)=>{
        settitle(e.target.value);
       }} />
       <textarea placeholder='Note' value={note} style={{fontFamily:ff}} type="text" className='input2' cols="30" rows="30" onChange={(e)=>{
        setnote(e.target.value);
       }}></textarea>
      </div>
      <div className="down" style={{backgroundColor:temp.bg}} >
        <div className="left">
         <div className="color">
             <ColorLensOutlinedIcon className='bttn' onClick={(e)=>{
              e.preventDefault();
              setcolor(true);
              const tempi = document.querySelector(".addnote");
              tempi.style.backgroundColor=temp.bgcolor;
             }} />
         </div>
         <div className="font">
          <FontDownloadOutlinedIcon className='bttn' onClick={(e)=>{
             e.preventDefault();
             setfont(true);
             const tempi = document.querySelector(".addnote");
             tempi.style.backgroundColor=temp.bgcolor;
          }}/>
         </div>
         </div>
         <div className="edit">
          <span> Edited hoi</span>
         </div>
         <div className="menu">
         <MoreVertOutlinedIcon className='bttn' onClick={(e)=>{
            e.preventDefault();
            setmenu(true);
         }} />
         </div>
         {font===true &&(
          <Fonts/>
         )}
          {color===true &&(
            <Colorpicker/>
          )}
          {menu===true &&(
            <div className="menu-picker">

               <div className="pull">
                  <KeyboardArrowDownOutlinedIcon className='bttn' onClick={(e)=>{
                    e.preventDefault();
                    const temp1 = document.querySelector('.menu-picker');
                    temp1.classList.add('hee');
                    console.log(temp1);
                    setmenu(false);
                  }} />
                </div>

                <div className="menus">
              <div className="ul" onClick={(e)=>{
                dispatch({type:FONTSE , payload:"Roboto"});
                  temp.pin=pin;
                  temp.archive=archive;
                  const user = JSON.parse(localStorage.getItem("user"));
                  console.log(temp);
                  user.info.note[temp.idx]=temp;
                  const data ={
                    temp:temp,
                    id:user.info.id
                  }
                  localStorage.setItem("user",JSON.stringify(user));
                  dispatch({type:OUTER,payload:true});
                  console.log(store.props.outer);
                  dispatch(updatenote(data));
                  navigate(-1);
              }}>
                 <LibraryAddOutlinedIcon className='bttn' />
                 <h2>Save note</h2>
              </div>

              <div className="ul"
               onClick={(e)=>{
                  const user = JSON.parse(localStorage.getItem("user"));
                  user.info.note.splice(temp.idx,1);
                  let array = user.info.note;
                  for(var i=temp.idx;i<array.length;i++){
                     array[i].idx--;
                  }
                  user.info.note = array;
                  const random=Math.floor(Math.random() * 10000) + 1;
                  temp.random=random;
                  user.info.del.push(temp);
                  user.info.totalnote--;
                  const data={
                    temp:temp,
                    id:user.info.id,
                    random:random
                  }
                  localStorage.setItem("user",JSON.stringify(user));
                  dispatch(deletenote(data));
                  navigate(-1);
              }}
              >
              <DeleteOutlineRoundedIcon className='bttn' />
                 <h2>Delete</h2>
              </div>

              <div className="ul">
                 <FileDownloadOutlinedIcon className='bttn' />
                 <h2>Download as docx</h2>
              </div>
              <div className="ul">
              <LabelOutlinedIcon className='bttn' />
                 <h2>Labels</h2>
              </div>
              </div>
              </div>
          )}
      </div>
    </div>
  )
}

export default Viewnote;