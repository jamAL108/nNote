// import React from 'react';
// import Sidebar from './sidebar';
// import GridViewIcon from '@mui/icons-material/GridView';
// import SplitscreenIcon from '@mui/icons-material/Splitscreen';
// import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// const Header = () => {
//   const [sidebar , setsidebar] = useState(false);
//   const [grid,setgrid]=useState(false);
//   window.addEventListener=("scroll",function(){
//       let nav = document.querySelector(".nav");
//       nav.classList.toggle("active" , window.scrollY < 100);
//   });


//   return (
//     <nav className="nav">
//       {/* <div className="btn" onClick={()=>{
//                 setsidebar(!sidebar);
//             }}>{sidebar ? <CloseIcon className='bttn'/> : <MenuIcon className='bttn'/>}</div> */}
//             <div className="move">
//               <MenuIcon className='bttn' onClick={(e)=>{
//                setsidebar(true);
// }} />
//             </div>
//             {sidebar===true && (
//              <Sidebar/>
//             )}
//     <div className="title">
//         <h2>Nnote</h2>
//     </div>
//        <div className="serach">
//         <SearchIcon/>
//        </div>
//        <div className="grid">
           
//        </div>
//    </nav>
//   )
// }

// export default Header;