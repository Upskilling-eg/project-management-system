import React, { createContext, ReactNode, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

// Define the shape of your authentication data//
export interface IAuth {
  adminData: string;
  saveAdminData: () => void;
  requestHeaders: any;
  baseUrl: string;
}

// Create the AuthContext and set the initial value to null
export const AuthContext = createContext<IAuth | null>(null);

// Define the props for AuthContextProvider component
interface AuthContextProviderProps {
  children: ReactNode;
}

// AuthContextProvider component that provides the AuthContext to its children
export const AuthContextProvider: React.FC<AuthContextProviderProps> = (props) => {
  const [adminData, setAdminData] = useState<any | null>(null);

  // Save admin data function
  const saveAdminData = () => {
    const encodedToken = localStorage.getItem("adminToken");
    const decodedToken = jwtDecode(encodedToken!);
    setAdminData(decodedToken);
  };

  // Compute request headers
  const requestHeaders = {
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  };

  // On component mount, check for adminToken and save data
  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      saveAdminData();
    }
  }, []);

  // Value to be provided by the context
  const contextValue: IAuth = {
    adminData,
    saveAdminData,
    requestHeaders,
    baseUrl: "https://upskilling-egypt.com:3003/api/v1",
  };

  return    <AuthContext.Provider value={contextValue}>
                {props.children}
            </AuthContext.Provider>;
};