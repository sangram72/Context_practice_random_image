import { createContext,useState } from "react";

export const choosecolor = createContext()


export const ContextColor  =(props)=>{
    const[colors,setcolors]=useState("red")
return(
<choosecolor.Provider value={{colors,setcolors}}>
{props.children}
</choosecolor.Provider>
)
}

