import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import {GrClose} from "react-icons/gr"
import "../Booking/booking.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    userId:'01',
    userEmail:"test1@gmail.com",
    fullName:"",
    phone:"",
    guestSize:1,
    bookAt:""
  })

  const handleChange = (e) => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const serviceFee = 10
  const totalAmount = Number(price) * Number(credentials.guestSize)+ Number(serviceFee)



  const handleClick=(e)=>{
    e.preventDefault();
    console.log(credentials)
    navigate("/thank-you")
  }

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <AiFillStar color="var(--secondary-color)" />
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* ------------------Booking-form---------------------- */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ---------------------Bottom -Section--------------------------- */}
      <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className="border-0 px-0">
          <h5 className="d-flex align-items-center gap-1">${price} <GrClose size={10}/> 1 person</h5>
          <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
          <h5>Service Charge</h5>
          <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
          <h5>Total</h5>
          <span>${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
