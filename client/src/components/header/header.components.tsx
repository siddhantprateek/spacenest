import React from 'react'
import { Link } from 'react-router-dom'
import { SPXLOGO } from '../../assets'
import './header.styles.css'
const Header = () => {

  return (
    <header>
      <div className="nav-left">
        <Link to="/">
          <img className='logo' src={SPXLOGO} alt="SPACENESTLOGO" />
        </Link>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/launch">
              LAUNCHES
            </Link>
          </li>
          <li>
            <Link to="/">
              EXPLORE
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header