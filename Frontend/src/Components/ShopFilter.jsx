// import React from "react";

// const ShopFilter = () => {
//   const categories = ["Men", "Women", "Kids", "Accessories"];
//   const brands = ["Nike", "Adidas", "Puma", "Reebok"];
//   const prices = ["Under ₹500", "₹500-1000", "₹1000-2000", "Above ₹2000"];
//   const ratings = [5, 4, 3, 2];
//   const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-400"];

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-6">

//         {/* Sidebar Filters */}
//         <div className="w-full lg:w-1/4 bg-white p-5 rounded-2xl shadow-md">
//           <h2 className="text-xl font-bold mb-4">Filters</h2>

//           {/* Categories */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Category</h3>
//             {categories.map((c) => (
//               <label key={c} className="flex items-center gap-2 mb-1">
//                 <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
//                 <span className="text-gray-700">{c}</span>
//               </label>
//             ))}
//           </div>

//           {/* Price */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Price</h3>
//             {prices.map((p) => (
//               <label key={p} className="flex items-center gap-2 mb-1">
//                 <input type="radio" name="price" className="form-radio h-4 w-4 text-indigo-600" />
//                 <span className="text-gray-700">{p}</span>
//               </label>
//             ))}
//           </div>

//           {/* Brand */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Brand</h3>
//             {brands.map((b) => (
//               <label key={b} className="flex items-center gap-2 mb-1">
//                 <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
//                 <span className="text-gray-700">{b}</span>
//               </label>
//             ))}
//           </div>

//           {/* Ratings */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Rating</h3>
//             {ratings.map((r) => (
//               <label key={r} className="flex items-center gap-2 mb-1">
//                 <input type="radio" name="rating" className="form-radio h-4 w-4 text-indigo-600" />
//                 <span className="text-gray-700">{"★".repeat(r)} & Up</span>
//               </label>
//             ))}
//           </div>

//           {/* Colors */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Color</h3>
//             <div className="flex gap-2">
//               {colors.map((c, i) => (
//                 <span key={i} className={`w-6 h-6 rounded-full cursor-pointer ${c} border border-gray-300`}></span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Products Section */}
//         <div className="flex-1">
//           {/* Top Sorting */}
//           <div className="flex justify-between items-center mb-6">
//             <p className="text-gray-600">Showing 1-20 of 100 results</p>
//             <select className="border rounded-lg px-3 py-2">
//               <option>Sort by Popularity</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Newest First</option>
//             </select>
//           </div>

//           {/* Products Grid */}
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//             {[1,2,3,4,5,6,7,8,9,10].map((p) => (
//               <div key={p} className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition">
//                 <img
//                   src={`https://source.unsplash.com/300x300/?fashion,clothes,${p}`}
//                   alt="Product"
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-semibold text-gray-800 mb-1">Product Name</h3>
//                 <p className="text-indigo-600 font-bold mb-2">₹999</p>
//                 <p className="text-gray-500 text-sm line-clamp-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 <button className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ShopFilter;






// import React, { useState } from "react";

// const categories = ["Men", "Women", "Kids", "Accessories"];
// const prices = ["Under ₹500", "₹500 - ₹1000", "Above ₹1000"];
// const brands = ["Nike", "Adidas", "Puma", "Reebok"];
// const offers = ["10% Off", "20% Off", "50% Off"];
// const availability = ["In Stock", "Out of Stock"];
// const sizes = ["S","M","L","XL","6","7","8","9","10"];

// const ShopFilter = () => {
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedPrices, setSelectedPrices] = useState([]);
//   const [selectedOffers, setSelectedOffers] = useState([]);
//   const [selectedAvailability, setSelectedAvailability] = useState([]);

//   const handleSizeClick = (size) => {
//     if (selectedSizes.includes(size)) {
//       setSelectedSizes(selectedSizes.filter((s) => s !== size));
//     } else {
//       setSelectedSizes([...selectedSizes, size]);
//     }
//   };

//   // Clear All function
//   const clearAllFilters = () => {
//     setSelectedSizes([]);
//     setSelectedCategories([]);
//     setSelectedBrands([]);
//     setSelectedPrices([]);
//     setSelectedOffers([]);
//     setSelectedAvailability([]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-6">

//         {/* Sidebar Filters */}
//         <div className="w-full lg:w-1/4 bg-white p-5 rounded-2xl shadow-md">
//           {/* Header with Clear All */}
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">Filters</h2>
//             <button
//               onClick={clearAllFilters}
//               className="text-md text-indigo-600 font-semibold hover:underline"
//             >
//               Clear All
//             </button>
//           </div>

//           {/* Categories */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Category</h3>
//             {categories.map((c) => (
//               <label key={c} className="flex items-center gap-2 mb-1">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-indigo-600"
//                   checked={selectedCategories.includes(c)}
//                   onChange={() => {
//                     selectedCategories.includes(c)
//                       ? setSelectedCategories(selectedCategories.filter((cat) => cat !== c))
//                       : setSelectedCategories([...selectedCategories, c]);
//                   }}
//                 />
//                 <span className="text-gray-700">{c}</span>
//               </label>
//             ))}
//           </div>

