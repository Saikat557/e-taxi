import CaptainSignup from "../panel/CaptainSignup.jsx";
import CaptainLogin from "../panel/CaptainLogin.jsx";
import { useState } from "react";
const CaptainSignupAndLogin = () => {
  const [loginPanel, setLoginPanel] = useState(true);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center px-4 py-10 gap-10 w-full h-screen relative overflow-x-hidden max-w-[400px]">
        <header className="flex flex-col justify-center items-center">
          <img
            src="/image/logo-e-taxi.png"
            alt="e-taxi logo"
            className="w-20 h-10 bg-red-600 "
          />
          <h1 className="text-2xl text-[#f9af1a] font-bold">E-Taxi</h1>
          <h3 className="text-sm text-gray-400 mb-3">Rider Credentials</h3>
          <div className="flex border-2 border-yellow-800  rounded-full overflow-hidden min-w-50">
            <button
              className={` w-1/2 ease-in-out duration-300  py-2 ${loginPanel ? "bg-[#fdc700]" : "bg-white"}`}
              onClick={() => {
                setLoginPanel(true);
              }}
            >
              Log In
            </button>
            <button
              className={` w-1/2  ease-in-out duration-300   py-2  ${!loginPanel ? "bg-[#fdc700]" : "bg-white"}`}
              onClick={() => {
                setLoginPanel(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </header>

        <div className="relative w-full  bg-red-600 flex flex-row items-start  bg-red-600 ">

            
          <CaptainSignup loginPanel={loginPanel} />

          <CaptainLogin loginPanel={loginPanel} />
        </div>
        

        <p>As A passenger</p>
      </div>
    </div>
  );
};
export default CaptainSignupAndLogin;
