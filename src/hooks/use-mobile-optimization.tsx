import { useIsMobile } from './use-mobile';
import { useMemo } from 'react';

interface MobileOptimizationConfig {
  imageQuality: number;
  videoQuality: 'low' | 'medium' | 'high';
  preloadImages: boolean;
  enableAnimations: boolean;
  reducedMotion: boolean;
  connectionType: 'slow' | 'fast' | 'unknown';
}

export function useMobileOptimization(): MobileOptimizationConfig {
  const isMobile = useIsMobile();
  
  const config = useMemo(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check connection type (if available)
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    
    if (isMobile) {
      return {
        imageQuality: isSlowConnection ? 60 : 75,
        videoQuality: isSlowConnection ? 'low' : 'medium',
        preloadImages: false,
        enableAnimations: !prefersReducedMotion,
        reducedMotion: prefersReducedMotion,
        connectionType: isSlowConnection ? 'slow' : 'fast'
      };
    }
    
    return {
      imageQuality: 90,
      videoQuality: 'high',
      preloadImages: true,
      enableAnimations: !prefersReducedMotion,
      reducedMotion: prefersReducedMotion,
      connectionType: 'fast'
    };
  }, [isMobile]);
  
  return config;
}

// Hook for conditional loading based on mobile optimization
export function useConditionalLoading() {
  const { preloadImages, connectionType } = useMobileOptimization();
  
  return {
    shouldPreload: preloadImages && connectionType !== 'slow',
    shouldLazyLoad: !preloadImages || connectionType === 'slow',
    shouldReduceQuality: connectionType === 'slow'
  };
}
