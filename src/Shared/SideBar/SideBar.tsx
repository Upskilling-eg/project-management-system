import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SideBar() {
  let navigate = useNavigate();
  let logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  return (
    <div>SideBar

      <a  onClick={logOut}>Logout</a>
    </div>
  )
}

