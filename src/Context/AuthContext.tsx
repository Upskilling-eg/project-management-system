import { jwtDecode } from "jwt-decode";
import { ReactNode, createContext, useEffect, useState } from "react";

export let AuthContext = createContext({});

export default function AuthContextProvider(props:any) {
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState(null)

  let requestHeaders = {
    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  };
  let baseUrl = "http://upskilling-egypt.com:3003/api/v1";
  let saveUserData = () => {
    let encodedToken:any = localStorage.getItem('userToken')
    let decodedToken:any = jwtDecode(encodedToken);
    setUserRole(decodedToken.userGroup)
    setUserData(decodedToken);
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, saveUserData, requestHeaders, baseUrl , userRole }}>
      {props.children}
    </AuthContext.Provider>
  );
}
