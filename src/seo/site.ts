// Single source of truth for the clinic's name, address and phone (NAP).
// Keep these identical to the Google Business Profile and directory listings.
export const SITE_URL = 'https://adidianphysiotherapyclinic.com';

export const CLINIC = {
  name: 'Adidian Physiotherapy Clinic',
  phone: '+2347065873379',
  phoneDisplay: '070-6587-3379',
  /** WhatsApp number in international format, digits only (used for wa.me links). */
  whatsapp: '2347065873379',
  email: 'adidianphysiotherapyclinic@gmail.com',
  streetAddress: 'No 32 Lord Lugard Street, Area 11, Garki',
  locality: 'Abuja',
  region: 'FCT',
  postalCode: '900108',
  country: 'NG',
  latitude: 9.057108,
  longitude: 7.456398,
  logo: `${SITE_URL}/logo.jpg`,
  image: `${SITE_URL}/physiooffice.webp`,
  sameAs: [
    'https://www.facebook.com/profile.php?id=61578476661800',
    'https://www.instagram.com/adidian_physiotherapy_clinic',
  ],
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${CLINIC.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const BUSINESS_ID = `${SITE_URL}/#clinic`;

export const absoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
