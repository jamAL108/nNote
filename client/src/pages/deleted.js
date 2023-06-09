import React,{useState , useRef , useEffect }from 'react'
import Sidebar from '../components/sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import '../css/home.css';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import MenuIcon from '@mui/icons-material/Menu';
import '../css/deleted.css';
import { CLOSED, DELETEDSHADES , DELETEDGRID  } from '../redux/propsactions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Deleteddd from '../components/deleted.js';
const Deleted = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Update document title when component mounts
    document.title = 'nNote - deleted';
    // Clean up document title when component unmounts
    return () => {
        document.title = 'nNote';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if(!user && !token){
       navigate("/");
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
  useEffect(()=>{
    document.body.style.transition="all 0s";
    document.body.style.overflow="scroll";
  document.body.style.backgroundColor="#ffffff";
},[]);
  const reffi = useRef(null);
  const refu = useRef(null);
  const store = useSelector((state)=>state);
  const dispatch = useDispatch();
  const temp5 = useRef(null);
  const [sidebar , setsidebar] = useState(false);
  const [grid,setgrid]=useState(true);
  let prevScrollPos = window.pageYOffset;
  var currentPageUrl = window.location.href;
  var pageName = currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1);
  console.log(pageName);
  if(pageName==='deleted'){
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
    <div ref={refu} className="home" id='deleted'>
      <nav ref={temp5} className="nav">
            <div className="left">
            <div className="move">
           <MenuIcon className='bttn' id="helo"  onClick={(e)=>{
              const temp1 =reffi.current;
            e.preventDefault();
            dispatch({type:DELETEDSHADES,payload:true});
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
          }}/>
            </div>
        <h2 className='title' >Deleted</h2>
    </div>
    
    <div className="right">
       <div className="grid" onClick={(e)=>{
            setgrid(!grid);
            dispatch({type:DELETEDGRID , payload:grid});
           }} >
          {grid ? <GridViewIcon className='bttn'/> : <SplitscreenIcon className='bttn'/>}
       </div>
       </div>

   </nav>
  <div ref={reffi} className="side hide">
 <Sidebar  />
  </div>

   <div className="main">
       <Deleteddd/>
   </div>
    </div>
    </>
  )
}

export default Deleted;