// import React from 'react'

// const Colorpicker = () => {
//   return (
//     <div className="color-picker">
//               <div className="head">
//                 <p>colors</p>
//                 <div className="pull">
//                   <KeyboardArrowDownOutlinedIcon className='bttn' onClick={(e)=>{
//                     e.preventDefault();
//                     setcolor(false);
//                   }} />
//                 </div>
//               </div>
//               <div className="colors">
//                 <div className="b1">
//                 <div className="box" id='bt1' onClick={(e)=>{
//                   e.preventDefault();
//                   if(col.c1!==true){
//                   setcol({c1:true , c2:false , c3:false , c4:false , c5:false , c6:false , c7:false , c8:false });
//                  let tpp = document.querySelector("#bt1");
//                  tpp.style.border="2px solid #1A54B8";
//                  let tpp1 = document.querySelector(".color-picker");
//                  let note = temp1.current;
//                  note.style.backgroundColor="#666666";
//                  tpp1.style.backgroundColor="#EFF4FA";
//              for(var i =1;i<=8;i++){
//               if(i!==1){
//                 const tp =`${i}`;
//                 const tppp = document.querySelector("#bt"+(tp));
//                 tppp.style.border="2px solid black";
//              }
//             }
//                   }
//                 }} style={{backgroundColor:"white"}} >
//                     {col.c1===true &&(
//                       <DoneOutlinedIcon className='bttn' />
//                     )}
//                     {col.c1===false &&(
//                       <FormatColorResetOutlinedIcon className='bique'/>
//                     )}
//                 </div>

//                 <div className="box" id='bt2' onClick={(e)=>{
//                   e.preventDefault();
//                   if(col.c2!==true){
//                   setcol({c1:false , c2:true , c3:false , c4:false , c5:false , c6:false , c7:false , c8:false });
//                   }
//                   let tpp = document.querySelector("#bt2");
//                   let tpp1 = document.querySelector(".color-picker");
//                   let note = temp1.current;
//                   // note.style.backgroundColor="color-mix(in srgb ,#666666, #F29F75)";
//                   note.style.backgroundColor="#61402F";
//                   tpp1.style.backgroundColor="#F29F75";
//                   tpp.style.border="2px solid #1A54B8";
//                   for(var i =1;i<=8;i++){
//                    if(i!==2){
//                     const tee="#bt";
//                     const val = (tee)+(i);
//                      const tppp = document.querySelector(val);
//                      console.log(tppp);
//                      tppp.style.border="2px solid black";
//                   }
//                  }
//                 }} style={{backgroundColor:"#F29F75"}} >
//                     {col.c2===true &&(
//                       <DoneOutlinedIcon className='bttn'/>
//                     )}
//                 </div>

//                 <div className="box" id='bt3' onClick={(e)=>{
//                   e.preventDefault();
//                   if(col.c3!==true){
//                   setcol({c1:false , c2:false , c3:true , c4:false , c5:false , c6:false , c7:false , c8:false });
//                   }
//                   let tpp = document.querySelector("#bt3");
//                   tpp.style.border="2px solid #1A54B8";
//                   let tpp1 = document.querySelector(".color-picker");
//                   let note = temp1.current;
//                   note.style.backgroundColor="#644743";
//                   tpp1.style.backgroundColor="#FAAFA9";
//                   for(var i =1;i<=8;i++){
//                    if(i!==3){
//                      const tp =`${i}`;
//                      const tppp = document.querySelector("#bt"+(tp));
//                      tppp.style.border="2px solid black";
//                   }
//                  }
//                 }} style={{backgroundColor:"#FAAFA9"}} >
//                     {col.c3===true &&(
//                       <DoneOutlinedIcon className='bttn'/>
//                     )}
//                 </div>

//                 <div className="box" id='bt4' onClick={(e)=>{
//                   e.preventDefault();
//                   if(col.c4!==true){
//                   setcol({c1:false , c2:false , c3:false , c4:true , c5:false , c6:false , c7:false , c8:false });
//                   }
//                   let tpp = document.querySelector("#bt4");
//                   tpp.style.border="2px solid #1A54B8";
//                   let tpp1 = document.querySelector(".color-picker");
//                   let note = temp1.current;
//                   note.style.backgroundColor="#625A58";
//                   tpp1.style.backgroundColor="#F5E2DC";
//                   for(var i =1;i<=8;i++){
//                    if(i!==4){
//                      const tp =`${i}`;
//                      const tppp = document.querySelector("#bt"+(tp));
//                      tppp.style.border="2px solid black";
//                   }
//                  }
//                 }} style={{backgroundColor:"#F5E2DC"}} >
//                     {col.c4===true &&(
//                       <DoneOutlinedIcon className='bttn'/>
//                     )}
//                 </div>
//                 </div>

