import React, { useState } from 'react'
import "../styles/login.css"
import {Container,Row,Col,Form,FormGroup,Button} from "reactstrap"
import {Link} from "react-router-dom"

import loginImg from "../assets/images/login.png"
import userIcon from "../assets/images/user.png"

const Login = () => {
  const [credentials, setCredentials] = useState({
   email:"",
   password:""
  })
  

  const handleChange = (e) => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const handleClick=(e)=>{
    e.preventDefault()
  }


  return (
    <div>
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="loginImg"/>
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="userIcon" />
              </div>
              <h2>Login</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="email" placeholder='Email' id="email" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' id="password" onChange={handleChange} />
                </FormGroup>
                <Button className='btn secondary__btn auth__btn'>Login</Button>
              </Form>
              <p>Don't have an account ? <Link to='/register'>Create</Link></p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Login