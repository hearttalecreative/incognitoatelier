const asset = (page: string, n: number) =>
  `/assets/${page}-slide-${String(n).padStart(2, "0")}.jpg`;

/* Slideshow galleries, in the order Elementor stores them. */
export const legacySlideshow = [8, 5, 6, 2].map((n) => asset("signature-offerings", n));
export const bespokeSlideshow = [3, 1, 4, 7].map((n) => asset("signature-offerings", n));
export const retreatSlideshow = [9, 10, 13, 12, 11].map((n) => asset("signature-offerings", n));

export const offeringLinks = [
  { label: "Our Bespoke Journeys", href: "#bespoke" },
  { label: "Legacy Travel Portfolio", href: "#legacy" },
  { label: "Private Retreat Design", href: "#private" },
  { label: "Hotel-Only Bookings", href: "#hotel" },
];

export const hotelPerks = [
  "A thoughtful welcome amenity",
  "A $100 resort credit",
  "Early check-in and late check-out (based on availability)",
  "A possible room upgrade upon check-in",
  "Daily breakfast for two",
];

export const legacyMembership = [
  "Annual travel strategy and curation",
  "Dedicated planning and concierge service",
  "Access to exclusive global partnerships",
  "Continuous refinement of your travel profile and preferences",
  "Long-term alignment between your personal and professional calendar",
];

export const bespokeIncludes = [
  "Tailor-made itineraries curated to your personal rhythm",
  "Full travel coordination and logistics",
  "Private experiences, from art to adventure",
  "VIP hotel benefits through Virtuoso and Departure Lounge affiliations.",
  "Discreet communication and ongoing support",
];

export const retreatIncludes = [
  "Venue sourcing and contract management",
  "Full travel and guest coordination",
  "On-site logistics and itinerary design",
  "Local partnerships for culinary, cultural, and wellness experiences",
  "White-label and confidentiality options",
];

/* The Experiences & Services grid: two rows of two categories. */
export const experienceCategories = [
  {
    title: "Travel Experiences",
    image: "/assets/offering-hero-1.jpg",
    tagline: "Where connection and celebration meet.",
    items: [
      "Bespoke Journeys",
      "Custom Itineraries",
      "Family Travel",
      "Friend Getaways",
      "Honeymoons",
      "Milestone Celebrations",
    ],
  },
  {
    title: "Private & Exclusive Access",
    image: "/assets/offering-hero-2.jpg",
    tagline: "Access that cannot be bought, only designed.",
    items: [
      "Private Aviation",
      "Yacht Charters",
      "Private Islands",
      "Villas & Private Homes",
      "Executive & VIP Travel",
    ],
  },
  {
    title: "Specialized Journeys",
    image: "/assets/offering-hero-3.jpg",
    tagline: "For those who seek depth and discovery.",
    items: ["Safaris", "Ocean & River Cruising", "Wellness Escapes"],
  },
  {
    title: "Concierge & Support",
    image: "/assets/offering-hero-4.jpg",
    tagline: "Seamless, discreet, and designed around your lifestyle.",
    items: [
      "Hotel-Only Booking",
      "Private Car Transfers",
      "Family Office & Wealth Advisor Services",
    ],
  },
];
