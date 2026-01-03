import React from "react";
import { motion } from "motion/react";

const AnimatedTitles = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTitles;
