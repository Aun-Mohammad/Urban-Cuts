/**
 * Urban Cuts Salon Dynamic Content Store & Local Persistence Engine
 * Supports runtime live-editing from the Admin Panel.
 */

const STORAGE_KEY_PREFIX = 'urban_cuts_cms_';

export const DEFAULT_BUSINESS_INFO = {
  name: "Urban Cuts Men's Salon",
  legalName: "Urban Cuts Men's Salon & Barbershop",
  tagline: "Islamabad's Premier Grooming Sanctuary",
  phone: "0316 4233912",
  phoneRaw: "+923164233912",
  whatsapp: "0316 4233912",
  whatsappLink: "https://wa.me/923164233912",
  address: "Street 2 B, Zaraj Housing Society, Sector A",
  city: "Islamabad",
  postalCode: "44000",
  country: "Pakistan",
  fullAddress: "Street 2 B, Zaraj Housing Society, Sector A, Islamabad, 44000",
  serviceAreas: ["Zaraj Housing Society", "DHA Phase 2", "Bahria Town", "Gulberg Greens", "Islamabad Expressway", "Rawalpindi"],
  rating: 5.0,
  reviewsCount: 42,
  hours: "Open Daily • Closes 12:00 AM (Midnight)",
  closingNotice: "Open until Midnight every day",
  announcement: "Open Daily Until Midnight • Zaraj Housing Society Sector A, Islamabad",
  heroHeadline: "Precision Fades. Sharp Beard Lines.",
  heroHighlight: "In Zaraj Housing Society, Islamabad.",
  heroSubheadline: "Welcome to Urban Cuts Men's Salon in Zaraj Housing Society, Sector A. Experience bespoke scissor work, laser-sharp beard artistry, and restorative capillary treatments in a pristine, hygienic atmosphere.",
  googleMapsUrl: "https://maps.google.com/?q=Street+2+B,+Zaraj+Housing+Society,+Sector+A,+Islamabad,+44000",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13299.780186981883!2d73.1450284!3d33.5350312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec69c7359a35%3A0x6b8408f657a2f5f1!2sZaraj%20Housing%20Society%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
};

export const DEFAULT_META_TAGS = {
  title: "Urban Cuts Men's Salon | Premium Barbershop in Islamabad (Zaraj)",
  description: "Urban Cuts Men's Salon - Top-rated 5.0★ barbershop in Zaraj Housing Society, Sector A, Islamabad. Precision haircuts, beard trims, capillary hair treatments, and grooming. Call 0316 4233912.",
  keywords: "barber shop Islamabad, men's salon Zaraj, beard trim Islamabad, hair colouring for men Islamabad, buzz cut, capillary hair treatment, professional barbers, reasonable rates haircut, Urban Cuts Islamabad",
  ogTitle: "Urban Cuts Men's Salon | Premium Barbershop in Islamabad",
  ogDescription: "5.0★ rated by 42+ clients. Experience craftsmanship, hygiene, and precision fades, beard sculpting & capillary hair treatment in Zaraj Housing Society, Sector A, Islamabad.",
  canonicalUrl: "https://urbancuts.pk",
  geoRegion: "PK-IS",
  geoPlacename: "Islamabad, Zaraj Housing Society",
  geoPosition: "33.5350;73.1550",
};

