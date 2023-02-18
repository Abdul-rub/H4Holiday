import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import weblogo from "../../assets/images/weblogo.png";
import { AiOutlineYoutube, AiFillFacebook,AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsInstagram,BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const quick__links = [
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

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={weblogo} alt="logo" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <AiOutlineYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <BsGithub />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <AiFillFacebook />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <BsInstagram />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <GrLocation />
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Asansol,West Bengal</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <AiOutlineMail />
                  </span>
                  Email:
                </h6>
                <p className="mb-0">arub0419@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <BsFillTelephoneOutboundFill />
                  </span>
                  Address:
                </h6>
                <p className="mb-0">+91*********</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
