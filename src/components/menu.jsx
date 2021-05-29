import React from "react"
import { Link } from "gatsby"
import { stack as Menu } from "react-burger-menu"

const SpMenu = (props) => {
  return (
    <Menu {...props}>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="burger-list">
            <Link to="/">Home</Link>
          </li>
          <li className="burger-list">
            <Link to="/about">About</Link>
          </li>
          <li className="burger-list">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </Menu>
  )
}

export default SpMenu
