import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useState } from "react";
import { useEffect } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(flase)

  useEffect(()=>{
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true)
      } else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return() => window.removeEventListener("scroll", onScroll)
  }, [])

  const OnUpdateActiveLink = (value) => {
    setActiveLink(value)
  }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? "active-navbar-link": "navbar-link"} onClick={() => OnUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? "active-navbar-link": "navbar-link"} onClick={() => OnUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? "active-navbar-link": "navbar-link"} onClick={() => OnUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={""} alt="hm" />
              </a>
              <a href="#">
                <img src={""} alt="hm" />
              </a>
              <a href="#">
                <img src={""} alt="hm" />
              </a>
              <button
                className="vvd"
                onClick={() => {
                  console.log("gaping asshole");
                }}
              >
                <span>Let's connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
