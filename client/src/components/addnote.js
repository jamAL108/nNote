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
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
const Addnote = () => {
    const [pin,setpin] = useState(false);
    const temp1 = useRef(null);
    const [archive ,setarchive] = useState(false);
    const navigate = useNavigate();
    const [date , setdate] = useState("");
    const [color , setcolor]= useState(false);
    const [menu , setmenu] = useState(false);
    const [col,setcol] = useState({
      c1:true,
      c2:false,
      c3:false,
      c4:false,
      c5:false,
      c6:false,
      c7:false,
      c8:false
    });
    useEffect(()=>{
       const dat = new Date();
       setdate(dat.getDate());
       console.log(KeyboardArrowDownOutlinedIcon);
       console.log(color);
       console.log(menu);
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div ref={temp1} className="addnote">
      <header>
        <div className="left">
         <ArrowBackOutlinedIcon className='bttn' onClick={(e)=>{
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
       <input className='input1' type="text" placeholder='Title'/>
       <textarea placeholder='Note' type="text" className='input2' cols="30" rows="30"></textarea>
      </div>
      <div className="down">
         <div className="color">
             <ColorLensOutlinedIcon className='bttn' onClick={(e)=>{
              e.preventDefault();
              setcolor(true);
              const tempi = document.querySelector(".addnote");
              tempi.style.backgroundColor="#666666";
             }} />
         </div>
         <div className="edit">
          <span> Edited {date}</span>
         </div>
         <div className="menu">
         <MoreVertOutlinedIcon className='bttn' onClick={(e)=>{
            e.preventDefault();
            setmenu(true);
            const tempi = document.querySelector(".addnote");
            tempi.style.backgroundColor="#666666";
         }} />
         </div>
          {color===true &&(
            <div className="color-picker">
              <div className="head">
                <p>colors</p>
                <div className="pull">
                  <KeyboardArrowDownOutlinedIcon className='bttn' onClick={(e)=>{
                    e.preventDefault();
                    setcolor(false);
                  }} />
                </div>
              </div>
              <div className="colors">
                <div className="b1">
                <div className="box" id='bt1' onClick={(e)=>{
                  e.preventDefault();
                  if(col.c1!==true){
                  setcol({c1:true , c2:false , c3:false , c4:false , c5:false , c6:false , c7:false , c8:false });
                 let tpp = document.querySelector("#bt1");
                 tpp.style.border="2.5px solid #1A54B8";

             for(var i =1;i<=8;i++){
              if(i!==1){
                const tp =`${i}`;
                const tppp = document.querySelector("#bt"+(tp));
                tppp.style.border="2.5px solid black";
             }
            }
                  }
                }} style={{backgroundColor:"white"}} >
                    {col.c1===true &&(
                      <DoneOutlinedIcon className='bttn' />
                    )}
                    {col.c1===false &&(
                      <FormatColorResetOutlinedIcon className='bique'/>
                    )}
                </div>

                <div className="box" id='bt2' onClick={(e)=>{
                  e.preventDefault();
                  if(col.c2!==true){
                  setcol({c1:false , c2:true , c3:false , c4:false , c5:false , c6:false , c7:false , c8:false });
                  }
                  let tpp = document.querySelector("#bt2");
                  let tpp1 = document.querySelector(".color-picker");
                  let note = temp1.current;
                  note.style.backgroundColor="#F29F75";
                  tpp1.style.backgroundColor="#F29F75";
                 tpp.style.border="2.5px solid #1A54B8";
                  for(var i =1;i<=8;i++){
                   if(i!==2){
                    const tee="#bt";
                    const val = (tee)+(i);
                     const tppp = document.querySelector(val);
                     console.log(tppp);
                     tppp.style.border="2.5px solid black";
                  }
                 }
                }} style={{backgroundColor:"#F29F75"}} >
                    {col.c2===true &&(
                      <DoneOutlinedIcon className='bttn'/>
                    )}
                </div>

                <div className="box" id='bt3' onClick={(e)=>{
                  e.preventDefault();
                  if(col.c3!==true){
                  setcol({c1:false , c2:false , c3:true , c4:false , c5:false , c6:false , c7:false , c8:false });
                  }
                  let tpp = document.querySelector("#bt3");
                  tpp.style.border="2.5px solid #1A54B8"
                  for(var i =1;i<=8;i++){
                   if(i!==3){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="2.5px solid black";
                  }
                 }
                }} style={{backgroundColor:"#FAAFA9"}} >
                    {col.c3===true &&(
                      <DoneOutlinedIcon className='bttn'/>
                    )}
                </div>

                <div className="box" id='bt4' onClick={(e)=>{
                  e.preventDefault();
                  if(col.c4!==true){
                  setcol({c1:false , c2:false , c3:false , c4:true , c5:false , c6:false , c7:false , c8:false });
                  }
                  let tpp = document.querySelector("#bt4");
                  tpp.style.border="2.5px solid #1A54B8"
                  for(var i =1;i<=8;i++){
                   if(i!==4){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="2.5px solid black";
                  }
                 }
                }} style={{backgroundColor:"#FFF8B9"}} >
                    {col.c4===true &&(
                      <DoneOutlinedIcon className='bttn'/>
                    )}
                </div>
                </div>

                <div className="b1">
                <div className="box" id='bt5' onClick={(e)=>{
                  e.preventDefault();
                  if(col.c5!==true){
                  setcol({c1:false, c2:false , c3:false , c4:false , c5:true , c6:false , c7:false , c8:false });
                  }
                  let tpp = document.querySelector("#bt5");
                  tpp.style.border="2.5px solid #1A54B8"
                  for(var i =1;i<=8;i++){
                   if(i!==5){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="2.5px solid black";
                  }
                 }
                }} style={{backgroundColor:"#D3BFDB"}} >
                    {col.c5===true &&(
                      <DoneOutlinedIcon className='bttn'/>
                    )}
                </div>

                <div className="box" id='bt6' onClick={(e)=>{
                  e.preventDefault();
                  if(col.c6!==true){
                  setcol({c1:false, c2:false , c3:false , c4:false , c5:false , c6:true , c7:false , c8:false });
                  }
                  let tpp = document.querySelector("#bt6");
                  tpp.style.border="2.5px solid #1A54B8"
                  for(var i =1;i<=8;i++){
                   if(i!==6){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="2.5px solid black";
                  }
                 }
                }} style={{backgroundColor:"#B4DED4"}} >
                    {col.c6===true &&(
                      <DoneOutlinedIcon className='bttn'/>
                    )}
                </div>

                <div className="box" id='bt7' onClick={(e)=>{
                  e.preventDefault();
                  if(col.c7!==true){
                  setcol({c1:false, c2:false , c3:false , c4:false , c5:false , c6:false , c7:true , c8:false });
                  }
                  let tpp = document.querySelector("#bt7");
                  tpp.style.border="2.5px solid #1A54B8"
                  for(var i =1;i<=8;i++){
                   if(i!==7){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="2.5px solid black";
                  }
                 }
                }} style={{backgroundColor:"#F5E2DC"}} >
                    {col.c7===true &&(
                      <DoneOutlinedIcon className='bttn'/>
                    )}
                </div>

                <div className="box" id='bt8' onClick={(e)=>{
                  e.preventDefault();
                  if(col.c8!==true){
                  setcol({c1:false, c2:false , c3:false , c4:false , c5:false , c6:false , c7:false , c8:true });
                  }
                  let tpp = document.querySelector("#bt8");
                  tpp.style.border="2.5px solid #1A54B8"
                  for(var i =1;i<=8;i++){
                   if(i!==8){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="2.5px solid black";
                  }
                 }
                }} style={{backgroundColor:"#E9E3D3"}} >
                    {col.c8===true &&(
                      <DoneOutlinedIcon className='bttn'/>
                    )}
                </div>
                </div>
              </div>
              </div>
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
              <div className="ul">
                 <LibraryAddOutlinedIcon className='bttn' />
                 <h2>Save note</h2>
              </div>
              <div className="ul">
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

export default Addnote;