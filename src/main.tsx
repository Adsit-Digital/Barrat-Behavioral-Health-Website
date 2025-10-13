// Only load error reporter in development
if (import.meta.env.DEV) {
  import('@/lib/errorReporter');
}

// Register service worker in production
if (import.meta.env.PROD) {
  import('@/lib/serviceWorker').then(({ registerServiceWorker }) => {
    registerServiceWorker();
  });
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { Layout } from '@/components/Layout';
import { lazy, Suspense } from 'react';

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage').then(m => ({ default: m.TestimonialsPage })));
const BlogPage = lazy(() => import('@/pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-orange"></div>
  </div>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { 
        path: "/", 
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        )
      },
      { 
        path: "/about", 
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        )
      },
      { 
        path: "/services", 
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        )
      },
      { 
        path: "/contact", 
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        )
      },
      { 
        path: "/testimonials", 
        element: (
          <Suspense fallback={<PageLoader />}>
            <TestimonialsPage />
          </Suspense>
        )
      },
      { 
        path: "/blog", 
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPage />
          </Suspense>
        )
      },
      { 
        path: "/blog/:slug", 
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPostPage />
          </Suspense>
        )
      },
    ]
  }
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)