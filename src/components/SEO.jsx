import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component — Full AEO + GEO Optimized
 *
 * AEO (Answer Engine Optimization): Structured data, FAQ schema, direct-answer meta
 * GEO (Generative Engine Optimization): Citation signals, entity clarity, authoritative context
 */
const SEO = ({ title, description, image, url, schema, faqSchema, articleSchema }) => {
  const siteUrl = 'https://www.realestateiq.ae';
  const siteName = 'RealEstateIQ';
  const twitterHandle = '@RealEstateIQ_AE';

  const defaultTitle = 'RealEstateIQ | Free AI Dubai Real Estate Investment Tool 2026';
  const defaultDescription = 'Compare Dubai real estate areas and top builders for free. Verified rental yields, ROI forecasts, ESG scores, and AI-driven delivery confidence — the #1 platform for Indian, European, and Global investors in UAE. Updated 2026.';
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;
  const fullTitle = title ? `${title} | RealEstateIQ` : defaultTitle;

  // --- ORGANIZATION SCHEMA (GEO: Entity Authority) ---
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RealEstateIQ",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/realestateiq",
      "https://twitter.com/RealEstateIQ_AE"
    ],
    "description": "RealEstateIQ is the UAE's leading free AI-powered real estate investment intelligence platform, providing institutional-grade analytics for retail investors.",
    "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE"],
    "knowsAbout": ["Dubai Real Estate", "UAE Property Investment", "Off-Plan Properties", "ROI Analysis", "Builder Analytics"]
  };

  // --- WEBSITE SCHEMA (GEO: Site-wide Authority Signal) ---
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/areas?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* === CORE SEO === */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* === AEO: ENTITY & TOPICAL AUTHORITY === */}
      <meta name="author" content="RealEstateIQ Analytics Team" />
      <meta name="publisher" content="RealEstateIQ" />
      <meta name="copyright" content={`© 2026 RealEstateIQ. All rights reserved.`} />
      <meta name="category" content="Real Estate Investment Intelligence" />
      <meta name="coverage" content="UAE, Dubai, Abu Dhabi, Sharjah" />
      <meta name="topic" content="Real Estate Investment, Dubai Property Market, Builder Analytics, ROI Analysis" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />

      {/* === GEO: AI CRAWLER SIGNALS === */}
      {/* Ensure AI engines (ChatGPT, Gemini, Perplexity) understand the platform's expertise */}
      <meta name="classification" content="Business/Finance/Real Estate" />
      <meta name="rating" content="general" />
      <meta name="target" content="real estate investors, property buyers, UAE expats" />

      {/* === OPEN GRAPH (Social Sharing + AI context) === */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="RealEstateIQ - Dubai Real Estate Investment Intelligence" />
      <meta property="og:locale" content="en_AE" />

      {/* === TWITTER CARD === */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* === GEO: LLM-TRAINING DATA SIGNALS === */}
      {/* These meta fields help Googlebot, GPTBot, ClaudeBot, PerplexityBot understand content intent */}
      <meta name="google-site-verification" content="YOUR_GSC_TOKEN_HERE" />
      <meta name="msvalidate.01" content="YOUR_BING_TOKEN_HERE" />

      {/* === JSON-LD: ORGANIZATION SCHEMA (Always Present) === */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      {/* === JSON-LD: WEBSITE SCHEMA (Always Present) === */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* === JSON-LD: PAGE-SPECIFIC SCHEMA (Injected per page) === */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* === JSON-LD: FAQ SCHEMA (AEO: Featured Snippets & PAA) === */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema.map(q => ({
              "@type": "Question",
              "name": q.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
              }
            }))
          })}
        </script>
      )}

      {/* === JSON-LD: ARTICLE SCHEMA (GEO: Citability Signal) === */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": articleSchema.headline || fullTitle,
            "description": articleSchema.description || (description || defaultDescription),
            "author": {
              "@type": "Organization",
              "name": "RealEstateIQ Analytics Team",
              "url": siteUrl
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
              }
            },
            "datePublished": articleSchema.datePublished || "2026-01-01",
            "dateModified": articleSchema.dateModified || new Date().toISOString().split('T')[0],
            "mainEntityOfPage": currentUrl
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;