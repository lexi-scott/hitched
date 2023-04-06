import { useState } from "react";
import { NavLink } from "react-router-dom";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/rsvp" onClick={() => setIsMenuOpen(false)}>
          RSVP
        </NavLink>
        <NavLink to="/registry" onClick={() => setIsMenuOpen(false)}>
          Registry
        </NavLink>
        <NavLink to="/social" onClick={() => setIsMenuOpen(false)}>
          Social
        </NavLink>
      </nav>
    </>
  );
};

export default NavLinks;
