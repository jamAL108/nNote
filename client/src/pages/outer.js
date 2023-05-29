import React from 'react'
import Background from "../images/background2.jpg";
import "../css/outer.css";
const Outer = () => {
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
      <button className='btn'>Create Account</button>
      <button className='btn'>Log in</button>
     </div>
    </div>
  )
}

export default Outer;