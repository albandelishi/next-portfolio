import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TogglerButton from "../components/TogglerButton";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"));

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="/images/logo.png"
              width="96"
              height="83"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <TogglerButton
            className={
              isOpen
                ? "navbar-toggler collapsed menu-btn opened"
                : "navbar-toggler menu-btn"
            }
            onClick={handleClick}
            ariaLabel="Main Menu"
            ariaExpanded={isOpen ? true : false}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={isOpen ? "show" : ""}
          >
            <Nav className="ms-auto">
              <Link className="nav-link mt-2" href="#home">
                Home
              </Link>
              <Link className="nav-link mt-2" href="#services">
                Services
              </Link>
              <Link className="nav-link mt-2" href="#projects">
                Projects
              </Link>

              <Link className="nav-link" href="#contact">
                <button className="btn btn-get-in-touch" type="button">
                  Contact
                </button>
              </Link>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
