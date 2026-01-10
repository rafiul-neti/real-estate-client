import React from 'react';
import { motion } from 'motion/react';

const AnimatedButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'btn transition-all duration-300 ease-out';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };
  
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2,
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.97,
        y: disabled ? 0 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        duration: 0.2,
      }}
      {...props}
    >
      {loading ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default AnimatedButton;