import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const PulseCTA = ({ 
  children, 
  className = '',
  pulseCount = 3,
  pulseDuration = 2,
  delay = 0.5
}) => {
  const [shouldPulse, setShouldPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPulse(true);
      
      // Stop pulsing after specified count
      const stopTimer = setTimeout(() => {
        setShouldPulse(false);
      }, pulseDuration * pulseCount * 1000);

      return () => clearTimeout(stopTimer);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay, pulseDuration, pulseCount]);

  return (
    <motion.div
      className={className}
      animate={shouldPulse ? {
        scale: [1, 1.05, 1],
        boxShadow: [
          '0 0 0 0 rgba(87, 13, 248, 0)',
          '0 0 0 10px rgba(87, 13, 248, 0.1)',
          '0 0 0 0 rgba(87, 13, 248, 0)'
        ]
      } : {}}
      transition={{
        duration: pulseDuration,
        repeat: shouldPulse ? pulseCount - 1 : 0,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default PulseCTA;