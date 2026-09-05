import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import VimeoBackground from "@/components/ui/vimeo-background";
import WordRotator from "@/components/ui/word-rotator";
import TestimonialCarousel from "@/components/sections/testimonial-carousel";
import HexagonGallery from "@/components/sections/hexagon-gallery";
import { clientProfiles, closingWords, cravings, partnerLogos, pillars } from "@/data/home";
import { usePageMeta } from "@/hooks/use-page-meta";

/* Bulleted lists render in taupe at body size, matching the Elementor icon-list. */
const IconList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-2">
    {items.map((item) => (
      <li key={item} className="t-body text-taupe">
        {item}
      </li>
    ))}
  </ul>
);

/*
  The photo columns on this page are containers with a background image and a
  fixed min-height, not plain <img> tags — so they crop the same way.
*/
const PhotoPanel = ({ src, height }: { src: string; height: number }) => (
  <div className="flex w-full items-center justify-center p-[50px] max-md:p-5 md:w-[560px]">
    <div
      className="flex w-full max-w-[460px] items-end justify-end bg-cover bg-center p-[25px]"
      style={{ backgroundImage: `url(${src})`, minHeight: height }}
    >
      <img src="/assets/logo-horizontal-white.svg" alt="" aria-hidden="true" className="w-[80px]" />
    </div>
  </div>
);

