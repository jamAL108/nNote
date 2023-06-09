import React,{useEffect} from 'react'
import Background from "../images/background2.jpg";
import "../css/outer.css";
import { useNavigate } from 'react-router-dom'; 
const Outer = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const token =JSON.parse(localStorage.getItem("token"));
    console.log(token);
    if(token){
    const currentDate = new Date();
    const expirationDate = new Date(token.expiresIn);
    if(currentDate<expirationDate){
      console.log(token);
       navigate("/home");
    }else{
      localStorage.removeItem("token");
    }
  }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(() => {
    // Update document title when component mounts
    document.title = 'nNote';
    // Clean up document title when component unmounts
    return () => {
        document.title = 'nNote';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);
  const data ={
    index:0
  }
  localStorage.setItem("sidebar",JSON.stringify({data}));
  return (
    <div className="outer">
    <div className="image">
      <img src={Background} alt="bgpic" />
    </div>
    <div className="texts">
      <h2>All Your <span className='change'>Notes</span> In <br />One Place</h2>
      <p>Take notes & manage yout notes <br /> with eaise on sticky</p>
    </div>
    <div className="getstarted">
      <button className='btn' onClick={(e)=>{
        navigate("/register");
      }} >Create Account</button>
      <button className='btn' onClick={(e)=>{
        navigate("/login");
      }}>Log in</button>
     </div>
    </div>
  )
}

export default Outer;