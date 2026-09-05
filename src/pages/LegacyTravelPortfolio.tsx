import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import Overlay from "@/components/ui/overlay";
import ParallaxPhoto from "@/components/ui/parallax-photo";
import VimeoBackground from "@/components/ui/vimeo-background";
import PhotoSlideshowPanel from "@/components/sections/photo-slideshow-panel";
import { usePageMeta } from "@/hooks/use-page-meta";

const legacySlideshow = [3, 6, 1, 5, 2, 4].map(
  (n) => `/assets/legacy-travel-portfolio-slide-${String(n).padStart(2, "0")}.jpg`
);

const processSteps = [
  {
    number: "1",
    title: "The Foundation",
    body: "We begin with a comprehensive consultation to understand your travel patterns, preferences, and emotional goals. Together, we create a framework that aligns with your lifestyle, family milestones, and annual rhythm.",
  },
  {
    number: "2",
    title: "The Design",
    body: "Each journey is then designed as part of your overall portfolio, ensuring consistency in tone, quality, and experience. Whether it's an immersive adventure, a romantic escape, or a restorative break, it becomes part of your ongoing narrative.",
  },
  {
    number: "3",
    title: "The Continuity",
    body: "As your portfolio grows, so does the understanding of your world. Over time, this partnership allows for an effortless flow, every destination pre-considered, every detail handled with precision and discretion.",
  },
];

const highlights = [
  "Annual curation of your travel calendar and experiences",
  "Ongoing strategic management of all bookings and logistics",
  "Access to our global network of partners",
  "Preferred upgrades, amenities, and insider experiences",
  "Annual review and refinement of your evolving travel profile",
  "Full confidentiality and white-glove service at every stage",
];

const idealFor = [
  "Travel several times a year for both personal and professional reasons",
  "Seek a trusted partner who knows their world intimately",
  "Value discretion, refinement, and long-term alignment",
  "Prefer travel that feels effortless, meaningful, and impeccably managed",
];

