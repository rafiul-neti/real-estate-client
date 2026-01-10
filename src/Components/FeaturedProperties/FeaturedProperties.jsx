import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "motion/react";
import AboveHeading from "../Shared/AboveHeading";
import Heading from "../Shared/Heading";
import { SectionSkeleton } from "../Shared";
import AnimatedCard from "../AnimatedComponents/AnimatedCard";
import FadeInSection from "../AnimatedComponents/FadeInSection";

const FeaturedProperties = ({ properties = [], isLoading = false }) => {
  const swiperRef = useRef(null);

  if (isLoading || properties.length === 0) {
    return (
      <SectionSkeleton className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-40 bg-base-300 rounded mb-3"></div>
              <div className="h-4 bg-base-300 rounded mb-2 w-3/4"></div>
              <div className="h-5 bg-base-300 rounded mb-2 w-1/2"></div>
              <div className="h-3 bg-base-300 rounded w-full"></div>
            </div>
          ))}
        </div>
      </SectionSkeleton>
    );
  }
  return (
    <FadeInSection className="my-20">
      <div className="text-center mb-12">
        <AboveHeading>Featured Properties</AboveHeading>
        <Heading underlined={`Properties`}>Featured</Heading>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerGroup={1}
        rewind={true}
        speed={1000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="pb-12"
      >
        {properties.map((property, index) => (
          <SwiperSlide key={property._id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <AnimatedCard 
                className="p-3 max-w-max m-auto bg-white rounded-lg overflow-hidden"
                hoverScale={1.05}
                hoverY={-5}
                shadowIntensity="md"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <motion.img
                    src={property.thumbnail}
                    className="w-full max-w-60 h-40 object-cover"
                    alt={property["property-name"]}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div className="p-3">
                  <motion.p 
                    className="text-xl font-semibold my-2 text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {property.price}
                  </motion.p>
                  
                  <motion.h3 
                    className="my-2 text-lg font-bold w-60 line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {property["property-name"]}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm w-60 text-gray-600 line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {property["about-property"]}
                  </motion.p>
                </div>
              </AnimatedCard>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <motion.div 
        className="flex items-center justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => swiperRef.current?.slidePrev()}
          className="btn btn-circle btn-primary text-white shadow-lg"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={() => swiperRef.current?.slideNext()}
          className="btn btn-circle btn-primary text-white shadow-lg"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.button>
      </motion.div>
    </FadeInSection>
  );
};

export default FeaturedProperties;
