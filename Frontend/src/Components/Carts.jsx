// // CartPage.jsx
// import React from "react";

// const Carts = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
//       <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
//         {/* Left: Product Items */}
//         <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-lg font-semibold mb-6">Shopping Cart</h2>

//           {/* Product Item */}
//           <div className="border-b pb-6 mb-6 flex gap-4 items-center">
//             <img
//               src="https://via.placeholder.com/100"
//               alt="Product"
//               className="w-24 h-24 object-cover rounded-lg"
//             />
//             <div className="flex-1">
//               <h3 className="font-semibold text-gray-800">
//                 Lorem ipsum dolor sit amet
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Color: Black | Size: M
//               </p>
//               <button className="text-sm text-red-500 hover:underline mt-1">
//                 Remove
//               </button>
//             </div>

//             <div className="w-28 text-center font-medium">$89.99</div>
//             <div className="flex items-center border rounded-md">
//               <button className="px-2 py-1 text-gray-600">-</button>
//               <span className="px-3">1</span>
//               <button className="px-2 py-1 text-gray-600">+</button>
//             </div>
//             <div className="w-28 text-center font-semibold text-gray-900">
//               $89.99
//             </div>
//           </div>

//           {/* Coupon + Buttons */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="flex w-full md:w-auto">
//               <input
//                 type="text"
//                 placeholder="Coupon code"
//                 className="border rounded-l-md px-4 py-2 w-full md:w-64 focus:outline-none"
//               />
//               <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700">
//                 Apply
//               </button>
//             </div>
//             <div className="flex gap-3">
//               <button className="border px-4 py-2 rounded-md hover:bg-gray-100">
//                 Update Cart
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
//                 Clear Cart
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right: Order Summary */}
//         <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-md h-fit">
//           <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span className="font-medium">$269.96</span>
//             </div>
//             <div className="flex flex-col">
//               <span className="mb-2">Shipping</span>
//               <label className="flex items-center gap-2 text-gray-600">
//                 <input type="radio" name="shipping" defaultChecked />
//                 Standard Delivery - $4.99
//               </label>
//               <label className="flex items-center gap-2 text-gray-600">
//                 <input type="radio" name="shipping" />
//                 Express Delivery - $12.99
//               </label>
//               <label className="flex items-center gap-2 text-gray-600">
//                 <input type="radio" name="shipping" />
//                 Free Shipping (Orders over $300)
//               </label>
//             </div>
//             <div className="flex justify-between">
//               <span>Tax</span>
//               <span>$27.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Discount</span>
//               <span>-$0.00</span>
//             </div>
//           </div>

//           <hr className="my-4" />

//           <div className="flex justify-between text-lg font-semibold">
//             <span>Total</span>
//             <span>$301.95</span>
//           </div>

//           <button className="w-full bg-pink-600 text-white py-3 mt-6 rounded-lg font-medium hover:bg-pink-700 transition">
//             Proceed to Checkout →
//           </button>

//           <button className="w-full text-sm text-pink-600 mt-3 hover:underline">
//             Continue Shopping
//           </button>

//           <div className="mt-6 text-center text-gray-500 text-sm">
//             <p>We Accept</p>
//             <div className="flex justify-center gap-4 mt-2">
//               <i className="fas fa-credit-card text-xl"></i>
//               <i className="fas fa-university text-xl"></i>
//               <i className="fas fa-wallet text-xl"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carts






// import React from "react";
// import { Trash2, RefreshCcw } from "lucide-react";

// const Carts = () => {
//   return (
//     <div className="  bg-gray-50 py-10 px-4 flex justify-center">
//       <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10">
//         {/* LEFT: Product Section */}
//         <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Shopping Cart</h2>
//             <span className="text-sm text-gray-500">
//               3 Items
//             </span>
//           </div>

