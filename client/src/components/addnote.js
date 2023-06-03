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
const Addnote = () => {
    const [pin,setpin] = useState(false);
    const temp1 = useRef(null);
    const [archive ,setarchive] = useState(false);
    const navigate = useNavigate();
    const [date , setdate] = useState("");
    const [color , setcolor]= useState(false);
    const [menu , setmenu] = useState(false);
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
                <p>Colors</p>
                <div className="pull">
                  <KeyboardArrowDownOutlinedIcon className='bttn' onClick={(e)=>{
                    e.preventDefault();
                    setcolor(false);
                  }} />
                </div>
              </div>
              </div>
          )}
          {menu===true &&(
            <div className="menu-picker">

               <div className="pull">
                  <KeyboardArrowDownOutlinedIcon className='bttn' onClick={(e)=>{
                    e.preventDefault();
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