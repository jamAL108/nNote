import React from 'react';
import "../../css/register.css";
import Wave from '../../images/register.png';
import { useNavigate } from 'react-router-dom'; 
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import Cal1 from '../../images/cal1.png';
import Cal2 from '../../images/cal2.png';
const Signup = () => {
    const navigate = useNavigate();
    const submit= ()=>{
      console.log("hello");
    }
  return (
    <div className="register">
        <div className="div">
            <ArrowBackIosNewIcon className='icon' onClick={(e)=>{
               navigate("/");
            }} />
                    <img className='ulta' src={Cal1} alt="" />
        <img className='ult' src={Cal2} alt="" />
            <h1>Create <br /> Account</h1>
        </div>
        <img src={Wave} alt="" />
        <form>
            <div className="box">
                <Person2Icon className='icon'/>
                <input className='input1' type="text" placeholder='username' />
            </div>
            <div className="box">
                <EmailIcon className='icon'/>
                <input className='input2' type="email" placeholder='email' />
            </div>
            <div className="box">
                <HttpsIcon className='icon'/>
                <input className='input3' type="password" placeholder='password' />
            </div>
            <div className="submit">
                <button className='btn' onClick={submit} >Create Account</button>
                <p>or</p>
                <button className='bttn' onClick={(e)=>{
                    navigate("/login");
                }}>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Signup;