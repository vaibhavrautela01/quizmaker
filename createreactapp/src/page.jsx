import React from 'react';
import ReactDOM from 'react-dom/client';

<div id="Mydiv"></div>

const Topdiv=()=>{
    return(
        <>
        <centre>
        <div style={{backgroundColor:"Red",color:"white",width:"1062px",height:"10000px"}}>Practice
        
        <div style={{backgroundColor:"yellow",width:"1032px",height:"300px"}}>hi</div>

        <div style={{backgroundColor:"green",width:"1032px",height:"83px"}}>this</div>

        <div style={{backgroundColor:"pink",width:"1032px",height:"15px"}}>vaibhav</div>

        <div style={{backgroundColor:"yellow",width:"1032px",height:"214px"}}>Rautela</div>

        <div style={{backgroundColor:"pink",width:"1032px",height:"15px"}}>hi</div>

        <div style={{backgroundColor:"yellow",width:"1032px",height:"104px"}}>this</div>

        <div style={{backgroundColor:"pink",width:"1032px",height:"15px"}}>is</div>

        <div style={{backgroundColor:"yellow",width:"1032px",height:"300px"}}>vaibhav</div>


    
        </div>
        </centre>
        </>
    );
    const data=document.getElementById("Mydiv")
    const root=ReactDOM.createRoot(data);
    root.render(<Topdiv/>);
};
export default Topdiv