export const DEFAULT_SERVICES = [
  {
    id: "haircuts-styling",
    name: "Haircuts & Styling",
    category: "hair",
    shortDesc: "Bespoke scissor work, textured crops, and signature skin fades customized to head and bone structure.",
    benefit: "Precision fades tailored to your face shape for effortless daily styling.",
    priceNote: "Reasonable & transparent salon rates",
    duration: "35 - 45 mins",
    featured: true,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Sculpting",
    category: "beard",
    shortDesc: "Sharp geometric contouring, straight-razor cheek lines, and density balancing with soothing hot towels.",
    benefit: "Crisp definition and symmetrical neckline shaping that enhances your jawline.",
    priceNote: "Popular daily service",
    duration: "25 - 30 mins",
    featured: true,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "capillary-treatment",
    name: "Capillary Hair Treatment",
    category: "treatment",
    shortDesc: "Deep micro-nutrient scalp infusion, follicle stimulation, and moisture replenishment for thinning or dry hair.",
    benefit: "Restores scalp vitality, halts seasonal breakage, and strengthens hair roots.",
    priceNote: "Specialist deep-care treatment",
    duration: "50 - 60 mins",
    featured: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "hair-colouring",
    name: "Hair Colouring for Men",
    category: "hair",
    shortDesc: "Natural grey blending, subtle tonal lowlights, or full uniform matte shade application using ammonia-safe formulas.",
    benefit: "Seamless, undetectable natural finish with zero harsh dye staining on skin.",
    priceNote: "Premium gentle color formulation",
    duration: "40 - 50 mins",
    featured: false,
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "buzz-cut",
    name: "Precision Buzz Cut",
    category: "hair",
    shortDesc: "Ultra-clean graduated clipper blend with crisp edge-up, temple taper, and clean neck finish.",
    benefit: "Zero-fuss, sharp military or street taper that stays fresh for weeks.",
    priceNote: "Quick maintenance rate",
    duration: "20 - 25 mins",
    featured: false,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "beard-dyeing",
    name: "Beard Dyeing & Color Refresh",
    category: "beard",
    shortDesc: "Artful tinting designed specifically for coarse facial hair to cover premature greys with natural dimension.",
    benefit: "Rich, uniform beard density that looks 100% natural under daylight.",
    priceNote: "Includes protective skin barrier",
    duration: "25 - 35 mins",
    featured: false,
    image: "https://images.unsplash.com/photo-1517832606589-7629c6ae83bb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "beard-maintenance",
    name: "Beard Maintenance & Shape-Up",
    category: "beard",
    shortDesc: "Regular upkeep including flyaway reduction, weight trimming, mustache taper, and styling balm massage.",
    benefit: "Maintains optimal beard growth direction and keeps everyday frizz under control.",
    priceNote: "Ideal bi-weekly upkeep",
    duration: "20 mins",
    featured: false,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "beard-conditioning",
    name: "Deep Beard Conditioning & Steam",
    category: "beard",
    shortDesc: "Warm botanical steam therapy paired with argan and cedarwood beard mask to soften prickly hair.",
    benefit: "Relieves under-beard itchiness, softens coarse bristles, and leaves a subtle masculine scent.",
    priceNote: "Luxury beard treatment",
    duration: "30 mins",
    featured: false,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "signature-combo",
    name: "The Urban Cuts Signature Combo",
    category: "combo",
    shortDesc: "Master haircut, skin fade, hot towel razor beard sculpting, scalp massage, and styling finish.",
    benefit: "Complete grooming transformation in one seamless, relaxing session.",
    priceNote: "Best value complete service",
    duration: "60 - 75 mins",
    featured: true,
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=80"
  }
];

export const DEFAULT_TEAM_MEMBERS = [
  {
    id: "nabeel",
    name: "Nabeel",
    role: "Master Stylist & Fade Specialist",
    specialty: "Low/Mid Skin Fades, Scissor Craft & Modern Textures",
    bio: "Consistently celebrated in Google reviews for his remarkable patience and laser precision. Nabeel studies each client's hairline and head structure to deliver surgical fades and modern silhouettes.",
    experience: "8+ Years Dedicated Barbering",
    signatureStyle: "Zero-gap gradient skin fade with textured crop",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "shahzaib",
    name: "Shahzaib",
    role: "Senior Barber & Beard Sculptor",
    specialty: "Beard Architecture, Straight Razor Lines & Hair Treatments",
    bio: "Known across Zaraj for his steady hands and humble, welcoming demeanor. Shahzaib excels in beard contouring, capillary treatments, and transforming untamed beards into clean-cut statements.",
    experience: "7+ Years Men's Grooming",
    signatureStyle: "Crisp hot-towel beard sculpting and botanical conditioning",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
  }
];

