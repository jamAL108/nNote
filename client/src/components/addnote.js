import React from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import './addnote.css';
const Addnote = () => {
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
            <PushPinOutlinedIcon/>
            <ArchiveOutlinedIcon/>
         </div>
      </header>
      <div className="content">
       <input className='input1' type="text" placeholder='Title'/>
       <textarea placeholder='Note'  cols="30" rows="30"></textarea>
      </div>
      <div className="down">

      </div>

    </div>
  )
}

export default Addnote;