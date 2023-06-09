import React,{useState , useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import './template.css';
import {   DELETEDSHADES } from '../redux/propsactions';
import { restore } from '../redux/action/useraction';
const Pinned = () => {
  const dispatch = useDispatch();
  const store = useSelector((state)=>state);
  const user = JSON.parse(localStorage.getItem("user"));
  const [deleted,setdeleted] = useState([]);
  const [show , setshow] = useState(false);
  const [temp,settemp]=useState({});
  useEffect(()=>{
    dispatch({type:DELETEDSHADES , payload:false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
     if(user.info.del.length!==0){
        let array1 =[...user.info.del];
      if(array1.length!==0){
       for(var i=0;i<array1.length;i++){
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
      setdeleted(array1);
      setshow(true);
     }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  useEffect(()=>{
    console.log(store.props.deletedgrid);
      if(store.props.deletedgrid===true){
         const idd = document.querySelector(".item1");
         if(idd!=null){
         idd.style.display="grid";
         idd.style.gridTemplateColumns="49% 49%";
         idd.style.gridColumnGap="2%";
         idd.style.gridAutoRows="auto";
         idd.style.gridAutoColumns="auto";
      }
    }
      if(store.props.deletedgrid===false){
        const idd = document.querySelector(".item1");
        if(idd!=null){
        idd.style.display="flex";
        idd.style.flexDirection="column";
        idd.style.justifyContent="flex-start";
        }
      }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.props.deletedgrid]);

  useEffect(()=>{
    if(store.props.deletedshades===true && show===true && deleted.length!==0){
          const s1 = document.querySelector(".item1");
          for(var i=0;i<s1.childNodes.length;i++){
            s1.childNodes[i].style.backgroundColor=deleted[i].bgcolor;
          }
      }
      if(store.props.deletedshades===false && show===true && deleted.length!==0){
        const s1 = document.querySelector(".item1");
        for( i=0;i<s1.childNodes.length;i++){
           s1.childNodes[i].style.backgroundColor=deleted[i].bg;
        }
      } 
             // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.props.deletedshades])
const [done ,setdone] =useState(false);

  useEffect(()=>{
    if(done===true){
          user.info.del=deleted;
          temp.pin=false;
          temp.archive=false;
          temp.idx=user.info.totalnote;
          user.info.note.push(temp);
          const data={
            temp:temp,
            id:user.info.id
          }
          if(temp){
          dispatch(restore(data));
          }
          if(deleted.length===0){
            setshow(false);
          }
          user.info.totalnote++;
          localStorage.setItem("user",JSON.stringify(user));
          setdone(false);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[done])
  return (
    <>

    <div className="pinned">
      <p className='heading'>Deleted</p>
      <p>Double tap OR Double click to restore a Note</p>
      {show===false && deleted.length===0 &&(
        <p>No deleted note in the past 28 days</p>
      )}
      {show===true && deleted.length!==0 &&(
          <div className="item1" >
             {deleted.map((item,idx)=>(
              <div className="note" onDoubleClick={(e)=>{
                e.preventDefault();
                   console.log("heyy");
                   settemp(item);
                   deleted.splice(idx,1);
                   setdone(true);
              }}  id={`note${idx+1}`} key={idx} style={{backgroundColor:item.bg , fontFamily:item.fontstyle}}>
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
