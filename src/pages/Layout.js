import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        
          <li>
            <Link to="/"className="link">Home</Link>
          </li>
          <li>
            <Link to="/about"className="link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="link">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    <footer>
      <h2>Sarah Razzaq</h2>
      <h2>0708451845</h2>
      <h2>sarah@mail.se</h2>
    </footer>
    </>
  )
};

export default Layout;