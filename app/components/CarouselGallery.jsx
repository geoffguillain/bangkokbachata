"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselGallery = () => {
  return (
    <section id="events" className=" bg-[#F5F5F5] w-full">
      <div className="mx-auto max-w-screen-2xl px-8 max-h-fit pb-8 lg:pb-16">
        <div className="hidden md:block ">
          <Swiper
            cssMode={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            // pagination={{
            //   clickable: true,
            // }}
            // autoplay={{ delay: 3000 }}
            className="!relative !h-full !w-full !overflow-visible "
          >
            <SwiperSlide>
              <div className=" grid gap-4 grid-cols-3 lg:gap-4">
                <div className=" flex md:mb-0 md:flex-col">
                  <video
                    src="./videos/gallery1.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>

                  {/* <img
                  alt=""
                  src="./images/carouselGallery1.png"
                  className="mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full"
                /> */}
                </div>
                <div className=" flex md:mb-0 md:flex-col">
                  <video
                    src="./videos/gallery2.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
                <div className="flex md:flex-col">
                  <video
                    src="./videos/gallery3.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" grid gap-4 grid-cols-3 lg:gap-4">
                <div className="mb-2 flex md:mb-0 md:flex-col">
                  <video
                    src="./videos/gallery4.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
                <div className="mb-2 flex md:mb-0 md:flex-col">
                  <video
                    src="./videos/gallery2.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
                <div className="flex md:flex-col">
                  <video
                    src="./videos/gallery3.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid gap-4 grid-cols-3 lg:gap-4">
                <div className="mb-2 flex md:mb-0 md:flex-col">
                  <video
                    src="./videos/gallery1.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
                <div className="mb-2 flex md:mb-0 md:flex-col">
                  <video
                    src="./videos/gallery2.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
                <div className="flex md:flex-col">
                  <video
                    src="./videos/gallery3.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Styled Pagination */}
          <div className="custom-swiper-pagination mt-4 flex justify-center gap-2"></div>
        </div>

        {/* For Mobile  */}
        <div className="block md:hidden">
          <Swiper
            cssMode={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            id="carouselGallerySwiper"
            className="!relative !h-full !w-full !overflow-visible"
          >
            <SwiperSlide>
              <div className="!min-h-[80vh] h-full rounded-lg overflow-hidden ">
                <div className="mb-2 flex md:mb-0 md:flex-col relative  rounded-lg overflow-hidden h-[80vh] bg-black">
                  <video
                    src="./videos/gallery1.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                  <div className="absolute z-50 bg-pink-300  text-white font-semibold rounded-full flex items-center justify-center bottom-2 right-2">
                    <ChevronRight className="text-white h-8 w-8" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!min-h-[80vh] h-full rounded-lg overflow-hidden ">
                <div className="mb-2 flex md:mb-0 md:flex-col relative rounded-lg overflow-hidden h-[80vh] bg-black">
                  <video
                    src="./videos/gallery2.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                  {/* <div className="absolute z-50 bg-pink-300  text-white font-semibold rounded-full flex items-center justify-center bottom-2 right-2">
                    <ChevronRight className="text-white h-8 w-8" />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!min-h-[80vh] h-full rounded-lg overflow-hidden ">
                <div className="mb-2 flex md:mb-0 md:flex-col relative rounded-lg overflow-hidden h-[80vh] bg-black">
                  <video
                    src="./videos/gallery3.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                  {/* <div className="absolute z-50 bg-pink-300  text-white font-semibold rounded-full flex items-center justify-center bottom-2 right-2">
                    <ChevronRight className="text-white h-8 w-8" />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!min-h-[80vh] h-full rounded-lg overflow-hidden ">
                <div className="mb-2 flex md:mb-0 md:flex-col relative h-[80vh] rounded-lg overflow-hidden bg-black">
                  <video
                    src="./videos/gallery4.mp4"
                    className="mr-4 w-auto rounded-lg h-full md:w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
              </div>
              {/* <div className="absolute z-50 bg-pink-300  text-white font-semibold rounded-full flex items-center justify-center bottom-2 left-2">
                <ChevronLeft className="text-white h-8 w-8" />
              </div> */}
            </SwiperSlide>
          </Swiper>
          {/* Styled Pagination */}
          <div className="custom-swiper-pagination mt-4 flex justify-center gap-2"></div>
        </div>
      </div>

      {/* Custom Swiper Pagination Styling */}
      <style jsx>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #d1d5db; /* Gray color */
          opacity: 1;
          transition: all 0.3s ease-in-out;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: black !important; /* Amber color */
          width: 16px;
          height: 16px;
        }
      `}</style>
    </section>
  );
};

export default CarouselGallery;
