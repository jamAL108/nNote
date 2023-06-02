import React, { useState } from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useNavigate } from 'react-router-dom';
import './addnote.css';
const Addnote = () => {
    const [pin,setpin] = useState(false);
    const [archive ,setarchive] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="addnote">
      <header>
        <div className="left">
         <ArrowBackOutlinedIcon onClick={(e)=>{
           navigate("/home");
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
         
      </div>

    </div>
  )
}

export default Addnote;