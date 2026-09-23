import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl: string;
  noIndex?: boolean;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonicalUrl,
  noIndex = false,
}) => {
  useEffect(() => {
    // 1. Update Title
    const originalTitle = document.title;
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // 3. Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // 4. Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical ? canonical.getAttribute('href') : '';
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }

    // 5. Update Robots (e.g. noindex for 404 pages)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    const originalRobots = robotsMeta ? robotsMeta.getAttribute('content') : '';
    if (noIndex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, follow');
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonical && originalCanonical) canonical.setAttribute('href', originalCanonical);
      if (noIndex && robotsMeta) {
        if (originalRobots) {
          robotsMeta.setAttribute('content', originalRobots);
        } else {
          robotsMeta.remove();
        }
      }
    };
  }, [title, description, canonicalUrl, noIndex]);

  return null;
};
