import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AnimatedDiv from "../AnimatedComponents/AnimatedDiv";
import AnimatedTitles from "../AnimatedComponents/AnimatedTitles";

const FeaturedProperties = ({ properties = [] }) => {
  const swiperRef = useRef(null);
  return (
    <section className="my-20">
      <p className="text-center">
        <span className="text-primary text-lg font-bold bg-blue-100 px-5 py-2.5 rounded-3xl">
          Featured Properties
        </span>
      </p>

      <AnimatedTitles>
        <h1 className="text-4xl font-bold text-center my-9">
          Featured{" "}
          <span className="titles-underline text-primary">Properties</span>
        </h1>
      </AnimatedTitles>

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
