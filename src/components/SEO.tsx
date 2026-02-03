import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEO = ({ 
  title = "Best Physiotherapy Clinic in Abuja | Adidian Physical Therapy & Rehabilitation",
  description = "Top-rated physiotherapy clinic in Abuja offering expert physical therapy, sports rehabilitation, pain management, and specialized treatments. Located in Garki, Area 11. Book your appointment today.",
  keywords = "physiotherapy clinic Abuja, physical therapy Abuja, physiotherapist Abuja, sports therapy Abuja, pain management Abuja, rehabilitation clinic Abuja, Garki physiotherapy, Area 11 physio, best physiotherapy clinic Abuja",
  canonical = "https://adidianphysiotherapyclinic.com/"
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
          "@type": "PhysicalTherapy",
          "name": "Adidian Physiotherapy Clinic",
          "alternateName": "Best Physiotherapy Clinic in Abuja",
          "image": "/logo.jpg",
          "@id": "https://adidianphysiotherapyclinic.com/",
          "url": "https://adidianphysiotherapyclinic.com/",
          "telephone": "+2347065873379",
          "priceRange": "₦₦",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No 32 Lord Lugard Street, Area 11, Garki",
            "addressLocality": "Abuja",
            "addressRegion": "FCT",
            "addressCountry": "NG"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "9.057108",
            "longitude": "7.456398"
          },
          "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
          "areaServed": [
            "Abuja",
            "Garki",
            "Area 11", 
            "Wuse",
            "Maitama",
            "Central Business District",
            "Kubwa",
            "Gwarinpa",
            "FCT"
          ],
          "medicalSpecialty": [
            "Physiotherapy",
            "Physical Therapy",
            "Sports Therapy",
            "Pain Management",
            "Neurological Rehabilitation",
            "Orthopedics",
            "Pediatric Physical Therapy",
            "Women's Health"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "200"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61578476661800",
            "https://www.instagram.com/adidian_physiotherapy_clinic",
            "https://www.linkedin.com/in/diana-daniel-322388244"
          ]
        })}
      </script>
    </Helmet>
  );
};