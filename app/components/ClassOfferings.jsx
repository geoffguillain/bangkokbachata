"use client";
import Image from "next/image";
import React from "react";

const ClassOfferingCard = ({ src, alt, title, description }) => {
  return (
    <div className="flex flex-col shadow-md rounded-lg bg-white">
      {/* Image Container: relative so that Image can fill the space */}
      <div className="relative w-full h-64 flex items-center justify-center ">
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          className="rounded-t-lg object-cover "
        />
      </div>
      <div className="p-5">
        <h3 className=" text-xl font-bold text-gray-900 dark:text-white text-center font-inter">
          {title}
        </h3>
        {/* <p className="text-gray-500 dark:text-gray-400 font-normal text-base font-inter">
          {description}
        </p> */}
      </div>
    </div>
  );
};

const classOfferingsData = [
  {
    src: "./images/c1.jpg",
    alt: "Class Offerings 1",
    title: "Bachata Partnerwork",
    description: "Here are the biggest enterprise.",
  },
  {
    src: "./images/cp1.jpg",
    alt: "Class Offerings 2",
    title: "Salsa Partnerwork",
    description: "Here are the biggest enterprise.",
  },
  {
    src: "./images/cp3.jpeg",
    alt: "Class Offerings 7",
    title: "Kizomba Partnerwork",
    description: "Here are the biggest enterprise.",
  },
  {
    src: "./images/cp2.png",
    alt: "Class Offerings 3",
    title: "Bachata Lady Styling",
    description: "Here are the biggest enterprise.",
  },
  {
    src: "./images/cp5.JPG",
    alt: "Class Offerings 4",
    title: "Salsa Shines",
    description: "Here are the biggest enterprise.",
  },
  {
    src: "./images/cp5.jpeg",
    alt: "Class Offerings 5",
    title: "Choreo/Bootcamps",
    description: "Here are the biggest enterprise.",
  },
  {
    src: "./images/cp4.jpeg",
    alt: "Class Offerings 6",
    title: "Practicas in Studio",
    description: "Here are the biggest enterprise.",
  },

  {
    src: "./images/cp2.jpeg",
    alt: "Class Offerings 8",
    title: "Guest Artist Workshops",
    description: "Here are the biggest enterprise.",
  },
];

const ClassOfferings = () => {
  return (
    <section id="classes" className="bg-white dark:bg-gray-900 w-full">
      <div className="mx-auto max-w-screen-2xl px-6 py-8 lg:px-8 lg:py-16">
        <div className="text-center text-gray-900">
          <h2 className="mb-4 uppercase text-3xl sm:text-5xl font-extrabold font-inter text-[#111928] dark:text-white lg:text-5xl">
            Classes (Current Schedule on IG)
          </h2>
        </div>
        <div className="mt-8 md:mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-14 lg:gap-6">
          {classOfferingsData.map((offering, index) => (
            <ClassOfferingCard
              key={index}
              src={offering.src}
              alt={offering.alt}
              title={offering.title}
              description={offering.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassOfferings;
