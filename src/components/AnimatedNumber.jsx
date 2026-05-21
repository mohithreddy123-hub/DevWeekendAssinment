import { useEffect, useState, useRef } from 'react';

/**
 * AnimatedNumber interpolates numeric values smoothly over a short duration (250ms).
 *
 * @param {{ value: number, format: (val: number) => string }} props
 */
export const AnimatedNumber = ({ value, format }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValueRef = useRef(value);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const startValue = previousValueRef.current;
    const endValue = value;

    // Fast-path: if values are effectively identical, don't run animation
    if (Math.abs(startValue - endValue) < 0.001) {
      setDisplayValue(endValue);
      previousValueRef.current = endValue;
      return;
    }

    const duration = 250; // Animation duration in milliseconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: easeOutQuad (starts fast, slows down gradually)
      const easeProgress = progress * (2 - progress);

      const currentValue = startValue + (endValue - startValue) * easeProgress;
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        previousValueRef.current = endValue;
      }
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value]);

  return <>{format ? format(displayValue) : displayValue}</>;
};
