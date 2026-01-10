import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import AnimatedCard from "./AnimatedComponents/AnimatedCard";
import { motion } from "motion/react";

const PropertyCard = ({ property }) => {
  return (
    <AnimatedCard 
      className="bg-base-100 rounded-md overflow-hidden"
      hoverScale={1.03}
      hoverY={-8}
      shadowIntensity="lg"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={property.thumbnail}
          className="object-cover w-full h-48 transition-transform duration-500"
          alt={property["property-name"]}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {property.category}
        </motion.div>
      </div>
      
      <div className="p-4">
        <motion.h3 
          className="my-3 text-subtitle text-center text-gray-700 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {property["property-name"]}
        </motion.h3>
        
        <motion.p 
          className="my-2 font-bold text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Posted by: <span className="text-error font-medium">
            {property["posted-by"]}
          </span>
        </motion.p>
        
        <motion.p 
          className="flex gap-2 items-center mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <IoLocationOutline className="text-secondary" />
          <span className="text-sm text-body text-success">
            {property.location}
          </span>
        </motion.p>
        
        <div className="w-full h-px my-3 bg-gray-200"></div>
        
        <motion.p 
          className="text-body text-sm text-gray-600 mb-4 line-clamp-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {property["about-property"]}
        </motion.p>
        
        <div className="w-full h-px my-3 bg-gray-200"></div>
        
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h3 className="text-h3 text-gray-700 font-bold">{property.price}</h3>
          </div>

          <Link to={`/property/${property._id}`}>
            <motion.button
              className="btn btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Property
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </AnimatedCard>
  );
};

export default PropertyCard;
