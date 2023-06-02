import React, { useState ,useRef, useEffect } from 'react';
import '../../css/login.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Cal1 from '../../images/cal1.png';
import Cal2 from '../../images/cal2.png';
import { useNavigate } from 'react-router-dom'; 
import Wave from '../../images/register.png';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { login } from '../../redux/action/useraction';
import { useDispatch, useSelector } from 'react-redux';
import { LOGINERROR } from '../../redux/actiontypes';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const temp1 = useRef(null);
    const [smallerror,setsmallerror]=useState("");
    const [error,seterror]=useState("");
    const [value , setvalue] = useState({
        email:"",
        password:""
    });
    const store = useSelector((state)=>state);
    useEffect(()=>{
      if(Object.keys(store.user.loginerror).length!==0){
        seterror(store.user.loginerror);
      }
      console.log(error);
      let temp1 = document.querySelector("#box3");
      temp1.style.marginBottom="1.3rem";
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[store.user.loginerror]);
  return (
    <div className="login">
    <div className="div">
        <ArrowBackIosNewIcon className='icon' onClick={(e)=>{
           navigate(-1);
        }} />
        <img className='ulta' src={Cal1} alt="" />
        <img className='ult' src={Cal2} alt="" />
        <h1>Welcome <br /> Back</h1>
    </div>
    <img src={Wave} alt="" />
    <form>
        <div className="box">
            <EmailIcon className='icon'/>
            <input className='input2' type="email" placeholder='email' value={value.email}  onChange={(e)=>{
                setvalue({...value , email:e.target.value});
                setsmallerror("");
                seterror("");
                dispatch({type:LOGINERROR , payload:{}});
                let temp1 = document.querySelector("#box3");
                temp1.style.marginTop="1.3rem";
            }} />
        </div>
        <div ref={temp1} className="box" id='box3' >
            <HttpsIcon className='icon'/>
            <input className='input3' type="password" placeholder='password' value={value.password} onChange={(e)=>{
                setvalue({...value , password:e.target.value});
                setsmallerror("");
                seterror("");
                dispatch({type:LOGINERROR , payload:{}});
                let temp1 = document.querySelector("#box3");
                temp1.style.marginBttom="1.3rem";
            }} />
        </div>
        {(smallerror.length!==0 || error.length!==0) &&(
            <span>{smallerror}  {error.emailError} {error.passwordError}</span>
        )}
        
        <div className="submitt">
    <button className='bttttn' onClick={(e)=>{
        e.preventDefault();
        if(value.email.length===0 || value.password.length===0 ){
            setsmallerror("please enter the details properly");
            let temp1 = document.querySelector("#box3");
            temp1.style.marginBottom="1.3rem";
        }else{
            dispatch(login(value,navigate));
        }
    }}>Login</button>
        </div>
    </form>
</div>
  )
}

export default Login;