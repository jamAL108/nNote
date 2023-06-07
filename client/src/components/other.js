// import React,{useState , useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import './pinned.css';
// const Other = () => {
//   const dispatch = useDispatch();
//   const store = useSelector((state)=>state);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [other,setother] = useState([]);
//   const [showother , setshowother] = useState(false);
//   useEffect(()=>{
//      if(user.info.note.length!==0){
//       function pin(n) {
//         if (n.pin !==true && n.archive!==true)
//           return true;
//         else
//           return false;
//       }
//       const tew = user.info.note.filter(pin);
//       let array =[...tew];
//       if(array.length!==0){
//        for(var i=0;i<array.length;i++){
//          let short="";
//          if(array[i].note.length>150){
//              short=array[i].note.slice(0, 151);
//              short=short+"...";
//          }else{
//            short=array[i].note;
//          }
//          array[i].short=short;
//        }
//       }
//       setshowother(true);
//       setother(array);
//      }
//             // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])
//   return (
//   )
// }

// export default Other;