const Index = () => {
  usePageMeta({
    title: "Incognito Atelier | Bespoke Luxury Travel & Private Experiences",
    description:
      "Incognito Atelier designs bespoke luxury travel, private retreats, and legacy journeys for discerning clients seeking intention, discretion, and exceptional experiences worldwide.",
  });

  return (
    <Layout>
      {/* Hero — 765px band, Vimeo background, 900px centred stack */}
      <Section
        className="flex min-h-[765px] items-center overflow-hidden bg-black px-[10px]"
        innerWidth={900}
        innerClassName="relative items-center justify-center gap-5 py-[10px] text-center text-white"
      >
        <VimeoBackground videoId="1145039689" poster="/assets/poster-home-hero.jpg" />

        <Reveal>
          <h1 className="t-display-xl mt-[35px] max-md:mt-20">
            Luxury travel,
            <br />
            designed with meaning
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-serif-lg">Where every journey becomes legacy.</p>
        </Reveal>
        <Reveal delay={240}>
          <p className="t-body-lg">
            We craft bespoke getaways, meaningful journeys, and restorative escapes with the
            precision of couture, experiences that protect time, restore balance, and create
            legacies.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <a href="#begin" className="btn-cream">
            Let's Begin
          </a>
        </Reveal>
      </Section>

      {/* The Art of Travel Design — two 440px columns inside a 900px box */}
      <Section
        id="begin"
        className="bg-white"
        innerWidth={900}
        innerClassName="min-h-[346px] justify-center gap-5 py-[10px] md:flex-row"
      >
        <div className="flex w-full flex-col items-start justify-center gap-5 p-[10px] max-md:items-center md:w-[440px]">
          <Reveal>
            <h2 className="t-display-xl italic text-foreground max-md:text-center">The Art</h2>
            <h2 className="t-display-lg -mt-[25px] text-foreground max-md:-mt-[23px] max-md:text-center">
              of Travel Design
            </h2>
          </Reveal>
        </div>

        <div className="flex w-full flex-col items-start justify-center p-[10px] md:w-[440px]">
          <Reveal delay={120}>
            <p className="t-body text-foreground max-md:text-center">
              We are Incognito Atelier, the discreet luxury travel atelier trusted by
              ultra-high-net-worth families, founders, and visionaries.
              <br />
              <br />
              Our work is not traditional travel planning. It is a refined travel design that
              protects your most valuable asset, time.
              <br />
              <br />
              We design journeys that are seamless in execution, balanced in pacing, tailored in
              detail and memorable by design.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Cream statement band */}
      <Section
        className="bg-cream px-[10px]"
        innerClassName="min-h-[154px] items-center justify-center py-[10px]"
      >
        <Reveal>
          <p className="t-serif-md text-center text-foreground">
            Because true luxury is not about where you go, it's about how you feel when you return.
          </p>
        </Reveal>
      </Section>

      {/* Designed for a Different Kind of Luxury — copy right, photo left */}
      <Section
        className="bg-white bg-contain bg-right bg-no-repeat max-md:bg-bottom"
        style={{ backgroundImage: "url(/assets/logo-monogram-black.svg)" }}
        innerClassName="items-center justify-center gap-5 py-[66px] md:flex-row-reverse"
      >
        <div className="flex w-full flex-col gap-5 p-[60px] max-md:items-center max-md:p-5 md:w-[560px]">
          <Reveal>
            <h2 className="t-display-lg text-foreground max-md:text-center">
              Designed for a Different Kind of Luxury
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="t-body text-foreground max-md:text-center">
              In a World That Moves Fast, We Curate the Opposite.
              <br />
              Your life moves fast. Your schedule is full. Your roles carry weight. And yet, what
              you crave is simple:
            </p>
          </Reveal>
          <Reveal delay={160}>
            <IconList items={cravings} />
          </Reveal>
          <Reveal delay={240}>
            <p className="t-body font-medium text-foreground max-md:text-center">
              We create journeys that meet you where you are, and guide you gently back to where you
              want to be.
            </p>
            <Link to="/contact?subject=Plan%20my%20Journey" className="btn-primary mt-5">
              Start Designing With Us
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <PhotoPanel src="/assets/woman-sea-view.jpg" height={600} />
        </Reveal>
      </Section>

      {/* Airplane band */}
      <Section
        className="min-h-[221px] overflow-hidden bg-black px-[10px]"
        innerWidth={1000}
        innerClassName="relative min-h-[221px] items-center justify-center gap-5 py-[10px] text-center text-white"
      >
        <img
          src="/assets/airplane-sunset.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="lazy"
        />
        <Reveal>
          <p className="t-serif-caps">Every itinerary is designed to renew, delight, and restore.</p>
          <p className="t-serif-sm -mt-[13px] max-md:-mt-[10px]">
            True luxury is not more travel, it is the right travel, designed to honor your time,
            your energy, and your legacy.
          </p>
        </Reveal>
      </Section>

      {/* Five pillars */}
      <Section className="bg-white" innerClassName="items-center gap-5 py-[55px]">
        <Reveal className="w-full">
          <div className="flex w-full flex-col items-center justify-center gap-5 p-[10px]">
            <h2 className="t-display-lg text-foreground max-md:text-center">
              What we do Differently
            </h2>
            <p className="t-body text-center text-foreground">
              <span className="font-medium">We Don't Sell Trips. We Curate Legacies.</span>
              <br />
              Each journey is built through five pillars of design:
            </p>
          </div>
        </Reveal>

        <div className="flex w-full items-stretch justify-center gap-5 p-[10px] max-lg:gap-[5px] max-md:flex-col max-md:gap-[25px]">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 200} className="flex-1">
              <div className="flex h-full flex-col items-center gap-5 p-[25px]">
                <h3 className="t-display-sm w-full text-left text-foreground max-md:text-center">
                  {pillar.title}
                </h3>
                <hr className="pillar-divider mr-auto max-md:mx-auto" />
                <p className="t-body-sm w-full text-left text-foreground max-md:text-center">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="flex items-center justify-center p-[10px]">
            <Link to="/contact?subject=Request%20a%20Private%20Consultation" className="btn-primary">
              Request a Private Consultation
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* The Experience — video band, 684px panel pinned right */}
      <Section
        className="min-h-[524px] overflow-hidden px-[10px]"
        innerClassName="relative min-h-[524px] items-end py-[10px]"
      >
        <VimeoBackground videoId="1145411284" poster="/assets/poster-home-experience.jpg" />
        <div className="absolute inset-0 bg-black/[0.48]" />

        <div className="relative flex w-full flex-col gap-5 bg-transparent p-[60px] text-white max-md:items-center max-md:p-8 md:w-[684px]">
          <Reveal>
            <h2 className="t-display-lg max-md:text-center">The Experience</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-body max-md:text-center">
              Travel that becomes enduring memories. This is not the joy of display, but of being.
              <br />
              <br />
              It's your son's bare feet in the terracotta dust of a Tuscan courtyard.
              <br />
              The sound of your daughter's laughter echoes off the vineyard walls.
              <br />
              A toast in Santorini, a spice-laced breeze in Marrakech, silence in Kyoto at dawn.
              <br />
              <br />
              Whether you travel for depth, delight, or rediscovery, we compose more than
              itineraries. We compose memories with meaning and magnetism.
              <br />
              Because joy, when it's embodied, not just documented, becomes lasting memories.
              <br />
              <br />
              We design beyond logistics. Itineraries become experiences that stay with you, long
              after you return. This is travel that feels considered, human, and lasting.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/contact?subject=Plan%20my%20Journey" className="btn-primary self-start">
              Tell Us What You Envision
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Who we design for */}
      <Section
        className="bg-white"
        innerClassName="items-center justify-center gap-5 py-[66px] md:flex-row"
      >
        <div className="flex w-full flex-col gap-5 p-[60px] max-md:items-center max-md:p-5 md:w-[560px]">
          <Reveal>
            <h2 className="font-display text-[38px] font-light leading-[1.1em] text-foreground max-md:text-center max-md:text-[32px]">
              Designed for those who understand that true luxury is found in time, presence, and
              connection.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="t-body text-foreground max-md:text-center">
              Designed for the Few Who Understand That Luxury Grounds You.
              <br />
              Our clients are:
            </p>
          </Reveal>
          <Reveal delay={160}>
            <IconList items={clientProfiles} />
          </Reveal>
          <Reveal delay={240}>
            <p className="t-body font-medium text-foreground max-md:text-center">
              They come to us not for vacations, but for space, clarity, connection, and joy that
              returns with them.
            </p>
            <Link to="/contact?subject=Plan%20my%20Journey" className="btn-primary mt-5">
              Discover What's Possible
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <PhotoPanel src="/assets/landscape-panorama.jpg" height={648} />
        </Reveal>
      </Section>

      {/* Legacy Travel Portfolio — plated table photograph anchored right */}
      <Section
        className="min-h-[469px] bg-ink bg-contain bg-right bg-no-repeat max-md:bg-cover"
        style={{ backgroundImage: "url(/assets/contact-table-setting.jpg)" }}
        innerClassName="min-h-[469px] items-stretch justify-start gap-0 pb-[65px] pt-[55px] max-lg:justify-around max-md:items-center md:flex-row"
      >
        <div className="flex items-center justify-start max-md:justify-center md:w-[342px]">
          <Reveal>
            <div className="flex flex-col items-start justify-center max-md:items-center">
              <h2 className="t-display-xl italic text-white max-md:text-center">Legacy</h2>
              <h2 className="t-display-lg -mt-[25px] text-white max-md:-mt-[14px] max-md:text-center">
                Travel Portfolio
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-center gap-5 py-[45px] pr-[45px] max-md:items-center max-md:px-5 md:w-[570px]">
          <Reveal delay={120}>
            <p className="t-body text-white max-md:text-center">
              A private, long-term partnership for discerning travelers who see every journey as
              part of a greater story, their own.
              <br />
              <br />
              This exclusive service curates travel as a living legacy, designed with continuity,
              intention, and personal evolution in mind.
              <br />
              <br />
              Each journey becomes a reflection of who you are and who you're becoming.
            </p>
            <Link to="/legacy-travel-portfolio" className="btn-primary mt-5">
              Explore the Legacy Portfolio
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Global network */}
      <Section
        id="partners"
        className="min-h-[357px] bg-cream py-[55px]"
        innerWidth={864}
        innerClassName="items-center justify-center gap-5 p-[10px]"
      >
        <Reveal>
          <h2 className="t-display-lg text-center text-foreground max-md:text-[34px]">
            Our Global Network
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="text-center font-display text-[23px] font-light italic leading-[1.1em] text-foreground max-md:text-[22px]">
            Our partnerships are built on trust, excellence, and access.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-body text-center text-foreground">
            <span className="font-medium">
              Through our affiliation with Virtuoso and direct relationships with the world's
              leading luxury hospitality brands, Incognito Atelier clients receive exclusive
              recognition and benefits that go beyond traditional bookings.
            </span>
            <br />
            These alliances allow us to deliver experiences that are as seamless as they are
            extraordinary, designed for those who expect nothing less than the exceptional.
          </p>
        </Reveal>

        <Reveal delay={180} className="w-full">
          <div className="mx-auto w-full max-w-[700px] p-[10px]">
            <HexagonGallery images={partnerLogos} />
          </div>
        </Reveal>
      </Section>

      {/* Testimonials intro — 567px panel pinned right */}
      <Section
        className="min-h-[566px] overflow-hidden bg-black px-[10px]"
        innerWidth={810}
        innerClassName="relative min-h-[566px] items-end justify-center py-[10px]"
      >
        <img
          src="/assets/woman-sea-view.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-[566px] w-screen left-1/2 -translate-x-1/2 max-w-none object-cover"
          loading="lazy"
        />
        <div className="flex w-full flex-col items-start justify-center gap-5 p-[10px] text-white max-md:items-center md:w-[567px]">
          <Reveal>
            <h2 className="t-display-lg max-md:text-center">Every journey leaves an impression</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-body max-md:text-center">
              Here, our travelers share how intentional design transformed their experience, moments
              that became more than memories, and travels that continue to shape how they live and
              connect.
            </p>
            <p className="t-body mt-4 font-medium max-md:text-center">
              These reflections are not about destinations, but about what remains long after the
              return. Presence. Joy. Meaning.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* In Their Words */}
      <Section className="bg-white" innerClassName="items-center gap-5 pt-[55px]">
        <Reveal className="w-full">
          <div className="flex flex-col items-center gap-3 p-[10px] text-center">
            <h2 className="t-display-lg text-foreground max-md:text-[37px]">In Their Words</h2>
            <p className="t-body text-center text-foreground">
              Each journey leaves an imprint. These voices offer a glimpse into the experiences,
              care, and intention our clients felt throughout every step of the way.
            </p>
          </div>
        </Reveal>

        <div className="w-full max-w-[816px] p-[10px]">
          <TestimonialCarousel />
        </div>
      </Section>

      {/* Closing statement — content pinned to the bottom of an 833px band */}
      <Section
        className="min-h-[833px] items-end overflow-hidden bg-white py-[55px]"
        innerWidth={864}
        innerClassName="relative min-h-[723px] items-center justify-end gap-5 p-[10px] text-center"
      >
        <img
          src="/assets/landscape-panorama.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 left-1/2 h-full w-screen max-w-none -translate-x-1/2 object-cover"
          loading="lazy"
        />
        {/* White fade across the top quarter, as in the Elementor gradient overlay */}
        <div className="absolute inset-0 -z-10 left-1/2 w-screen max-w-none -translate-x-1/2 bg-[linear-gradient(180deg,#FFFFFF_11%,#FFFFFF00_26%)]" />

        <Reveal>
          <h2 className="px-[10px] py-[10px] font-display text-[44px] font-normal italic leading-[1.1em] text-[#333] max-md:text-[35px]">
            This is travel, <WordRotator words={closingWords} />
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-body max-w-[335px] text-center text-white">
            We don't just plan your travel.
            <br />
            We elevate your journey into something timeless.
            <br />
            You arrive as you are.
            <br />
            You return more of yourself.
          </p>
          <Link
            to="/contact?subject=Request%20a%20Private%20Consultation"
            className="btn-primary mt-5"
          >
            Request a Private Consultation
          </Link>
        </Reveal>
      </Section>
    </Layout>
  );
};

export default Index;
