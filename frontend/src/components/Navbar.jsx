import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'
import { FiToggleLeft } from "react-icons/fi";
import { FiToggleRight } from "react-icons/fi";


const Navbar = () => {
const {theme,ToggleBtn} =  useContext(ThemeContext);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  ${theme == 'light' ?'bg-primary text-light':'bg-dark text-light' }`}>
        <div className="container-fluid">
          <h1 className="navbar-brand customText text-light" href="#"><span className='me-2'><i class="fa-solid fa-graduation-cap"></i></span>Student Result App</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item">
                <Link className="nav-link TEXT text-light" aria-current="page" to='/'> Home</Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link text-light" to='/about'>About</Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className='btn border-none' onClick={ToggleBtn}>{theme === 'light' ? <FiToggleLeft/> :<FiToggleRight/>}</button>
              <Link className="btn btn-success" to='/login'>Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
