import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import Overlay from "@/components/ui/overlay";
import ParallaxPhoto from "@/components/ui/parallax-photo";
import PhotoSlideshowPanel from "@/components/sections/photo-slideshow-panel";
import {
  bespokeIncludes,
  bespokeSlideshow,
  experienceCategories,
  hotelPerks,
  legacyMembership,
  legacySlideshow,
  offeringLinks,
  retreatIncludes,
  retreatSlideshow,
} from "@/data/signature-offerings";
import { usePageMeta } from "@/hooks/use-page-meta";

/* Elementor icon-lists set no spacing between rows; line-height alone separates them. */
const List = ({ items, light = false }: { items: string[]; light?: boolean }) => (
  <ul className={`e-list ${light ? "text-white" : "text-ink"}`}>
    {items.map((item) => (
      <li key={item} className="t-body">
        {item}
      </li>
    ))}
  </ul>
);

const SignatureOfferings = () => {
  usePageMeta({
    title: "Signature Travel Offerings | Bespoke Journeys & Retreats | Incognito Atelier",
    description:
      "Bespoke journeys, the Legacy Travel Portfolio, private retreat design and hotel-only bookings — the signature offerings of Incognito Atelier.",
  });

  return (
    <Layout>
      {/* Hero */}
      <Section
        className="min-h-[70vh] bg-[#5A5A5A] overflow-hidden"
        background={<ParallaxPhoto src="/assets/resort-pool-sunset.jpg" />}
        overlay={<Overlay color="#000000" opacity={0.5} />}
        innerWidth={800}
        innerClassName="min-h-[70vh] items-center justify-center gap-5 text-center text-white"
      >
        <Reveal>
          <h1 className="font-serif text-[70px] font-normal leading-[1.2em] max-md:mt-14 max-md:text-[38px]">
            Our Signature Offerings
          </h1>
        </Reveal>
        <Reveal animation="fadeInUp">
          <p className="font-serif text-[22px] font-normal italic leading-[1.2em] max-md:text-[16px]">
            Luxury travel reimagined through design, intention, and continuity.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-sans text-[15px] font-normal leading-[1.3em] max-md:text-[12px]">
            Every journey we create is personal, an expression of who you are and how you wish to
            experience the world. Through a deeply tailored process, we design travel that reflects
            your rhythm, your season of life, and your evolving definition of luxury.
          </p>
        </Reveal>
        <Reveal animation="fadeInDown">
          <ChevronDown strokeWidth={1} className="h-[26px] w-[26px]" />
        </Reveal>
      </Section>

      {/* Intent statement plus the four entry points */}
      <Section className="min-h-[357px] py-[55px]" innerWidth={864} innerClassName="items-center gap-5">
        <Reveal>
          <p className="p-[10px] text-center font-display text-[23px] font-light italic leading-[1.5em] text-ink max-md:text-[20px]">
            At Incognito Atelier, we design luxury travel with intention and precision. We build
            relationships that translate into extraordinary experiences, where every detail, seen
            and unseen, is handled with absolute discretion and care.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex max-w-[716px] flex-wrap items-center justify-center gap-[40px] p-[10px]">
            {offeringLinks.map((link, index) => (
              <Reveal key={link.href} animation="zoomIn" delay={index === 0 ? 0 : index === 1 ? 300 : 600}>
                <a href={link.href} className="btn-dark btn-lg w-[139px]">
                  {link.label}
                </a>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Cream statement */}
      <Section
        className="bg-cream px-[10px]"
        innerClassName="min-h-[154px] items-center justify-center py-[10px]"
      >
        <Reveal>
          <p className="t-serif-md text-center text-foreground">
            Because no two travelers are the same, no two journeys should ever look alike.
          </p>
        </Reveal>
      </Section>

      {/* Hotel-Only Bookings */}
      <Section
        id="hotel"
        className="min-h-[469px] bg-ink overflow-hidden"
        background={<ParallaxPhoto src="/assets/hotel-suite.jpg" />}
        overlay={
          <Overlay gradient="linear-gradient(90deg,#FFFFFF00 0%,#000000 59%)" opacity={1} />
        }
        innerClassName="items-stretch justify-center gap-0 py-[95px] md:flex-row"
      >
        <div className="flex items-center justify-start max-md:justify-center md:w-[570px]">
          <Reveal>
            <div className="flex flex-col items-start justify-center gap-5">
              <h2 className="t-display-xl italic text-white">Hotel</h2>
              <h2 className="-mt-[25px] font-display text-[45px] font-light leading-[1.1em] text-white max-md:-mt-[14px] max-md:text-center max-md:text-[32px]">
                Only-Bookings
              </h2>
              <p className="font-display text-[27px] font-light italic leading-[1.1em] text-white max-md:-mt-[14px] max-md:text-[23px]">
                Let us VIP your stay.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-center gap-5 py-[55px] pr-[55px] max-md:px-5 md:w-[570px]">
          <Reveal delay={120}>
            <p className="t-body text-white">
              Even a short escape deserves thoughtful design. Through our exclusive partnerships
              with the world's most exceptional hotels and resorts, we ensure every detail of your
              stay feels effortless and elevated.
              <br />
              <br />
              We'll take care of the details that make your stay truly special, from complimentary
              upgrades and daily breakfast to personalized amenities and VIP recognition upon
              arrival.
              <br />
              By letting us book your hotel, you'll unlock exclusive VIP perks that often include:
            </p>
          </Reveal>
          <Reveal delay={200}>
            <List items={hotelPerks} light />
          </Reveal>
          <Reveal delay={280}>
            <Link to="/contact?subject=Hotel%20Only%20Booking" className="btn-light">
              Book Your Hotel | Access Code: INCOGNITOVIP
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Legacy Travel Portfolio */}
      <Section
        id="legacy"
        className="bg-white"
        innerClassName="items-stretch justify-center gap-5 py-[66px] md:flex-row"
      >
        <div className="flex items-start w-full flex-col justify-center gap-4 max-md:items-center md:w-[559px]">
          <Reveal>
            <h2 className="font-display text-[54px] font-light leading-[1.1em] text-foreground max-md:text-[40px]">
              Legacy Travel Portfolio
            </h2>
            <p className="font-display text-[25px] font-light italic leading-[1.5em] text-ink max-md:text-[22px] max-md:leading-[1.2em]">
              Your life's story, told through travel.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-body text-foreground">
              The Legacy Travel Portfolio is a private, long-term partnership designed for clients
              who view travel as an integral part of their legacy. It's more than planning a single
              escape; it's curating a collection of journeys that evolve with you. Each destination
              adds a chapter to your story, a new layer to your personal legacy.
              <br />
              <br />
              Through this framework, we anticipate your needs, align with your lifestyle, and
              create a continuous sense of ease and excellence every time you travel.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="t-body font-semibold text-ink">Membership Includes:</p>
            <List items={legacyMembership} />
          </Reveal>
          <Reveal delay={220}>
            <p className="t-body font-semibold text-foreground">
              This is travel as legacy, crafted with continuity, meaning, and mastery.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link to="/legacy-travel-portfolio" className="btn-dark">
                Find Out More About the Legacy Portfolio
              </Link>
              <Link to="/contact?subject=Legacy%20Portfolio" className="btn-dark">
                Start My Legacy Portfolio
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <PhotoSlideshowPanel images={legacySlideshow} height={700} />
        </Reveal>
      </Section>

      {/* Experiences & Services */}
      <Section
        id="experiences"
        className="min-h-[357px] bg-[#FAF7F4] pb-[55px] pt-[65px]"
        innerWidth={1224}
        innerClassName="items-center gap-5"
      >
        <Reveal className="w-full max-w-[841px]">
          <div className="flex flex-col items-center gap-5 p-[10px]">
            <h2 className="font-display text-[46px] font-light leading-[1.1em] text-foreground max-md:text-[34px]">
              Experiences & Services
            </h2>
            <p className="font-display text-[22px] font-light italic leading-[1.5em] text-ink max-md:text-[19px]">
              A curation of exceptional travel experiences designed around your life.
            </p>
            <p className="t-body text-center text-foreground">
              Every journey is unique. Our portfolio of experiences reflects the full spectrum of
              what luxury travel can be, from intimate escapes to global celebrations, all designed
              with intention and care.
            </p>
          </div>
        </Reveal>

        <div className="grid w-full gap-5 p-[10px] md:grid-cols-2">
          {experienceCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 200}>
              <div className="flex h-full flex-col items-start gap-[15px] p-[35px] max-md:p-5">
                <img
                  src={category.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-full rounded-[5px] object-cover"
                />
                <h3 className="font-display text-[30px] font-normal leading-[1.1em] text-copper max-lg:text-[20px] max-md:text-[24px]">
                  {category.title}
                </h3>
                <p className="t-body text-foreground">{category.tagline}</p>
                <List items={category.items} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="flex flex-col items-center gap-4 p-[10px] text-center">
            <p className="t-body font-semibold text-foreground">
              Every experience begins with intention. Let's design yours.
            </p>
            <Link to="/contact?subject=Plan%20my%20Journey" className="btn-dark">
              Plan My Journey
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Bespoke Journeys */}
      <Section
        id="bespoke"
        className="bg-ink"
        innerClassName="items-stretch justify-center gap-5 py-[66px] md:flex-row-reverse"
      >
        <div className="flex items-start w-full flex-col justify-center gap-4 max-md:items-center md:w-[559px]">
          <Reveal>
            <h2 className="font-display text-[54px] font-light leading-[1.1em] text-white max-md:text-[40px]">
              Bespoke Journeys
            </h2>
            <p className="font-display text-[25px] font-light italic leading-[1.5em] text-white max-md:text-[22px] max-md:leading-[1.2em]">
              Where luxury and meaning meet.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-body text-white">
              Our Bespoke Journeys are one-of-a-kind travel designs for individuals, couples, and
              families who seek more than a destination; they seek connection, beauty, and presence.
              <br />
              <br />
              Each journey begins with intention. We take time to understand your values,
              preferences, and emotional goals before translating them into a seamless itinerary.
              <br />
              <br />
              From a quiet weekend in New York to a yacht charter in the Greek Islands, every
              element is curated with precision and depth.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="t-body font-semibold text-white">What It Includes:</p>
            <List items={bespokeIncludes} light />
          </Reveal>
          <Reveal delay={220}>
            <Link to="/contact?subject=Bespoke%20Journey" className="btn-light self-start max-md:self-center">
              Design My Bespoke Journey
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <PhotoSlideshowPanel images={bespokeSlideshow} height={700} />
        </Reveal>
      </Section>

      {/* Private Retreat Design */}
      <Section
        id="private"
        className="bg-taupe"
        innerClassName="items-stretch justify-center gap-5 py-[66px] md:flex-row-reverse"
      >
        <div className="flex items-start w-full flex-col justify-center gap-4 max-md:items-center md:w-[559px]">
          <Reveal>
            <h2 className="font-display text-[54px] font-light leading-[1.1em] text-white max-md:text-[40px]">
              Private Retreat Design
            </h2>
            <p className="font-display text-[25px] font-light italic leading-[1.5em] text-white max-md:text-[22px] max-md:leading-[1.2em]">
              For those who gather with purpose.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-body text-white">
              At Incognito Atelier, we curate retreats and incentive journeys that blend luxury,
              intention, and connection. Designed for founders, leaders, families, and visionaries,
              these experiences go beyond logistics, creating spaces where people feel renewed,
              inspired, and deeply connected.
              <br />
              <br />
              Whether it's a leadership immersion, a corporate recognition journey, or a private
              family celebration, every gathering is crafted with the precision of a couture
              production and the discretion of a private concierge. Each detail, from destination to
              atmosphere, is thoughtfully aligned with your purpose and the emotional tone you want
              to evoke.
              <br />
              <br />
              Our retreats and incentive experiences are not events. They are human-centered moments
              of reflection, creativity, and shared joy, designed to strengthen relationships,
              inspire clarity, and leave a lasting impression long after guests return home.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="t-body font-semibold text-white">What It Includes:</p>
            <List items={retreatIncludes} light />
          </Reveal>
          <Reveal delay={220}>
            <p className="t-body font-semibold text-white">
              Guests don't just attend. They exhale. They connect. They remember.
            </p>
            <Link to="/contact?subject=Private%20Retreat" className="btn-light mt-3">
              Start Planning Your Retreat
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <PhotoSlideshowPanel images={retreatSlideshow} height={690} />
        </Reveal>
      </Section>

      {/* Closing */}
      <Section
        className="min-h-[357px] bg-white pb-[55px] pt-[65px]"
        innerWidth={764}
        innerClassName="items-center gap-4 p-[10px] text-center"
      >
        <Reveal>
          <h2 className="font-display text-[35px] font-light italic leading-[1.5em] text-ink max-md:text-[25px]">
            Different ways. One philosophy.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="t-body text-center text-foreground">
            Whichever path you choose, every experience is guided by the VELA Method, our signature
            framework for intentional travel design.
            <br />
            <br />
            Travel is more than motion.
            <br />
            It's the mirror of your life's evolution.
            <br />
            At Incognito Atelier, we design it with the same care and consciousness you give to
            everything else you love.
          </p>
          <Link to="/contact?subject=Plan%20a%20Trip" className="btn-dark mt-5">
            Let's Begin
          </Link>
        </Reveal>
      </Section>
    </Layout>
  );
};

export default SignatureOfferings;
