import React,{useState , useEffect} from 'react'
import {  useSelector } from 'react-redux';
import './template.css';
const Pinned = () => {
  const store = useSelector((state)=>state);
  const user = JSON.parse(localStorage.getItem("user"));
  const [pinned,setpinned] = useState([]);
  const [show , setshow] = useState(false);
  const [other,setother] = useState([]);
  const [showother , setshowother] = useState(false);
  useEffect(()=>{
     if(user.info.note.length!==0){
      function pin(n) {
        if (n.pin ===true)
          return true;
        else
          return false;
      }
      function other(n) {
        if (n.pin !==true && n.archive!==true)
          return true;
        else
          return false;
      }
      const tew = user.info.note.filter(pin);
      let array =[...tew];
      if(array.length!==0){
       for(var i=0;i<array.length;i++){
         let short="";
         if(array[i].note.length>300){
             short=array[i].note.slice(0, 151);
             short=short+"...";
         }else{
           short=array[i].note;
         }
         array[i].short=short;
       }
      }

      const tew1 = user.info.note.filter(other);
      let array1 =[...tew1];
      if(array1.length!==0){
       for( i=0;i<array1.length;i++){
         let short="";
         if(array1[i].note.length>300){
             short=array1[i].note.slice(0, 151);
             short=short+"...";
         }else{
           short=array1[i].note;
         }
         array1[i].short=short;
       }
      }
      setshowother(true);
      setother(array1);
      setshow(true);
      setpinned(array);
     }
            // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  useEffect(()=>{
    console.log(store.props.grid);
      if(store.props.grid===true){
         const idd = document.querySelector(".item1");
         if(idd!=null){
         idd.style.display="grid";
         idd.style.gridTemplateColumns="49% 49%";
         idd.style.gridColumnGap="2%";
         idd.style.gridAutoRows="auto";
         idd.style.gridAutoColumns="auto";
      }

      const idd1 = document.querySelector(".item2");
      if(idd1!=null){
      idd1.style.display="grid";
      idd1.style.gridTemplateColumns="49% 49%";
      idd1.style.gridColumnGap="2%";
      idd1.style.gridAutoRows="auto";
      idd1.style.gridAutoColumns="auto";
    }

// const noote = document.getElementsByClassName(".note");
// console.log(noote);
//     if(noote!==null){
//       noote.style.justifyContent="flex-start";
//       noote.style.height="fit-content";
//     }

    }

      if(store.props.grid===false){
        const idd = document.querySelector(".item1");
        if(idd!=null){
        idd.style.display="flex";
        idd.style.flexDirection="column";
        idd.style.justifyContent="flex-start";
        }

        const idd2 = document.querySelector(".item2");
        if(idd2!=null){
        idd2.style.display="flex";
        idd2.style.flexDirection="column";
        idd2.style.justifyContent="flex-start";
        }
        // const noote = document.querySelectorAll(".note");
        // console.log(noote);
        // if(noote!==null){
        //   noote.style.justifyContent="center";
        //   noote.style.height="auto";
        // }
      }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.props.grid]);

  return (
    <>

    <div className="pinned">
      <p className='heading'>pinned</p>
      {show===false && pinned.length===0 &&(
        <p>No pinned note available</p>
      )}
      {show===true && pinned.length!==0 &&(
          <div className="item1" >
             {pinned.map((item,idx)=>(
              <div className="note" id={`note${idx+1}`} key={idx} style={{backgroundColor:item.bg , fontFamily:item.fontstyle}}>
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                  </div>
              ))}
          </div>
      )}
    </div>



<div className="pinned">
<p className='heading'>Others</p>
{showother===false && other.length===0 &&(
  <p>No pinned note available</p>
)}
{showother===true && other.length!==0 &&(
    <div className="item2" >
       {other.map((item,idx)=>(
        <div className="note" id={`note${idx+1}`} key={idx} style={{backgroundColor:item.bg , fontFamily:item.fontstyle}}>
            <h3>{item.title}</h3>
            <p>{item.short}</p>
            </div>
        ))}
    </div>
)}
</div>

</>
)}

export default Pinned;
