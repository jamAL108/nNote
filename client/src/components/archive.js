import React,{useState , useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import './template.css';
import { FONTSE, OLDNOTE , ARCHIVESHADES } from '../redux/propsactions';
import { useNavigate } from 'react-router-dom';
const Pinned = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state)=>state);
  const user = JSON.parse(localStorage.getItem("user"));
  const [archive,setarchive] = useState([]);
  const [show , setshow] = useState(false);
  useEffect(()=>{
    dispatch({type:ARCHIVESHADES , payload:false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
     if(user.info.note.length!==0){
      function archive(n) {
        if (n.archive ===true)
          return true;
        else
          return false;
      }
      const tew = user.info.note.filter(archive);
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
      setshow(true);
      setarchive(array);
     }
            // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  useEffect(()=>{
    console.log(store.props.archivegrid);
      if(store.props.archivegrid===true){
         const idd = document.querySelector(".item1");
         if(idd!=null){
         idd.style.display="grid";
         idd.style.gridTemplateColumns="49% 49%";
         idd.style.gridColumnGap="2%";
         idd.style.gridAutoRows="auto";
         idd.style.gridAutoColumns="auto";
      }
    }

      if(store.props.archivegrid===false){
        const idd = document.querySelector(".item1");
        if(idd!=null){
        idd.style.display="flex";
        idd.style.flexDirection="column";
        idd.style.justifyContent="flex-start";
        }
      }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.props.archivegrid]);

  useEffect(()=>{
    console.log(store.props.archiveshades);
    if(store.props.archiveshades===true && show===true && archive.length!==0){
          const s1 = document.querySelector(".item1");
          for(var i=0;i<s1.childNodes.length;i++){
            s1.childNodes[i].style.backgroundColor=archive[i].bgcolor;
          }
      }
      if(store.props.archiveshades===false && show===true && archive.length!==0){
        const s1 = document.querySelector(".item1");
        for( i=0;i<s1.childNodes.length;i++){
           s1.childNodes[i].style.backgroundColor=archive[i].bg;
        }
      } 
             // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.props.archiveshades])

  return (
    <>
    <div className="pinned">
      <p className='heading'>Archive</p>
      {show===false && archive.length===0 &&(
        <p>No pinned note available</p>
      )}
      {show===true && archive.length!==0 &&(
          <div className="item1" >
             {archive.map((item,idx)=>(
              <div className="note" onClick={(e)=>{
                e.preventDefault();
                dispatch({type:FONTSE ,payload:item.fontstyle});
                localStorage.setItem("temp",JSON.stringify(item));
                dispatch({type:OLDNOTE , payload:true});
                navigate('/viewnote');
              }} id={`note${idx+1}`} key={idx} style={{backgroundColor:item.bg , fontFamily:item.fontstyle}}>
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