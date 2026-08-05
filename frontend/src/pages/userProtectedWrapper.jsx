import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContextValue } from "../context/userContext";
import axios from "axios";
const userProtectedWrapper = ({ children }) => {
  const { user, setUser } = useContext(userContextValue);
  const navigate = useNavigate();

  useEffect(() => {
const token = localStorage.getItem('token')

if(!token){

   return navigate("/user/account")
}

    axios
      .get("http://localhost:3000/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
         
        setUser(res.data.user);
      }).catch((err) => {
        
         return navigate("/user/account")
      });
  });


  return <div>{children}</div>;
};

export default userProtectedWrapper;
