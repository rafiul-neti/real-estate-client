import React from "react";
import { motion } from "motion/react";

const Button = ({
  children,
  onClick,
  className,
  stiffness = 300,
  damping = 15,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness, damping }}
      className={`btn btn-primary ${className}`}
      onClick={onClick}
    >
     {children}
    </motion.button>
  );
};

export default Button;
