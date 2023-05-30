import React from 'react';
import '../../css/login.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Cal1 from '../../images/cal1.png';
import Cal2 from '../../images/cal2.png';
import { useNavigate } from 'react-router-dom'; 
import Wave from '../../images/register.png';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
const Login = () => {
    const navigate = useNavigate();
    const submit= ()=>{
        console.log("hello");
        navigate("/home");
      }
  return (
    <div className="login">
    <div className="div">
        <ArrowBackIosNewIcon className='icon' onClick={(e)=>{
           navigate("/");
        }} />
        <img className='ulta' src={Cal1} alt="" />
        <img className='ult' src={Cal2} alt="" />
        <h1>Welcome <br /> Back</h1>
    </div>
    <img src={Wave} alt="" />
    <form>
        <div className="box">
            <EmailIcon className='icon'/>
            <input className='input2' type="email" placeholder='email' />
        </div>
        <div className="box">
            <HttpsIcon className='icon'/>
            <input className='input3' type="password" placeholder='password' />
        </div>
        <div className="submit">
            <button className='btn' onClick={submit} >Login</button>
        </div>
    </form>
</div>
  )
}

export default Login;