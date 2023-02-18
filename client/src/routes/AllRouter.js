import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Tours from "../pages/Tours"
import TourDetails from "../pages/TourDetails"
import Login from "../pages/Login"
import Register from "../pages/Register"
import SearchResultList from "../pages/SearchResultList"
import ThankYou from '../pages/ThankYou'

const AllRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tour' element={<Tours/>}/>
        <Route path='/tour/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tour/search' element={<SearchResultList/>}/>
        <Route  path='/thank-you' element={<ThankYou/>}/>
    </Routes>
  )
}

export default AllRouter