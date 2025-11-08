import React, { useState, useEffect, useRef } from "react";

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
    <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-xl shadow-xl">
      {/* Slide Image */}
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="w-full h-full object-cover transition duration-700 ease-in-out"
        onContextMenu={handleRightClick}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 md:p-16 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          {slides[currentIndex].title}
        </h2>
        <p className="text-sm md:text-lg mb-4">{slides[currentIndex].subtitle}</p>
        <button className="bg-purple-700 hover:bg-purple-900 px-6 py-2 rounded-lg font-semibold transition">
          {slides[currentIndex].cta}
        </button>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-purple-800 text-white p-3 rounded-full hover:bg-purple-900 transition"
      >
        &#10094;
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-800 text-white p-3 rounded-full hover:bg-purple-900 transition"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === idx ? "bg-purple-800" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
