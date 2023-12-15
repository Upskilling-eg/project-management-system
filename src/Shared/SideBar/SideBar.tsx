import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './../../assets/images/pms.png';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";


const SideBar: React.FC = ()=> {


 //*************sidebar collapse***************
 let [isCollapsed, setIsCollapsed] = useState(false);
 let handleToggle = () => {
   setIsCollapsed(!isCollapsed);
 };


 return (
   <div className="sidebar-container">
     <Sidebar className="vh-100" collapsed={isCollapsed}>
       <div>
         <img onClick={handleToggle} className="w-75" src={logo} alt="" />
       </div>
       <Menu className="mt-5">
         <MenuItem
           icon={<i className="fa fa-home"></i>}
           component={<Link to="/dashboard" />}
         >
           Home
         </MenuItem>
         <MenuItem
           icon={<i className="fa fa-users"></i>}
           component={<Link to="/dashboard/users" />}
         >
           Users
         </MenuItem>
         <MenuItem
           icon={<i className="fa-solid fa-building-shield"></i>}
           component={<Link to="/dashboard/projects" />}
         >
           Projects
         </MenuItem>
         <MenuItem
           icon={<i className="fa-solid fa-hands-holding-circle"></i>}
           component={<Link to="/dashboard/tasks" />}
         >
           Tasks
         </MenuItem>
         <MenuItem
           icon={<i className="fa-solid fa-unlock"></i>}
          
         >
           Change Password
         </MenuItem>
      
         <MenuItem
           icon={<i className="fa-solid fa-right-from-bracket"></i>}
           
         >
           Logout
         </MenuItem>
       </Menu>
     </Sidebar>
   </div>
 );
}
export default SideBar;

