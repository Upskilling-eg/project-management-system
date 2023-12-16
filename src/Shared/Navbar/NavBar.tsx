import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import logo from './../../assets/images/nav-logo.png'
import avatar from './../../assets/images/avatar.png'
export default function NavBar() {
  const {userData}:any = useContext(AuthContext)
  console.log(userData);
  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex">
<div>              <img className="mx-2" src={avatar} alt="user-img" />
</div>
                <a className="nav-link" href="#">
                  {userData.userName}
                  <p>{userData.userEmail}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
