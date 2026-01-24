import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  const siteUrl = 'https://www.realestateiq.ae';
  
  // --- UPDATED NAME HERE ---
  const defaultTitle = 'RealEstateIQ | AI Real Estate Investment Tool';
  const defaultDescription = 'The intelligent way to invest in Dubai. Verified data, AI ROI predictions, and builder analysis.';
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
    </Helmet>
  );
};

export default SEO;