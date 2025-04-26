import React, { useContext, useState } from 'react'
import { choosecolor } from './Context'
import { useNavigate } from 'react-router-dom'
function About() {
    const{ colors, setcolors }=useContext(choosecolor)
    const navigate=useNavigate()
const [color,setcolor]=useState()
    const submitcolor=()=>{
        if(color==""){
            alert("cant submit")
        }else{
        
        setcolors(color)
        navigate("/")
            
        
            
        }
        }
  return (
    <div>
        <input type='text' placeholder='enter color ' onChange={(e)=>setcolor(e.target.value)}/>
        <button onClick={submitcolor}>submit</button>
    </div>
  )
}

export default About
