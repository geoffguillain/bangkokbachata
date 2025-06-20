"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Script from "next/script";
import { BookOpen, NavigationIcon, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const AlternateImages = () => {
  const posts = [
    "https://www.instagram.com/p/DLE5DkdTSDC/?img_index=1",
    "https://www.instagram.com/p/DK1foE_TvMe/",
    "https://www.instagram.com/p/DLHVchZRedX/",
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Process Instagram embeds when the component mounts.
  useEffect(() => {
    if (
      window.instgrm &&
      window.instgrm.Embeds &&
      typeof window.instgrm.Embeds.process === "function"
    ) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section
      id="about"
      className="w-full relative bg-[url('/images/about-bg.jpeg')] bg-center bg-cover flex flex-col bg-white"
    >
      <div className="bg-black/85 absolute w-full h-full z-10"></div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
          }
        }}
      />
      <div className="mx-auto z-50 max-w-screen-2xl px-6 py-8 lg:px-8 lg:py-16  w-full">
        <div className="gap-0  items-center justify-center flex flex-col md:gap-4  w-full ">
          {/* Left Side - Text Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center justify-center lg:items-start lg:justify-start w-full ">
            <div className="text-gray-100 mt-5 sm:text-lg dark:text-gray-400 gap-6 w-full lg:text-left max-w-4xl   text-center">
              <h2 className="mb-8 uppercase text-white  text-3xl sm:text-5xl text-center lg:text-left lg:text-5xl font-inter tracking-tight font-extrabold  dark:text-white">
                About Us
              </h2>
              <p className="mb-4 text-center text-md lg:text-lg lg:text-left font-normal font-inter text-gray-100 ">
                At Bangkok Bachata Gang (BBG), we're more than just a dance
                school - we're a community of passionate dancers and instructors
                dedicated to spreading the joy of Latin dance in Thailand.
                Founded in 2023, we've rapidly grown to become Bangkok's
                premiere destination for bachata, salsa, and kizomba
                instruction. 120+ students a month and growing can attest to
                that! We're big on community, as we host multiple practices a
                week and a monthly bonding event.
              </p>
              <p className="mb-8 font-inter text-gray-100  dark:text-gray-400 text-md lg:text-lg ">
                But you don't have to be a dancer, have rhythm have a partner,
                or have experience to join us. We pride ourselves on being open,
                positive, non-judgmental, lighthearted, and supportive. There
                are no egos here, and we don't tolerate mean people. Come for
                dance, leave with community and lifelong friendships for both
                beginner and advanced dancers!
              </p>
            </div>

            <div className="w-[320px]  flex md:w-[340px] lg:-translate-y-10 scale-100 lg:scale-[0.80] lg:scale-x-[0.95] shrink-0 overflow-hidden  rounded-lg  mt-3 md:mt-0">
              <Swiper
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                cssMode={true}
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                className="!relative !w-full !overflow-visible"
              >
                {posts.map((post, index) => (
                  <SwiperSlide key={index}>
                    <div className="shadow-md break-inside-avoid">
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={post}
                        data-instgrm-version="14"
                        style={{ width: "100%" }}
                      >
                        <a
                          href={post}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination Dots */}
              <div className="flex justify-center mt-4">
                {posts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      swiperInstance && swiperInstance.slideTo(index)
                    }
                    className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                      activeIndex === index ? "bg-[#FEE3EC]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-4 md:gap-12 lg:gap-12 md:space-y-0 text-left  w-full mt-8 lg:mt-0 ">
            <div className="flex  flex-col items-center justify-center md:items-start md:justify-center">
              <div className="mb-4 h-10 w-10 rounded-lg bg-[#FEE3EC] dark:bg-primary-900 lg:h-12 lg:w-12 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-gray-900 " />
              </div>
              <h3 className="mb-2 text-xl  font-bold text-white">Instuctors</h3>
              <p className="text-gray-100 text-center md:text-left  dark:text-gray-400 text-lg">
                Professional instructors with years of training from
                Europe/Americas.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <div className="mb-4 h-10 w-10 rounded-lg bg-[#FEE3EC] dark:bg-primary-900 lg:h-12 lg:w-12 flex items-center justify-center">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Community</h3>
              <p className="text-gray-100 text-center md:text-left  dark:text-gray-400 text-lg">
                We're actually a group of friends that also happens to dance.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <div className="mb-4 h-10 w-10 rounded-lg bg-[#FEE3EC] dark:bg-primary-900 lg:h-12 lg:w-12 flex items-center justify-center">
                <Star className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Social events
              </h3>
              <p className="text-gray-100 text-center md:text-left  dark:text-gray-400 text-lg">
                Monthly bonding events for building friendships.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <div className="mb-4 h-10 w-10 rounded-lg bg-[#FEE3EC] dark:bg-primary-900 lg:h-12 lg:w-12 flex items-center justify-center">
                <NavigationIcon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Location</h3>
              <p className="text-gray-100 text-center md:text-left  dark:text-gray-400 text-lg">
                Central Bangkok location and modern facilities.
              </p>
            </div>
          </div>

          {/* Right Side - Swiper Slider */}
        </div>
      </div>
    </section>
  );
};

export default AlternateImages;
