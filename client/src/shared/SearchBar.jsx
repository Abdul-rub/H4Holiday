import React from 'react'
import "./search-bar.css"
import {Col,Form,FormGroup} from "reactstrap"

const SearchBar = () => {
  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup>
                    <span>
                        
                    </span>
                </FormGroup>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar