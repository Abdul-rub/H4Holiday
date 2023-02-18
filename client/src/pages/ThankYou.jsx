import React from 'react'
import "../styles/thank-you.css"
import { Container, Row, Col, Button } from "reactstrap";
import {BsFillPatchCheckFill} from "react-icons/bs"
import {Link} from "react-router-dom"

const ThankYou = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='pt-5 text-center'>
              <div className="thank__you">
                <span>
                  <BsFillPatchCheckFill color='green' size={40}/>
                </span>
                <h1 className='mb-3a fw-semibold'>Thanks You</h1>
                <h3 className='mb-4'>your tour is booked</h3>
                <Button className='btn primary__btn w-25'>
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ThankYou