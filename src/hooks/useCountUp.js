import { useEffect, useState } from "react";

/**
 * Animates a number counting up from 0 to the target value.
 * @param {number} target - The final number to count to
 * @param {boolean} start - Whether to start the animation
 * @param {number} duration - Animation duration in ms
 * @returns {number} The current animated value
 */
export default function useCountUp(target, start = false, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, start, duration]);

  return count;
}
