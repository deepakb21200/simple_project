// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// export default function CartPage() {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
//   const [updatingId, setUpdatingId] = useState(null);

//   useEffect(() => {
//     const fetchCart = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch("http://localhost:3000/cart/get", {
//           method: "GET",
//           credentials: "include",
//         });
//         const data = await res.json();
//         if (data.cart) dispatch({ type: "set-cart", payload: data.cart });
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCart();
//   }, []);

//   if (loading) return <p>Loading cart...</p>;

//   async function updateQuantity(productId, action) {
//     if (updating) return;
//     setUpdating(true);

//     try {
//       const res = await fetch("http://localhost:3000/cart/update", {
//         method: "POST",
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId, action }),
//       });

//       const data = await res.json();

//       if (data.cart) {
//         dispatch({ type: "set-cart", payload: data.cart });
//       } else if (data.error) {
//         alert(data.error);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setUpdating(false);
//     }
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Your Cart</h2>
//       {cart.products.length > 0 ? (
//         cart.products.map((p, idx) => (
//           <div
//             key={idx}
//             style={{
//               border: "1px solid #ccc",
//               marginBottom: 10,
//               padding: 10,
//               borderRadius: 8,
//             }}
//           >
//             <h3>{p.item.productName}</h3>
//             <p>Price: ₹{p.price}</p>

//             <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//               {/* ✅ Increment Button */}
//               <button
//                 disabled={updatingId === p.item._id || p.item.productCount <= 0} 
//                 //disabled tab hoga  jab uski adminpanel me quantity hi khatam hogayi  hai 
//                 // 5
//                 //5 +
//                 onClick={async () => {
//                   setUpdatingId(p.item._id);
//                   await updateQuantity(p.item._id, "inc");
//                   setUpdatingId(null);
//                 }}
//               >
//                 +
//               </button>

//               <p>Qty: {p.qty}</p>

//               {/* ✅ Decrement Button with Confirmation */}
//               <button
                // disabled={updating}
                // onClick={async () => {
                //   if (p.qty === 1) {
                //     const confirmRemove = window.confirm(
                //       "This product will be removed completely. Are you sure?"
                //     );
                //     if (!confirmRemove) return; // user canceled
                //   }
                //   setUpdatingId(p.item._id);
                //   await updateQuantity(p.item._id, "dec");
                //   setUpdatingId(null);
                // }}
//               >
//                 -
//               </button>

//               <p>Available: {p.item.productCount}</p>
//             </div>

//             <p>Subtotal: ₹{p.price * (p.qty || 1)}</p>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty.</p>
//       )}

//       <h3>Total Price: ₹{cart.totalPrice}</h3>
//       <h3>Total Shipping: ₹{cart.totalShipping}</h3>
//       <h3>Total: ₹{cart.totalPrice + cart.totalShipping}</h3>
//     </div>
//   );
// }