//           {/* Price */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Price</h3>
//             {prices.map((p) => (
//               <label key={p} className="flex items-center gap-2 mb-1">
//                 <input
//                   type="radio"
//                   name="price"
//                   className="form-radio h-4 w-4 text-indigo-600"
//                   checked={selectedPrices.includes(p)}
//                   onChange={() => setSelectedPrices([p])}
//                 />
//                 <span className="text-gray-700">{p}</span>
//               </label>
//             ))}
//           </div>

//           {/* Brand */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Brand</h3>
//             {brands.map((b) => (
//               <label key={b} className="flex items-center gap-2 mb-1">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-indigo-600"
//                   checked={selectedBrands.includes(b)}
//                   onChange={() =>
//                     selectedBrands.includes(b)
//                       ? setSelectedBrands(selectedBrands.filter((brand) => brand !== b))
//                       : setSelectedBrands([...selectedBrands, b])
//                   }
//                 />
//                 <span className="text-gray-700">{b}</span>
//               </label>
//             ))}
//           </div>

//           {/* Offers / Discounts */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Offers / Discounts</h3>
//             {offers.map((d) => (
//               <label key={d} className="flex items-center gap-2 mb-1">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-indigo-600"
//                   checked={selectedOffers.includes(d)}
//                   onChange={() =>
//                     selectedOffers.includes(d)
//                       ? setSelectedOffers(selectedOffers.filter((offer) => offer !== d))
//                       : setSelectedOffers([...selectedOffers, d])
//                   }
//                 />
//                 <span className="text-gray-700">{d}</span>
//               </label>
//             ))}
//           </div>

//           {/* Availability */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Availability</h3>
//             {availability.map((a) => (
//               <label key={a} className="flex items-center gap-2 mb-1">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-indigo-600"
//                   checked={selectedAvailability.includes(a)}
//                   onChange={() =>
//                     selectedAvailability.includes(a)
//                       ? setSelectedAvailability(selectedAvailability.filter((avail) => avail !== a))
//                       : setSelectedAvailability([...selectedAvailability, a])
//                   }
//                 />
//                 <span className="text-gray-700">{a}</span>
//               </label>
//             ))}
//           </div>

//           {/* Size */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Size</h3>
//             <div className="flex flex-wrap gap-2">
//               {sizes.map((s) => (
//                 <span
//                   key={s}
//                   onClick={() => handleSizeClick(s)}
//                   className={`px-3 py-1 border rounded cursor-pointer text-gray-700 hover:bg-indigo-100 ${
//                     selectedSizes.includes(s) ? "bg-indigo-200 border-indigo-500" : ""
//                   }`}
//                 >
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Products Section */}
//         <div className="flex-1">
//           {/* Top Sorting */}
//           <div className="flex justify-between items-center mb-6">
//             <p className="text-gray-600">Showing 1-20 of 100 results</p>
//             <select className="border rounded-lg px-3 py-2">
//               <option>Sort by Popularity</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Newest First</option>
//             </select>
//           </div>

//           {/* Products Grid */}
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//             {[1,2,3,4,5,6,7,8,9,10].map((p) => (
//               <div
//                 key={p}
//                 className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition"
//               >
//                 <img
//                   src={`https://source.unsplash.com/300x300/?fashion,clothes,${p}`}
//                   alt="Product"
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-semibold text-gray-800 mb-1">Product Name</h3>
//                 <p className="text-indigo-600 font-bold mb-2">₹999</p>
//                 <p className="text-gray-500 text-sm line-clamp-2 mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ShopFilter;










import React, { useState } from "react";

const categories = ["Men", "Women", "Kids", "Accessories"];
const prices = ["Under ₹500", "₹500 - ₹1000", "Above ₹1000"];
const brands = ["Nike", "Adidas", "Puma", "Reebok"];
const offers = ["10% Off", "20% Off", "50% Off"];
const availability = ["In Stock", "Out of Stock"];
const sizes = ["S","M","L","XL","6","7","8","9","10"];

// Dummy products
const productsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 2000) + 100,
  category: categories[i % categories.length],
  brand: brands[i % brands.length],
  offer: offers[i % offers.length],
  availability: availability[i % availability.length],
  size: sizes[i % sizes.length],
  image: `https://source.unsplash.com/300x300/?fashion,clothes,${i + 1}`
}));


console.log(productsData);

