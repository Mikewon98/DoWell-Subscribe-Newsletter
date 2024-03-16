import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink to='/' className='nav-logo'>
            <span>Newsletter</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink
                to='/'
                activeclassname='active'
                className='nav-links'
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/subscribelist'
                activeclassname='active'
                className='nav-links'
                onClick={handleClick}
              >
                Subcriber List
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/unsubscribe'
                activeclassname='active'
                className='nav-links'
                onClick={handleClick}
              >
                Unsubscribe
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            {click ? (
              <span className='icon'>
                <IoCloseSharp />
              </span>
            ) : (
              <span className='icon'>
                <FaBars />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
