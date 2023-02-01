import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from "../../assets/data/tours"
import { Col } from 'reactstrap'

// console.log(tourData)


const FeatureTourList = () => {
  return (
    <>
    {
        tourData?.map((tour)=>{
            return <Col lg='3' className='mb-4' key={tour.id}><TourCard tour={tour}/></Col>
        })
    }
    </>
  )
}

export default FeatureTourList