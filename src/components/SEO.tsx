import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEO = ({ 
  title = "Adidian Physiotherapy Clinic | Physical Therapy & Rehabilitation in Abuja",
  description = "Leading physiotherapy clinic in Abuja offering specialized physical therapy, sports therapy, women's health, pediatrics, orthopedics, and massage services.",
  keywords = "physio, physiotherapy, Abuja, physical therapy, massage, bone health, clinic, women's health, ergonomics, pediatrics, orthopedics, hospital, sports therapy",
  canonical = "https://adidian.com"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Adidian Physiotherapy Clinic",
          "image": "/logo.jpg",
          "@id": "https://adidian.com",
          "url": "https://adidian.com",
          "telephone": "",
          "priceRange": "₦₦",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Abuja",
            "addressCountry": "NG"
          },
          "medicalSpecialty": [
            "Physiotherapy",
            "Physical Therapy",
            "Sports Therapy",
            "Orthopedics",
            "Pediatric Physical Therapy",
            "Women's Health"
          ]
        })}
      </script>
    </Helmet>
  );
};