export const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    author: "Hamza R.",
    location: "Zaraj Housing Society, Islamabad",
    rating: 5,
    date: "2 weeks ago",
    serviceMentioned: "Skin Fade & Beard Trim",
    stylistMentioned: "Nabeel",
    headline: "Best barbershop in Islamabad without a doubt",
    content: "Consistently praised for skill and precision. Nabeel took time to analyze my cowlick and face structure before touching the clippers. The fade was flawless and the beard lines stayed sharp for over a week.",
    verifiedGoogleReview: true,
    highlightTag: "Precision Fade Specialist"
  },
  {
    id: "rev-2",
    author: "Usman K.",
    location: "Bahria Town, Islamabad",
    rating: 5,
    date: "1 month ago",
    serviceMentioned: "Beard Sculpt & Haircut",
    stylistMentioned: "Shahzaib",
    headline: "Very hygienic environment and humble staff",
    content: "You notice the difference the moment you step in. Fresh sterilized tools for every client, spotless mirrors, clean barber capes, and very humble brothers. Shahzaib did an exceptional job on my beard symmetry.",
    verifiedGoogleReview: true,
    highlightTag: "Clean & Hygienic Protocols"
  },
  {
    id: "rev-3",
    author: "Bilal A.",
    location: "DHA Phase 2, Islamabad",
    rating: 5,
    date: "1 month ago",
    serviceMentioned: "Capillary Hair Treatment",
    stylistMentioned: "Nabeel",
    headline: "Top-notch work with very reasonable rates",
    content: "Came in for the capillary hair treatment recommended for dry scalp and hair thinning. The steaming, scalp massage, and product application were therapeutic. You get luxury salon standards at honest neighborhood prices.",
    verifiedGoogleReview: true,
    highlightTag: "Reasonable Transparent Rates"
  },
  {
    id: "rev-4",
    author: "Dr. Farhan M.",
    location: "Sector A, Zaraj Islamabad",
    rating: 5,
    date: "2 months ago",
    serviceMentioned: "Haircut & Beard Dyeing",
    stylistMentioned: "Shahzaib",
    headline: "Professional, skilled staff who actually listen",
    content: "Most salons rush you out in fifteen minutes. Here, they consult you, understand what cut suits your professional setting, and execute with absolute patience. The beard color blend looked 100% natural.",
    verifiedGoogleReview: true,
    highlightTag: "Patient Consultations"
  },
  {
    id: "rev-5",
    author: "Saad Tariq",
    location: "Islamabad Expressway",
    rating: 5,
    date: "3 months ago",
    serviceMentioned: "Haircut & Styling",
    stylistMentioned: "Nabeel",
    headline: "Cooperative, polite, and master of scissors",
    content: "Extremely humble team. Nabeel's scissor technique on top is just as impressive as his clippers. Being open late until midnight is a lifesaver for people who work late hours in Islamabad.",
    verifiedGoogleReview: true,
    highlightTag: "Open Until Midnight"
  },
  {
    id: "rev-6",
    author: "Zain Ul Abideen",
    location: "Rawalpindi / Islamabad",
    rating: 5,
    date: "3 months ago",
    serviceMentioned: "Beard Maintenance & Conditioning",
    stylistMentioned: "Shahzaib",
    headline: "Unmatched attention to detail",
    content: "The hot towel steam and beard conditioning made my rough beard feel soft and manageable. Truly a dedicated team of craftsmen. Definitely my go-to grooming place now.",
    verifiedGoogleReview: true,
    highlightTag: "Detailed Grooming Care"
  }
];

export const DEFAULT_GALLERY = [
  {
    id: "gal-1",
    title: "Signature Low Drop Fade & Textured Top",
    category: "fades",
    stylist: "Nabeel",
    description: "Seamless skin taper paired with textured shear work for versatile styling.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gal-2",
    title: "Classic Straight-Razor Beard Sculpt",
    category: "beards",
    stylist: "Shahzaib",
    description: "Laser-sharp geometric line work with natural cheek gradation.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gal-3",
    title: "Capillary Steam & Follicle Rejuvenation",
    category: "treatments",
    stylist: "Urban Cuts Team",
    description: "Deep conditioning steam therapy designed to halt hair breakage and invigorate the scalp.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gal-4",
    title: "Precision Buzz & Clean Temple Taper",
    category: "fades",
    stylist: "Nabeel",
    description: "Symmetrical edge-up with crisp hairline balance for a clean low-maintenance finish.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gal-5",
    title: "Natural Grey-Blend Beard Color",
    category: "beards",
    stylist: "Shahzaib",
    description: "Subtle tone integration that eliminates patchy greys while retaining a mature look.",
    image: "https://images.unsplash.com/photo-1517832606589-7629c6ae83bb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gal-6",
    title: "Sterilized Tools & Barbershop Workstation",
    category: "interior",
    stylist: "Urban Cuts Facility",
    description: "Medical-grade UV sterilization, premium Japanese steel shears, and sanitized leather chairs.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gal-7",
    title: "Mid Taper Fade with Matte Pompadour",
    category: "fades",
    stylist: "Nabeel",
    description: "Sophisticated executive styling tailored for boardroom and wedding occasions.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gal-8",
    title: "Welcoming & Comfortable Modern Ambience",
    category: "interior",
    stylist: "Urban Cuts Facility",
    description: "Warm amber lighting, climate control, comfortable waiting lounge, and espresso service.",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=80"
  }
];

