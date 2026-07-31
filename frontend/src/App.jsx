import HomePage from "./pages/homePage.jsx"
import UserSignupAndLogin from "./pages/UserSignupAndLogin.jsx"
import CaptainSignupAndLogin from "./pages/CaptainSignupAndLogin.jsx"
import LandingPage from "./pages/landingPage.jsx"
import UserProtectedWrapper from "./pages/userProtectedWrapper.jsx"


import {Routes, Route} from "react-router-dom"
const app = ()=>{
  return(
    
    <Routes>
 <Route path="/" element={<HomePage/>}/>
<Route path="/user/account" element={<UserSignupAndLogin />} />
<Route path="/captain/account" element={<CaptainSignupAndLogin/>}/>
<Route path="/landingpage" element={
  <UserProtectedWrapper>
  <LandingPage/>
  </UserProtectedWrapper>
}/>
    </Routes>


  )
}

export default app