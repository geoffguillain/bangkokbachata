import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full">
      <div className="mx-auto grid max-w-screen-2xl gap-4  py-16  sm:px-10 sm:gap-16 md:grid-cols-2  items-center   lg:gap-20 lg:py-16 xl:py-32">
        <div className="mb-8 text-gray-500 dark:text-gray-400 sm:text-lg px-8 sm:px-0 ">
          <h2 className="mb-4 text-3xl font-dashiell font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Our Partners
          </h2>
          <p className="lg:text-xl text-gray-500">
            Trusted by leading lifestyle and luxury brands.
          </p>
        </div>
        <div className="grid grid-cols gap-8  text-gray-500 dark:text-gray-400 grid-cols-3  sm:grid-cols-4 scale-[0.85]  lg:sclae-[0.95]  xl:scale-100">
          <div className="w-[100px] h-[100px] shadow-sm  scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/alo.png"
              alt="Alo"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>

          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/innisfree.png"
              alt="Innisfree"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>

          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-black border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/garmin_.png"
              alt="Garmin"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>

          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/proove.jpeg"
              alt="Proove"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/food-delite.jpeg"
              alt="Food Delite"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/tyler-juice.jpeg"
              alt="Tyler Juice"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/timeout.png"
              alt="Time Out"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/the-standard-life.png"
              alt="Alo"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/lifestyle-asia.png"
              alt="Lifestyle Asia"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/SS.jpg"
              alt="Alo"
              width={200}
              height={200}
              className="object-cover scale-[1.4]"
            />
          </div>
          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/stretch.png"
              alt="Stretch Style"
              width={200}
              height={200}
              className="object-cover scale-[1.4]"
            />
          </div>
          <div className="w-[100px] h-[100px] shadow-sm scale-100 md:scale-90 lg:scale-100 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden relative ">
            <Image
              src="/fabfigure.jpeg"
              alt="Fab Figure"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
