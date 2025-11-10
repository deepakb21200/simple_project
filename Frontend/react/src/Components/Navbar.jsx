import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [cartValue, setCartValue] = useState(0);

  const cartCount = useSelector((state) =>
    (state.cart?.products || []).reduce((sum, p) => sum + (p.qty || 1), 0)
  );
  const status = useSelector((state) => state.isProductAdd);

  const navLinks = [
    { path: "/shop", label: "Shop" },
    { path: "/shop/men", label: "Men" },
    { path: "/shop/women", label: "Women" },
    { path: "/shop/kids", label: "Kids" },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({
        type: "productAdd",
        payload: { isAdding: false },
      });

      try {
        const res = await fetch("http://localhost:3000/user/getProfile", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        if (res.ok && data.user) {
          const name = `${data.user.firstName} ${data.user.lastName}`;
          setUserName(name);
          setCartValue(data.user.Cartvalue || 0);

          dispatch({
            type: "set-user",
            payload: {
              id: data.user._id,
              name,
              email: data.user.email,
            },
          });
        } else {
          setUserName("");
        }
      } catch (err) {
        setUserName("");
      }
    };

    fetchUser();
  }, [status]);
// bg-white/80 
  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-lg shadow-md border-b border-gray-100 transition-all duration-300 h-[7vh]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight hover:text-gray-900 transition-colors"
        >
          Shop<span className="text-blue-600">Here</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[16px] font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-blue-600 after:w-full"
                  : "text-gray-700 hover:text-blue-600"
              } after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative group hover:scale-110 transition-transform duration-300"
          >
            <TiShoppingCart className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors" />
            {(cartCount || cartValue) > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold px-[6px] py-[1px] rounded-full shadow-md">
                {cartCount || cartValue}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link
            to={userName ? "/profile" : "/login"}
            className="flex items-center gap-1 hover:scale-110 transition-transform duration-300"
          >
            <CgProfile className="text-2xl text-gray-800 hover:text-blue-600 transition-colors" />
            <span className="hidden sm:block text-sm font-medium text-gray-700 hover:text-blue-600">
              {userName ? userName.split(" ")[0] : "Login"}
            </span>
          </Link>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 animate-[fadeIn_0.3s_ease-in]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 px-6 text-base font-medium ${
                location.pathname === link.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
