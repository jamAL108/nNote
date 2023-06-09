import React,{useState , useRef , useEffect }from 'react'
import Sidebar from '../components/sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import '../css/home.css';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { NEWNOTE , GRID , CLOSED , SHADES  } from '../redux/propsactions';
import { useDispatch, useSelector } from 'react-redux';
import Template from '../components/template';
const Home = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = 'nNote - Home';
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
  document.body.style.backgroundColor="#ffffff";
  document.body.style.overflow="scroll";
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
 const store= useSelector((state)=>state);
  const reffi = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refu = useRef(null);
  const temp5 = useRef(null);
  const temp7 = useRef(null);
  const temp8 = useRef(null);
  const [sidebar , setsidebar] = useState(false);
  const [grid,setgrid]=useState(true);
  const [cross , setcross] =useState(false);
  const [serh , setserh] =useState(true);
  const [action , setaction] =useState(false);
  const col = [true,true,false,false,false,false,false,false,false];
  const fon = [true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  let allfont =[
    'hi',
  'Roboto',
'Vampire',
'Karma',
    'rajdhani',
  'caveat',
'Raleway',
'Shadows',
      'Zeyada',
      'GreatVibe',
      'Geologica',
      'Gruppo',
        'Poppins',
      'DancingScript',
      'Kalam',
      'Sarpanch',
'FugazOne' ];
  let prevScrollPos = window.pageYOffset;
  var currentPageUrl = window.location.href;
var pageName = currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1);
//console.log(pageName);

if(pageName==="home"){
  //console.log(pageName);
   window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    let nav = document.querySelector(".nav");
    //console.log(prevScrollPos);
    //console.log("hey");
    //console.log(nav);
    if(nav!==null){
      console.log("heyyy");
    if (prevScrollPos > currentScrollPos) {
      nav.style.position="sticky";
      nav.style.top="2.5%";
      nav.style.zIndex="3";
    }else {
      nav.style.position="relative";
      nav.style.zIndex="0";
    }
    prevScrollPos = currentScrollPos;
  }
  });
}else{
  console.log("hey");
}
  console.log(sidebar);
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
   useEffect(()=>{
    console.log(store.props.outer);
      // if(store.props.outer===true){
          localStorage.removeItem("temp");
          console.log("hello");
        // dispatch({type:OUTER , payload:false});
      // }
         // eslint-disable-next-line react-hooks/exhaustive-deps
   },[store.props.outer]);

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
      // let tp = temp6.current;
      // tp.style.zIndex="0";
      // var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      // scrollTop+=8;
      // tp.style.color="transparent";
      // tp.style.top=`${scrollTop}px`;
      let tpp = temp7.current;
      tpp.style.backgroundColor="#EFF4FA";
      dispatch({type:CLOSED , payload:false});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
   },[store.props.closed])

  return (
    <>
            {/* <div ref={temp6} className="great">
           <CloseIcon id='gret' onClick={(e)=>{
            e.preventDefault();
              
          }}/>
          </div> */}
    <div ref={refu} className="home">
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
              dispatch({type:SHADES , payload:true});
              console.log("done");
              temp1.classList.add('show');
              const reff = refu.current;
              reff.classList.add('dark');
              const refff = temp5.current;
              refff.classList.add('dark');
              document.body.style.backgroundColor = "#605e5e";
              document.body.style.overflow="hidden";
              var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
              temp1.style.top=`${scrollTop}px`;
              let tpp = temp7.current;
              tpp.style.backgroundColor="#616264";
          }}/>
            </div>
        <h2 className='title' >Nnote</h2>
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
            dispatch({type:GRID , payload:grid});
           }} >
          {grid ? <GridViewIcon className='bttn'/> : <SplitscreenIcon className='bttn'/>}
       </div>
       </div>

   </nav>
              <div ref={reffi} className="side hide">
             <Sidebar  />
             </div>

   <div className="main">
      <Template/>
   </div>




    <div ref={temp7} className="fixed" >
      <AddIcon ref={temp8} className='icons'  onClick={(e)=>{
      e.preventDefault();
      let tp = temp8.current;
      let tpp = temp7.current;
      tp.style.display="none";
      tpp.style.width="100vw";
      tpp.style.height="100vh";
      tpp.style.backgroundColor="white";
      let font="";
      for(var i=1;i<allfont.length;i++){
          if(fon[i]===true){
              font=allfont[i];
              break;
          }
      }
      let data = {
        bg:"#ffffff",
        bgcolor:"#666666",
        fontstyle:font,
        fonts:fon,
        title:"",
        note:"",
        color:col,
        pin:false,
        archive:false,
      }
      console.log("heelooooooooo");
      console.log(data.fontstyle);
      localStorage.setItem("temp",JSON.stringify(data));
      dispatch({type:NEWNOTE,payload:true});
      navigate("/addnote");
    }} />
    </div>
    </div>
    </>
  )
}

export default Home;