//           {/* Product Item */}
//           {[
//             {
//               name: "Lorem ipsum dolor sit amet",
//               color: "Black",
//               size: "M",
//               price: 89.99,
//               qty: 1,
//               image: "https://via.placeholder.com/90x90.png?text=Bag",
//             },
//             {
//               name: "Consectetur adipiscing elit",
//               color: "White",
//               size: "L",
//               price: 64.99,
//               qty: 2,
//               image: "https://via.placeholder.com/90x90.png?text=Glasses",
//             },
//             {
//               name: "Sed do eiusmod tempor",
//               color: "Blue",
//               size: "S",
//               price: 49.99,
//               qty: 1,
//               image: "https://via.placeholder.com/90x90.png?text=Heels",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="flex flex-col sm:flex-row items-center justify-between border-b py-5 gap-4"
//             >
//               {/* Image + Info */}
//               <div className="flex items-center gap-4 w-full sm:w-1/2">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-lg border"
//                 />
//                 <div>
//                   <h3 className="font-medium text-gray-800">{item.name}</h3>
//                   {/* <p className="text-sm text-gray-500">
//                     Color: {item.color} | Size: {item.size}
//                   </p> */}
//                 <button className="text-sm text-red-500 mt-1 flex items-center gap-1 hover:text-red-600 transition-colors">
//   <Trash2 size={14} /> Remove
// </button>

//                 </div>
//               </div>

//               {/* Price */}
//               <div className="text-gray-800 font-medium w-24 text-center">
//                 ${item.price.toFixed(2)}
//               </div>

//               {/* Quantity */}
//               <div className="flex items-center border rounded-lg">
//                 <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
//                 <span className="px-4 text-gray-800">{item.qty}</span>
//                 <button className="px-3 py-1 text-gray-600 hover:bg-[color-mix(in_srgb,_#8c0d4f,_transparent_90%)] hover:text-[#8c0d4f]">+</button>
//               </div>

//               {/* Total */}
//               <div className="text-gray-900 font-semibold w-24 text-center">
//                 ${(item.price * item.qty).toFixed(2)}
//               </div>
//             </div>
//           ))}

//           {/* Coupon + Action Buttons */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
//             <div className="flex w-full md:w-auto">
//               <input
//                 type="text"
//                 placeholder="Coupon code"
//                 className="border border-gray-300 px-4 py-2 rounded-l-lg w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-pink-500"
//               />
//               <button className="bg-gray-900 text-white px-4 py-2 rounded-r-lg hover:bg-gray-800">
//                 Apply Coupon
//               </button>
//             </div>

//             <div className="flex gap-3">
//               {/* <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
//                 <RefreshCcw size={16} /> Update Cart
//               </button> */}
//               <button className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50">
//                 <Trash2 size={16} /> Clear Cart
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Order Summary */}
//         <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
//           <h2 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h2>

//           <div className="space-y-4 text-sm text-gray-600">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span className="font-medium text-gray-800">$269.96</span>
//             </div>

//             <div>
//               <p className="mb-2">Shipping</p>
//               <div className="space-y-2 pl-1">
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" defaultChecked />
//                   <span>Standard Delivery – $4.99</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" />
//                   <span>Express Delivery – $12.99</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" />
//                   <span>Free Shipping (Orders over $300)</span>
//                 </label>
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <span>Tax</span>
//               <span>$27.00</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Discount</span>
//               <span>-$0.00</span>
//             </div>
//           </div>

//           <hr className="my-5" />

//           <div className="flex justify-between text-lg font-semibold text-gray-800">
//             <span>Total</span>
//             <span>$301.95</span>
//           </div>

//           <button className="w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition">
//             Proceed to Checkout →
//           </button>

//           <button className="w-full mt-3 text-pink-600 hover:underline text-sm">
//             Continue Shopping
//           </button>

//           <div className="mt-6 text-center text-gray-500 text-sm">
//             <p>We Accept</p>
//             <div className="flex justify-center gap-4 mt-2 text-xl">
//               💳 🏦 💰
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carts










import React from "react";
import { Trash2, RefreshCcw } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../../../../Backend/Models/CartSchema";

