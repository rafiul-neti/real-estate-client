import React, { useEffect } from 'react';
import { useLenis } from '../hooks/useLenis';

const SmoothScrollProvider = ({ children }) => {
  useLenis();

  return <>{children}</>;
};

export default SmoothScrollProvider;