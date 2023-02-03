import React from 'react'
import CommonSection from '../shared/CommonSection'
import "../styles/tour.css"
import TourCard from "../shared/TourCard"
import SearchBar from "../shared/SearchBar"
import Newsletter from "../shared/Newsletter"
import tourData from "../assets/data/tours"
import { Container, Row } from 'reactstrap'

const Tours = () => {
  return (
    <>
    <CommonSection title={"All Tours"}/>
    <section>
      <Container>
     <Row>
      <SearchBar/>
     </Row>
      </Container>
    </section>
    </>
  )
}

export default Tours