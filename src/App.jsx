import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './login.jsx'
import Register from './register.jsx'
import MarketPlace from './marketplace.jsx'
import ItemDetails from './itemDetails.jsx'
import './App.css'
import Seller from './seller.jsx'

function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} /> */}
        <Route path="/" element={<MarketPlace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:name" element={<ItemDetails />} />
        <Route path="/seller" element={<Seller/>}/>
      </Routes>  
    </div>
  )
}

export default App
