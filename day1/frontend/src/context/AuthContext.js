import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiHelper from "../apiHelper/apiHelper";


export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    _id: "",
    email: "",
    name: "",
    role: "",
    google: false
  })
  
  // useEffect(() => {

  // })

  const loginUserFromApi = async (userObj) => {
    const response = await apiHelper.post(`/auth/login`, userObj);
    if (!response.data) return;
    toast.success("Logged In")
    localStorage.setItem("jwtposts", JSON.stringify(response.data));
    console.log(response);
    setUser(response.data.user);
  }

  const logOut = () => {
    localStorage.removeItem("jwtposts");
    toast.success("Successfuly Logged Out");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUserFromApi,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
