// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link, useLocation } from 'react-router-dom'
//  import { TiShoppingCart } from "react-icons/ti";
// import { CgProfile } from "react-icons/cg";
// import "../CSS/navbar.css";

 
// function Navbar() {
//     let location = useLocation()
//   //  let cartCount = useSelector((state) => state.cart.productCount)

//    let cartCount = useSelector(
//     state => (state.cart?.products || []).reduce((sum,p) => sum + (p.qty || 1), 0)
//    )




//   return (
//     <>
//     <div className={`navbar-container`}>

//       <div className={`left`}>
//         <p>Shop here</p>
//       </div>

//       <div className={`center`}>
//         <Link to="/shop">
//         <button className={`${location.pathname === "/shop" ? "active" : ""}`}>Shop</button>
        
//         </Link>

//          <Link to="/shop/men">
//           <button className={`${location.pathname === "/men" ? "active" : ""}`}>Men</button>
//          </Link>


//           <Link to="/shop/women">
//           <button className={`${location.pathname === "/women" ? "active" : ""}`}>Women</button>
//           </Link>


//          <Link to="/shop/kids">
//           <button className={`${location.pathname === "/kids" ? "active" : ""}`}>Kids</button>
//           </Link>
//       </div>

//       <div className={`right`}>
//         <Link to="/cart">
//         <button className={`${location.pathname === "/cart" ? "active" : ""} relative `}>
//           <TiShoppingCart />

//           <sup className={`absolute top-[2px] left-[10px] flex items-center justify-center rounded-full ` }> {cartCount}</sup>
//         </button>
//         </Link>

//         <Link to="/profile">
//         <button className={`${location.pathname === "/profile" ? "active" : ""}`}>
//           <CgProfile/>
//         </button>
//         </Link>

//       </div>

//     </div>
//     </>
//   )

   
// }

// export default Navbar





