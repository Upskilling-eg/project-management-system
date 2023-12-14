import React, { createContext, ReactNode, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

// Define the shape of your authentication data//
export interface IAuth {
  userData: string;
  saveUserData: () => void;
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
  const [userData, setUserData] = useState<any | null>(null);

  // Save user data function
  const saveUserData = () => {
    const encodedToken = localStorage.getItem("userToken");
    const decodedToken = jwtDecode(encodedToken!);
    setUserData(decodedToken);
  };

  // Compute request headers
  const requestHeaders = {
    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  };

  // On component mount, check for userToken and save data
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  // Value to be provided by the context
  const contextValue: IAuth = {
    userData,
    saveUserData,
    requestHeaders,
    baseUrl: "https://upskilling-egypt.com:3003/api/v1",
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};
