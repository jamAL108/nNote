import React,{useState , useRef, useEffect}from 'react'
import Sidebar from '../components/sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import '../css/home.css';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Archives from '../components/archive.js';
import '../css/archive.css';
import { useNavigate } from 'react-router-dom';
import { CLOSED , ARCHIVESHADES , ARCHIVEGRID} from '../redux/propsactions';
import { useDispatch, useSelector } from 'react-redux';
const Archive=() =>{
  const navigate = useNavigate();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if(!user && !token){
       navigate("/");
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps 
 },[])
 useEffect(() => {
  // Update document title when component mounts
  document.title = 'nNote - Archive';
  // Clean up document title when component unmounts
  return () => {
      document.title = 'nNote';
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps 
}, []);
    useEffect(()=>{
        document.body.style.transition="all 0s";
      document.body.style.backgroundColor="#ffffff";
      document.body.style.overflow="scroll";
    },[]);
const reffi = useRef(null);
const refu = useRef(null);
const dispatch= useDispatch();
const temp5 = useRef(null);
const store = useSelector((state)=>state);
const [sidebar , setsidebar] = useState(false);
const [grid,setgrid]=useState(true);
const [cross , setcross] =useState(false);
const [serh , setserh] =useState(true);
const [action , setaction] =useState(false);
let prevScrollPos = window.pageYOffset;
var currentPageUrl = window.location.href;
var pageName = currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1);
console.log(pageName);
if(pageName==='archive'){
window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset;
  let nav = document.querySelector(".nav");
  // console.log(prevScrollPos);
  // console.log("hey");
  if(nav!==null){
  if (prevScrollPos > currentScrollPos) {
    nav.style.position="sticky";
    nav.style.top="2.5%";
    nav.style.zIndex="3";
  } else {
    nav.style.position="relative";
    nav.style.zIndex="0";
  }
  prevScrollPos = currentScrollPos;
}
});
}
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

 useEffect(()=>{
  if(store.props.closed===true){
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
    dispatch({type:CLOSED , payload:false});
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
 },[store.props.closed])

return (
  <>         
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
            dispatch({type:ARCHIVESHADES , payload:true});
            temp1.classList.add('show');
            const reff = refu.current;
            reff.classList.add('dark');
            const refff = temp5.current;
            refff.classList.add('dark');
            document.body.style.backgroundColor = "#605e5e";
            document.body.style.overflow="hidden";
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            temp1.style.top=`${scrollTop}px`;
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
          dispatch({type:ARCHIVEGRID , payload:grid});
         }} >
        {grid ? <GridViewIcon className='bttn'/> : <SplitscreenIcon className='bttn'/>}
     </div>
     </div>

 </nav>
    <div ref={reffi} className="side hide">
     <Sidebar  />
     </div>
 <div className="main">
     <Archives/>
 </div>
  </div>
  </>
)
}

export default Archive;