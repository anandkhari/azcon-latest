'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for count-up animation
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {boolean} start - Whether to start the animation
 * @returns {number} - Current count value
 */
export function useCountUp(end, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    const startTimeRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!start) {
            setCount(0);
            return;
        }

        startTimeRef.current = null;

        const animate = (timestamp) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(end * easeOut));

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [end, duration, start]);

    return count;
}
