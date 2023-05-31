import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling
import NotesIcon from '@mui/icons-material/Notes';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
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
     <div className="second">
      <NotesIcon/>
      <h2>Notes</h2>
     </div>
     <div className="third">
      <div className="head">
        <h3>Labels</h3>
        <h3>edits</h3>
      </div>
      <div className="ul">
      <AddIcon/>
      <h2>Create new Label</h2>
      </div>
     </div>
     <div className="fourth">
      <div className="ul">
        <ArchiveOutlinedIcon/>
        <h2>Archives</h2>
      </div>
      <div className="ul">
        <AutoDeleteOutlinedIcon/>
        <h2>Deleted</h2>
      </div>
      <div className="ul">
        <SettingsIcon/>
        <h2>Settings</h2>
      </div>
      <div className="ul">
        <HelpOutlineIcon/>
        <h2>Help & feedback</h2>
      </div>
     </div>
    </>
  );
};

export default Sidebar;
