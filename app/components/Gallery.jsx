"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
  const categories = ["classes", "community", "danceParties"];
  const images = {
    classes: [
      "/images/c1.jpg",
      "/images/c2.jpg",
      "/images/n1.jpeg",
      "/images/classesnew2.jpeg",
      "/images/classnew.jpeg",
      "/images/c6.jpg",
    ],
    community: [
      "/images/com1.jpg",
      "/images/com2.jpg",
      "/images/com3.jpg",
      "/images/n2.jpeg",
      "/images/com5.jpg",
      "/images/n3.jpeg",
    ],
    danceParties: [
      "/images/i1.jpg",
      "/images/rr1.jpeg",
      "/images/i3.jpg",
      "/images/rr2.jpeg",
      "/images/i5.jpg",
      "/images/i6.jpg",
    ],
  };

  const [activeCategory, setActiveCategory] = useState("classes");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#F5F5F5] w-full">
      <div className="mx-auto max-w-screen-2xl text-center px-6 pt-8 pb-6 lg:px-8 lg:pt-16">
        <h2 className="mb-8 lg:mb-16 uppercase text-3xl sm:text-5xl font-extrabold font-inter tracking-tight text-[#111928] dark:text-white">
          Our Community
        </h2>

        {/* Category Buttons */}
        <div className="hidden sm:flex flex-wrap gap-6 sm:gap-12 items-center justify-center ">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                swiperRef.current?.slideTo(index);
              }}
              className={`${
                activeCategory === category
                  ? "text-[#D2386C] border rounded-full border-[#D2386C]"
                  : "text-gray-900 hover:text-[#D2386C]"
              } px-7 py-2 text-center text-lg transition-all duration-200`}
            >
              {category === "danceParties"
                ? "Dance Parties"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Dropdown for Small Screens */}
        <div className="relative sm:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg bg-white text-left flex justify-between items-center font-inter text-sm"
          >
            {activeCategory === "danceParties"
              ? "Dance Parties"
              : activeCategory.charAt(0).toUpperCase() +
                activeCategory.slice(1)}
            <span className="ml-2">▼</span>
          </button>
          {isDropdownOpen && (
            <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-[100]">
              {categories.map((category, index) => (
                <li
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    swiperRef.current?.slideTo(index);
                    setIsDropdownOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 font-inter"
                >
                  {category === "danceParties"
                    ? "Dance Parties"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Swiper Gallery (No Autoplay) */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className=""
        >
          {categories.map((category) => (
            <SwiperSlide key={category}>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 sm:mt-12 transition-opacity duration-500">
                {images[category].map((src, index) => (
                  <div
                    key={index}
                    className="w-full h-[120px] sm:h-[190px] md:h-[240px] overflow-hidden rounded-lg flex items-center justify-center"
                  >
                    <Image
                      className="rounded-lg object-cover w-full h-full"
                      src={src}
                      alt={`${category} ${index + 1}`}
                      width={400}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