const Carts = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);



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

  return (
    <div className="  bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10">
        {/* LEFT: Product Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Shopping Cart</h2>
            <span className="text-sm text-gray-500">
              3 Items
            </span>
          </div>

          {/* Product Item */}
            {cart.products.length > 0 ?   cart.products.map((p, idx) => (
              <div
              key={i}
              className="flex flex-col sm:flex-row items-center justify-between border-b py-5 gap-4"
            >
              {/* Image + Info */}
              <div className="flex items-center gap-4 w-full sm:w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  {/* <p className="text-sm text-gray-500">
                    Color: {item.color} | Size: {item.size}
                  </p> */}
                <button className="text-sm text-red-500 mt-1 flex items-center gap-1 hover:text-red-600 transition-colors">
  <Trash2 size={14} /> Remove
</button>

                </div>
              </div>

              {/* Price */}
              <div className="text-gray-800 font-medium w-24 text-center">
                ${item.price.toFixed(2)}
              </div>

              {/* Quantity */}
              <div className="flex items-center border rounded-lg">
                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                <span className="px-4 text-gray-800">{item.qty}</span>
                <button className="px-3 py-1 text-gray-600 hover:bg-[color-mix(in_srgb,_#8c0d4f,_transparent_90%)] hover:text-[#8c0d4f]"
                  disabled={updatingId === p.item._id || p.item.productCount <= 0} 
                //disabled tab hoga  jab uski adminpanel me quantity hi khatam hogayi  hai 
                // 5
                //5 +
                onClick={async () => {
                  setUpdatingId(p.item._id);
                  await updateQuantity(p.item._id, "inc");
                  setUpdatingId(null);
                }}>+</button>
              </div>

              {/* Total */}
              <div className="text-gray-900 font-semibold w-24 text-center">
                Qty: {p.qty}
              </div>
            </div>
            )) :  ( <p>Your cart is empty.</p>)}

     


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
     
              <button className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50">
                <Trash2 size={16} /> Clear Cart
              </button>
            </div>
          </div>
        </div>





        

        {/* RIGHT: Order Summary */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h2>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-gray-800">$269.96</span>
            </div>

            <div>
              <p className="mb-2">Shipping</p>
              <div className="space-y-2 pl-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" defaultChecked />
                  <span>Standard Delivery – $4.99</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" />
                  <span>Express Delivery – $12.99</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" />
                  <span>Free Shipping (Orders over $300)</span>
                </label>
              </div>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>$27.00</span>
            </div>

            <div className="flex justify-between">
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
            <div className="flex justify-center gap-4 mt-2 text-xl">
              💳 🏦 💰
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts












// ye hai Cart.page original


//     <div className="  bg-gray-50 py-10 px-4 flex justify-center">
//       <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10">
//         {/* LEFT: Product Section */}
//         <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Shopping Cart</h2>
//             <span className="text-sm text-gray-500">
//              {cart.products.length} Items
//             </span>
//           </div>

//            {/* 🔹 Header Row (Product, Price, Quantity, Total) */}
//       <div className="hidden sm:grid grid-cols-4 font-medium text-gray-600 border-b pb-3">
//         <div className="border-2 border-red">Product</div>
//         <div className="text-center border-2 border-red">Price</div>
//         <div className="text-center border-2 border-red">Quantity</div>
//         <div className="text-center border-2 border-red">Total</div>
//       </div>

//           {/* Product Item */}
//             {cart.products.length > 0 ?  

 

//              cart.products.map((p, idx) => (
//               <div  key={idx}  className="flex flex-col sm:flex-row items-center justify-between
//                border-b py-5 gap-4" >
//               {/* Image + Info */}
//               <div className="flex items-center gap-4 w-full sm:w-1/2 border-red-500 border-2">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="w-20 h-20 object-cover rounded-lg border"
//                 />
//                 <div>
//                   <h3 className="font-medium text-gray-800 rocks">{p.item.productName}</h3>
//                   {/* <p className="text-sm text-gray-500">
//                     Color: {item.color} | Size: {item.size}
//                   </p> */}
//                 <button className="text-sm text-red-500 mt-1 flex items-center gap-1 hover:text-red-600 transition-colors">
//   <Trash2 size={14} /> Remove
// </button>

//                 </div>
//               </div>

//               {/* Price */}
//               <div className="text-gray-800 font-medium w-24 text-center border-red-500 border-2">
//                  {p.price.toFixed(2)}
//               </div>

//               {/* Quantity */}
//               <div className="flex items-center border rounded-lg border-red-500 ">
//                 <button className="px-3 py-1 text-gray-600 hover:bg-[color-mix(in_srgb,_#8c0d4f,_transparent_90%)] hover:text-[#8c0d4f]" disabled={updating}
//                 onClick={async () => {
//                   if (p.qty === 1) {
//                     const confirmRemove = window.confirm(
//                       "This product will be removed completely. Are you sure?"
//                     );
//                     if (!confirmRemove) return; // user canceled
//                   }
//                   setUpdatingId(p.item._id);
//                   await updateQuantity(p.item._id, "dec");
//                   setUpdatingId(null);
//                 }}>-</button>
//                 <span className="px-4 text-gray-800">{p.qty}</span>
//                 <button className="px-3 py-1 text-gray-600 hover:bg-[color-mix(in_srgb,_#8c0d4f,_transparent_90%)] hover:text-[#8c0d4f]"
//                   disabled={updatingId === p.item._id || p.item.productCount <= 0} 
//                 //disabled tab hoga  jab uski adminpanel me quantity hi khatam hogayi  hai 
//                 // 5
//                 //5 +
//                 onClick={async () => {
//                   setUpdatingId(p.item._id);
//                   await updateQuantity(p.item._id, "inc");
//                   setUpdatingId(null);
//                 }}>+</button>
//               </div>

//               {/* Total */}
//               <div className="text-gray-900 font-semibold w-24 text-center border-red-500 border-2" >
//                 ₹{p.price * (p.qty || 1)}
//               </div>
//             </div>
//             )) 
          
            
            
//             :  ( <p>Your cart is empty.</p>)}

     


//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
//             <div className="flex w-full md:w-auto">
//               <input
//                 type="text"
//                 placeholder="Coupon code"
//                 className="border border-gray-300 px-4 py-2 rounded-l-lg w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-pink-500"
//               />
//               <button className="bg-gray-900 text-white px-4 py-2 rounded-r-lg hover:bg-gray-800">
//                 Apply Coupon
//               </button>
//             </div>

//             <div className="flex gap-3">
     
//               <button className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50">
//                 <Trash2 size={16} /> Clear Cart
//               </button>
//             </div>
//           </div>
//         </div>





        

//         {/* RIGHT: Order Summary */}
//         <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
//           <h2 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h2>

//           <div className="space-y-4 text-sm text-gray-600">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span className="font-medium text-gray-800">$269.96</span>
//             </div>

//             <div>
//               <p className="mb-2">Shipping</p>
//               <div className="space-y-2 pl-1">
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" defaultChecked />
//                   <span>Standard Delivery – $4.99</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" />
//                   <span>Express Delivery – $12.99</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" />
//                   <span>Free Shipping (Orders over $300)</span>
//                 </label>
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <span>Tax</span>
//               <span>$27.00</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Discount</span>
//               <span>-$0.00</span>
//             </div>
//           </div>

//           <hr className="my-5" />

//           <div className="flex justify-between text-lg font-semibold text-gray-800">
//             <span>Total</span>
//             <span>$301.95</span>
//           </div>

//           <button className="w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition">
//             Proceed to Checkout →
//           </button>

//           <button className="w-full mt-3 text-pink-600 hover:underline text-sm">
//             Continue Shopping
//           </button>

//           <div className="mt-6 text-center text-gray-500 text-sm">
//             <p>We Accept</p>
//             <div className="flex justify-center gap-4 mt-2 text-xl">
//               💳 🏦 💰
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