//                 <div className="b1">
//                 <div className="box" id='bt5' onClick={(e)=>{
//                   e.preventDefault();
//                   if(col.c5!==true){
//                   setcol({c1:false, c2:false , c3:false , c4:false , c5:true , c6:false , c7:false , c8:false });
//                   }
//                   let tpp = document.querySelector("#bt5");
//                   tpp.style.border="2px solid #1A54B8";
//                   let tpp1 = document.querySelector(".color-picker");
//                   let note = temp1.current;
//                   note.style.backgroundColor="#485855";
//                   tpp1.style.backgroundColor="#B4DED4";
//                   for(var i =1;i<=8;i++){
//                    if(i!==5){
//                      const tp =`${i}`;
//                      const tppp = document.querySelector("#bt"+(tp));
//                      tppp.style.border="2px solid black";
//                   }
//                  }
//                 }} style={{backgroundColor:"#B4DED4"}} >
//                     {col.c5===true &&(
//                       <DoneOutlinedIcon className='bttn'/>
//                     )}
//                 </div>

//                 <div className="box" id='bt6' onClick={(e)=>{
//                   e.preventDefault();
//                   if(col.c6!==true){
//                   setcol({c1:false, c2:false , c3:false , c4:false , c5:false , c6:true , c7:false , c8:false });
//                   }
//                   let tpp = document.querySelector("#bt6");
//                   tpp.style.border="2px solid #1A54B8";
//                   let tpp1 = document.querySelector(".color-picker");
//                   let note = temp1.current;
//                   note.style.backgroundColor="#544C59";
//                   tpp1.style.backgroundColor="#D3BFDB";
//                         //     bg:"#D3BFDB",
//       //     bgshadow:"#544C59",
//                   for(var i =1;i<=8;i++){
//                    if(i!==6){
//                      const tp =`${i}`;
//                      const tppp = document.querySelector("#bt"+(tp));
//                      tppp.style.border="2px solid black";
//                   }
//                  }
//                 }} style={{backgroundColor:"#D3BFDB"}} >
//                     {col.c6===true &&(
//                       <DoneOutlinedIcon className='bttn'/>
//                     )}
//                 </div>

//                 <div className="box" id='bt7' onClick={(e)=>{
//                   e.preventDefault();
//                   if(col.c7!==true){
//                   setcol({c1:false, c2:false , c3:false , c4:false , c5:false , c6:false , c7:true , c8:false });
//                   }
//                   let tpp = document.querySelector("#bt7");
//                   tpp.style.border="2px solid #1A54B8";
//                   let tpp1 = document.querySelector(".color-picker");
//                   let note = temp1.current;
//                   note.style.backgroundColor="#67634A";
//                   tpp1.style.backgroundColor="#FFF8B9";
//                   for(var i =1;i<=8;i++){
//                    if(i!==7){
//                      const tp =`${i}`;
//                      const tppp = document.querySelector("#bt"+(tp));
//                      tppp.style.border="2px solid black";
//                   }
//                  }
//                 }} style={{backgroundColor:"#FFF8B9"}} >
//                     {col.c7===true &&(
//                       <DoneOutlinedIcon className='bttn'/>
//                     )}
//                 </div>

//                 <div className="box" id='bt8' onClick={(e)=>{
//                   e.preventDefault();
//                   if(col.c8!==true){
//                   setcol({c1:false, c2:false , c3:false , c4:false , c5:false , c6:false , c7:false , c8:true });
//                   }
//                   let tpp = document.querySelector("#bt8");
//                   tpp.style.border="2px solid #1A54B8";
//                   let tpp1 = document.querySelector(".color-picker");
//                   let note = temp1.current;
//                   note.style.backgroundColor="#475258";
//                   tpp1.style.backgroundColor="#AFCCDC";
//                   for(var i =1;i<=8;i++){
//                    if(i!==8){
//                      const tp =`${i}`;
//                      const tppp = document.querySelector("#bt"+(tp));
//                      tppp.style.border="2px solid black";
//                   }
//                  }
//                 }} style={{backgroundColor:"#AFCCDC"}} >
//                     {col.c8===true &&(
//                       <DoneOutlinedIcon className='bttn'/>
//                     )}
//                 </div>
//                 </div>
//               </div>
//               </div>
//   )
// }

// export default Colorpicker;