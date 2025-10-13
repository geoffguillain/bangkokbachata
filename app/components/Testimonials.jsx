"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="w-full  px-6 py-8 lg:px-8 lg:py-16 pb-8  bg-[#F5F5F5] dark:bg-gray-900">
      <div className="mx-auto  max-w-screen-2xl flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="text-3xl  sm:text-5xl font-extrabold font-inter text-center text-gray-900 dark:text-white  mb-8 lg:mb-12  ">
          WHAT DO OUR STUDENTS SAY ABOUT US?
        </h2>

        {/* Swiper Testimonial Slider */}
        <Swiper
          cssMode={true}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          // breakpoints={{
          //   768: { slidesPerView: 2 }, // 2 per slide on medium+ screens
          // }}
          pagination={{ clickable: true }}
          className="!relative !h-full !w-full !overflow-visible mb-16 md:mb-8 lg:mb-0 "
        >
          <SwiperSlide className="!w-full">
            <div className="!flex flex-col md:flex-row !justify-around items-center gap-10 !w-full">
              {/* Left Testimonial */}
              <div className="flex flex-col items-center text-center max-w-xl">
                <p className="text-base sm:text-lg font-inter font-semibold text-gray-900 dark:text-gray-300">
                  I love dancing and enjoy Latin music, so I’m so glad I found
                  BBG. I’ve met amazing people—everyone is warm and welcoming,
                  and the atmosphere makes it easy to connect beyond just
                  dancing. It’s been such a fun and inclusive experience! See
                  you on the dance floor 🙂 “BBG transformed my life! Not only
                  did I learn to dance, but I've also found an amazing community
                  of friends. The instructors make learning fun and accessible
                  for everyone.”
                </p>
                <div className="mt-6 flex items-center flex-col gap-1">
                  <img
                    src="./images/maprang.png"
                    className="w-[90px] h-[90px] rounded-full border-2 border-gray-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold font-inter text-gray-900 dark:text-white">
                      Maprang
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Testimonial (if exists) */}

              <div className="flex flex-col items-center text-center max-w-xl ">
                <p className="text-base sm:text-lg font-inter font-semibold text-gray-900 dark:text-gray-300">
                  I haven’t told anyone about this before, but whenever I hear
                  music, it creates an energy in me that I need to release.
                  That’s why I usually tap my foot, drum in the air, or hum.
                  That’s where dancing comes in; it becomes an outlet for me to
                  express and release the beautiful chaos that music gives me.
                  And with the help of the BBG team and the community they’re
                  trying to nurture, it gives me the freedom to express myself
                  without judgment.
                </p>
                <div className="mt-6 flex items-center flex-col gap-1">
                  <img
                    src="./images/athena.jpg"
                    className="w-[90px] h-[90px] rounded-full border-2 border-gray-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold font-inter text-gray-900 dark:text-white">
                      Athena
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-full">
            <div className="!flex flex-col md:flex-row !justify-around items-center gap-10 !w-full">
              {/* Left Testimonial */}
              <div className="flex flex-col items-center text-center max-w-xl">
                <p className="text-base sm:text-lg font-inter font-semibold text-gray-900 dark:text-gray-300">
                  Joining BBG has not only introduced me to a new hobby, but
                  also allowed me to connect with amazing friends and become
                  part of an incredible community. I’ve felt truly inspired and
                  empowered, learning how to move confidently and embrace my
                  body. BBG has helped me stand tall, be proud of who I am, and
                  continue growing both inside and out! So thank you BBG
                  Teachers ❤️ I love you all 🫶🫶🫶
                </p>
                <div className="mt-6 flex items-center flex-col gap-1">
                  <img
                    src="./images/shashe.jpg"
                    className="w-[90px] h-[90px] rounded-full border-2 border-gray-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold font-inter text-gray-900 dark:text-white">
                      Sasha
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Testimonial (if exists) */}

              <div className="flex flex-col items-center text-center max-w-xl">
                <p className="text-base sm:text-lg font-inter font-semibold text-gray-900 dark:text-gray-300">
                  BBG is not only a great dance school with excellent
                  instructors, but also a strong community of welcoming people.
                  I enjoy growing in my skill and passion for dance alongside
                  close friends. I encourage anyone to join who is looking to
                  pick up a new hobby while meeting new people.
                </p>
                <div className="mt-6 flex items-center flex-col gap-1">
                  <img
                    src="./images/warner.jpg"
                    className="w-[90px] h-[90px] rounded-full border-2 border-gray-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold font-inter text-gray-900 dark:text-white">
                      Warner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-full">
            <div className="!flex flex-col md:flex-row !justify-around items-center gap-10 !w-full">
              {/* Left Testimonial */}
              <div className="flex flex-col items-center text-center max-w-xl">
                <p className="text-base sm:text-lg font-inter font-semibold text-gray-900 dark:text-gray-300">
                  Within my first couple weeks here, the BBG community helped me
                  find a home in Bangkok. The instructors are all such warm,
                  welcoming people, and the heartbeat of the dance scene in this
                  bright and sometimes overwhelming city. They challenged me to
                  try something totally new and out of my comfort zone, and
                  along with my fellow students, pushed me to become a happier
                  and more confident version of myself!
                </p>
                <div className="mt-6 flex items-center flex-col gap-1">
                  <img
                    src="./images/kate.jpeg"
                    className="w-[90px] h-[90px] rounded-full border-2 border-gray-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold font-inter text-gray-900 dark:text-white">
                      Kate
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Testimonial (if exists) */}

              <div className="flex flex-col items-center text-center max-w-xl">
                <p className="text-base sm:text-lg font-inter font-semibold text-gray-900 dark:text-gray-300">
                  I took BBG's first ever workshop and now I'm an instructor
                  with them! I can't express how much learning to dance has
                  impacted my life, my social circle, and the way I view my
                  hobbies and how I spend my time. Everyone here is so
                  supportive and warm, and I really feel that all they cared
                  about was my success and confidence as a dancer. What a great
                  team, and I'm so proud to be a part of it as well.
                </p>
                <div className="mt-6 flex items-center flex-col gap-1">
                  <img
                    src="./images/rory.jpeg"
                    className="w-[90px] h-[90px] rounded-full border-2 border-gray-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold font-inter text-gray-900 dark:text-white">
                      Rory
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Pagination Styling */}
        <style jsx>{`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #d1d5db;
            opacity: 1;
            transition: all 0.3s ease-in-out;
          }

          .swiper-pagination-bullet-active {
            background-color: #111827;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;

// <SwiperSlide className="!w-full">
//           <div className="!flex flex-col sm:flex-row !justify-around gap-10 !w-full">
//             {/* Left Testimonial */}
//             <div className="flex flex-col items-center text-center max-w-xl">
//               <p className="text-base sm:text-2xl font-inter font-semibold text-gray-900 dark:text-gray-300">
//                 “BBG transformed my life! Not only did I learn to dance, but
//                 I've also found an amazing community of friends. The
//                 instructors make learning fun and accessible for everyone.”
//               </p>
//               <div className="mt-6 flex items-center gap-3">
//                 <img
//                   src="./images/customer1.png"
//                   className="w-12 h-12 rounded-full border-2 border-gray-300"
//                 />
//                 <div className="text-left">
//                   <p className="font-semibold font-inter text-gray-900 dark:text-white">
//                     Sarah K. <span className="mx-2">/</span>
//                     <span className="font-normal text-sm font-inter text-gray-500">
//                       Dancing since 2022
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Testimonial (if exists) */}

//             <div className="flex flex-col items-center text-center max-w-xl">
//               <p className="text-base sm:text-2xl font-inter font-semibold text-gray-900 dark:text-gray-300">
//                 “BBG transformed my life! Not only did I learn to dance, but
//                 I've also found an amazing community of friends. The
//                 instructors make learning fun and accessible for everyone.”
//               </p>
//               <div className="mt-6 flex items-center gap-3">
//                 <img
//                   src="./images/customer2.png"
//                   className="w-12 h-12 rounded-full border-2 border-gray-300"
//                 />
//                 <div className="text-left">
//                   <p className="font-semibold font-inter text-gray-900 dark:text-white">
//                     Sarah K. <span className="mx-2">/</span>
//                     <span className="font-normal text-sm font-inter text-gray-500">
//                       Dancing since 2022
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="!w-full">
//           <div className="!flex flex-col sm:flex-row !justify-around gap-10 !w-full">
//             {/* Left Testimonial */}
//             <div className="flex flex-col items-center text-center max-w-xl">
//               <p className="text-base sm:text-2xl font-inter font-semibold text-gray-900 dark:text-gray-300">
//                 “BBG transformed my life! Not only did I learn to dance, but
//                 I've also found an amazing community of friends. The
//                 instructors make learning fun and accessible for everyone.”
//               </p>
//               <div className="mt-6 flex items-center gap-3">
//                 <img
//                   src="./images/customer1.png"
//                   className="w-12 h-12 rounded-full border-2 border-gray-300"
//                 />
//                 <div className="text-left">
//                   <p className="font-semibold font-inter text-gray-900 dark:text-white">
//                     Sarah K. <span className="mx-2">/</span>
//                     <span className="font-normal text-sm font-inter text-gray-500">
//                       Dancing since 2022
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Testimonial (if exists) */}

//             <div className="flex flex-col items-center text-center max-w-xl">
//               <p className="text-base sm:text-2xl font-inter font-semibold text-gray-900 dark:text-gray-300">
//                 “BBG transformed my life! Not only did I learn to dance, but
//                 I've also found an amazing community of friends. The
//                 instructors make learning fun and accessible for everyone.”
//               </p>
//               <div className="mt-6 flex items-center gap-3">
//                 <img
//                   src="./images/customer2.png"
//                   className="w-12 h-12 rounded-full border-2 border-gray-300"
//                 />
//                 <div className="text-left">
//                   <p className="font-semibold font-inter text-gray-900 dark:text-white">
//                     Sarah K. <span className="mx-2">/</span>
//                     <span className="font-normal text-sm font-inter text-gray-500">
//                       Dancing since 2022
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
