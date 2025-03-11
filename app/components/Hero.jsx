"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [playSecondVideo, setPlaySecondVideo] = useState(false);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (video1 && video2) {
      video1.play().catch((err) => console.error("Video 1 play failed:", err));

      video1.onended = () => {
        setPlaySecondVideo(true);
        video2.play();
      };

      video2.onended = () => {
        setPlaySecondVideo(false);
        video1.play();
      };
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full h-[90vh] lg:h-[95vh] bg-cover bg-center bg-no-repeat bg-primary">
      {/* First Video */}
      <video
        ref={video1Ref}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          playSecondVideo ? "hidden" : "block"
        }`}
        src="/videos/hero1.mp4"
        muted
        playsInline
      ></video>

      {/* Second Video */}
      <video
        ref={video2Ref}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          playSecondVideo ? "block" : "hidden"
        }`}
        src="/videos/hero2.mp4"
        muted
        playsInline
      ></video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 h-full bg-gradient-to-b from-[rgba(37,37,37,0.8)] to-[rgba(0,0,0,0.8)] via-[rgba(37,37,37,0.8)] via-[62.94%]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 py-8 text-white lg:py-16 xl:px-0">
        <div className="mb-6 flex flex-col items-center justify-center lg:mb-0 mt-12 md:mt-4">
          <h1 className="mb-2 md:mb-4 md:max-w-4xl font-notoSerifDisplay font-normal tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] scale-y-[1.2] text-4xl text-center leading-tight  text-white md:text-5xl lg:text-7xl">
            Bangkok Bachata Gang
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-notoSerifDisplay font-normal  italic  tracking-[-1px] scale-y-110 text-center">
            we’re cheaper than therapy
          </p>

          <div className="mt-7 md:mt-12 lg:mt-20">
            <h3 className="text-2xl sm:text-3xl font-normal font-inter text-center mb-6">
              Thailand's biggest Latin dance school with{" "}
              <span className="text-[#D2386C] font-black">120+ </span> students
            </h3>
            <p className="mb-6 text-base sm:text-lg text-center lg:mb-8 lg:text-xl max-w-3xl font-inter font-normal">
              Come for bachata, salsa, and kizomba classes, but leave with a
              tight-knit community and worldwide friends.
            </p>
            <div className="flex flex-row items-center justify-center gap-5 md:gap-[20px]">
              <Link
                href="#join-bachata-gang"
                className="rounded-lg px-5 py-3 font-medium font-inter text-white bg-[#D2386C] text-xl"
              >
                JOIN OUR DANCE FAMILY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
