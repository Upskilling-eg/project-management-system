import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export default function NavBar() {
  const {userData}:any = useContext(AuthContext)
  return (
    <nav className="navbar navbar-expand-lg bg-light mt-5">
        <div className="container-fluid justify-content-end">
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {/* <img className="mx-2" src={avatar} alt="user-img" /> */}
                  {userData.userName}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
