import React from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Mcq from '../assets/mcq.png';
import '../components/universitylogin.css';



function inst_reg() {
  return (
    <>
        <Header/>
        <div className='universityreg'>

        <img src={Mcq} className='mcq'></img>

        <div className='universityreg2'>

        <h1>UNIVERSITY REGISTRATION:</h1>

        Enter the name of the Institude:<input type='text' className='value' name='institute'></input><br/><br/>
        <h1>Address:<br/></h1>
        Street <input type='text' className='value' name='street'></input><br/><br/>
        City <input type='text' className='value' name='city'></input><br/><br/>
        State <input type='text' className='value' name='state'></input><br/><br/>
        Country <input type='text' className='value' name='country'></input><br/><br/>
        Email Address: <input type='text' className='value' name='email'></input><br/><br/>
        List of Undergraduate Programs:<input type='text' className='value' name='list'></input><br/><br/>
        Chansllor's Name: <input type='text' className='value' name='chansllor'></input><br/><br/>
        Year Established:<input type='text' className='value' name='stablished'></input><br/><br/>
        Number of Students Enrolled:<input type='text' className='value' name='stu_enroll'></input><br/><br/>


        <input type='submit' name='stu_enroll' className='sub'></input><br/>
        </div>
        </div>
        <Footer/>
    
    </>
  )
}

export default inst_reg
