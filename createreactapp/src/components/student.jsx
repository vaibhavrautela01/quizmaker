import React from 'react'
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Mcq from '../assets/mcq.png';
import '../components/universitylogin.css';



function stu_reg() {
  return (
    <div>
        <Header/>

        <div className='universityreg'>

      <img src={Mcq} className='mcq'></img>

        <div className='universityreg2'>
       <h1> STUDENT REGISTRATION</h1>

<table>
  <tr>
    <td> First Name:<input type='text' className='val'></input>  </td>
    <td>Last Name:<input type='text' className='val2'></input> </td>
  </tr>

  <tr>
    <td> Date of Birth:<input type='date' className='val'></input>   </td>
    <td> Gender:<input type='text' className='val2'></input>  </td>
  </tr>

  <tr>
    <td> Nationality:<input type='text' className='val'></input>    </td>
    <td> Student ID : <input type='number' className='val2'></input>  </td>
  </tr>
  <h1>Educational Background:</h1>
  <tr>
    <td> High School:<input type='text' className='val'></input>   </td>
    <td> College:<input type='text' className='val2'></input>  </td>
  </tr>

  <tr>
    <td>  GPA or Grades:<input type='number' className='val'></input>    </td>
    <td> Test Scores:<input type='number' className='val2'></input>   </td>
  </tr> 
  <h1>Address:</h1>
  <tr>
    <td> Street :<input type='text' className='val'></input>   </td>
    <td> City:<input type='text' className='val2'></input>  </td>
  </tr> 
  
  <tr>
    <td> State:<input type='text' className='val'></input>   </td>
    <td> ZIP:<input type='text' className='val2'></input>   </td>
  </tr>

  <tr>
    <td> Code:<input type='text' className='val'></input>   </td>
    <td> Country:<input type='text' className='val2'></input>   </td>
  </tr>

  <tr>
    <td> Phone Number:<input type='number' className='val'></input>  </td>
    <td> Email Address:<input type='text' className='val2'></input>   </td>
  </tr>

  <tr>
    <input type='submit' className='subbtn'></input>
  </tr>


</table>
        </div>
        </div>
<Footer/>
      
    </div>
  )
}

export default stu_reg

