'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for parallax scroll effects
 * @param {number} speed - Parallax speed multiplier (0.1 = slow, 1 = normal speed)
 * @returns {Object} - { ref, offset }
 */
export function useParallax(speed = 0.5) {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = element.getBoundingClientRect();
                    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
                    const elementTop = rect.top + scrolled;
                    const elementHeight = rect.height;
                    const viewportHeight = window.innerHeight;

                    // Calculate parallax offset
                    const scrollProgress = (scrolled - elementTop + viewportHeight) / (elementHeight + viewportHeight);
                    const parallaxOffset = (scrollProgress - 0.5) * 100 * speed;

                    setOffset(parallaxOffset);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed]);

    return { ref, offset };
}
