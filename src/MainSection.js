import React from 'react'
import "./MainSection.css"
import sample from "./sample.png"
import sample1 from "./sample1.png"
export default function MainSection() {
  return (
      <>
    <div className='Msec'>
        
        <div style={{
            width:"40%",marginLeft:"30px"
        }}>
            <h1 style={{
                color:"white",
                fontSize:"60px"
            }} >CYBER SECURITY</h1>
            <h2  style={{
                color:"white",
                fontSize:"30px"
            }}>is much more than a matter of information technology</h2>
            <button className="style3">get started</button>
               
        </div>
       
        <div style ={{width:"50%"}}>
        <img src={sample}/>
        </div>
        
    
    </div>
    <div className='style5'>
    <p className='style4'>drop down to view more</p>
    <img src ={sample1}/>
</div>
</>
  )
}
