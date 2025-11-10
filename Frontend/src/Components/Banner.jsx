import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const slides = [
    {
      image: "/images/banner1.jpg",
      title: "New Arrivals 2025",
      subtitle: "Upgrade your style with our latest collection",
      cta: "Shop Now",
    },
    {
      image: "/images/banner2.jpg",
      title: "Exclusive Deals",
      subtitle: "Limited-time offers just for you",
      cta: "Explore Deals",
    },
    {
      image: "/images/banner3.jpg",
      title: "Trending Now",
      subtitle: "Discover what’s hot this season",
      cta: "Check Trends",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval.current = setInterval(nextSlide, 4000);
  };
  const stopAutoSlide = () => clearInterval(slideInterval.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleRightClick = (e) => {
    e.preventDefault();
    startAutoSlide();
  };

  return (
    // <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-xl shadow-xl">
    //   {/* Slide Image */}
    //   <img
    //     src={slides[currentIndex].image}
    //     alt={slides[currentIndex].title}
    //     className="w-full h-full object-cover transition duration-700 ease-in-out"
    //     onContextMenu={handleRightClick}
    //   />

    //   {/* Overlay */}
    //   <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 md:p-16 text-white">
    //     <h2 className="text-2xl md:text-4xl font-bold mb-2">
    //       {slides[currentIndex].title}
    //     </h2>
    //     <p className="text-sm md:text-lg mb-4">{slides[currentIndex].subtitle}</p>
    //     <button className="bg-purple-700 hover:bg-purple-900 px-6 py-2 rounded-lg font-semibold transition">
    //       {slides[currentIndex].cta}
    //     </button>
    //   </div>

    //   {/* Left Button */}
    //   <button
    //     onClick={prevSlide}
    //     className="absolute left-3 top-1/2 -translate-y-1/2 bg-purple-800 text-white p-3 rounded-full hover:bg-purple-900 transition"
    //   >
    //     &#10094;
    //   </button>

    //   {/* Right Button */}
    //   <button
    //     onClick={nextSlide}
    //     className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-800 text-white p-3 rounded-full hover:bg-purple-900 transition"
    //   >
    //     &#10095;
    //   </button>

    //   {/* Dots */}
    //   <div className="absolute bottom-5 w-full flex justify-center space-x-3">
    //     {slides.map((_, idx) => (
    //       <span
    //         key={idx}
    //         className={`w-3 h-3 rounded-full cursor-pointer ${
    //           currentIndex === idx ? "bg-purple-800" : "bg-gray-300"
    //         }`}
    //         onClick={() => setCurrentIndex(idx)}
    //       ></span>
    //     ))}
    //   </div>
    // </div>

<>
 

<section
  // className="relative h-screen flex items-center justify-center bg-cover bg-center"
    className="relative h-[93vh] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1950&q=80')",
  }}
>
  {/* Overlay for dark effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl text-center px-6">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
      Discover the Latest Trends in Fashion
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mt-4 mb-8">
      Shop stylish outfits and accessories that match your personality.
    </p>

    <div className="flex justify-center gap-4">
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
        Shop Now
      </button>
      <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
        Explore More
      </button>
    </div>
  </div>

  {/* Decorative blur circle */}
  <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
</section>

</>


  );
};

export default Banner;
