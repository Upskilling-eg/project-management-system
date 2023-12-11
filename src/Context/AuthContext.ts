import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export interface IAuth {
  adminData: string;
  saveAdminData: () => void;
  requestHeaders: any;
  baseUrl: string;
}
export let AuthContext = createContext<IAuth | null>(null);

let requestHeaders = {
  Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
};

let baseUrl = "https://upskilling-egypt.com:3003/api/v1";
export default function AuthContextProvider(_props: any) {
  //*************control admin data state***********
  const [adminData, setAdminData] = useState<any | null>(null);

  //**************save admin data *********************
  let saveAdminData = () => {
    let encodedToken = localStorage.getItem("adminToken");
    let decodedToken = jwtDecode(encodedToken!);
    setAdminData(decodedToken);
  };

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      saveAdminData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ adminData, saveAdminData, requestHeaders, baseUrl }}>
      {props.children}
    </AuthContext.Provider>
  );
}