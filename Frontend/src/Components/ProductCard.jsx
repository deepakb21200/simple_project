// import React from "react";

// const ProductCard = ({ product, activeImages, changeImage, addToCart }) => {

    
//   return (
//     <div
//       key={product._id}
//       className={`product-card justify-between pt-0 pr-4 pb-4 pl-4 
//          mx-[15px] 2xl:mx-[10px]`}
//       style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.5)" }}
//     >
 
//       <img
//         src={activeImages[product._id] || product.productImage[0]}
//         alt={product.productName}
//         className="fade-image" />

//       <div>
//         <div className="product-title">{product.productName}</div>

//         <div className="product-price">₹{product.productPrice}</div>

         
//         <p className="text-sm mt-1 line-clamp-2">
//           {product.description ? product.description : "No description available."}
//         </p>

//         {product.productImage.length > 0 && (
//           <div className="gallery flex gap-2 mt-2">
//             {product.productImage.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`${product.productName} ${idx + 1}`}
//                 className="w-16 h-16 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
//                 onClick={() => changeImage(product._id, img)}
//               />
//             ))}
//           </div>
//         )}

//         <div className="mt-2">
//           <button
//             className="add-btn bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
//             onClick={() => addToCart(product)}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import React, { useState, useRef } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [activeImage, setActiveImage] = useState(product.productImage[0]);
  const imageRef = useRef(null);

  const changeImage = (newSrc) => {
    if (imageRef.current.src.includes(newSrc)) return;

    // Fade out
    imageRef.current.classList.add("fade-out");

    setTimeout(() => {
      setActiveImage(newSrc);
      // Fade in
      imageRef.current.classList.remove("fade-out");
    }, 300);
  };

  return (
    <div
      className="product-card justify-between pt-0 px-3 pb-4     justify-items-center 2xl:mx-[10px]"
      style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.5)" }}
    >
      <img
        ref={imageRef}
        src={activeImage}
        alt={product.productName}
        className="fade-image transition-opacity duration-300"
      />

      <div>
        <div className="product-title">{product.productName}</div>
        <div className="product-price">₹{product.productPrice}</div>
        <p className="text-sm mt-1 line-clamp-2">
          {product.description || "No description available."}
        </p>

        {product.productImage.length > 1 && (
          <div className="gallery flex gap-2 mt-2">
            {product.productImage.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.productName} ${idx + 1}`}
                className="w-16 h-16 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
                onClick={() => changeImage(img)}
              />
            ))}
          </div>
        )}

        <div className="mt-2">
          <button
            className="add-btn bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>


    //  <div className="product-card flex flex-col gap-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 w-full max-w-[300px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[300px] mx-auto">
    //   <img
    //     ref={imageRef}
    //     src={activeImage}
    //     alt={product.productName}
    //     className="fade-image w-full h-44 sm:h-36 md:h-40 lg:h-44 object-cover"
    //   />

    //   <div className="p-3 flex flex-col flex-grow justify-between">
    //     <div>
    //       <div className="product-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold mb-1">
    //         {product.productName}
    //       </div>
    //       <div className="product-price text-green-600 font-bold text-sm sm:text-xs md:text-sm lg:text-base">
    //         ₹{product.productPrice}
    //       </div>
    //       <p className="text-gray-500 text-xs sm:text-[10px] md:text-sm mt-1 line-clamp-2">
    //         {product.description || "No description available."}
    //       </p>
    //     </div>

    //     {product.productImage.length > 1 && (
    //       <div className="gallery flex gap-2 mt-2">
    //         {product.productImage.map((img, idx) => (
    //           <img
    //             key={idx}
    //             src={img}
    //             alt={`${product.productName} ${idx + 1}`}
    //             className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
    //             onClick={() => changeImage(img)}
    //           />
    //         ))}
    //       </div>
    //     )}

    //     <button
    //       className="add-btn mt-3 w-full py-2 text-white font-semibold text-sm rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
    //       onClick={() => addToCart(product)}
    //     >
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>
  );
};

export default ProductCard;
