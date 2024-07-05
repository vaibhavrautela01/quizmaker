import React from 'react'

function inst_reg() {
  return (
    <div>

        <h1>UNIVERSITY REGISTRATION:</h1>

        Enter the name of the Institude:<input type='text' name='institute'></input><br/>
        <h1>Address:<br/></h1>
        Street <input type='text' name='street'></input><br/>
        City <input type='text' name='city'></input><br/>
        State <input type='text' name='state'></input><br/>
        Country <input type='text' name='country'></input><br/>
        Email Address: <input type='text' name='email'></input><br/>
        List of Undergraduate Programs:<input type='text' name='list'></input><br/>
        Chansllor's Name: <input type='text' name='chansllor'></input><br/>
        Year Established:<input type='text' name='stablished'></input><br/>
        Number of Students Enrolled:<input type='text' name='stu_enroll'></input><br/>
        <button onClick={{}}>Submit</button>
    
    </div>
  )
}

export default inst_reg
