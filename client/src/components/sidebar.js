import React from 'react';
import './Sidebar.css'; // Import your CSS file for styling
import NotesIcon from '@mui/icons-material/Notes';
import AddIcon from '@mui/icons-material/Add';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import AutoDeleteOutlinedIcon from '@mui/icons-material/AutoDeleteOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Sidebar = () => {
  return (
    <>
     <div className="upper">
        <h1>Nnote</h1>
     </div>
     <div className="other">
     <div className="second">
       <div className="ul">
      <NotesIcon className='bttnn' />
      <h2>Notes</h2>
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
      <div className="ul">
        <ArchiveOutlinedIcon className='bttnn'/>
        <h2>Archives</h2>
      </div>
      <div className="ul">
        <AutoDeleteOutlinedIcon className='bttnn'/>
        <h2>Deleted</h2>
      </div>
      <div className="ul">
        <SettingsIcon className='bttnn'/>
        <h2>Settings</h2>
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
