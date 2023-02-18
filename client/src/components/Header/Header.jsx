import React from "react";
import "./header.css";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png"
import weblogo from "../../assets/images/weblogo.png"
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
import { useEffect } from "react";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tour",
    display: "Tours",
  },
];

const Header = () => {
  const navigate = useNavigate()
    
  const headerRef = useRef(null)

  const stickyHeader =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
   stickyHeader()
   return window.removeEventListener('scroll',stickyHeader)
  })

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img  src={weblogo} alt="logo" />
            </div>
            {/* ---------------------------menu-start---------------------- */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* ---------------------menu-end------------------------------ */}
            <div className="nav__right d-flex align-items center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn secondary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              <span className="mobile__menu">
                <AiOutlineMenu />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
