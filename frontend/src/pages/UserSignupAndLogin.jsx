import UserLoginPanel from "../panel/userLogin"
import UserSignupPanel from "../panel/userSignUp"
import {useState} from "react"
import {Link} from "react-router-dom"



const UserSignupAndLogin = () => {
    const [loginPanel,setLoginPanel] = useState(false)
  return (
    <div className="w-full flex  justify-center ">
 <div className="py-6 px-4 flex flex-col items-center justify-start h-screen overflow-hidden gap-10 relative w-full max-w-[400px] " >
      <header className="flex flex-col justify-center items-center">
        <img src="/image/logo-e-taxi.png" alt="e-taxi logo"className="w-20 h-10 bg-red-600 "  />
        <h1 className="text-2xl text-[#f9af1a] font-bold">E-Taxi</h1>
        <h3 className="text-sm text-gray-400 mb-3">User Credentials</h3>
        <div className="flex border-2 border-yellow-800  rounded-full overflow-hidden min-w-50" >
            <button className={` w-1/2 ease-in-out duration-300  py-2 ${loginPanel?"bg-yellow-400": "bg-white"}`} onClick={()=>{setLoginPanel(true)}}>
                Log In
            </button>
            <button className={` w-1/2  ease-in-out duration-300   py-2  ${!loginPanel?"bg-yellow-400": "bg-white"}`} onClick={()=>{setLoginPanel(false)}}>
              Sign Up
            </button>
        </div>
      </header>
      <div className="relative  w-full flex flex-1 flex-col w-full">
    
< UserLoginPanel loginPanel={loginPanel} />
      <UserSignupPanel loginPanel={loginPanel} />
    

        <p className="mt-auto mx-auto  font-semibold ">Are You a Captain? <span className="underline text-[#9b7b07]"> <Link to="/captain/account">yes</Link></span></p> 
   

      </div>
   
      
    </div>
    </div>
    
  );
};
export default UserSignupAndLogin;
