import * as React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="https://blog-jinnwang.web.app/" target="_blank">Blog</Link>
      </ul>
    </div>
  )
}

export default NavBar