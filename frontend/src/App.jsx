import HomePage from "./pages/homePage.jsx";
import UserSignupAndLogin from "./pages/UserSignupAndLogin.jsx";
import CaptainSignupAndLogin from "./pages/CaptainSignupAndLogin.jsx";
import LandingPage from "./pages/userHome.jsx";
import UserProtectedWrapper from "./pages/userProtectedWrapper.jsx";
import CaptainHome from "./pages/captainHome.jsx"

import { Routes, Route } from "react-router-dom";
const app = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/account" element={<UserSignupAndLogin />} />
      <Route path="/captain/account" element={<CaptainSignupAndLogin />} />
      <Route
        path="/user/home"
        element={
          <UserProtectedWrapper>
            <LandingPage />
          </UserProtectedWrapper>
        }
      />

      <Route path="/captain/home" element={<CaptainHome/>} />
    </Routes>
  );
};

export default app;
