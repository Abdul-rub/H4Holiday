import React from 'react'
import "./search-bar.css"
import {Col,Form,FormGroup} from "reactstrap"
import {BiMap} from "react-icons/bi"
import {GiPathDistance} from "react-icons/gi"
import {HiUserGroup} from "react-icons/hi"
import { useRef } from 'react'
import {BsSearch} from "react-icons/bs"

const SearchBar = () => {
 const locationref = useRef('');
 const distanceref = useRef('');
 const maxGroupref =useRef('');


 const handleSearch=()=>{
  const location = locationref.current.value
  const distance = distanceref.current.value
  const maxgroup = maxGroupref.current.value

  if(location==='' || distance==="" || maxgroup===""){
    return alert("Fields can't be empty")
  }
  console.log(location,distance,maxgroup)
 }



  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><BiMap/></span>
                    <div>
                      <h6>Location</h6>
                      <input type="text"  placeholder='Where to go? ' ref={locationref} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><GiPathDistance/></span>
                    <div>
                      <h6>Distance</h6>
                      <input type="text"  placeholder='Distance k/m' ref={distanceref} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span><HiUserGroup/></span>
                    <div>
                      <h6>Max People</h6>
                      <input type="number"  placeholder='0' ref={maxGroupref}/>
                    </div>
                </FormGroup>
                <span className='search__icon' type='submit' onClick={handleSearch}><BsSearch/></span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar