import React from 'react';
import { motion } from 'motion/react';

const AnimatedCard = ({ 
  children, 
  className = '',
  hoverScale = 1.03,
  hoverY = -8,
  shadowIntensity = 'lg'
}) => {
  const shadowClasses = {
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl',
  };

  return (
    <motion.div
      className={`${className} ${shadowClasses[shadowIntensity]} transition-shadow duration-300`}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;