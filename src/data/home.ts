export const pillars = [
  {
    title: "Discretion by Design",
    body: "Your privacy, energy, and identity, protected at every turn.",
  },
  {
    title: "Couture Craftsmanship",
    body: "Travel designed like haute couture: precise, one-of-a-kind, deeply personal.",
  },
  {
    title: "Uncommon Access",
    body: "Not what money can buy, what trust unlocks.",
  },
  {
    title: "Balanced Flow",
    body: "Rhythm, balance, and breathing room for your mind and body.",
  },
  {
    title: "Legacy Stewardship",
    body: "Journeys that outlive the itinerary and shape your family's enduring memories.",
  },
];

export const cravings = [
  "Space to breathe",
  "Depth over distraction",
  "Beauty with meaning",
  "Joy that returns with you",
];

export const clientProfiles = [
  "Legacy-driven founders, investors, and families",
  "Family offices curating generational experiences with intention",
  "Discerning global citizens who value discretion over display",
  "Those seeking seamlessness, privacy, and presence, in all its forms",
];

export const testimonials = [
  {
    author: "Alisha M.",
    location: "Chicago",
    quote:
      "Working with Incognito Global and Valentina was easy, fun, and stress-free. Her meticulous attention to the smallest details made our experience memorable, our connections simple, our tours tailored to our wants, and gave us very unique upgrades throughout! I never knew we could have such an amazing vacation adventure.",
    image: "/assets/pillar-1.jpg",
  },
  {
    author: "Jane and Paul C.",
    location: "New York",
    quote:
      "We cannot thank Valentina enough for planning a trip to Seychelles. We never would have ever thought of this as a possibility! Three islands in 10 days. It was an inspirational, rejuvenating, and a most memorable holiday adventure. Valentina got us upgrades and special experiences, and even left us little messages along the way. Thank you from the bottom of our hearts!",
    image: "/assets/pillar-2.jpg",
  },
  {
    author: "Simon L.",
    location: "Los Angeles",
    quote:
      "We used Valentina for a family cultural and religious pilgrimage to Israel…she was very knowledgeable, prompt, friendly, flexible, and supportive of our constantly changing needs. Her itinerary was easy to follow and made our trip so stress free. She made sure to mix in things to see and do to meet everyone's tastes! I give her my highest recommendation.",
    image: "/assets/pillar-3.jpg",
  },
  {
    author: "Becky H.",
    location: "Dallas",
    quote:
      "Italy, Slovenia, and Croatia over three weeks! Remarkable beauty, amazing food and 5 star the whole way. Words cannot express how grateful we are for Valentina putting together such an amazing trip! She got us private access to some of the sights that are otherwise overcrowded. Everything was so well organized. We can't wait for Valentina to plan our next trip!",
    image: "/assets/pillar-4.jpg",
  },
];

const homeSlide = (n: number) => `/assets/home-slide-${String(n).padStart(2, "0")}.jpg`;

/* Background slideshows, in the order Elementor stores each gallery. */
export const luxurySlideshow = [6, 7, 5, 11, 10].map(homeSlide);
export const clientsSlideshow = [8, 2, 4, 3, 9, 1].map(homeSlide);

/*
  The 20 partner marks, in the order the honeycomb lays them out on the live
  site (four per row, five rows).
*/
export const partnerLogos = [17, 18, 19, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 20].map(
  (n) => `/assets/partner-${String(n).padStart(2, "0")}.jpg`
);

/* Words cycled by the closing statement. */
export const closingWords = [
  "designed",
  "discreet",
  "seamless",
  "considered",
  "with intention",
  "with joy",
];
