import React, { useState } from 'react'
import "../styles/login.css"
import {Container,Row,Col,Form,FormGroup,Button} from "reactstrap"
import {Link} from "react-router-dom"

import registerImg from "../assets/images/register.png"
import userIcon from "../assets/images/user.png"

const Register = () => {
  const [credentials, setCredentials] = useState({
    username:"",
   email:"",
   password:""
  })
  

  const handleChange = (e) => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const handleClick=(e)=>{
    e.preventDefault()
    console.log(credentials)
  }


  return (
    <div>
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="registerImg"/>
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="userIcon" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
              <FormGroup>
                  <input type="text" placeholder='Username' id="username" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' id="email" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' id="password" onChange={handleChange} />
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' type='submit'>Register</Button>
              </Form>
              <p>Already have an account ? <Link to='/login'>Login</Link></p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Register