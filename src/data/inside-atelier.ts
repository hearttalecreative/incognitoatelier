export const journeyTypes = [
  { label: "A multigenerational escape", image: "/assets/journey-multigenerational.jpg" },
  { label: "A private sabbatical", image: "/assets/journey-sabbatical.jpg" },
  { label: "A celebratory trip with friends", image: "/assets/journey-celebration.jpg" },
  { label: "A romantic reconnection", image: "/assets/journey-romantic.jpg" },
  { label: "Or a solo immersion into something new", image: "/assets/journey-solo.jpg" },
];

/* The four steps of the VELA Method, in order. */
export const velaSteps = [
  {
    letter: "V",
    name: "vision",
    body: "Every journey begins with a conversation, understanding your story, your current chapter in life, and what you want this experience to represent. It's about uncovering what truly matters to you right now: what you want to celebrate, reconnect with, or simply pause for. Your vision becomes the compass that guides every decision we make.",
  },
  {
    letter: "E",
    name: "Essence",
    body: "Once the vision is clear, we define the emotional tone of your journey, how you want it to feel. Whether that's quiet sophistication, lighthearted joy, or deep reconnection, the essence shapes the narrative and flow of your trip. From the aesthetic of the properties to the texture of every moment, this step ensures every detail resonates with your individuality.",
  },
  {
    letter: "L",
    name: "Logistics",
    body: "Luxury is built on precision. Our team curates every logistical element, from flights and accommodations to private transfers, fine dining, and on-site experiences, with absolute discretion. Each itinerary is tailored to match your balancing structure with freedom so your journey unfolds seamlessly and without friction.",
  },
  {
    letter: "A",
    name: "Alignment",
    body: "Finally, we bring everything together into one cohesive experience. Every choice, from destination to design, aligns with your initial vision and desired outcome. We ensure continuity from beginning to end, leaving you with not only extraordinary memories but also a renewed sense of connection to what matters most: time, presence, and meaning.",
  },
];

/* Background slideshow that runs beside the opening copy. */
export const memoriesSlideshow = Array.from(
  { length: 6 },
  (_, index) => `/assets/inside-incognito-atelier-slide-${String(index + 1).padStart(2, "0")}.jpg`
);
