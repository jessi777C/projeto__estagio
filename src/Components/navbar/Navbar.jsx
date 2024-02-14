import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="sobre">Sobre</Link>
        </li>
        <li>
          <Link to="preco">Preços</Link>
        </li>
        <li>
          <Link to="clientes">Clientes</Link>
        </li>
        <li>
          <Link to="contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
