import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StaggeredGrid = ({ 
  children, 
  className = '',
  stagger = 0.1,
  duration = 0.6,
  distance = 40,
  trigger = 'start 80%'
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.children;
    if (!items.length) return;

    // Set initial state for all items
    gsap.set(items, {
      opacity: 0,
      y: distance,
    });

    // Create staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: trigger,
        toggleActions: 'play none none none',
      },
    });

    tl.to(items, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power2.out',
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [stagger, duration, distance, trigger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default StaggeredGrid;