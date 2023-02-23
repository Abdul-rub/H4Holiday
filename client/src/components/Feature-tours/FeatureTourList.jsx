import React from "react";
import TourCard from "../../shared/TourCard";
// import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

// console.log(tourData)

const FeatureTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);
  // console.log(featuredTours);

  return (
    <>
      {loading && <h3>Loading.........</h3>}
      {error && <h3>{error}</h3>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => {
          return (
            <Col lg="3" md='6' sm='6' className="mb-4" key={tour._id}>
              <TourCard tour={tour} />
            </Col>
          );
        })}
    </>
  );
};

export default FeatureTourList;
