import React, { useEffect ,useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling
import NotesIcon from '@mui/icons-material/Notes';
import AddIcon from '@mui/icons-material/Add';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import AutoDeleteOutlinedIcon from '@mui/icons-material/AutoDeleteOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useNavigate } from 'react-router-dom';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../redux/actiontypes';
const Sidebar = () => {
  const sideyy = JSON.parse(localStorage.getItem("sidebar"));
  const data = sideyy.data.index;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state)=>state);
  const [notes,setnotes] = useState(false);
  const [archive,setarchive] = useState(false);
  const [deleted,setdeleted] = useState(false);
  useEffect(()=>{
    if(data===0){
      setnotes(true);
    }else if(data===1){
      setarchive(true);
    }else if(data===2){
      setdeleted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  useEffect(()=>{
     if(store.user.logout === true){
      navigate("/");
      document.body.style.backgroundColor="white";
      dispatch({type:LOGOUT , payload:false});
     }
           // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.user.logout]);
  return (
    <>
     <div className="upper">
      
        <h1>Nnote</h1>
     </div>
     <div className="other">
     <div className="second">
       <div className="ul"   onClick={(e)=>{
        setnotes(true);
        setarchive(false);
        setdeleted(false);
        sideyy.data.index=0;
        localStorage.setItem("sidebar",JSON.stringify(sideyy));
        navigate('/home');
       }}>
        <div  className={notes ?  "active" : "notactive"}>
      <NotesIcon className='bttnn' />
      <h2>Notes</h2>
      </div>
      </div>
     </div>
     <div className="third">
      <div className="head">
        <h3 className='one' >Labels</h3>
        <h3 className='two'>edits</h3>
      </div>
      <div className="ul">
      <AddIcon className='bttnn' />
      <h2>Create new Label</h2>
      </div>
      </div>
     <div className="fourth">
      <div className="ul" onClick={(e)=>{
      setnotes(false);
        setarchive(true);
        setdeleted(false);
        sideyy.data.index=1;
        localStorage.setItem("sidebar",JSON.stringify(sideyy));
        navigate('/archives');
       }}>
        <div  className={archive ?  "active" : "notactive"}>
        <ArchiveOutlinedIcon className='bttnn'/>
        <h2>Archives</h2>
        </div>
      </div>
      <div className="ul" onClick={(e)=>{
      setnotes(false);
        setarchive(false);
        setdeleted(true);
        sideyy.data.index=2;
        localStorage.setItem("sidebar",JSON.stringify(sideyy));
        navigate('/deleted');
       }}>
        <div  className={deleted ?  "active" : "notactive"}>
        <AutoDeleteOutlinedIcon className='bttnn'/>
        <h2>Deleted</h2>
        </div>
      </div>
      <div className="ul">
        <SettingsIcon className='bttnn'/>
        <h2>Settings</h2>
        </div>
        <div className="ul" onClick={(e)=>{
             dispatch({type:LOGOUT , payload:true});
        }} >
        <LogoutRoundedIcon className='bttnn'  />
        <h2>Logout</h2>
        </div>
      <div className="ul">
        <HelpOutlineIcon className='bttnn'/>
        <h2>Help & feedback</h2>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
