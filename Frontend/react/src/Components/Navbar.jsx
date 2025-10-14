import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
 import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import "../CSS/navbar.css";

 
function Navbar() {
    let location = useLocation()
  //  let cartCount = useSelector((state) => state.cart.productCount)

   let cartCount = useSelector(
    state => (state.cart?.products || []).reduce((sum,p) => sum + (p.qty || 1), 0)
   )




  return (
    <>
    <div className={`navbar-container`}>

      <div className={`left`}>
        <p>Shop here</p>
      </div>

      <div className={`center`}>
        <Link to="/shop">
        <button className={`${location.pathname === "/shop" ? "active" : ""}`}>Shop</button>
        
        </Link>

         <Link to="/shop/men">
          <button className={`${location.pathname === "/men" ? "active" : ""}`}>Men</button>
         </Link>


          <Link to="/shop/women">
          <button className={`${location.pathname === "/women" ? "active" : ""}`}>Women</button>
          </Link>


         <Link to="/shop/kids">
          <button className={`${location.pathname === "/kids" ? "active" : ""}`}>Kids</button>
          </Link>
      </div>

      <div className={`right`}>
        <Link to="/cart">
        <button className={`${location.pathname === "/cart" ? "active" : ""} relative `}>
          <TiShoppingCart />

          <sup className={`absolute top-[2px] left-[10px] flex items-center justify-center rounded-full ` }> {cartCount}</sup>
        </button>
        </Link>

        <Link to="/profile">
        <button className={`${location.pathname === "/profile" ? "active" : ""}`}>
          <CgProfile/>
        </button>
        </Link>

      </div>

    </div>
    </>
  )

   
}

export default Navbar