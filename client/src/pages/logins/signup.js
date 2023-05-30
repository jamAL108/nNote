import React ,{useState}from 'react';
import "../../css/register.css";
import Wave from '../../images/register.png';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import Cal1 from '../../images/cal1.png';
import Cal2 from '../../images/cal2.png';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [value, setvalue] =useState({
        username:"",
        email:"",
        password:""
    });
    const submit= ()=>{
    //    dispatch(login())
    }
    // let input1 = document.querySelector(".input1");
    // input1.addEventListener('click',function(){
    //     let box = document.querySelector("#box1");
    //     let icon = document.querySelector('#icon1');
    //     box.style.borderBottom='2px solid #0099ff';
    //     icon.style.color='#0099ff';
    //     input1.style.color='#0099ff';
    // });
    // let input2 = document.querySelector(".input2");
    // input2.addEventListener('click',function(){
    //     let box = document.querySelector("#box2");
    //     let icon = document.querySelector('#icon2');
    //     box.style.borderBottom='2px solid #0099ff';
    //     icon.style.color='#0099ff';
    //     input2.style.color='#0099ff';
    // });
    // let input3 = document.querySelector(".input3");
    // input3.addEventListener('click',function(){
    //     let box = document.querySelector("#box3");
    //     let icon = document.querySelector('#icon3');
    //     box.style.borderBottom='2px solid #0099ff';
    //     icon.style.color='#0099ff';
    //     input3.style.color='#0099ff';
    // });

    // document.addEventListener("click", function (event) {
    //     const clickedElement = event.target.parentNode;
    //     if(cl)
    //     clickedElement.style.borderBottom='2px solid #0099ff';
    //   });

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
            <div className="box" id='box1'>
                <Person2Icon className='icon' id='icon1'/>
                <input className='input1' type="text" placeholder='username' value={value.username} onChange={(e)=>{
                    setvalue({...value ,username:e.target.value})
                }} />
            </div>
            <div className="box" id='box2'>
                <EmailIcon className='icon' id='icon2' />
                <input className='input2' type="email" placeholder='email' value={value.email} onChange={(e)=>{
                    setvalue({...value ,email:e.target.value})
                }}  />
            </div>
            <div className="box" id='box3'>
                <HttpsIcon className='icon' id='icon3' />
                <input className='input3' type="password" placeholder='password' value={value.password} onChange={(e)=>{
                    setvalue({...value ,password:e.target.value})
                }}  />
            </div>
            <div className="submit">
                <button type='submit' className='btn' onClick={submit} >Create Account</button>
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