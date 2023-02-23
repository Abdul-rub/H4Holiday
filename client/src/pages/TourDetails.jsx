import React from "react";
import { useParams } from "react-router-dom";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
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
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // const tour = tourData.find((tour) => tour.id === id);
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

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

  const submitRequest = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in ");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok){
        return  alert(result.message)
      } 
      alert(result.message)
    } catch (error) {
      alert(error.message);
    }

    // alert(`${reviewText}, ${tourRating}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <div>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
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
                        <BiGroup
                          color="var(--heading-color)"
                          fontSize="1.1rem"
                        />{" "}
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
                                  <h5>{review.username}</h5>
                                  <p>
                                    {new Date(review.createdAt).toLocaleDateString(
                                      "en-US",
                                      options
                                    )}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}
                                  <AiFillStar
                                    fontSize={"1.2rem"}
                                    color="var(--secondary-color)"
                                  />
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        ))}
                      </ListGroup>
                    </Form>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default TourDetails;
