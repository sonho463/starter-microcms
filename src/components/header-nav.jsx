import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Menu from "./menu"

const HeaderNav = () => {
  const data = useStaticQuery(
    graphql`
      query {
        microcmsConfig {
          title
        }
      }
    `
  )

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top d-flex"
        id="mainNav"
      >
        <div className="navbar-toggler">
          <Menu width={"100%"} />
        </div>
        <div className="container">
          <Link to="/" className="navbar-brand">
            {data.microcmsConfig.title}
          </Link>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderNav
