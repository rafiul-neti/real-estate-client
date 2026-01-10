import React from 'react';
import { motion } from 'motion/react';

const FadeInSection = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30
}) => {
  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimateState = () => {
    return { opacity: 1, x: 0, y: 0 };
  };

  return (
    <motion.div
      className={className}
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;