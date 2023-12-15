import React, { useContext, useState } from 'react'
import {AuthContext} from '../../Context/AuthContext';
import Modal from "react-bootstrap/Modal";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/PMS 3.svg";

export default function SideBar() {
  let {userRole}:any = useContext(AuthContext)
   
  let [isCollapsed, setIsCollapsed] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  let navigate = useNavigate();
  let logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  return (
    <div className="sidebar-container">
    <Sidebar collapsed={isCollapsed}>
    <Menu>
      <MenuItem
        className="logo-toggle"
        onClick={handleToggle}
        icon={<img src={logo} alt="" />}
      ></MenuItem>
      <MenuItem
              icon={<i className="fa fa-home" aria-hidden="true"></i>}

        component={<Link to="/dashboard" />}
      >
        Home
      </MenuItem>

     {userRole=='Manager'? <MenuItem
              icon={<i className="fa fa-users" aria-hidden="true"></i>}

        component={<Link to="/dashboard/users" />}
      >
        Users
      </MenuItem>:''}

      <MenuItem
              icon={<i className="fa fa-key" aria-hidden="true"></i>}

        component={<Link to="/dashboard/projects" />}
      >
        Projects
      </MenuItem>

      <MenuItem
        icon={<i className="fa fa-key" aria-hidden="true"></i>}
        component={<Link to="/dashboard/tasks" />}

      >
        Tasks
      </MenuItem>

      <MenuItem
        onClick={handleShow}
        icon={<i className="fa fa-key" aria-hidden="true"></i>}
      >
        Change Password
      </MenuItem>
      <MenuItem
        icon={<i className="fa-solid fa-right-from-bracket"></i>}
        onClick={logOut}
      >
        Logout
      </MenuItem>
    </Menu>
  </Sidebar>
  </div>
  )

}

