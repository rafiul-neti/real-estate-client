import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AnimatedDiv from "../AnimatedComponents/AnimatedDiv";
import AboveHeading from "../Shared/AboveHeading";
import Heading from "../Shared/Heading";
import { SectionSkeleton } from "../Shared";

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
    <section className="my-20">
      <AboveHeading>Featured Properties</AboveHeading>

      <Heading underlined={`Properties`}>Featured</Heading>

      <Swiper
        modules={[Autoplay]}
        slidesPerGroup={1}
        rewind={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {properties.map((property) => (
          <SwiperSlide key={property._id}>
            <AnimatedDiv whileHover={{ scale: 1.05 }}>
              <div className="p-2.5 max-w-max m-auto hover:bg-blue-100 hover:cursor-pointer rounded">
                <img
                  src={property.thumbnail}
                  className="w-full max-w-60 rounded"
                  alt="home"
                />
                <p className="text-xl font-semibold my-1.5 text-primary">
                  {property.price}
                </p>
                <h3 className="my-1.5 text-xl font-bold w-60">
                  {property["property-name"]}
                </h3>
                <p className="text-sm w-60">{property["about-property"]}</p>
              </div>
            </AnimatedDiv>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="btn btn-primary text-xl font-bold text-white"
        >
          &lt;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="btn btn-primary text-xl font-bold text-white"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default FeaturedProperties;
