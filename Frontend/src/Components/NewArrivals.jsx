import React, { useState } from "react";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
    const [cart, setCart] = useState([]);
  const products = [
    {
      _id: 1,
      productName: "Men’s Leather Jacket",
      productCategory: "Men",
      productPrice: 3499,
      productImage: [
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3b4f?auto=format&fit=crop&w=800&q=80",
      ],
      productCount: 8,
      description: "Stylish brown leather jacket for all seasons.",
    },
    {
      _id: 2,
      productName: "Women’s Floral Dress",
      productCategory: "Women",
      productPrice: 2499,
      productImage: [
        "https://images.unsplash.com/photo-1587467430010-383d8d6b8c2f?auto=format&fit=crop&w=800&q=80",
      ],
      productCount: 15,
      description: "Elegant and comfortable floral dress perfect for summer.",
    },
    {
      _id: 3,
      productName: "Kids Sneakers",
      productCategory: "Kids",
      productPrice: 999,
      productImage: [
        "https://images.unsplash.com/photo-1600185365483-26d7a4cf06a4?auto=format&fit=crop&w=800&q=80",
      ],
      productCount: 25,
      description: "Durable and lightweight sneakers for kids.",
    },
    {
      _id: 4,
      productName: "Men’s Denim Jeans",
      productCategory: "Men",
      productPrice: 1899,
      productImage: [
        "https://images.unsplash.com/photo-1562158070-57e670f3b31b?auto=format&fit=crop&w=800&q=80",
      ],
      productCount: 20,
      description: "Classic blue denim jeans with a comfortable fit.",
    },
    {
      _id: 5,
      productName: "Women’s Handbag",
      productCategory: "Women",
      productPrice: 2999,
      productImage: [
        "https://images.unsplash.com/photo-1590080875839-aac6a70f65d1?auto=format&fit=crop&w=800&q=80",
      ],
      productCount: 5,
      description: "Premium leather handbag for everyday use.",
    },
  ];

  const categoryColors = {
    Men: "bg-blue-600",
    Women: "bg-pink-500",
    Kids: "bg-yellow-500",
  };

    const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Cart:", [...cart, product]);
  };


  return (
    // <section className="bg-[#0e0e10] py-16 px-6">
    //   <div className="max-w-7xl mx-auto">
    //     <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
    //       ✨ New Arrivals
    //     </h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
    //       {products.map((p) => (
    //         <div
    //           key={p._id}
    //           className="bg-[#1b1b1f] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    //         >
    //           <div className="relative">
    //             <img
    //               src={p.productImage[0]}
    //               alt={p.productName}
    //               className="w-full h-56 object-cover"
    //             />
    //             <span
    //               className={`absolute top-3 left-3 text-xs text-white px-3 py-1 rounded-full ${categoryColors[p.productCategory]}`}
    //             >
    //               {p.productCategory}
    //             </span>
    //           </div>

    //           <div className="p-4 flex flex-col flex-grow justify-between">
    //             <div>
    //               <h3 className="text-white text-lg font-semibold truncate">
    //                 {p.productName}
    //               </h3>
    //               <p className="text-gray-400 text-sm mt-1 line-clamp-2">
    //                 {p.description}
    //               </p>
    //             </div>

    //             <div className="mt-3">
    //               <p className="text-indigo-400 font-bold text-xl">
    //                 ₹{p.productPrice}
    //               </p>
    //               <p
    //                 className={`text-sm ${
    //                   p.productCount > 0
    //                     ? "text-green-400"
    //                     : "text-red-500"
    //                 }`}
    //               >
    //                 {p.productCount > 0
    //                   ? `In Stock: ${p.productCount}`
    //                   : "Out of Stock"}
    //               </p>
    //             </div>

    //             <button
    //               className={`mt-4 w-full py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
    //                 p.productCount > 0
    //                   ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:from-blue-600 hover:to-indigo-500"
    //                   : "bg-gray-700 text-gray-500 cursor-not-allowed"
    //               }`}
    //             >
    //               {p.productCount > 0 ? "Add to Cart" : "Out of Stock"}
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="flex flex-col   mx-auto   
                sm:max-w-[90vw] 
                md:max-w-[90vw] 
                lg:max-w-[95vw]  border-4 border-blue-700">

        <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
          ✨ New Arrivals
        </h2>

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
  );
};

export default NewArrivals;
