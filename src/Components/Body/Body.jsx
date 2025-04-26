import React, { useContext, useEffect, useState } from "react"
import Head from "../Head/Head"
import Tail from "../Tail/Tail"
import { choosecolor } from "../Context"
import load from "../../assets/load.gif"
const Body =()=>{
    const { colors } = useContext(choosecolor);
    const [loading,setloading]=useState(true)
    const [image,setimage]=useState()
const fetchdetails=async()=>{
const baseurl = "https://dog.ceo/api/breeds/image/random"

try {
    let response = await fetch(baseurl)
    let res = await response.json()
console.log(res)
setimage(res)
if(res.message){
setloading(false)
}


} catch (error) {
    console.log("error is",error)
    setloading(true)
}
}

useEffect(()=>{
    fetchdetails()
},[])

    return (
        <><Head />
        <br/>
        <br/>
        <div style={{ height: "500px", backgroundColor: colors,  display: "flex", 
  justifyContent: "center", 
  alignItems: "center" }}>
   {loading==false? image&&
<img src={image.message} alt="" style={{height:"80%",width:"50%"}} />
    

:<img src={load} style={{height:"50%",width:'50%'}}/>}


        </div>
        <button onClick={() => { setloading(true); fetchdetails(); }}>
        Generate Random Dog Image
      </button>
        <br/>
        <br/>
        <Tail/>
        </>
   
    )
}
export default Body


