import React from "react";
import { useParams } from "react-router-dom";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import tourData from "../assets/data/tours";
import { AiFillStar, AiTwotoneStar } from "react-icons/ai";
import { GrMap } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { GiPathDistance } from "react-icons/gi";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import { useRef } from "react";
import { useState } from "react";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    address,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitRequest = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText}, ${tourRating}`)
  };

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="singlePhoto" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <AiFillStar color="var(--secondary-color)" />
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <GrMap /> {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <FaMapMarkerAlt
                        color="var(--heading-color)"
                        fontSize="1.1rem"
                      />{" "}
                      {city}
                    </span>
                    <span>
                      <RiMoneyEuroCircleLine
                        color="var(--heading-color)"
                        fontSize="1.1rem"
                      />
                      {price}/per person
                    </span>
                    <span>
                      <GiPathDistance
                        color="var(--heading-color)"
                        fontSize="1.1rem"
                      />
                      {distance} k/m
                    </span>
                    <span>
                      <BiGroup color="var(--heading-color)" fontSize="1.1rem" />{" "}
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* --------------------------tour-Review---------------------- */}
                <div className="tour__review mt-4">
                  <h4>Review ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitRequest}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1 <AiTwotoneStar />
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <AiTwotoneStar />
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <AiTwotoneStar />
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <AiTwotoneStar />
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5<AiTwotoneStar />
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="share your thoughts"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="avatar_img" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Abdul</h5>
                                <p>
                                  {new Date("01-31-2023").toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                5{" "}
                                <AiFillStar
                                  fontSize={"1.2rem"}
                                  color="var(--secondary-color)"
                                />
                              </span>
                            </div>
                            <h6>Amazing tour </h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TourDetails;
