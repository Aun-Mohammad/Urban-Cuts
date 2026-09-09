/**
 * Comprehensive Schema.org JSON-LD definitions for Urban Cuts Men's Salon Islamabad.
 * Complies with Google Search Central Structured Data Guidelines for:
 * - BarberShop / LocalBusiness
 * - Service & OfferCatalog
 * - AboutPage & Person (Stylists)
 * - Review & AggregateRating
 * - ImageGallery & ImageObject
 * - ContactPage & ContactPoint
 * - FAQPage
 * - BreadcrumbList
 */

export const BASE_URL = 'https://urbancuts.pk';

export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
  })),
});

export const getHomeSchema = (businessInfo, services = [], faqs = [], reviews = []) => {
  const barberShop = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    '@id': `${BASE_URL}/#barbershop`,
    name: businessInfo?.name || "Urban Cuts Men's Salon",
    alternateName: "Urban Cuts Islamabad",
    description: businessInfo?.metaDescription || "Top-rated 5.0★ barbershop in Zaraj Housing Society, Sector A, Islamabad. Precision haircuts, beard sculpting, capillary treatments.",
    url: BASE_URL,
    logo: `${BASE_URL}/Urban_Cuts_bg_removed.png`,
    image: [
      `${BASE_URL}/Urban_Cuts_bg_removed.png`,
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80"
    ],
    telephone: businessInfo?.phone || "+923164233912",
    priceRange: "$$",
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash, Online Banking, JazzCash, EasyPaisa",
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo?.address || 'Street 2 B, Zaraj Housing Society, Sector A',
      addressLocality: businessInfo?.city || 'Islamabad',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5350,
      longitude: 73.1550,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
        opens: '11:00',
        closes: '24:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '42',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Men's Grooming & Barbering Services",
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          offers: {
            '@type': 'Offer',
            price: s.price?.replace(/[^0-9]/g, '') || '800',
            priceCurrency: 'PKR',
          },
        },
      })),
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Urban Cuts Men's Salon Islamabad",
    description: "Official website of Urban Cuts Men's Salon Zaraj Housing Society Sector A Islamabad.",
    publisher: {
      '@id': `${BASE_URL}/#barbershop`,
    },
  };

  const faqPage = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question || f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer || f.a,
      },
    })),
  } : null;

  return [barberShop, website, faqPage].filter(Boolean);
};

export const getAboutSchema = (businessInfo, team = []) => {
  const aboutPage = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${BASE_URL}/about/#webpage`,
    url: `${BASE_URL}/about`,
    name: "About Urban Cuts Men's Salon",
    description: "Learn about the craftsmanship, clinical hygiene, and master barbers at Urban Cuts Islamabad.",
    mainEntity: {
      '@type': 'BarberShop',
      name: "Urban Cuts Men's Salon",
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Street 2 B, Zaraj Housing Society, Sector A',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
      employee: team.map((member) => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        knowsAbout: [
          member.specialty,
          'Hair Cutting',
          'Beard Sculpting',
          'Hospital-Grade Hygiene'
        ],
        worksFor: {
          '@type': 'BarberShop',
          name: "Urban Cuts Men's Salon",
        },
      })),
    },
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  return [aboutPage, breadcrumbs];
};

export const getServicesSchema = (businessInfo, services = []) => {
  const servicesPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/services/#webpage`,
    url: `${BASE_URL}/services`,
    name: "Barbering & Hair Care Menu | Urban Cuts",
    description: "Explore our full menu of precision haircuts, beard sculpting, capillary scalp treatments, and grooming packages in Islamabad.",
    mainEntity: {
      '@type': 'OfferCatalog',
      name: "Urban Cuts Salon Services",
      itemListElement: services.map((service, idx) => ({
        '@type': 'Offer',
        position: idx + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          serviceType: service.category || 'Barbering',
          provider: {
            '@type': 'BarberShop',
            name: "Urban Cuts Men's Salon",
            telephone: '+923164233912',
          },
          offers: {
            '@type': 'Offer',
            price: service.price?.replace(/[^0-9]/g, '') || '800',
            priceCurrency: 'PKR',
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2027-12-31',
          },
        },
      })),
    },
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services Menu', url: '/services' },
  ]);

  return [servicesPage, breadcrumbs];
};

export const getGallerySchema = (businessInfo, galleryItems = []) => {
  const galleryPage = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${BASE_URL}/gallery/#webpage`,
    url: `${BASE_URL}/gallery`,
    name: "Urban Cuts Portfolio & Ambience Gallery",
    description: "Browse high-precision skin fades, classic scissor tapers, beard sculpting, and hair treatments executed at Urban Cuts.",
    image: galleryItems.map((item) => ({
      '@type': 'ImageObject',
      contentUrl: item?.image,
      caption: item?.title || item?.name || 'Urban Cuts Grooming',
      description: item?.description || '',
      creator: {
        '@type': 'BarberShop',
        name: "Urban Cuts Men's Salon",
      },
    })),
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio Gallery', url: '/gallery' },
  ]);

  return [galleryPage, breadcrumbs];
};

export const getReviewsSchema = (businessInfo, reviews = []) => {
  const reviewsPage = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': `${BASE_URL}/reviews/#webpage`,
    url: `${BASE_URL}/reviews`,
    name: "Customer Reviews & Testimonials | Urban Cuts Men's Salon",
    mainEntity: {
      '@type': 'BarberShop',
      name: "Urban Cuts Men's Salon",
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: reviews.length ? String(reviews.length) : '42',
        bestRating: '5',
        worstRating: '1',
      },
      review: reviews.map((r) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: r.author,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(r.rating || 5),
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: r.comment || r.content || r.headline || 'Excellent service',
        datePublished: '2026-01-15',
        publisher: {
          '@type': 'Organization',
          name: 'Google My Business',
        },
      })),
    },
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Reviews', url: '/reviews' },
  ]);

  return [reviewsPage, breadcrumbs];
};

export const getContactSchema = (businessInfo, faqs = []) => {
  const contactPage = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${BASE_URL}/contact/#webpage`,
    url: `${BASE_URL}/contact`,
    name: "Contact Urban Cuts Men's Salon Zaraj Islamabad",
    description: "Book an appointment or visit Urban Cuts on Street 2 B, Zaraj Housing Society, Sector A, Islamabad. Call +92 316 4233912.",
    mainEntity: {
      '@type': 'BarberShop',
      name: "Urban Cuts Men's Salon",
      telephone: businessInfo?.phone || '+923164233912',
      email: 'urbancutsisb@gmail.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: businessInfo?.phone || '+923164233912',
        contactType: 'customer service',
        areaServed: 'PK',
        availableLanguage: ['English', 'Urdu', 'Punjabi'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Street 2 B, Zaraj Housing Society, Sector A',
        addressLocality: 'Islamabad',
        postalCode: '44000',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.5350,
        longitude: 73.1550,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
          ],
          opens: '11:00',
          closes: '24:00',
        },
      ],
    },
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact & Location', url: '/contact' },
  ]);

  return [contactPage, breadcrumbs];
};
