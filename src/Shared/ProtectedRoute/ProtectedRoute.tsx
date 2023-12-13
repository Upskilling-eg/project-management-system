import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props:any) {
  if (props.userData == null || localStorage.getItem("userToken") == null) {
    return <Navigate to="/login" />;
  } else {
    return props.children;
  }
}
