import HomePage from "./pages/homePage.jsx"
import UserSignupAndLogin from "./pages/UserSignupAndLogin.jsx"
import CaptainSignupAndLogin from "./pages/CaptainSignupAndLogin.jsx"

import {Routes, Route} from "react-router-dom"
const app = ()=>{
  return(
    
    <Routes>
 <Route path="/" element={<HomePage/>}/>
<Route path="/user/account" element={<UserSignupAndLogin />} />
<Route path="/captain/account" element={<CaptainSignupAndLogin/>}/>
    </Routes>


  )
}

export default app