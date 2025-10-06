import { useEffect } from 'react';
interface SEOProps {
  title: string;
  description: string;
}
export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Barrat Behavioral Health and Primary Care`;
    const metaDescription = document.querySelector('meta[name="description"]');
    let prevDescription = '';
    if (metaDescription) {
      prevDescription = metaDescription.getAttribute('content') || '';
      metaDescription.setAttribute('content', description);
    }
    return () => {
      document.title = prevTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', prevDescription);
      }
    };
  }, [title, description]);
  return null;
}