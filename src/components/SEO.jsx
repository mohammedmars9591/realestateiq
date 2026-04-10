import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, schema }) => {
  const siteUrl = 'https://www.realestateiq.ae';
  
  // --- ADVANCED SEO DEFAULTS ---
  const defaultTitle = 'RealEstateIQ | Free AI Dubai Real Estate Investment Tool';
  const defaultDescription = 'Compare Dubai real estate areas and top builders for free. The ultimate AI-driven investment platform for Indian and European investors targeting high ROI.';
  const defaultImage = `${siteUrl}/og-image.jpg`; 

  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={currentUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD Schema markup injection */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;