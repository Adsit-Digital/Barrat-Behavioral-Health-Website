import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useMobileOptimization } from '@/hooks/use-mobile-optimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  width,
  height,
  sizes = '100vw',
  quality
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const { imageQuality, preloadImages } = useMobileOptimization();
  
  // Use mobile-optimized quality if not specified
  const finalQuality = quality || imageQuality;

  useEffect(() => {
    if (priority || preloadImages) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, preloadImages]);

  // Generate optimized image URLs with different formats
  const generateSrcSet = (baseSrc: string, format: string) => {
    const params = new URLSearchParams({
      format,
      quality: finalQuality.toString(),
      ...(width && { w: width.toString() }),
      ...(height && { h: height.toString() })
    });
    return `${baseSrc}?${params.toString()}`;
  };

  const baseSrc = src;
  const webpSrc = generateSrcSet(baseSrc, 'webp');
  const avifSrc = generateSrcSet(baseSrc, 'avif');

  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={cn('bg-gray-200 animate-pulse', className)}
        style={{ width, height }}
        aria-hidden="true"
      />
    );
  }

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img
        ref={imgRef}
        src={baseSrc}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width={width}
        height={height}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          // Fallback to original image if optimized versions fail
          if (imgRef.current) {
            imgRef.current.src = baseSrc;
            setIsLoaded(true);
          }
        }}
      />
    </picture>
  );
}
