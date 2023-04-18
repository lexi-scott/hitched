import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Modal, Tab } from "react-bootstrap";
import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import Login from "./Login";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const NavLinks = () => {
  const { data } = useQuery(QUERY_ME);

  const userData = data?.me || data?.User || {};

  console.log("**NAV", userData);

  const logged = Auth.loggedIn();
  // console.log(logged)

  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="dropdown-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          You're Invited
        </NavLink>
        {Auth.loggedIn() ? (
          <>
            {userData.couple ? (
              <>
                <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </NavLink>
                <NavLink to="/social" onClick={() => setIsMenuOpen(false)}>
                  Social
                </NavLink>
                <NavLink onClick={() => Auth.logout()}>Log Out</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/rsvp" onClick={() => setIsMenuOpen(false)}>
                  RSVP
                </NavLink>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </NavLink>
                <NavLink to="/registry" onClick={() => setIsMenuOpen(false)}>
                  Registry
                </NavLink>
                <NavLink to="/social" onClick={() => setIsMenuOpen(false)}>
                  Social
                </NavLink>
                {userData.weddingparty ? (
                  <>
                    <NavLink
                      to="/reception"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {" "}
                      Reception{" "}
                    </NavLink>
                    <NavLink onClick={() => Auth.logout()}>Log Out</NavLink>
                  </>
                ) : (
                  <NavLink onClick={() => Auth.logout()}>Log Out</NavLink>
                )}
              </>
            )}
          </>
        ) : (
          <NavLink onClick={() => setShowModal(true)}>Login</NavLink>
        )}
      </nav>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills"></Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default NavLinks;
