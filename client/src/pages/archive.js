import React,{useState , useRef, useEffect}from 'react'
import Sidebar from '../components/sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import '../css/home.css';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../css/archive.css';
const Archive=() =>{
    useEffect(()=>{
        document.body.style.transition="all 0s";
      document.body.style.backgroundColor="#ffffff";
    },[]);
const reffi = useRef(null);
const refu = useRef(null);
const temp6 = useRef(null);
const temp5 = useRef(null);
const [sidebar , setsidebar] = useState(false);
const [grid,setgrid]=useState(false);
const [cross , setcross] =useState(false);
const [serh , setserh] =useState(true);
const [action , setaction] =useState(false);
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset;
  let nav = document.querySelector(".nav");
  console.log(prevScrollPos);
  if (prevScrollPos > currentScrollPos) {
    nav.style.position="sticky";
    nav.style.top="2.5%";
    nav.style.zIndex="3";
  } else {
    nav.style.position="relative";
    nav.style.zIndex="0";
  }
  prevScrollPos = currentScrollPos;
});
 const search = ()=>{
   const title = document.querySelector(".title");
   console.log(title);
   title.classList.add('hide');
   console.log(title);
   const serch = document.querySelector('.search');
   serch.classList.add('span');
   setcross(true);
   setserh(false);
   setaction(true);
 };
 console.log(sidebar);
return (
  <>
          <div ref={temp6} className="great">
         <CloseIcon id='gret' onClick={(e)=>{
          e.preventDefault();
            setsidebar(false);
            const temp =reffi.current;
            console.log(temp);
            if(temp.classList.contains('show')){
              console.log("hey");
              temp.classList.remove('show');
            }
            temp.classList.add('hide');
            const reff = refu.current;
            reff.classList.remove('dark');
            const refff = temp5.current;
            refff.classList.remove('dark');
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.overflow="scroll";
            let tp = temp6.current;
            tp.style.zIndex="0";
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            scrollTop+=8;
            tp.style.color="transparent";
            tp.style.top=`${scrollTop}px`;
        }}/>
        </div>
           
<div ref={refu} className="home" id='archive'>
    <nav ref={temp5} className="nav">
          <div className="left">
          <div className="move">
         <MenuIcon className='bttn' id="helo"  onClick={(e)=>{
            const temp1 =reffi.current;
          e.preventDefault();
            setsidebar(true);
            if(temp1.classList.contains('hide')){
              console.log("hey");
              temp1.classList.remove('hide');
            }
            temp1.classList.add('show');
            const reff = refu.current;
            reff.classList.add('dark');
            const refff = temp5.current;
            refff.classList.add('dark');
            document.body.style.backgroundColor = "#605e5e";
            document.body.style.overflow="hidden";
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            temp1.style.top=`${scrollTop}px`;
            let tp = temp6.current;
            tp.style.zIndex="7";
            scrollTop+=8;
            tp.style.color="#283848";
            tp.style.top=`${scrollTop}px`;
        }}/>
          </div>
      <h2 className='title' >Archive</h2>
  </div>
  
  <div className="right">
     {action===true &&(
        <input type="text" placeholder='Search Your Note' />
     )}
     <div className="search">
      {serh===true && (
      <SearchIcon onClick={search} className='bttn' />
      )}
      { cross===true && (
        <CloseIcon className='bttn'  onClick={(e)=>{
          setcross(false);
          setserh(true);
          setaction(false);
          const title = document.querySelector(".title");
          title.classList.remove('hide');
          const serch = document.querySelector('.search');
          serch.classList.remove('span');
        }}/>
      )}
     </div>
     <div className="grid" onClick={(e)=>{
          setgrid(!grid);
         }} >
        {grid ? <GridViewIcon className='bttn'/> : <SplitscreenIcon className='bttn'/>}
     </div>
     </div>

 </nav>
    <div ref={reffi} className="side hide">
     <Sidebar  />
     </div>
 <div className="main">
   <p> um architecto veniam eveniet ut itaque sequi ab quidem culpa, amet suscipit expedita quas eius enim dolorum rem nulla? Est exercitationem totam eligendi id. Architecto excepturi laborum, omnis vitae, repellendus ratione quos eos placeat officiis saepe quam corporis aliquid animi voluptates possimus hic deleniti quas nam nihil itaque minus? Ratione, obcaecati rem modi qui incidunt ab! Accusantium pariatur voluptatem dolorum molestiae, similique amet voluptatum veritatis nam, veniam excepturi quam exercitationem optio tempora, cum odit. Eum omnis aperiam enim autem aliquid libero ab dolores eaque error sint, vitae fugit vel laudantium har </p>
 </div>
  </div>
  </>
)
}

export default Archive;