import { useState } from "react";
import ProductCard from "./ProductCard";

 

function Trending() {
    const [cart, setCart] = useState([]);

  const products = [
    {
      _id: 1,
      productName: "Stylish Men's Sneakers",
      productCategory: "Men • Footwear",
      productPrice: 2999,
      productImage: [
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      _id: 2,
      productName: "Elegant Women's Jacket",
      productCategory: "Women • Clothing",
      productPrice: 3499,
      productImage: [
        "https://images.unsplash.com/photo-1593032457869-76f5c9b4f6b1?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      _id: 3,
      productName: "Smart Fitness Watch",
      productCategory: "Unisex • Gadgets",
      productPrice: 5499,
      productImage: [
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      _id: 4,
      productName: "Wireless Headphones",
      productCategory: "Electronics • Audio",
      productPrice: 4999,
      productImage: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      _id: 5,
      productName: "Kids’ Graphic Hoodie",
      productCategory: "Kids • Clothing",
      productPrice: 1499,
      productImage: [
        "https://images.unsplash.com/photo-1606813902734-8b3e6d3eaeef?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Cart:", [...cart, product]);
  };
  return (
//   <section class="bg-[#0f0f10] text-white py-16 px-6 md:px-16">
 
//   <div class="text-center mb-12">
//     <h2 class="text-4xl font-extrabold mb-3 tracking-tight">
//       🔥 Trending Products
//     </h2>
//     <p class="text-gray-400 text-lg">
//       Most popular picks loved by our customers this week
//     </p>
//   </div>

 
//   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
 
//     <div class="bg-[#1a1a1d] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
//         alt="Product"
//         class="w-full h-56 object-cover"
//       />
//       <div class="p-4">
//         <h3 class="text-lg font-semibold">Stylish Men's Sneakers</h3>
//         <p class="text-gray-400 text-sm mt-1">Men • Footwear</p>
//         <p class="text-xl font-bold mt-2 text-purple-400">₹2,999</p>
//         <button
//           class="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>

 
//     <div class="bg-[#1a1a1d] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1593032457869-76f5c9b4f6b1?auto=format&fit=crop&w=800&q=80"
//         alt="Product"
//         class="w-full h-56 object-cover"
//       />
//       <div class="p-4">
//         <h3 class="text-lg font-semibold">Elegant Women's Jacket</h3>
//         <p class="text-gray-400 text-sm mt-1">Women • Clothing</p>
//         <p class="text-xl font-bold mt-2 text-purple-400">₹3,499</p>
//         <button
//           class="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
 
//     <div class="bg-[#1a1a1d] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
//         alt="Product"
//         class="w-full h-56 object-cover"
//       />
//       <div class="p-4">
//         <h3 class="text-lg font-semibold">Smart Fitness Watch</h3>
//         <p class="text-gray-400 text-sm mt-1">Unisex • Gadgets</p>
//         <p class="text-xl font-bold mt-2 text-purple-400">₹5,499</p>
//         <button
//           class="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>

 
//     <div class="bg-[#1a1a1d] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
//         alt="Product"
//         class="w-full h-56 object-cover"
//       />
//       <div class="p-4">
//         <h3 class="text-lg font-semibold">Wireless Headphones</h3>
//         <p class="text-gray-400 text-sm mt-1">Electronics • Audio</p>
//         <p class="text-xl font-bold mt-2 text-purple-400">₹4,999</p>
//         <button
//           class="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>

 
//     <div class="bg-[#1a1a1d] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1606813902734-8b3e6d3eaeef?auto=format&fit=crop&w=800&q=80"
//         alt="Product"
//         class="w-full h-56 object-cover"
//       />
//       <div class="p-4">
//         <h3 class="text-lg font-semibold">Kids’ Graphic Hoodie</h3>
//         <p class="text-gray-400 text-sm mt-1">Kids • Clothing</p>
//         <p class="text-xl font-bold mt-2 text-purple-400">₹1,499</p>
//         <button
//           class="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   </div>
// </section>


  <section class=" flex flex-col   mx-auto   
                sm:max-w-[90vw] 
                md:max-w-[90vw] 
                lg:max-w-[95vw]  border-4 border-blue-700">
 
  <div class="text-center mb-12">
    <h2 class="text-4xl font-extrabold mb-3 tracking-tight text-white">
      🔥 Trending Products
    </h2>
    <p class="text-gray-400 text-lg">
      Most popular picks loved by our customers this week
    </p>
  </div>

 
  <div className="lg:grid xl:grid-cols-4 lg:grid-cols-3 gap-6    flex  flex-wrap
  border-4 border-red-400 place-content-center md:justify-between   ">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
</section>
  )
}

export default Trending