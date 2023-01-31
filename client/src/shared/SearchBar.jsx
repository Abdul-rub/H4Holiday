import React from 'react'
import "./search-bar.css"
import {Col,Form,FormGroup} from "reactstrap"
import {BiMap} from "react-icons/bi"
import {GiPathDistance} from "react-icons/gi"
import {HiUserGroup} from "react-icons/hi"

const SearchBar = () => {
  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><BiMap/></span>
                    <div>
                      <h6>Location</h6>
                      <input type="text"  placeholder='Where to go? ' />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><GiPathDistance/></span>
                    <div>
                      <h6>Location</h6>
                      <input type="number"  placeholder='Distance k/m' />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span><HiUserGroup/></span>
                    <div>
                      <h6>Max People</h6>
                      <input type="number"  placeholder='0' />
                    </div>
                </FormGroup>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar