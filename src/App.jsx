import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
import { Dashboard, Explore, MyPlants, WateringLog, Custom404 } from './components/Pages'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Router basename={'/'}> 
        <Navbar />
 
        <Routes>
          <Route path='' element={< Dashboard />} />
          <Route path='/dashboard' element={< Dashboard />} />
          <Route path='/explore' element={< Explore />} />
          <Route path='/my-plants' element={< MyPlants />} />
          <Route path='/watering-log' element={< WateringLog />} />
          <Route path='/404' element={< Custom404 />} />
        </Routes>

      </Router>
    </> 
  )
}

export default App
