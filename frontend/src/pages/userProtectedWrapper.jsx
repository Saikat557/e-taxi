import {useContext,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {userContextValue} from "../context/userContext"
const userProtectedWrapper = ({children})=>{
    const {user} = useContext(userContextValue)
    const navigate = useNavigate()
   
  useEffect(()=>{
     if(!user){
    return navigate("/user/account")
   }
  },[user])
   return(
    <div>{children}</div>
   )
}

export default userProtectedWrapper