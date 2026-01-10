import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedComponents/AnimatedButton";
import { MdKeyboardArrowRight } from "react-icons/md";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const BannerSlider = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Subtle parallax effect for background
    const background = backgroundRef.current;
    if (!background) return;

    gsap.to(background, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: background,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
      },
    },
  };
  return (
    <div className="">
      <div className="w-full h-[85vh]">
        <div className="sliders hero-bg-1">
          <div className="overlay"></div>
          <motion.div 
            className="text-base-100 z-20 text-center space-y-10 lg:p-1.5 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ zIndex: 20 }}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold w-full text-left lg:w-7/12 lg:mx-auto p-5 lg:p-0 text-white"
              style={{ color: 'white', zIndex: 25 }}
            >
              Find your dream home in the best{" "}
              <span className="svg-underline">location</span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="lg:w-7/12 lg:mx-auto flex flex-col lg:flex-row items-center gap-3"
              style={{ zIndex: 25 }}
            >
              <motion.select
                defaultValue={" "}
                className="bg-white text-black select lg:flex-1"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <option value={" "} disabled>
                  Location
                </option>
                <option value="">San Diego</option>
                <option value="">New York</option>
                <option value="">California</option>
              </motion.select>

              <motion.select
                defaultValue={" "}
                className="bg-white text-black select lg:flex-1"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <option value=" " disabled>
                  Property
                </option>
                <option value="">Offices</option>
                <option value="">Apartment</option>
                <option value="">Houses</option>
              </motion.select>

              <motion.select
                defaultValue={" "}
                className="bg-white text-black select lg:flex-1"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <option value=" ">Rent</option>
                <option value="">Sell</option>
              </motion.select>

              <motion.label 
                className="input text-black"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  className="grow"
                  placeholder="Search for properties"
                />

                <AnimatedButton variant="primary" size="md">
                  <MdKeyboardArrowRight />
                </AnimatedButton>
              </motion.label>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