export const DEFAULT_FAQS = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Walk-ins are warmly welcomed! However, because Nabeel and Shahzaib are highly requested, we encourage booking in advance via WhatsApp (0316 4233912) or our website form to skip wait times, especially on weekends and evenings."
  },
  {
    q: "What are your exact opening hours in Zaraj?",
    a: "We are open 7 days a week, from 11:00 AM until 12:00 AM (Midnight). Whether you need an afternoon trim or a late-night grooming session after work, our doors remain open."
  },
  {
    q: "What is Capillary Hair Treatment?",
    a: "Capillary treatment is a specialized scalp and hair follicle revival therapy. It uses botanical steam and micro-nutrient serum to unclog pores, nourish roots, halt hair thinning, and repair damage from hard water and pollution."
  },
  {
    q: "Where exactly are you located in Zaraj Housing Society?",
    a: "We are located at Street 2 B, Zaraj Housing Society, Sector A, Islamabad (Postal Code 44000). Conveniently accessible from the Islamabad Expressway, Bahria Town, and DHA Phase 2 with ample street parking available."
  },
  {
    q: "How do you maintain cleanliness and hygiene?",
    a: "Hygiene is our hallmark. We use UV light sterilizers for clippers and scissors, fresh disposable razor blades for every single shave/line-up, single-use neck paper strips, and regularly sanitized stations."
  }
];

/* --- DYNAMIC RUNTIME STORE WITH LOCALSTORAGE SYNC --- */

const getStoredItem = (key, fallback) => {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(STORAGE_KEY_PREFIX + key);
    return item ? JSON.parse(item) : fallback;
  } catch (err) {
    console.warn('Error reading from localStorage', err);
    return fallback;
  }
};

const setStoredItem = (key, value) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + key, JSON.stringify(value));
    // Dispatch custom event so listeners know content changed
    window.dispatchEvent(new CustomEvent('urban_cuts_content_updated', { detail: { key, value } }));
  } catch (err) {
    console.warn('Error writing to localStorage', err);
  }
};

// Dynamic Getters
export const getBusinessInfo = () => {
  const stored = getStoredItem('business_info', DEFAULT_BUSINESS_INFO);
  const merged = { ...DEFAULT_BUSINESS_INFO, ...stored };
  if (!merged.heroHighlight || merged.heroHighlight === "The Modern Gentleman's Standard.") {
    merged.heroHighlight = "In Zaraj Housing Society, Islamabad.";
  }
  return merged;
};
export const getMetaTags = () => getStoredItem('meta_tags', DEFAULT_META_TAGS);
export const getServices = () => getStoredItem('services', DEFAULT_SERVICES);
export const getTeamMembers = () => getStoredItem('team_members', DEFAULT_TEAM_MEMBERS);
export const getReviews = () => getStoredItem('reviews', DEFAULT_REVIEWS);
export const getGallery = () => getStoredItem('gallery', DEFAULT_GALLERY);
export const getFaqs = () => getStoredItem('faqs', DEFAULT_FAQS);

// Dynamic Setters for Admin Panel
export const saveBusinessInfo = (data) => setStoredItem('business_info', data);
export const saveMetaTags = (data) => {
  setStoredItem('meta_tags', data);
  applyMetaTagsToDOM(data);
};
export const saveServices = (data) => setStoredItem('services', data);
export const saveTeamMembers = (data) => setStoredItem('team_members', data);
export const saveReviews = (data) => setStoredItem('reviews', data);
export const saveFaqs = (data) => setStoredItem('faqs', data);