const LegacyTravelPortfolio = () => {
  usePageMeta({
    title: "Legacy Travel Portfolio | Incognito Atelier",
    description:
      "A private, long-term travel partnership for those who see every journey as part of a greater story.",
  });

  return (
    <Layout>
      {/* Hero */}
      <Section
        className="min-h-[70vh] bg-[#5A5A5A] overflow-hidden"
        background={<ParallaxPhoto src="/assets/legacy-portfolio.jpg" />}
        overlay={<Overlay color="#000000" opacity={0.31} />}
        innerWidth={800}
        innerClassName="min-h-[70vh] items-center justify-center gap-5 text-center text-white"
      >
        <Reveal>
          <h1 className="font-serif text-[70px] font-normal leading-[1.2em] max-md:mt-14 max-md:text-[40px]">
            Legacy Travel Portfolio
          </h1>
        </Reveal>
        <Reveal animation="fadeInUp">
          <p className="font-serif text-[22px] font-normal italic leading-[1.2em] max-md:text-[16px]">
            Luxury travel designed to evolve with you.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-sans text-[15px] font-normal leading-[1.3em] max-md:text-[12px]">
            The Legacy Travel Portfolio is a private, long-term partnership for discerning travelers
            who see every journey as part of a greater story, their own. This is not a single trip.
            It is a curated framework that grows with you, aligning each experience with your values
            and your season of life.
          </p>
        </Reveal>
        <Reveal animation="fadeInDown">
          <ChevronDown strokeWidth={1} className="h-[26px] w-[26px]" />
        </Reveal>
      </Section>

      {/* The Legacy Portfolio Blueprint */}
      <Section className="bg-ink" innerClassName="gap-5 pb-[65px] pt-[45px]">
        <Reveal>
          <div className="flex flex-col items-center gap-5 px-[45px] pt-[45px] max-md:px-5">
            <h2 className="-mt-[25px] font-display text-[48px] font-light leading-[1.1em] text-white max-md:-mt-[14px] max-md:text-[31px]">
              The Legacy Portfolio
            </h2>
            <p className="-mt-[17px] font-display text-[57px] font-light italic leading-[1.1em] text-white max-md:text-[38px]">
              Blueprint
            </p>
            <p className="text-center font-body text-[19px] font-semibold leading-[1.4em] text-white">
              Designing journeys that build a lasting signature.
            </p>
            <p className="t-body text-center text-white">
              Every Incognito Atelier client has a story that deserves to live beyond a single
              journey. The Legacy Portfolio was created to serve those who travel not only for
              pleasure, but with purpose, individuals and families who see travel as an ongoing
              expression of their values, milestones, and evolution.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="w-full">
          <div className="flex w-full justify-between gap-5 px-[35px] py-[10px] max-md:flex-col max-md:px-[10px]">
            <p className="t-body w-[309px] shrink-0 text-center text-white max-md:w-auto">
              Through our Blueprint Process, we develop a personalized portfolio that maps your
              travel identity across destinations, experiences, and aspirations. It's a living
              document that evolves with you, capturing the essence of where you've been, what
              you've loved, and where you're heading next.
            </p>
            <p className="t-body w-[309px] shrink-0 text-center text-white max-md:w-auto">
              This framework allows us to design future experiences with even greater precision and
              emotional resonance. Each itinerary becomes a continuation of your legacy, consistent
              in tone, elevated in quality, and deeply personal.
            </p>
            <p className="t-body w-[309px] shrink-0 text-center text-white max-md:w-auto">
              For our long-term clients, this portfolio also integrates exclusive access to our
              global network of partners, bespoke recommendations, and annual strategy consultations
              for upcoming travel seasons. Luxury becomes effortless when your journey is not
              planned from scratch, but curated from a blueprint built around you.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* The Philosophy */}
      <Section innerClassName="justify-center gap-5 pb-[85px] pt-[65px]">
        <Reveal>
          <div className="flex flex-col items-center gap-5">
            <h2 className="font-display text-[37px] font-light uppercase leading-[1.1em] text-foreground max-md:text-[34px]">
              The Philosophy
            </h2>
            <p className="font-display text-[22px] font-light italic leading-[1.5em] text-ink max-md:text-[19px]">
              Where journeys become legacy.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="w-full">
          <div className="flex justify-between gap-5 p-[10px] max-md:flex-col">
            <p className="t-body max-w-[412px] text-right text-foreground max-md:max-w-none max-md:text-center">
              We believe travel is more than a moment; it's a mirror of who you are and what you
              value most. The Legacy Travel Portfolio was created to honor that
              philosophy—transforming travel from a series of trips into a curated collection of
              meaningful experiences that tell the story of your life.
            </p>
            <p className="t-body max-w-[412px] text-foreground max-md:max-w-none max-md:text-center">
              This partnership allows us to curate, manage, and evolve your travel year after year
              with the precision of an art collection. Each journey is a new acquisition,
              thoughtfully chosen, intentionally designed, and seamlessly integrated into your
              lifestyle.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Video statement */}
      <Section
        className="min-h-[325px] overflow-hidden bg-black px-[10px]"
        background={<VimeoBackground videoId="1146249188" poster="/assets/poster-legacy-hero.jpg" />}
        overlay={<Overlay color="#000000" opacity={0.5} />}
        innerClassName="min-h-[325px] items-center justify-center py-[10px]"
      >
        <Reveal>
          <p className="relative max-w-[831px] text-center font-serif text-[30px] font-light italic leading-[1.3em] text-white max-lg:text-[22px] max-md:text-[19px]">
            Your legacy isn't built in a single journey.
            <br />
            It's shaped over time, one meaningful experience at a time.
          </p>
        </Reveal>
      </Section>

      {/* The Legacy Process */}
      <Section
        className="min-h-[357px] bg-[#FAF7F4] pb-[55px] pt-[65px]"
        innerWidth={1224}
        innerClassName="items-center gap-5"
      >
        <Reveal className="w-full max-w-[841px]">
          <div className="flex flex-col items-center p-[10px]">
            <h2 className="font-display text-[46px] font-light leading-[1.1em] text-foreground max-md:text-[40px]">
              How It Works
            </h2>
            <p className="font-display text-[22px] font-light italic leading-[1.5em] text-ink max-md:text-[21px]">
              The Legacy Process
            </p>
            <p className="t-body mt-5 text-center text-foreground">
              Our process is designed to build a continuous relationship with your travel life,
              anticipating needs, preferences, and aspirations long before they arise.
            </p>
          </div>
        </Reveal>

        <div className="flex w-full items-stretch justify-center gap-5 p-[10px] max-md:flex-col">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={200 + index * 200} className="flex-1">
              <div className="flex h-full flex-col p-[25px] max-md:items-center">
                <span className="-mt-[44px] font-display text-[119px] font-light italic leading-[1.1em] text-copper max-lg:-mt-[34px] max-lg:text-[80px] max-md:text-[70px]">
                  {step.number}
                </span>
                <h3 className="font-display text-[31px] font-normal leading-[1.1em] text-copper max-lg:text-[24px] max-md:text-center max-md:text-[27px]">
                  {step.title}
                </h3>
                <p className="t-body mt-5 text-foreground max-md:text-center">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="flex items-center justify-center p-[10px]">
            <Link to="/contact?subject=Legacy%20Portfolio" className="btn-dark">
              Let's Begin Your Legacy Portfolio
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* The Benefits */}
      <Section
        className="bg-white"
        innerClassName="items-stretch justify-center gap-5 py-[66px] md:flex-row"
      >
        <div className="flex items-start w-full flex-col justify-center gap-4 pl-[35px] max-md:items-center max-md:px-5 md:w-[559px]">
          <Reveal className="flex flex-col items-start gap-5">
            <h2 className="font-display text-[54px] font-light leading-[1.1em] text-foreground max-md:text-[40px]">
              The Benefits
            </h2>
            <p className="font-display text-[25px] font-light italic leading-[1.5em] text-ink max-md:-mt-[9px] max-md:text-[22px]">
              What the Portfolio Includes
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col items-start gap-5">
            <p className="t-body text-foreground">
              Membership in the Legacy Travel Portfolio provides exclusive access to our most
              personalized services, designed to save you time, simplify your planning, and elevate
              every experience.
            </p>
          </Reveal>
          <Reveal delay={160} className="flex flex-col items-start gap-5">
            <p className="t-body font-semibold text-ink">Highlights:</p>
            <ul className="e-list">
              {highlights.map((item) => (
                <li key={item} className="t-body text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={220}>
            <p className="t-body font-semibold text-foreground">
              This is your private atelier for travel, where we handle every detail so you can focus
              on what truly matters: presence, connection, and meaning.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <PhotoSlideshowPanel images={legacySlideshow} height={675} />
        </Reveal>
      </Section>

      {/* The Vision Behind It */}
      <Section
        className="min-h-[469px] bg-ink"
        innerClassName="min-h-[469px] items-stretch justify-start gap-0 pb-[65px] pt-[55px] max-md:items-center md:flex-row"
      >
        <div className="flex items-center justify-start max-md:justify-center md:w-[342px]">
          <Reveal>
            <div className="flex flex-col items-start justify-center gap-5 max-md:items-center">
              <h2 className="font-display text-[63px] font-light italic leading-[1.1em] text-white max-lg:text-[46px] max-md:text-center max-md:text-[48px]">
                The Vision
              </h2>
              <h2 className="-mt-[22px] font-display text-[48px] font-light leading-[1.1em] text-white max-lg:text-[45px] max-md:-mt-[17px] max-md:text-center max-md:text-[32px]">
                Behind It
              </h2>
              <p className="font-display text-[24px] font-light italic leading-[1.1em] text-white max-lg:text-[21px] max-md:text-center max-md:text-[20px]">
                An evolution in how luxury travel is experienced.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 py-[45px] pr-[45px] max-md:items-center max-md:px-5 md:w-[570px]">
          <Reveal delay={120}>
            <p className="font-body text-[17px] font-semibold leading-[1.4em] tracking-[-0.2px] text-white max-md:text-center max-md:text-[16px]">
              Each year becomes an intentional composition, experiences chosen not just for where
              they take you, but for how they bring you back.
            </p>
            <p className="t-body mt-4 text-white max-md:text-center">
              The Legacy Travel Portfolio was designed for those who view travel not as consumption,
              but as creation. It honors a lifetime of movement, curiosity, and refinement, the
              collection of moments that shape your personal heritage.
              <br />
              <br />
              It's luxury with continuity, depth, and story.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Ideal for */}
      <Section
        className="min-h-[357px] bg-white pb-[55px] pt-[65px]"
        innerWidth={841}
        innerClassName="items-center gap-4 p-[10px]"
      >
        <Reveal>
          <p className="font-display text-[27px] font-light italic leading-[1.5em] text-ink max-md:text-[22px]">
            The Legacy Travel Portfolio is ideal for clients who:
          </p>
          <ul className="mt-4 flex flex-col">
            {idealFor.map((item) => (
              <li key={item} className="t-body text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="t-body mt-4 text-center font-semibold text-foreground">
            This is for those who no longer want to plan; they want to be known.
          </p>
          <div className="mt-5 flex justify-center">
            <Link to="/contact?subject=Legacy%20Portfolio" className="btn-dark">
              Let's Begin Your Legacy Portfolio
            </Link>
          </div>
        </Reveal>
      </Section>
    </Layout>
  );
};

export default LegacyTravelPortfolio;
