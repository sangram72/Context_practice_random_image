import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { choosecolor } from '../Context'
function Head() {
const navigate=useNavigate()
const { colors, setcolors } = useContext(choosecolor);
const [color,setcolor]=useState("")
const submitcolor=()=>{
if(color==""){
    alert("cant submit")
}else{

setcolors(color)
    

    
}
}
  return (
    
    <div>
        <input type='text' placeholder='Enter your color' onChange={(e)=>setcolor(e.target.value)}/>
        <button onClick={submitcolor}>Submit the color</button>
        <button onClick={()=>navigate("/about")}>About</button>
    </div>
  )
}

export default Head