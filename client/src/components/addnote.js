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
import { useSelector , useDispatch } from 'react-redux';
import { ADDNOTE } from '../redux/actiontypes';
// import { addnote } from '../redux/action/useraction';
const Addnote = () => {
    const [pin,setpin] = useState(false);
    const temp1 = useRef(null);
    const dispatch= useDispatch();
    const [archive ,setarchive] = useState(false);
    const navigate = useNavigate();
    const store = useSelector((state)=>state);
    const [date , setdate] = useState("");
    const [title,settitle]=useState("");
    const [note,setnote]=useState("");
    const [color , setcolor]= useState(false);
    const [menu , setmenu] = useState(false);
    const [final,setfinal]=useState({
      bg:"white",
      bgcolor:"#666666"
    });
    useEffect(()=>{
        if(color===true){
          let tpp1 = document.querySelector(".color-picker");
          tpp1.style.backgroundColor=final.bg;
          for(var i=1;i<=8;i++){
            var temp = "c"+(i);
            if(`col.${temp}`===true){
              var del = "#bt"+(i);
              let tpp = document.querySelector(del);
              tpp.style.border="2px solid #1A54B8";
            }
          }
        }
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[color])
    useEffect(()=>{
        if(store.user.addnote===true){
          dispatch({type:ADDNOTE , payload:false});
          navigate("/home");
        }
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[store.user.Addnote])
    useEffect(()=>{
        if(menu===true){
          const temp = temp1.current;
          temp.style.backgroundColor=final.bgcolor;
        }
        if(menu===false){
          const temp = temp1.current;
          temp.style.backgroundColor=final.bg;
        }
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[menu])
    // const [array , setarray]=useState([
    //    {
    //     id:"1",
    //     bg:"white",
    //     bgshadow:"#666666",
    //    },
    //    {
    //     id:"2",
    //     bg:"#F29F75",
    //     bgshadow:"#61402F",
    //    },
    //    {
    //     id:"3",
    //     bg:"#FAAFA9",
    //     bgshadow:"#644743",
    //    },
    //    {
    //     id:"4",
    //     bg:"#FAAFA9",
    //     bgshadow:"#67634A",
    //    },
    //    {
    //     id:"5",
    //     bg:"#F5E2DC",
    //     bgshadow:"#625A58",
    //    },
   //    {
    //     id:"6",
    //     bg:"#B4DED4",
    //     bgshadow:"#485855",
    //    },
      //     {
      //     id:"7",
      //     bg:"#AFCCDC",
      //     bgshadow:"#475258",
   //     },
  //     {
      //     id:"8",
      //     bg:"#D3BFDB",
      //     bgshadow:"#544C59",
      //    }

    // ])
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
       <input className='input1' type="text" placeholder='Title' onChange={(e)=>{
        settitle(e.target.value);
       }} />
       <textarea placeholder='Note' type="text" className='input2' cols="30" rows="30" onChange={(e)=>{
        setnote(e.target.value);
       }}></textarea>
      </div>
      <div className="down">
         <div className="color">
             <ColorLensOutlinedIcon className='bttn' onClick={(e)=>{
              e.preventDefault();
              setcolor(true);
              const tempi = document.querySelector(".addnote");
              tempi.style.backgroundColor=final.bgcolor;
             }} />
         </div>
         <div className="edit">
          <span> Edited {date}</span>
         </div>
         <div className="menu">
         <MoreVertOutlinedIcon className='bttn' onClick={(e)=>{
            e.preventDefault();
            setmenu(true);
         }} />
         </div>
          {color===true &&(
            <div className="color-picker">
              <div className="head">
                <p>colors</p>
                <div className="pull">
                  <KeyboardArrowDownOutlinedIcon className='bttn' onClick={(e)=>{
                    e.preventDefault();
                    let tpp1 = document.querySelector(".color-picker");
                    let note = temp1.current;
                    note.style.backgroundColor=final.bg;
                    tpp1.style.backgroundColor=final.bg;

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
                 tpp.style.border="1.3px solid #1A54B8";
                 let tpp1 = document.querySelector(".color-picker");
                 let note = temp1.current;
                 note.style.backgroundColor="#666666";
                 tpp1.style.backgroundColor="#EFF4FA";
                 setfinal({bg:"white" , bgcolor:"#666666"});
             for(var i =1;i<=8;i++){
              if(i!==1){
                const tp =`${i}`;
                const tppp = document.querySelector("#bt"+(tp));
                tppp.style.border="1.3px solid black";
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
                  // note.style.backgroundColor="color-mix(in srgb ,#666666, #F29F75)";
                  note.style.backgroundColor="#61402F";
                  tpp1.style.backgroundColor="#F29F75";
                  tpp.style.border="1.3px solid #1A54B8";
                  setfinal({bg:"#F29F75" , bgcolor:"#61402F"});
                  for(var i =1;i<=8;i++){
                   if(i!==2){
                    const tee="#bt";
                    const val = (tee)+(i);
                     const tppp = document.querySelector(val);
                     console.log(tppp);
                     tppp.style.border="1.3px solid black";
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
                  tpp.style.border="2px solid #1A54B8";
                  let tpp1 = document.querySelector(".color-picker");
                  let note = temp1.current;
                  note.style.backgroundColor="#644743";
                  tpp1.style.backgroundColor="#FAAFA9";
                  setfinal({bg:"#FAAFA9" , bgcolor:"#644743"});
                  for(var i =1;i<=8;i++){
                   if(i!==3){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="1.3px solid black";
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
                  tpp.style.border="1.3px solid #1A54B8";
                  let tpp1 = document.querySelector(".color-picker");
                  let note = temp1.current;
                  note.style.backgroundColor="#625A58";
                  tpp1.style.backgroundColor="#F5E2DC";
                  setfinal({bg:"#F5E2DC" , bgcolor:"#625A58"});
                  for(var i =1;i<=8;i++){
                   if(i!==4){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="2px solid black";
                  }
                 }
                }} style={{backgroundColor:"#F5E2DC"}} >
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
                  tpp.style.border="1.3px solid #1A54B8";
                  let tpp1 = document.querySelector(".color-picker");
                  let note = temp1.current;
                  note.style.backgroundColor="#485855";
                  tpp1.style.backgroundColor="#B4DED4";
                  setfinal({bg:"#B4DED4" , bgcolor:"#485855"});
                  for(var i =1;i<=8;i++){
                   if(i!==5){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="1.3px solid black";
                  }
                 }
                }} style={{backgroundColor:"#B4DED4"}} >
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
                  tpp.style.border="1.3px solid #1A54B8";
                  let tpp1 = document.querySelector(".color-picker");
                  let note = temp1.current;
                  note.style.backgroundColor="#544C59";
                  tpp1.style.backgroundColor="#D3BFDB";
                  setfinal({bg:"#D3BFDB" , bgcolor:"#544C59"});
                  for(var i =1;i<=8;i++){
                   if(i!==6){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="1.3px solid black";
                  }
                 }
                }} style={{backgroundColor:"#D3BFDB"}} >
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
                  tpp.style.border="1.3px solid #1A54B8";
                  let tpp1 = document.querySelector(".color-picker");
                  let note = temp1.current;
                  note.style.backgroundColor="#67634A";
                  tpp1.style.backgroundColor="#FFF8B9";
                  setfinal({bg:"#FFF8B9" , bgcolor:"#67634A"});
                  for(var i =1;i<=8;i++){
                   if(i!==7){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="1.3px solid black";
                  }
                 }
                }} style={{backgroundColor:"#FFF8B9"}} >
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
                  tpp.style.border="1.3px solid #1A54B8";
                  let tpp1 = document.querySelector(".color-picker");
                  let note = temp1.current;
                  note.style.backgroundColor="#475258";
                  tpp1.style.backgroundColor="#AFCCDC";
                  setfinal({bg:"#AFCCDC" , bgcolor:"#475258"});
                  for(var i =1;i<=8;i++){
                   if(i!==8){
                     const tp =`${i}`;
                     const tppp = document.querySelector("#bt"+(tp));
                     tppp.style.border="1.3px solid black";
                  }
                 }
                }} style={{backgroundColor:"#AFCCDC"}} >
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
              <div className="ul" onClick={(e)=>{
                  const data ={
                    pin:pin,
                    archive:archive,
                    bg:final.bg,
                    bgcolor:final.bg,
                    title:title,
                    note:note
                  }
                  console.log(data);
                  // dispatch(addnote(data));

              }}>
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
