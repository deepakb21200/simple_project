import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './Components/Shop'
import Profile from './Components/Profile'
import AdminPanel from './Components/AdminPanel'
import ShopCategory from './Components/ShopCategory'
import ContextProvider from './Context/ContextProvider'
import CartPage from './Components/CartPage'
 
import Profile2 from './Components/Profiles2'
// import Carts from './Components/Carts'
 

function App() {
  return (
    <>
 
   <div className='  min-h-screen w-full flex flex-col '>
      <Navbar/>
 
          <ContextProvider>
   
 
 
           <Routes>
 
      <Route path="/" element={<Shop/>}/>
     
 
      <Route path="/profile" element={<Profile2/>}/>
       <Route path="/admin" element={<AdminPanel/>}/>
   
        <Route path="/shop/:category" element={  <ShopCategory/>}/>

          <Route path="/cart" element={<CartPage/>}/>
   
    </Routes>
   
 
      
  </ContextProvider>
      
  {/* <Carts/> */}

   </div>
    
    </>
  )
}

export default App



// deepak

// bisht

// deepakb21200


// deepakBisht@1234



// Deepak

// Bisht


// deepakB345

// DeepakBisht@1234