import React from "react";
import { motion } from "motion/react";

const AnimatedDiv = ({ children, clasName, whileHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={whileHover}
      className={clasName}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
