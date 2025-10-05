import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './Components/Shop'
import Profile from './Components/Profile'
import AdminPanel from './Components/AdminPanel'
import ShopCategory from './Components/ShopCategory'
import ContextProvider from './Context/ContextProvider'
 

function App() {
  return (
    <>
    <Navbar/>

  <ContextProvider>
      <Routes>
      <Route path="/" element={<Shop/>}/>
     
      <Route path="/profile" element={<Profile/>}/>
       <Route path="/admin" element={<AdminPanel/>}/>
        <Route path="/shop:category" element={  <ShopCategory/>}/>

      
    </Routes>
  </ContextProvider>
    
    </>
  )
}

export default App