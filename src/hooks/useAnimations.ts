'use client';

import { useEffect, useRef, useState } from 'react';

// ==========================================
// Scroll Reveal — fade-in + slide-up on viewport entry
// ==========================================
export function useScrollReveal(
  threshold: number = 0.12,
  staggerDelay: number = 100,
  rootMargin: string = '0px 0px -60px 0px'
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');

          const items = el.querySelectorAll('.stagger-item');
          items.forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * staggerDelay}ms`;
            requestAnimationFrame(() => child.classList.add('revealed'));
          });

          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, staggerDelay, rootMargin]);

  return ref;
}

// ==========================================
// Count-Up — animated number counter on reveal
// ==========================================
export function useCountUp(end: number, suffix: string = '', duration: number = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.round(end * eased).toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, duration]);

  return ref;
}

// ==========================================
// Parallax — lightweight scroll-based Y offset
// ==========================================
export function useParallax(speed: number = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const offset = (rect.top - window.innerHeight / 2) * speed;
          el.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}

// ==========================================
// Navbar Scroll — auto-hide on scroll down, reveal on scroll up
// ==========================================
export function useNavbarScroll() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled(y > 20);

          if (y <= 80) {
            setVisible(true);
          } else if (y > lastScroll.current + 5) {
            setVisible(false);
          } else if (y < lastScroll.current - 5) {
            setVisible(true);
          }

          lastScroll.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { visible, scrolled };
}
