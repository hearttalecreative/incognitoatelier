import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/ui/reveal";
import VimeoBackground from "@/components/ui/vimeo-background";
import WordRotator from "@/components/ui/word-rotator";
import TestimonialCarousel from "@/components/sections/testimonial-carousel";
import { clientProfiles, closingWords, cravings, partnerLogos, pillars } from "@/data/home";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta({
    title: "Incognito Atelier | Bespoke Luxury Travel & Private Experiences",
    description:
      "Incognito Atelier designs bespoke luxury travel, private retreats, and legacy journeys for discerning clients seeking intention, discretion, and exceptional experiences worldwide.",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[765px] items-center justify-center overflow-hidden">
        <VimeoBackground videoId="1145039689" poster="/assets/poster-home-hero.jpg" />
        <div className="absolute inset-0 bg-ink/30" />

        <div className="relative mx-auto w-[95%] max-w-[900px] pt-[120px] text-center text-white">
          <Reveal>
            <h1 className="font-display text-[44px] font-light leading-[1.1] md:text-[77px]">
              Luxury travel,
              <br />
              designed with meaning
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 font-serif text-2xl font-light md:text-[35px]">
              Where every journey becomes legacy.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed">
              We craft bespoke getaways, meaningful journeys, and restorative escapes with the
              precision of couture, experiences that protect time, restore balance, and create
              legacies.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <a href="#begin" className="btn-atelier-light mt-10">
              Let's Begin
            </a>
          </Reveal>
        </div>
      </section>

      {/* The Art of Travel Design */}
      <section id="begin" className="bg-white section-padding">
        <div className="mx-auto grid w-[95%] max-w-[1140px] gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight text-ink md:text-5xl">
              The Art
              <br />
              of Travel Design
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-body text-lg leading-relaxed text-foreground">
              We are Incognito Atelier, the discreet luxury travel atelier trusted by
              ultra-high-net-worth families, founders, and visionaries. Our work is not traditional
              travel planning. It is a refined travel design that protects your most valuable asset,
              time. We design journeys that are seamless in execution, balanced in pacing, tailored
              in detail and memorable by design.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cream statement band */}
      <section className="bg-cream py-14">
        <div className="mx-auto w-[95%] max-w-[900px] text-center">
          <Reveal>
            <p className="font-serif text-xl font-light leading-relaxed text-ink md:text-2xl">
              Because true luxury is not about where you go, it's about how you feel when you
              return.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Designed for a Different Kind of Luxury */}
      <section className="bg-white section-padding">
        <div className="mx-auto grid w-[95%] max-w-[1140px] items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <img
              src="/assets/woman-sea-view.jpg"
              alt="A traveller taking in a coastal view"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-tight text-ink md:text-5xl">
                Designed for a Different Kind of Luxury
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 font-body text-lg leading-relaxed text-foreground">
                In a World That Moves Fast, We Curate the Opposite. Your life moves fast. Your
                schedule is full. Your roles carry weight.
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-foreground">
                And yet, what you crave is simple:
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-6 space-y-3">
                {cravings.map((item) => (
                  <li
                    key={item}
                    className="border-b border-taupe/25 pb-3 font-serif text-lg font-light text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 font-body text-lg leading-relaxed text-foreground">
                We create journeys that meet you where you are, and guide you gently back to where
                you want to be.
              </p>
              <Link
                to="/contact?subject=Plan%20my%20Journey"
                className="btn-atelier-dark mt-8"
              >
                Start Designing With Us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Parallax statement over the airplane photograph */}
      <section className="relative flex min-h-[221px] items-center justify-center overflow-hidden bg-ink py-16">
        <img
          src="/assets/airplane-sunset.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="relative mx-auto w-[95%] max-w-[900px] text-center text-white">
          <Reveal>
            <p className="font-serif text-xl font-light md:text-2xl">
              Every itinerary is designed to renew, delight, and restore.
            </p>
            <p className="mt-4 font-body text-base text-white/80">
              True luxury is not more travel, it is the right travel, designed to honor your time,
              your energy, and your legacy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Five pillars */}
      <section className="bg-white section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <Reveal>
            <p className="eyebrow">What we do Differently</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight text-ink md:text-5xl">
              We Don't Sell Trips. We Curate Legacies.
            </h2>
            <p className="mt-5 font-body text-lg text-foreground">
              Each journey is built through five pillars of design:
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80}>
                <div className="border-t border-taupe/30 pt-5">
                  <h3 className="font-serif text-xl font-light text-ink">{pillar.title}</h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-foreground">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <Link to="/contact?subject=Request%20a%20Private%20Consultation" className="btn-atelier-dark mt-12">
              Request a Private Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Experience — video band */}
      <section className="relative flex min-h-[524px] items-center overflow-hidden">
        <VimeoBackground videoId="1145411284" poster="/assets/poster-home-experience.jpg" />
        <div className="absolute inset-0 bg-ink/50" />

        <div className="relative mx-auto w-[95%] max-w-[900px] py-20 text-center text-white">
          <Reveal>
            <p className="eyebrow text-white/70">The Experience</p>
            <p className="mt-6 font-body text-lg leading-relaxed">
              Travel that becomes enduring memories. This is not the joy of display, but of being.
              It's your son's bare feet in the terracotta dust of a Tuscan courtyard. The sound of
              your daughter's laughter echoes off the vineyard walls. A toast in Santorini, a
              spice-laced breeze in Marrakech, silence in Kyoto at dawn. Whether you travel for
              depth, delight, or rediscovery, we compose more than itineraries. We compose memories
              with meaning and magnetism. Because joy, when it's embodied, not just documented,
              becomes lasting memories. We design beyond logistics. Itineraries become experiences
              that stay with you, long after you return. This is travel that feels considered,
              human, and lasting.
            </p>
            <Link to="/contact?subject=Plan%20my%20Journey" className="btn-atelier-light mt-10">
              Tell Us What You Envision
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Who we design for */}
      <section className="bg-white section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-serif text-xl font-light leading-relaxed text-ink md:text-2xl">
              Designed for those who understand that true luxury is found in time, presence, and
              connection.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <img
                src="/assets/landscape-panorama.jpg"
                alt="A wide, quiet landscape at first light"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                  Designed for the Few Who Understand That Luxury Grounds You.
                </h2>
                <p className="mt-6 font-body text-lg text-foreground">Our clients are:</p>
              </Reveal>
              <Reveal delay={120}>
                <ul className="mt-6 space-y-3">
                  {clientProfiles.map((item) => (
                    <li
                      key={item}
                      className="border-b border-taupe/25 pb-3 font-serif text-lg font-light text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 font-body text-lg leading-relaxed text-foreground">
                  They come to us not for vacations, but for space, clarity, connection, and joy
                  that returns with them.
                </p>
                <Link to="/contact?subject=Plan%20my%20Journey" className="btn-atelier-dark mt-8">
                  Discover What's Possible
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Travel Portfolio */}
      <section className="bg-ink section-padding text-white">
        <div className="mx-auto w-[95%] max-w-[900px] text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
              Legacy
              <br />
              Travel Portfolio
            </h2>
            <p className="mt-8 font-body text-lg leading-relaxed text-white/85">
              A private, long-term partnership for discerning travelers who see every journey as
              part of a greater story, their own. This exclusive service curates travel as a living
              legacy, designed with continuity, intention, and personal evolution in mind. Each
              journey becomes a reflection of who you are and who you're becoming.
            </p>
            <Link to="/legacy-travel-portfolio" className="btn-atelier-light mt-10">
              Explore the Legacy Portfolio
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Global network */}
      <section id="partners" className="bg-cream section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px] text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-light text-ink md:text-5xl">
              Our Global Network
            </h2>
            <p className="mt-5 font-serif text-lg font-light text-taupe">
              Our partnerships are built on trust, excellence, and access.
            </p>
            <p className="mx-auto mt-6 max-w-3xl font-body text-base leading-relaxed text-foreground">
              Through our affiliation with Virtuoso and direct relationships with the world's
              leading luxury hospitality brands, Incognito Atelier clients receive exclusive
              recognition and benefits that go beyond traditional bookings. These alliances allow us
              to deliver experiences that are as seamless as they are extraordinary, designed for
              those who expect nothing less than the exceptional.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {partnerLogos.map((logo, index) => (
              <Reveal key={logo} delay={(index % 4) * 60}>
                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full object-contain mix-blend-multiply"
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials intro */}
      <section className="relative flex min-h-[566px] items-center overflow-hidden bg-ink">
        <img
          src="/assets/woman-sea-view.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          loading="lazy"
        />
        <div className="relative mx-auto w-[95%] max-w-[900px] py-20 text-center text-white">
          <Reveal>
            <h2 className="font-display text-4xl font-light md:text-5xl">
              Every journey leaves an impression
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-white/85">
              Here, our travelers share how intentional design transformed their experience, moments
              that became more than memories, and travels that continue to shape how they live and
              connect.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-white/85">
              These reflections are not about destinations, but about what remains long after the
              return. Presence. Joy. Meaning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* In Their Words */}
      <section className="bg-white section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-4xl font-light text-ink md:text-5xl">
                In Their Words
              </h2>
              <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-relaxed text-foreground">
                Each journey leaves an imprint. These voices offer a glimpse into the experiences,
                care, and intention our clients felt throughout every step of the way.
              </p>
            </div>
          </Reveal>

          <div className="mt-14">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative flex min-h-[833px] items-center overflow-hidden bg-white">
        <img
          src="/assets/landscape-panorama.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative mx-auto w-[95%] max-w-[900px] py-24 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight text-ink md:text-5xl">
              This is travel,{" "}
              <WordRotator words={closingWords} className="text-copper" />
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-foreground">
              We don't just plan your travel. We elevate your journey into something timeless. You
              arrive as you are. You return more of yourself.
            </p>
            <Link
              to="/contact?subject=Request%20a%20Private%20Consultation"
              className="btn-atelier-dark mt-10"
            >
              Request a Private Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
