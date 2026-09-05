import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import BackgroundSlideshow from "@/components/ui/background-slideshow";
import { journeyTypes, memoriesSlideshow, velaSteps } from "@/data/inside-atelier";
import { usePageMeta } from "@/hooks/use-page-meta";

const InsideAtelier = () => {
  usePageMeta({
    title: "Inside Incognito Atelier | Philosophy, Vision & Method",
    description:
      "Inside Incognito Atelier: our philosophy, the VELA Method, our brand partners, and the founder behind the atelier.",
  });

  return (
    <Layout>
      {/* Hero */}
      <Section
        className="min-h-[630px] bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/woman-poolside.jpg)" }}
        innerWidth={800}
        innerClassName="min-h-[630px] items-center justify-center gap-5 text-center text-white"
      >
        <Reveal>
          <h1 className="font-serif text-[70px] font-normal leading-[1.2em] max-md:mt-14 max-md:text-[38px]">
            Inside Incognito Atelier
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-serif text-[22px] font-normal italic leading-[1.2em] max-md:text-[16px]">
            You've chosen the destination. We curate how you return.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="font-sans text-[15px] font-normal leading-[1.3em] max-md:text-[12px]">
            Every journey begins with a reason. We design experiences that redefine how you return
            home. Our work begins with that reason, designing experiences that transform the way you
            return home.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <ChevronDown strokeWidth={1} className="h-[26px] w-[26px]" />
        </Reveal>
      </Section>

      {/* We curate meaningful memories */}
      <Section
        className="bg-white"
        innerClassName="items-stretch justify-center gap-5 py-[66px] md:flex-row"
      >
        <div className="flex w-full flex-col justify-center gap-5 max-md:items-center md:w-[559px]">
          <Reveal>
            <h2 className="font-display text-[38px] font-light leading-[1.1em] text-foreground max-md:text-center max-md:text-[32px]">
              We don't just design itineraries. We curate meaningful memories
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-body text-foreground max-md:text-center">
              Maybe it's a long-overdue sabbatical with your children, making pasta together under
              the Tuscan sun, barefoot and laughing. Maybe it's walking hand-in-hand through the
              quiet streets of Kyoto at dawn, rediscovering each other in silence and scent. Or
              maybe it's a celebration, on a yacht in the Cyclades, clinking glasses under
              starlight, dancing to live music in a tucked-away taverna. At Incognito Atelier, we
              curate meaningful memories, a private collection of experiences that expand your sense
              of time, deepen your relationships, and bring you back to what truly matters. For many
              of our clients, that means an annual{" "}
              <Link to="/legacy-travel-portfolio" className="underline underline-offset-2">
                Legacy Travel Portfolio
              </Link>
              , designed as intentionally as their investments or art collections. Maybe it's a
              Parisian escape with old friends, champagne before noon, gallery-hopping by night, a
              reminder of who you were before life became so full. Or maybe it's solo. Just you. The
              sea. And space.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/contact?subject=Plan%20a%20Trip" className="btn-primary self-start max-md:self-center">
              Start Designing With Us
            </Link>
          </Reveal>
        </div>

        <div className="flex w-full items-center justify-center p-[50px] max-md:p-5 md:w-[561px]">
          <Reveal className="w-full">
            <div className="relative flex min-h-[648px] w-full max-w-[461px] items-end justify-end overflow-hidden p-[25px]">
              <BackgroundSlideshow images={memoriesSlideshow} />
              <img
                src="/assets/logo-horizontal-white.svg"
                alt=""
                aria-hidden="true"
                className="relative w-[80px]"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Whether you're planning… */}
      <Section
        className="bg-ink"
        style={{
          backgroundImage: "url(/assets/texture-paper.jpg)",
          backgroundSize: "21% auto",
          backgroundRepeat: "repeat",
        }}
        innerClassName="items-center gap-5 py-[65px]"
      >
        <Reveal>
          <p className="p-[10px] font-display text-[31px] font-light italic leading-[1.1em] text-white max-md:text-center max-md:text-[25px]">
            Whether you're planning...
          </p>
        </Reveal>

        <div className="flex w-full items-stretch justify-center gap-5 p-[10px] max-md:flex-col">
          {journeyTypes.map((journey, index) => (
            <Reveal key={journey.label} delay={index * 70} className="flex-1">
              <div
                className="relative flex min-h-[300px] flex-col justify-end border border-cream bg-cover bg-center p-4"
                style={{ backgroundImage: `url(${journey.image})` }}
              >
                {/* Bottom-anchored scrim so the label stays legible */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#00000000_56%,#000000_100%)]" />
                <p className="relative text-center font-sans text-[14px] font-medium leading-[1.1em] text-white max-md:text-[17px]">
                  {journey.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="p-[10px] font-display text-[31px] font-light italic leading-[1.1em] text-white max-md:text-center max-md:text-[22px]">
            We begin with intention, not destination.
          </p>
        </Reveal>
      </Section>

      {/* How We Work */}
      <Section
        id="work"
        className="min-h-[357px] bg-copper pb-5 pt-[55px]"
        innerWidth={1008}
        innerClassName="items-center justify-center gap-4 p-[10px] text-center text-white"
      >
        <Reveal>
          <h2 className="t-display-lg max-md:text-[34px]">How We Work</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="font-display text-[23px] font-light italic leading-[1.1em] max-md:text-[22px]">
            We don't ask where you want to go, we ask why you're going. We create one-of-a-kind
            journeys that bring you back to what matters.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="t-body mb-[25px] font-medium">
            Your travel shouldn't just only be beautiful; it should buy back your time, restore your
            energy, and expand your legacy.
          </p>
          <ChevronDown strokeWidth={1} className="mx-auto h-[26px] w-[26px]" />
        </Reveal>
      </Section>

      {/* The VELA Method */}
      <Section className="min-h-[357px] bg-white pb-[55px]" innerWidth={1224} innerClassName="items-center gap-5">
        <Reveal className="w-full max-w-[841px]">
          <div className="flex flex-col items-center gap-3 p-[10px] text-center">
            <img
              src="/assets/logo-monogram-copper.svg"
              alt=""
              aria-hidden="true"
              className="mb-[-15px] mt-5 w-[177px] max-md:mb-[10px] max-md:w-[145px]"
            />
            <h2 className="font-display text-[37px] font-light uppercase leading-[1.1em] text-foreground max-md:text-[34px]">
              The VELA Method
            </h2>
            <p className="t-body text-center text-foreground">
              At Incognito Atelier, travel is never random. Each experience is designed through an
              intentional framework called the VELA Method, a process that brings clarity,
              structure, and emotional intelligence to the art of luxury travel. It's how we
              transform complex itineraries into effortless, meaningful journeys that feel both
              elegant and personal.
              <br />
              <br />
              This method serves as the foundation for how we approach every project, ensuring that
              each journey reflects the unique rhythm, aspirations, and lifestyle of every client we
              serve.
            </p>
          </div>
        </Reveal>

        <div className="flex w-full items-stretch justify-center gap-5 p-[10px] max-md:flex-col">
          {velaSteps.map((step, index) => (
            <Reveal key={step.letter} delay={index * 80} className="flex-1">
              <div className="flex h-full flex-col p-[25px] max-md:items-center">
                <div className="flex items-center gap-0 max-lg:flex-col max-lg:items-start max-md:items-center">
                  <span className="font-display text-[105px] font-light uppercase leading-[1.1em] text-foreground max-lg:text-[90px] max-md:text-[95px]">
                    {step.letter}
                  </span>
                  <span className="font-display text-[24px] font-light uppercase italic leading-[1.1em] text-foreground max-lg:text-[20px] max-md:text-[27px]">
                    {step.name}
                  </span>
                </div>
                <p className="mt-5 font-body text-[13px] font-normal leading-[1.4em] tracking-[-0.2px] text-foreground max-md:text-center max-md:text-[14px]">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="flex flex-col items-center gap-4 p-[10px] text-center">
            <h3 className="t-display-lg text-[37px] text-foreground max-md:text-[34px]">
              The Result
            </h3>
            <p className="t-body font-semibold text-foreground max-md:text-[16px]">
              The VELA Method is what sets Incognito Atelier apart.
            </p>
            <p className="t-body bg-[#F5F1ED] p-[25px] font-medium text-foreground">
              It ensures that luxury travel becomes more than a series of beautiful moments; it
              becomes a story told with purpose, grace, and intention.
              <br />
              It's how we design experiences that move beyond indulgence, into the art of living
              well.
            </p>
            <Link to="/contact?subject=Plan%20a%20Trip" className="btn-primary">
              Discover What's Possible
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Our Brand Partners */}
      <Section
        id="partners"
        className="min-h-[469px] bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/couple-hotel-lounge.jpg)" }}
        innerClassName="items-stretch justify-center gap-0 pb-[65px] pt-[55px] max-lg:justify-around max-md:items-center md:flex-row"
      >
        <div className="flex items-center justify-start max-md:justify-center md:w-[342px]">
          <Reveal>
            <div className="flex flex-col items-start justify-center max-md:items-center">
              <h2 className="t-display-lg -mb-[25px] text-white max-md:-mb-[32px] max-md:text-center max-md:text-[36px]">
                Our Brand
              </h2>
              <h2 className="t-display-xl italic text-white max-md:text-center">Partners</h2>
              <p className="font-serif text-[24px] font-light italic leading-[1.1em] text-white max-lg:text-[22px] max-md:text-center max-md:text-[20px] max-md:leading-[1.3em]">
                Global alliances that elevate every journey.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-center gap-5 py-[45px] max-md:items-center max-md:px-5 md:w-[570px]">
          <Reveal delay={120}>
            <p className="t-body text-white max-md:text-center">
              At Incognito Atelier, our strength lies not only in our design philosophy but in the
              relationships we've built across the world of luxury travel.
              <br />
              <br />
              Through our affiliations with Virtuoso, Four Seasons, Rosewood, Aman, etc., we offer
              clients privileged access to the world's most exceptional hotels, villas, resorts, and
              private experiences, along with the personalized attention that comes only through
              invitation-only partnerships.
              <br />
              <br />
              These relationships allow our travelers to enjoy benefits such as complimentary
              upgrades, exclusive amenities, and VIP recognition wherever they go.
              <br />
              But beyond the privileges, they represent something deeper, a shared commitment to
              excellence, authenticity, and discretion in every journey we design.
              <br />
              <br />
              Our network extends globally, yet our service remains personal.
              <br />
              It's how we ensure that every Incognito Atelier traveler is treated not simply as a
              guest, but as part of a curated circle of global citizens who value quality,
              connection, and meaning.
            </p>
            <Link to="/#partners" className="btn-primary mt-5">
              See Our Partners
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Meet Valentina */}
      <Section
        id="valentina"
        className="bg-contain bg-right bg-no-repeat max-md:bg-bottom"
        style={{ backgroundImage: "url(/assets/logo-monogram-black.svg)" }}
        innerClassName="items-center justify-center gap-5 py-[66px] md:flex-row-reverse"
      >
        <div className="flex w-full flex-col gap-4 p-[60px] max-md:items-center max-md:p-5 md:w-[560px]">
          <Reveal>
            <h2 className="t-display-lg text-foreground max-md:text-center max-md:text-[41px]">
              Meet Valentina
            </h2>
            <p className="-mt-[10px] font-display text-[31px] font-light italic leading-[1.1em] text-foreground max-md:mt-0 max-md:text-center max-md:text-[25px]">
              Your Travel Alchemist
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="t-body text-foreground max-md:text-center">
              Valentina O'Kane founded Incognito Atelier on a simple belief: that when travel is
              designed with intention, it has the power to redefine how we live.
              <br />
              <br />
              Having explored more than sixty countries and worked with some of the world's most
              discerning travelers, she understands that true luxury isn't found in the destination,
              it's revealed in the way you feel when you return home.
              <br />
              <br />
              Her philosophy combines the precision of couture hospitality with a deep understanding
              of what modern travelers seek: connection, renewal, and meaning within experiences
              that remain effortless. Each journey she designs is a thoughtful antidote to the pace
              of modern life, crafted to restore time, presence, and inspiration.
              <br />
              <br />
              At Incognito Atelier, Valentina doesn't simply plan travel. She designs moments that
              leave space for reflection, reconnection, and genuine enjoyment, sanctuaries of calm
              for those who carry both the weight of responsibility and the privilege of choice.
            </p>
            <Link
              to="/contact?subject=Connect%20With%20Valentina"
              className="btn-primary mt-5"
            >
              Connect with Valentina
            </Link>
          </Reveal>
        </div>

        <div className="flex w-full items-center justify-center p-[50px] max-md:p-5 md:w-[560px]">
          <Reveal className="w-full">
            <img
              src="/assets/valentina-portrait.jpg"
              alt="Valentina O'Kane, founder of Incognito Atelier"
              className="w-full rounded-[5px]"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
};

export default InsideAtelier;
