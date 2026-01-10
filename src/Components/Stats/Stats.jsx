import React from "react";
import FadeInSection from "../AnimatedComponents/FadeInSection";
import CounterAnimation from "../AnimatedComponents/CounterAnimation";
import { motion } from "motion/react";

const Stats = () => {
  const statsData = [
    { value: 5000, suffix: '+', label: 'Properties Listed' },
    { value: 1400, suffix: '+', label: 'Satisfied Clients' },
    { value: 258, suffix: '+', label: 'Total Agents' },
    { value: 10, prefix: '$', suffix: 'B+', label: 'Total sales since 2022' }
  ];

  return (
    <FadeInSection>
      <motion.div 
        className="relative grid grid-cols-2 gap-7 lg:grid-cols-4 lg:w-10/12 lg:mx-auto lg:-mt-20 bg-primary px-4 lg:px-8 text-white py-12 rounded-lg shadow-2xl z-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {statsData.map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-2">
              <CounterAnimation
                end={stat.value}
                duration={2.5}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </h1>
            <motion.p 
              className="text-sm lg:text-base opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </FadeInSection>
  );
};

export default Stats;
