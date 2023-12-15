import React from 'react'
import SideBar from '../SideBar/SideBar'
import NavBar from '../Navbar/NavBar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>

     <div className="d-flex">
        <div className="sidebar-cont">
          <SideBar />
        </div>

        <div className="w-100">
          <div>
            <NavBar />

            <Outlet />
          </div>
        </div>
      </div>
 
    </>
  )
}