import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = useSelector((state) =>
    (state.cart?.products || []).reduce((sum, p) => sum + (p.qty || 1), 0)
  );

  const navLinks = [
    { path: "/shop", label: "Shop" },
    { path: "/shop/men", label: "Men" },
    { path: "/shop/women", label: "Women" },
    { path: "/shop/kids", label: "Kids" },
  ];

  return (
    // <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
    //   <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center ">
    //     {/* Left */}
    //     <div className="text-2xl font-semibold text-gray-800 ">
    //       <Link to="/">ShopHere</Link>
    //     </div>

    //     {/* Center - Desktop */}
    //     <div className="hidden md:flex gap-6 text-xl">
    //       {navLinks.map((link) => (
    //         <Link key={link.path} to={link.path}>
    //           <button
    //             className={`text-gray-700 font-medium hover:text-blue-600 transition ${
    //               location.pathname === link.path ? "text-blue-600" : ""
    //             }`}
    //           >
    //             {link.label}
    //           </button>
    //         </Link>
    //       ))}
    //     </div>

    //     {/* Right */}
    //     <div className="flex items-center gap-4">
    //       {/* Cart */}
    //       <Link to="/cart" className="relative">
    //         <TiShoppingCart
    //           className={`text-2xl ${
    //             location.pathname === "/cart" ? "text-blue-600" : "text-gray-700"
    //           }`}
    //         />
    //         {cartCount > 0 && (
    //           <span className="absolute -top-2 -right-2 bg-blue-600 text-black text-xs rounded-full px-[6px] py-[1px]">
    //             {cartCount}
    //           </span>
    //         )}
    //       </Link>

    //       {/* Profile */}
    //       <Link to="/profile">
    //         <CgProfile
    //           className={`text-2xl ${
    //             location.pathname === "/profile"
    //               ? "text-blue-600"
    //               : "text-gray-700"
    //           }`}
    //         />
    //       </Link>

    //       {/* Burger Button - Mobile */}
    //       <button
    //         onClick={() => setMenuOpen(!menuOpen)}
    //         className="md:hidden text-3xl text-gray-700 focus:outline-none"
    //       >
    //         {menuOpen ? <HiX /> : <HiMenuAlt3 />}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Smooth Animated Mobile Menu */}
    //   <div
    //     className={`md:hidden bg-white border-t border-gray-200 shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${
    //       menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
    //     }`}
    //   >
    //     <div className="flex flex-col items-center py-4 space-y-3">
    //       {navLinks.map((link) => (
    //         <Link
    //           key={link.path}
    //           to={link.path}
    //           onClick={() => setMenuOpen(false)}
    //         >
    //           <button
    //             className={`text-gray-700 font-medium hover:text-blue-600 transition ${
    //               location.pathname === link.path ? "text-blue-600" : ""
    //             }`}
    //           >
    //             {link.label}
    //           </button>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </nav>



  <nav className="sticky top-0 left-0 w-full bg-white shadow-md z-50 p-2">
  <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
  
    <div className="lg:text-2xl text-lg font-semibold text-gray-800">
      <Link to="/">Shop Here</Link>
    </div>

 
    <div className="hidden md:flex gap-6 text-xl">
      {navLinks.map((link) => (
        <Link key={link.path} to={link.path}>
          <button
            className={`text-gray-700 font-medium hover:text-blue-600 transition ${
              location.pathname === link.path ? "text-blue-600" : ""
            }`}
          >
            {link.label}
          </button>
        </Link>
      ))}
    </div>


    <div className="flex items-center gap-4">

      <Link to="/cart" className="relative">
        <TiShoppingCart
          className={`text-2xl ${
            location.pathname === "/cart" ? "text-blue-600" : "text-gray-700"
          }`}
        />
    
          <span className="absolute -top-2 -right-2 bg-blue-600 text-black text-xs rounded-full px-[6px] py-[1px]">
            {cartCount}
          </span>
      
      </Link>


      <Link to="/profile">
        <CgProfile
          className={`text-2xl ${
            location.pathname === "/profile"
              ? "text-blue-600"
              : "text-gray-700"
          }`}
        />
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl text-gray-700 focus:outline-none"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>
    </div>
  </div>


  <div
    className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out z-40 ${
      menuOpen
        ? "top-[100%] opacity-100 max-h-60"
        : "top-[100%] opacity-0 max-h-0 overflow-hidden"
    }`}
  >
    <div className="flex flex-col items-center py-4 space-y-3">
      {navLinks.map((link) => (
        <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)}>
          <button
            className={`text-gray-700 font-medium hover:text-blue-600 transition ${
              location.pathname === link.path ? "text-blue-600" : ""
            }`}
          >
            {link.label}
          </button>
        </Link>
      ))}
    </div>
  </div>
</nav>  




    
  );
}

export default Navbar;



{/* <nav className="relative w-full bg-white shadow-md z-50 p-2">
  <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
 
    <div className="lg:text-2xl text-lg font-semibold text-gray-800">
      <Link to="/">Shop Here</Link>
    </div>

 
    <div className="hidden md:flex gap-6 text-xl">
      {navLinks.map((link) => (
        <Link key={link.path} to={link.path}>
          <button
            className={`text-gray-700 font-medium hover:text-blue-600 transition ${
              location.pathname === link.path ? "text-blue-600" : ""
            }`}
          >
            {link.label}
          </button>
        </Link>
      ))}
    </div>

 
    <div className="flex items-center gap-4">
 
      <Link to="/cart" className="relative">
        <TiShoppingCart
          className={`text-2xl ${
            location.pathname === "/cart" ? "text-blue-600" : "text-gray-700"
          }`}
        />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-black text-xs rounded-full px-[6px] py-[1px]">
            {cartCount}
          </span>
        )}
      </Link>

 
      <Link to="/profile">
        <CgProfile
          className={`text-2xl ${
            location.pathname === "/profile"
              ? "text-blue-600"
              : "text-gray-700"
          }`}
        />
      </Link>
 
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl text-gray-700 focus:outline-none"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>
    </div>
  </div>

 
  <div
    className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out origin-top ${
      menuOpen
        ? "opacity-100 scale-y-100"
        : "opacity-0 scale-y-0 pointer-events-none"
    }`}
    style={{ transformOrigin: "top" }}
  >
    <div className="flex flex-col items-center py-4 space-y-3">
      {navLinks.map((link) => (
        <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)}>
          <button
            className={`text-gray-700 font-medium hover:text-blue-600 transition ${
              location.pathname === link.path ? "text-blue-600" : ""
            }`}
          >
            {link.label}
          </button>
        </Link>
      ))}
    </div>
  </div>
</nav>

 */}




 
