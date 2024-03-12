import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Hero from '../pages/Hero'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SeachResultList from '../pages/SeachResultList'

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/hero'/>} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/tours/search" element={<SeachResultList />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    )
}

export default Routers