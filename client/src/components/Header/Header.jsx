import React from "react";
import "./header.css";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png"
import weblogo from "../../assets/images/weblogo.png"
import { AiOutlineMenu } from "react-icons/ai";
import { useRef,useContext} from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

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
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const {user,dispatch} = useContext(AuthContext)

    const logout=()=>{
      dispatch({type:'LOGOUT'})
      navigate('/')
    }
 

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

  const toggleMenu =()=>menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img  src={weblogo} alt="logo" />
            </div>
            {/* ---------------------------menu-start---------------------- */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
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

              {
                user? (<>
                <h5 className="mb-0">{user.username}</h5>
                <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                </>
                ):(
                 <>

                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn secondary__btn">
                  <Link to="/register">Register</Link>
                </Button>
                </>
                )}
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
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