const ShopFilter = () => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);

  // Clear All Filters
  const clearAllFilters = () => {
    setSelectedSizes([]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedPrices([]);
    setSelectedOffers([]);
    setSelectedAvailability([]);
  };

  const handleSizeClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  // Filter logic
  const filteredProducts = productsData.filter((p) => {
    const sizeMatch = selectedSizes.length ? selectedSizes.includes(p.size) : true;
    const categoryMatch = selectedCategories.length ? selectedCategories.includes(p.category) : true;
    const brandMatch = selectedBrands.length ? selectedBrands.includes(p.brand) : true;
    const priceMatch = selectedPrices.length
      ? (selectedPrices[0] === "Under ₹500" && p.price < 500) ||
        (selectedPrices[0] === "₹500 - ₹1000" && p.price >= 500 && p.price <= 1000) ||
        (selectedPrices[0] === "Above ₹1000" && p.price > 1000)
      : true;
    const offerMatch = selectedOffers.length ? selectedOffers.includes(p.offer) : true;
    const availabilityMatch = selectedAvailability.length ? selectedAvailability.includes(p.availability) : true;
    return sizeMatch && categoryMatch && brandMatch && priceMatch && offerMatch && availabilityMatch;
  });


  console.log(filteredProducts);
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-6">

        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4 bg-white p-5 rounded-2xl shadow-md">
          {/* Header with Clear All */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <button
              onClick={clearAllFilters}
              className="text-md text-indigo-600 font-semibold hover:underline"
            >
              Clear All
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Category</h3>
            {categories.map((c) => (
              <label key={c} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectedCategories.includes(c)}
                  onChange={() => {
                    selectedCategories.includes(c)
                      ? setSelectedCategories(selectedCategories.filter((cat) => cat !== c))
                      : setSelectedCategories([...selectedCategories, c]);
                  }}
                />
                <span className="text-gray-700">{c}</span>
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price</h3>
            {prices.map((p) => (
              <label key={p} className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  name="price"
                  className="form-radio h-4 w-4 text-indigo-600"
                  checked={selectedPrices.includes(p)}
                  onChange={() => setSelectedPrices([p])}
                />
                <span className="text-gray-700">{p}</span>
              </label>
            ))}
          </div>

          {/* Brand */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Brand</h3>
            {brands.map((b) => (
              <label key={b} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectedBrands.includes(b)}
                  onChange={() =>
                    selectedBrands.includes(b)
                      ? setSelectedBrands(selectedBrands.filter((brand) => brand !== b))
                      : setSelectedBrands([...selectedBrands, b])
                  }
                />
                <span className="text-gray-700">{b}</span>
              </label>
            ))}
          </div>

          {/* Offers / Discounts */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Offers / Discounts</h3>
            {offers.map((d) => (
              <label key={d} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectedOffers.includes(d)}
                  onChange={() =>
                    selectedOffers.includes(d)
                      ? setSelectedOffers(selectedOffers.filter((offer) => offer !== d))
                      : setSelectedOffers([...selectedOffers, d])
                  }
                />
                <span className="text-gray-700">{d}</span>
              </label>
            ))}
          </div>

          {/* Availability */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Availability</h3>
            {availability.map((a) => (
              <label key={a} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectedAvailability.includes(a)}
                  onChange={() =>
                    selectedAvailability.includes(a)
                      ? setSelectedAvailability(selectedAvailability.filter((avail) => avail !== a))
                      : setSelectedAvailability([...selectedAvailability, a])
                  }
                />
                <span className="text-gray-700">{a}</span>
              </label>
            ))}
          </div>

          {/* Size */}
          {/* <div className="mb-6">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <span
                  key={s}
                  onClick={() => handleSizeClick(s)}
                  className={`px-3 py-1 border rounded cursor-pointer text-gray-700 hover:bg-indigo-100 ${
                    selectedSizes.includes(s) ? "bg-indigo-200 border-indigo-500" : ""
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div> */}
          {/* Size */}
{/* <div className="mb-6">
  <h3 className="font-semibold mb-2">Size</h3>
  <div className="flex flex-wrap gap-2">
    {(
      selectedCategories.includes("Accessories")
        ? ["One Size"]  
        : ["S","M","L","XL","6","7","8","9","10"]  
    ).map((s) => (
      <span
        key={s}
        onClick={() => handleSizeClick(s)}
        className={`px-3 py-1 border rounded cursor-pointer text-gray-700 hover:bg-indigo-100 ${
          selectedSizes.includes(s) ? "bg-indigo-200 border-indigo-500" : ""
        }`}
      >
        {s}
      </span>
    ))}
  </div>
</div> */}

{/* {!selectedCategories.includes("Accessories") && (
  <div className="mb-6">
    <h3 className="font-semibold mb-2">Size</h3>
    <div className="flex flex-wrap gap-2">
      {sizes.map((s) => (
        <span
          key={s}
          onClick={() => handleSizeClick(s)}
          className={`px-3 py-1 border rounded cursor-pointer text-gray-700 hover:bg-indigo-100 ${
            selectedSizes.includes(s) ? "bg-indigo-200 border-indigo-500" : ""
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  </div>
)} */}

        </div>

        {/* Products Section */}
        <div className="flex-1">
          {/* Top Sorting */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {productsData.length} results
            </p>
            <select className="border rounded-lg px-3 py-2">
              <option>Sort by Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-800 mb-1">{p.name}</h3>
                  <p className="text-indigo-600 font-bold mb-2">₹{p.price}</p>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    Category: {p.category}, Brand: {p.brand}, Offer: {p.offer}
                  </p>
                  <button className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products match the selected filters.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopFilter;
