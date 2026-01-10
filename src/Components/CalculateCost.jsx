import React from "react";
import { FaCalculator } from "react-icons/fa";
import { Link } from "react-router";
import FadeInSection from "./AnimatedComponents/FadeInSection";
import PulseCTA from "./AnimatedComponents/PulseCTA";
import AnimatedButton from "./AnimatedComponents/AnimatedButton";
import { motion } from "motion/react";

const CalculateCost = () => {
  return (
    <FadeInSection className="flex flex-col md:flex-row items-center gap-8">
      <motion.div 
        className="w-full lg:w-[40%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2//2021/11/calculator.svg"
          alt="Property Calculator"
          className="w-full max-w-md mx-auto"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div 
        className="w-full lg:w-[60%] space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Calculate the cost of your property
        </motion.h2>
        
        <motion.p 
          className="text-body text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Real estate appraisal is a procedure that allows you to determine the
          average market value of real estate (apartment, house, land, etc.).
          Calculate the cost of your property with our new Calculation Service.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <PulseCTA delay={1} pulseCount={2}>
            <Link to="/">
              <AnimatedButton 
                variant="primary" 
                size="lg"
                className="gap-2 text-base-100"
              >
                <FaCalculator />
                Calculate Now
              </AnimatedButton>
            </Link>
          </PulseCTA>
        </motion.div>
      </motion.div>
    </FadeInSection>
  );
};

export default CalculateCost;
