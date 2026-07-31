import {useRef} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const userSignup =(props)=>{
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()

  const handleSignup=async()=>{
    const fullName = nameRef.current.value;
     const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if(!fullName||!email||!password){
        alert("all fields are required")
      }

      try{
const res =await axios.post("http://localhost:3000/user/signup",{fullName,email,password})
console.log((res.data))
 
localStorage.setItem("token",res.data.token)

nameRef.current.value=""
emailRef.current.value=""
passwordRef.current.value=""
navigate("/landingpage")
      }catch(err){
alert(err.response.data.message)
      }
  
  }

  

    return (
      <main className={`border-1 max-w-[500px] border-yellow-400 rounded-md px-2 w-full py-10 bg-yellow-50 flex flex-col items-center justify-center gap-10 ease-in-out duration-500 absolute top-0 ${props.loginPanel?"translate-x-100":"translate-x-0"}`}>
       <h1 className=" text-2xl font-semibold border-b-2 pb-2 w-full text-center">Create Your New Account</h1>
        <div className="flex flex-col gap-5 w-full px-2">
            <div className="flex flex-col  w-full">
                <label className="font-semibold" >Full Name</label>
                <input ref={nameRef} type="text" placeholder="John Doe" className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
            <div className="flex flex-col  w-full">
                <label className="font-semibold">Email Adress</label>
                <input ref={emailRef} type="text" placeholder="example@gmail.com" className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
            <div className="flex flex-col  w-full">
                <label className="font-semibold">Password</label>
                <input ref={passwordRef} type="text" placeholder="••••••" className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
            <button
            onClick={handleSignup}
            className="bg-[#f9af1a] shadow-lg shadow-yellow-400/50 active:scale-95 ease-in-out duration-300 rounded-md text-xl font-medium py-2">Sign Up</button>
        </div>
      </main>
    )
}
export default userSignup