export const resetAllContentToDefault = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY_PREFIX + 'business_info');
  localStorage.removeItem(STORAGE_KEY_PREFIX + 'meta_tags');
  localStorage.removeItem(STORAGE_KEY_PREFIX + 'services');
  localStorage.removeItem(STORAGE_KEY_PREFIX + 'team_members');
  localStorage.removeItem(STORAGE_KEY_PREFIX + 'reviews');
  localStorage.removeItem(STORAGE_KEY_PREFIX + 'gallery');
  localStorage.removeItem(STORAGE_KEY_PREFIX + 'faqs');
  applyMetaTagsToDOM(DEFAULT_META_TAGS);
  window.dispatchEvent(new CustomEvent('urban_cuts_content_updated', { detail: { key: 'all_reset' } }));
};

// Apply Meta Tags to DOM dynamically
export const applyMetaTagsToDOM = (meta) => {
  if (typeof document === 'undefined') return;
  const activeMeta = meta || getMetaTags() || DEFAULT_META_TAGS || {};
  if (activeMeta.title) document.title = activeMeta.title;
  
  const updateTag = (selector, attr, value) => {
    let el = document.querySelector(selector);
    if (!el && value) {
      el = document.createElement('meta');
      if (selector.includes('name=')) {
        const match = selector.match(/name="([^"]+)"/);
        if (match) el.setAttribute('name', match[1]);
      } else if (selector.includes('property=')) {
        const match = selector.match(/property="([^"]+)"/);
        if (match) el.setAttribute('property', match[1]);
      }
      document.head.appendChild(el);
    }
    if (el && value) el.setAttribute(attr, value);
  };

  if (activeMeta.description) updateTag('meta[name="description"]', 'content', activeMeta.description);
  if (activeMeta.keywords) updateTag('meta[name="keywords"]', 'content', activeMeta.keywords);
  if (activeMeta.ogTitle) updateTag('meta[property="og:title"]', 'content', activeMeta.ogTitle);
  if (activeMeta.ogDescription) updateTag('meta[property="og:description"]', 'content', activeMeta.ogDescription);
  if (activeMeta.geoRegion) updateTag('meta[name="geo.region"]', 'content', activeMeta.geoRegion);
  if (activeMeta.geoPlacename) updateTag('meta[name="geo.placename"]', 'content', activeMeta.geoPlacename);
  if (activeMeta.geoPosition) updateTag('meta[name="geo.position"]', 'content', activeMeta.geoPosition);
};

// Admin Authentication & Session Management
const DEFAULT_ADMIN_CREDS = {
  username: 'admin',
  password: 'urbancuts2026',
};

export const getAdminCredentials = () => {
  if (typeof window === 'undefined') return DEFAULT_ADMIN_CREDS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFIX + 'admin_creds');
    if (!raw) return DEFAULT_ADMIN_CREDS;
    return JSON.parse(raw);
  } catch {
    return DEFAULT_ADMIN_CREDS;
  }
};

export const saveAdminCredentials = (newCreds) => {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'admin_creds', JSON.stringify(newCreds));
    return true;
  } catch {
    return false;
  }
};

export const verifyAdminLogin = (username, password) => {
  const creds = getAdminCredentials();
  return (
    username.trim().toLowerCase() === creds.username.trim().toLowerCase() &&
    password === creds.password
  );
};

export const getAdminSession = () => {
  if (typeof window === 'undefined') return false;
  try {
    const session = sessionStorage.getItem(STORAGE_KEY_PREFIX + 'admin_session') ||
                    localStorage.getItem(STORAGE_KEY_PREFIX + 'admin_session');
    if (!session) return false;
    const parsed = JSON.parse(session);
    return parsed?.authenticated === true;
  } catch {
    return false;
  }
};

export const setAdminSession = (authenticated, remember = false) => {
  if (typeof window === 'undefined') return;
  const payload = JSON.stringify({ authenticated, time: Date.now() });
  if (authenticated) {
    sessionStorage.setItem(STORAGE_KEY_PREFIX + 'admin_session', payload);
    if (remember) {
      localStorage.setItem(STORAGE_KEY_PREFIX + 'admin_session', payload);
    }
  } else {
    sessionStorage.removeItem(STORAGE_KEY_PREFIX + 'admin_session');
    localStorage.removeItem(STORAGE_KEY_PREFIX + 'admin_session');
  }
};

