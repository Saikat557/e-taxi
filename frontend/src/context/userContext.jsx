import {createContext} from "react"
import {useState} from "react"


export const userContextValue = createContext("")

const userContext=({children})=>{

    const [user,setUser] = useState("")

    return(
        <userContextValue.Provider value={{user}}>
            {children}
        </userContextValue.Provider>
    )
}

 export default userContext