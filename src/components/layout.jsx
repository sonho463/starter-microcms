import React from "react"
import HeaderNav from "./header-nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <HeaderNav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
