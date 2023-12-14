import React from 'react'
import { Navigate } from 'react-router-dom';


interface Props{
    adminData :any ;
    children :React.ReactNode;
}

export default function ProtectedRoute({adminData, children}:Props) {
    if (adminData == null && localStorage.getItem("adminToken")==null){
        return <Navigate to="/login"/>
    }else{
        return <>{children}</>
    }

}
