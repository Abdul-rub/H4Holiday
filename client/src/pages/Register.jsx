import React, { useState } from 'react'
import "../styles/login.css"
import {Container,Row,Col,Form,FormGroup,Button} from "reactstrap"
import {Link, useNavigate} from "react-router-dom"

import registerImg from "../assets/images/register.png"
import userIcon from "../assets/images/user.png"
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import { useContext } from 'react'


const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);

      dispatch({ type: 'REGISTER_SUCCESS' });
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

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