import React from "react";
import { Trash2, RefreshCcw } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);


  let [Shipping,setShipping] = useState("")


    useEffect(() => {
      const fetchCart = async () => {
        setLoading(true);
        try {
          const res = await fetch("http://localhost:3000/cart/get", {
            method: "GET",
            credentials: "include",
          });
          const data = await res.json();
          if (data.cart) dispatch({ type: "set-cart", payload: data.cart });
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchCart();
    }, []);
  
    if (loading) return <p>Loading cart...</p>;
  
    async function updateQuantity(productId, action) {
      if (updating) return;
      setUpdating(true);
  
      try {
        const res = await fetch("http://localhost:3000/cart/update", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, action }),
        });
  
        const data = await res.json();
  
        if (data.cart) {
          dispatch({ type: "set-cart", payload: data.cart });
        } else if (data.error) {
          alert(data.error);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setUpdating(false);
      }
    }




 const deleteSpec= async (productId) => {
    try {
      const res = await fetch("http://localhost:3000/cart/deletes", {
        method: "POST",
        credentials: "include", // for cookies/session
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (res.ok) {
        // Update redux store
        const updatedCart = cart.products.filter(
          (p) => p.item._id !== productId
        );
        dispatch({ type: "set-cart", payload: { ...cart, products: updatedCart } });
        // alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      // alert("Error removing product");
    }
  };


   async function clearHandler(){
     try {
    const res = await fetch("http://localhost:3000/cart/clear", {
      method: "POST",
      credentials: "include", // include cookie/session
    });

    const data = await res.json();

    if (res.ok) {
      dispatch({ type: "set-cart", payload: { ...cart, products: [] } });
     
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
  
  }
  }


  function addShipping(){


  }

  return (
 
<div className="bg-gray-50 py-10 px-4 flex justify-center flex-1">
  <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10   justify-center">
    {cart.products.length > 0 ? (
      <>
        {/* LEFT: Product Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6   ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Shopping Cart</h2>
            <span className="text-sm text-gray-500">
              {cart.products.length} Items
            </span>
          </div>

          {/* Product List */}
          {cart.products.map((p, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center justify-between border-b py-5 gap-4"
            >
              {/* Image + Info */}
              <div className="flex items-center gap-4 w-full sm:w-1/2">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <div>
                  <h3 className="font-medium text-gray-800 rocks">
                    {p.item.productName}
                  </h3>
                  <button
                    className="text-sm text-red-500 mt-1 flex items-center gap-1 hover:text-red-600 transition-colors"
                    onClick={() => {
                      console.log("Deleting product:", p.item._id);
                      deleteSpec(p.item._id);
                    }}
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-gray-800 font-medium w-24 text-center">
                ₹{p.price}
              </div>

              {/* Quantity */}
              <div className="flex items-center border rounded-lg">
                <button
                  className="px-3 py-1 text-gray-600 hover:bg-[color-mix(in_srgb,_#8c0d4f,_transparent_90%)] hover:text-[#8c0d4f]"
                  disabled={updating}
                  onClick={async () => {
                    if (p.qty === 1) {
                      const confirmRemove = window.confirm(
                        "This product will be removed completely. Are you sure?"
                      );
                      if (!confirmRemove) return;
                    }
                    setUpdatingId(p.item._id);
                    await updateQuantity(p.item._id, "dec");
                    setUpdatingId(null);
                  }}
                >
                  -
                </button>

                <span className="px-4 text-gray-800">{p.qty}</span>

                <button
                  className="px-3 py-1 text-gray-600 hover:bg-[color-mix(in_srgb,_#8c0d4f,_transparent_90%)] hover:text-[#8c0d4f]"
                  disabled={updatingId === p.item._id || p.item.productCount <= 0}
                  onClick={async () => {
                    setUpdatingId(p.item._id);
                    await updateQuantity(p.item._id, "inc");
                    setUpdatingId(null);
                  }}
                >
                  +
                </button>
              </div>

              {/* Total */}
              <div className="text-gray-900 font-semibold w-24 text-center">
                ₹{p.price * (p.qty || 1)}
              </div>
            </div>
          ))}

          {/* Coupon + Clear Cart Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
            <div className="flex w-full md:w-auto">
              <input
                type="text"
                placeholder="Coupon code"
                className="border border-gray-300 px-4 py-2 rounded-l-lg w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-r-lg hover:bg-gray-800">
                Apply Coupon
              </button>
            </div>

            <div className="flex gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50"
                onClick={clearHandler}
              >
                <Trash2 size={16} /> Clear Cart
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm  ">
            <div className="flex justify-between font-bold text-xl text-gray-800 ">
              <span>Subtotal</span>
              <span>₹{cart.totalPrice}</span>
            </div>

            <div className="font-semibold text-md">
              <p className="mb-2 text-lg">Shipping</p>
              <div className="space-y-2 pl-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" defaultChecked />
                  <span>Standard Delivery – ₹99</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" />
                  <span>Express Delivery – ₹249</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" />
                  <span>Free Shipping (Orders over ₹3000)</span>
                </label>
              </div>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Tax</span>
              <span>$27.00</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Discount</span>
              <span>-$0.00</span>
            </div>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total</span>
            <span>$301.95</span>
          </div>

          <button className="w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition">
            Proceed to Checkout →
          </button>

          <button className="w-full mt-3 text-pink-600 hover:underline text-sm">
            Continue Shopping
          </button>

          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>We Accept</p>
            <div className="flex justify-center gap-4 mt-2 text-xl">💳 🏦 💰</div>
          </div>
        </div>
      </>
    ) : (
      <EmptyCart />
    )}
  </div>
</div>

 

  );
};

export default CartPage