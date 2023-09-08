import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Token from '../pages/Token'
import Pair from '../pages/Pair'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Token/>}/>
        <Route path="/pair" element={<Pair/>}/>
    </Routes>
  )
}

export default Allroutes