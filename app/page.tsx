import Hero from "./components/Hero";
import AlternateImages from "./components/AlternateImages";

import Gallery from "./components/Gallery";
import CarouselGallery from "./components/CarouselGallery";

import CTA from "./components/CTA";
import ClassOfferings from "./components/ClassOfferings";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex items-center flex-col bg-white min-h-screen dark:bg-white   justify-center w-full h-auto overflow-x-hidden relative">
      <Hero />
      <ClassOfferings />
      <Gallery />
      <CarouselGallery />
      <AlternateImages />
      <Testimonials />
      <CTA />
    </div>
  );
}
