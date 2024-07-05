import React from 'react';
import Header from './header';
import Footer from './footer';
import './studentlogin.css'
import { Link } from 'react-router-dom'
import Mcq from '../assets/mcq.png'



function studentlogin() {

  return (
    <div id="studentlogin">
       <Header/>
       <div className='combine'>

          <img src={Mcq} className='mcq'></img>

        <div className='studentlogin2'>


        <h1>STUDENT LOGIN<br/></h1>



        Enter the Username: 
        <input type='text' className='input' ></input><br/><br/>


         Enter the Password: 
        <input type='password' className='input'></input><br/><br/>


        <Link to="/Student" className='notregister'>Not Register?  </Link><br/><br/>

        <input type='submit' className='sub'></input>
        </div>
        </div>

        <Footer/>
    </div>
  )
}

export default studentlogin
