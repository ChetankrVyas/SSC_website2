import React, { useState } from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import SSC from "../images/ssclogo-removebg-preview.png"
import "./Home.css";
import { AiOutlineUser } from "react-icons/ai"

const Navbar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  return (
    <NavBar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}

    >
      <Container style={{ paddingTop: '10px' }}>
        <NavBar.Brand href="/" className="d-flex">
          <img src={SSC} className="img-fluid logo" alt="brand" />
        </NavBar.Brand>
        <NavBar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </NavBar.Toggle>
        <NavBar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="home">
            <Nav.Item>
              <Nav.Link href="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link

                href="/about"
                onClick={() => updateExpanded(false)}
              >
                About US
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link

                href="/team"
                onClick={() => updateExpanded(false)}
              >
                Team
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link

                href="/spc"
                onClick={() => updateExpanded(false)}
              >
                SPC
              </Nav.Link>
            </Nav.Item>



            <Nav.Item>
              <Nav.Link

                href="/ku"
                onClick={() => updateExpanded(false)}
              >
                KU
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link

                href="/hhc"
                onClick={() => updateExpanded(false)}
              >
                HHC
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link

                href="/sahyog"
                onClick={() => updateExpanded(false)}
              >
                Sahyog
              </Nav.Link>
            </Nav.Item>


          </Nav>
          <div className="nav-user">

            <a href="/"><AiOutlineUser className="AiOutlineUser" /></a>
          </div>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  )
}

export default Navbar


