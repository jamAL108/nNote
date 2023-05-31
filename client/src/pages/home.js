import React,{useState , useRef}from 'react'
import Sidebar from '../components/sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import '../css/home.css';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Home = () => {
  const reffi = useRef(null);
  const [sidebar , setsidebar] = useState(false);
  const [grid,setgrid]=useState(false);
  const [cross , setcross] =useState(false);
  const [serh , setserh] =useState(true);
  const [action , setaction] =useState(false);
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    let nav = document.querySelector(".nav");
    if (prevScrollPos > currentScrollPos) {
      nav.style.position="sticky";
      nav.style.top="2.5%";
      nav.style.zIndex="100";
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
  return (
    <div className="home">
      <nav className="nav">
      {sidebar===true &&(
           <CloseIcon  onClick={(e)=>{
            e.preventDefault();
              setsidebar(false);
              const temp =reffi.current;
              console.log(temp);
              if(temp.classList.contains('show')){
                console.log("hey");
                temp.classList.remove('show');
              }
              temp.classList.add('hide');
          }}/>
        )}
            <div className="left">
            <div className="move">
           <MenuIcon  onClick={(e)=>{
              const temp1 =reffi.current;
            e.preventDefault();
              setsidebar(true);
              console.log(temp1);
              if(temp1.classList.contains('hide')){
                console.log("hey");
                temp1.classList.remove('hide');
              }
              temp1.classList.add('show');
              console.log(temp1);
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
           }} >
          {grid ? <GridViewIcon className='bttn'/> : <SplitscreenIcon className='bttn'/>}
       </div>
       </div>

   </nav>
              <div ref={reffi} className="side hide">
             <Sidebar  />
             </div>

   <div className="main">
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita sed aliquam possimus mollitia atque qui placeat accusamus quam saepe, deserunt excepturi dolor, veritatis quibusdam cum provident ducimus ex. In magnam vel quo aspernatur explicabo recusandae asperiores qui ut fugit tenetur consequuntur temporibus blanditiis unde distinctio a quas quisquam consequatur, impedit illum. Eveniet, ex harum. Labore tempora ratione architecto fugiat, harum voluptate nulla ipsa veniam consequuntur rerum odit nesciunt sed, voluptates odio! Sed velit totam eaque unde, soluta aut delectus corporis sapiente quaerat cupiditate at reprehenderit maxime accusantium iste rem quis minus quae fuga neque sint nesciunt omnis perferendis recusandae ab. Rerum, nostrum qui. Hic cupiditate sit atque debitis exercitationem, dolorem, quod adipisci placeat molestiae dolore fugit sapiente explicabo molestias enim et numquam. Expedita quam quos laudantium dicta! Cumque ad dolores quam sapiente esse tenetur nostrum aliquam nesciunt consectetur eveniet, reiciendis repellendus quis necessitatibus impedit enim! Ut quas qui tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error saepe ut eligendi accusantium, officia consequatur cum nam maiores ipsum quia obcaecati aut, ex magni doloribus esse vero minima enim quis in. Quis non ea, beatae nemo quaerat obcaecati architecto consequatur facilis voluptate praesentium nisi impedit aspernatur amet, natus earum modi eos temporibus labore, sapiente enim eligendi necessitatibus minus! Veniam accusantium explicabo voluptatum voluptates architecto dolorum, facere, consectetur corrupti, voluptatem vero recusandae officiis quidem. Alias sapiente voluptates, delectus nostrum architecto veniam eveniet ut itaque sequi ab quidem culpa, amet suscipit expedita quas eius enim dolorum rem nulla? Est exercitationem totam eligendi id. Architecto excepturi laborum, omnis vitae, repellendus ratione quos eos placeat officiis saepe quam corporis aliquid animi voluptates possimus hic deleniti quas nam nihil itaque minus? Ratione, obcaecati rem modi qui incidunt ab! Accusantium pariatur voluptatem dolorum molestiae, similique amet voluptatum veritatis nam, veniam excepturi quam exercitationem optio tempora, cum odit. Eum omnis aperiam enim autem aliquid libero ab dolores eaque error sint, vitae fugit vel laudantium har </p>
   </div>
    </div>
  )
}

export default Home;