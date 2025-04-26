import { createContext,useState } from "react";

export const choosecolor = createContext()


export const ContextColor  =(props)=>{
    const[colors,setcolors]=useState("red")
    const [conimage,setconimage]=useState(null)
return(
<choosecolor.Provider value={{colors,setcolors,conimage,setconimage}}>
{props.children}
</choosecolor.Provider>
)
}

