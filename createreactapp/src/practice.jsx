import P from './practice1'
import Q from './practice2'

import React, { useState } from 'react'

function Practice() {


const[section, setSection]=useState("Select Section");


const z=()=> {

     if(section=="Section A")
      {
        return <P/>
     }
     else if(section=="Section B")
      {
        return <Q/>
     }
     else
     {
        return ""
     } 

    }



  return (
    <div>

        <button onClick={()=>setSection("Section A")}>Section A</button>

        <button onClick={()=>setSection("Section B")}>Section B</button>

    <div>
    {
    z()
    }
    
   </div>


    </div>

  )
}

export default Practice
