import React, { useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom'
import User from '../assets/user.png'


function Header() {

  const [drop, setDrop] = useState("0");


  const Bb = () => {
    if (drop === "1") {
      return (
        <>
          <ul className='nab2'>
            <li className='nab3'>Log Out</li>
            <li className='nab3'>Reset Password</li>
          </ul>
          
        </>
      );
    } 
    return null;
  };


  const click = () => {
    setDrop(prevDrop => (prevDrop === "0" ? "1" : "0"));
  };

  return (
    <>

<header>
                        <nav>
                            <ul className='nab'>
                                <li>HOME</li>
                                <li>PLAN'S SUBSCRIPTION</li>
                                <li>ABOUT US?</li>
                                <li>CONTACT US?</li>
                                <li>FEEDBACK</li>
                                
                                
                                <img src={User} onClick={click} id="user"></img>

                            </ul>
                        </nav>

              
                

              
               {Bb()}
               </header>
    </>
  )
}

export default Header
