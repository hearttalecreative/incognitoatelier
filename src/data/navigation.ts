export type NavLink = {
  label: string;
  href: string;
};

/* Left-hand cluster of the desktop header, before the centred monogram. */
export const primaryNavLeft: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Inside Incognito Atelier", href: "/inside-incognito-atelier" },
  { label: "Our Signature Offerings", href: "/signature-offerings" },
];

/* Right-hand cluster, after the monogram. */
export const primaryNavRight: NavLink[] = [
  { label: "Legacy Travel Portfolio", href: "/legacy-travel-portfolio" },
  { label: "Private Retreats", href: "/private-retreats" },
  { label: "The Journal", href: "/the-journal" },
];

/* Deep links revealed by the hamburger overlay. */
export const menuOverlayLinks: NavLink[] = [
  { label: "Meet Valentina", href: "/inside-incognito-atelier#valentina" },
  { label: "How we work", href: "/inside-incognito-atelier#work" },
  { label: "Our Brand Partners", href: "/inside-incognito-atelier#partners" },
  { label: "Bespoke Journeys", href: "/signature-offerings#bespoke" },
  { label: "Hotel-Only Bookings", href: "/signature-offerings#hotel" },
  { label: "Private Retreat Design", href: "/signature-offerings#private" },
  { label: "Experiences & Services", href: "/signature-offerings#experiences" },
  { label: "Resources", href: "/resources" },
];

export const footerLinks: NavLink[] = [
  { label: "Plan your Trip", href: "/contact?subject=Plan%20my%20Trip" },
  { label: "Inside Incognito Atelier", href: "/inside-incognito-atelier" },
  { label: "Signature Offerings", href: "/signature-offerings" },
  { label: "Experiences & Services", href: "/signature-offerings#experiences" },
  { label: "Legacy Travel Portfolio", href: "/legacy-travel-portfolio" },
  { label: "Private Retreats", href: "/private-retreats" },
  { label: "The Journal", href: "/the-journal" },
  { label: "Resources", href: "/resources" },
];

export const legalLinks: NavLink[] = [
  { label: "Your privacy rights", href: "#" },
  { label: "Cookie Preferences", href: "#" },
];

export const planTripHref = "/contact?subject=Plan%20a%20Trip";
