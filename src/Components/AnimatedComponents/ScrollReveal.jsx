import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ 
  children, 
  className = '',
  direction = 'up',
  distance = 40,
  duration = 0.6,
  delay = 0,
  stagger = 0,
  trigger = 'start 80%',
  once = true
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on direction
    const initialState = {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    };

    gsap.set(element, initialState);

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: trigger,
        toggleActions: once ? 'play none none none' : 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, distance, duration, delay, trigger, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;