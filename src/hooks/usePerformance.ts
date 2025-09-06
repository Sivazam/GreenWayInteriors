import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    // Track page load time
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

    // Track Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.name === 'FCP') {
          setMetrics(prev => ({
            ...prev!,
            firstContentfulPaint: entry.startTime
          }));
        }
        
        if (entry.name === 'LCP') {
          setMetrics(prev => ({
            ...prev!,
            largestContentfulPaint: entry.startTime
          }));
        }
        
        if (entry.name === 'CLS') {
          setMetrics(prev => ({
            ...prev!,
            cumulativeLayoutShift: (entry as any).value
          }));
        }
        
        if (entry.name === 'FID') {
          setMetrics(prev => ({
            ...prev!,
            firstInputDelay: (entry as any).value
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });

    // Initialize metrics
    setMetrics({
      loadTime,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return metrics;
}

export function useLazyLoading() {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const lazyLoadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Handle images
            if (element.tagName === 'IMG' && element.dataset.src) {
              element.src = element.dataset.src;
              element.removeAttribute('data-src');
            }
            
            // Handle background images
            if (element.dataset.background) {
              element.style.backgroundImage = `url(${element.dataset.background})`;
              element.removeAttribute('data-background');
            }
            
            // Add animation class
            element.classList.add('lazy-loaded');
            
            lazyLoadObserver.unobserve(element);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    setObserver(lazyLoadObserver);

    return () => {
      lazyLoadObserver.disconnect();
    };
  }, []);

  const observeElement = (element: HTMLElement) => {
    if (observer) {
      observer.observe(element);
    }
  };

  return { observeElement };
}

export function usePrefetch() {
  const prefetchResources = (urls: string[]) => {
    if (typeof window === 'undefined') return;

    urls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = url.endsWith('.js') ? 'script' : 'style';
      document.head.appendChild(link);
    });
  };

  const prefetchImages = (urls: string[]) => {
    if (typeof window === 'undefined') return;

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  return { prefetchResources, prefetchImages };
}