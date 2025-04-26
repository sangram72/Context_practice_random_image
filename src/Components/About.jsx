import React, { useContext, useState } from 'react'
import { choosecolor } from './Context'
function About() {
    const{ colors, setcolors }=useContext(choosecolor)
const [color,setcolor]=useState()
    const submitcolor=()=>{
        if(color==""){
            alert("cant submit")
        }else{
        
        setcolors(color)
            
        
            
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