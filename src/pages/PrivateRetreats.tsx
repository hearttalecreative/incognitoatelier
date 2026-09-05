import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import Overlay from "@/components/ui/overlay";
import VimeoBackground from "@/components/ui/vimeo-background";
import PhotoSlideshowPanel from "@/components/sections/photo-slideshow-panel";
import { usePageMeta } from "@/hooks/use-page-meta";

const slide = (n: number) => `/assets/private-retreats-slide-${String(n).padStart(2, "0")}.jpg`;
const deliverSlideshow = [4, 6, 2, 5, 3, 1].map(slide);
const audienceSlideshow = [10, 8, 7, 9].map(slide);

const deliverables = [
  "Venue sourcing, contract negotiation, and coordination",
  "End-to-end travel design and logistics for all guests",
  "Itinerary creation aligned with your tone, values, and goals",
  "Local partnerships for culinary, wellness, and cultural experiences",
  "Guest communication and discreet support before and during the retreat",
  "Optional on-site management and hosting",
  "Full confidentiality and white-label options",
];

const audience = [
  "Founders and executives hosting leadership or incentive retreats",
  "Coaches and mentors leading client immersions",
  "Families or friends celebrating milestones",
  "Creators and brands seeking intimate, high-touch gatherings",
  "Those who wish to blend luxury, meaning, and ease in one seamless experience",
];

const PrivateRetreats = () => {
  usePageMeta({
    title: "Private Retreats & Corporate Incentives | Incognito Atelier",
    description:
      "Private retreats and incentive journeys designed for leaders, founders, families and visionaries who gather with purpose.",
  });

  return (
    <Layout>
      {/* Hero */}
      <Section
        className="min-h-[70vh] bg-[#5A5A5A] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/retreat-corporate.jpg)" }}
        overlay={<Overlay color="#000000" opacity={0.33} />}
        innerWidth={800}
        innerClassName="min-h-[70vh] items-center justify-center gap-5 text-center text-white"
      >
        <Reveal>
          <h1 className="font-serif text-[70px] font-normal leading-[1.2em] max-md:mt-14 max-md:text-[38px]">
            Corporate & Private Retreats
          </h1>
        </Reveal>
        <Reveal animation="fadeInUp">
          <p className="font-serif text-[22px] font-normal italic leading-[1.2em] max-md:text-[16px]">
            Luxury, intention, and connection, curated into one seamless experience.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-sans text-[15px] font-normal leading-[1.3em] max-md:text-[12px]">
            For leaders, founders, families, and visionaries who wish to gather their people with
            purpose, Incognito Atelier designs retreats that feel effortless, elevated, and
            unforgettable. This is not an event. It's an experience designed with precision,
            privacy, and emotional depth, where every detail has meaning, and every guest leaves
            with something that stays.
          </p>
        </Reveal>
        <Reveal animation="fadeInDown">
          <ChevronDown strokeWidth={1} className="h-[26px] w-[26px]" />
        </Reveal>
      </Section>

      {/* The Concept */}
      <Section
        className="min-h-[485px] bg-white px-[10px]"
        innerWidth={900}
        innerClassName="min-h-[485px] items-center justify-center gap-5 py-[10px] md:flex-row"
      >
        <div className="flex items-start w-full flex-col justify-center p-[10px] max-md:items-center md:w-[352px]">
          <Reveal>
            <h2 className="-mb-[20px] font-display text-[48px] font-light leading-[1.1em] text-foreground max-md:text-center">
              The
            </h2>
            <p className="-mt-[8px] font-display text-[77px] font-light italic leading-[1.1em] text-foreground max-md:text-center">
              Concept
            </p>
          </Reveal>
        </div>

        <div className="flex items-start w-full flex-col justify-center py-[45px] max-md:items-center md:w-[528px]">
          <Reveal delay={120}>
            <p className="t-body text-foreground max-md:text-center">
              You don't need another venue or another schedule.
              <br />
              You need a retreat that feels alive, a gathering that restores, reconnects, and
              inspires long after it ends.
              <br />
              <br />
              Most retreats focus on logistics or aesthetics and lose what truly matters: intention.
              <br />
              <br />
              At Incognito Atelier, we bring a different lens. Each retreat is a reflection of your
              purpose, designed with the same precision and artistry as our bespoke journeys.
              <br />
              <br />
              From leadership immersions to family milestones, from client incentives to wellness
              gatherings, we design retreats that embody luxury, presence, and meaning in every
              detail.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Video statement */}
      <Section
        className="min-h-[368px] overflow-hidden bg-black px-[10px]"
        background={<VimeoBackground videoId="1147712792" poster="/assets/poster-retreats-hero.jpg" />}
        overlay={<Overlay color="#000000" opacity={0.35} />}
        innerWidth={1000}
        innerClassName="min-h-[368px] items-center justify-center py-[10px]"
      >
        <Reveal>
          <p className="relative -mt-[13px] max-w-[327px] text-center font-serif text-[29px] font-light italic leading-[1.3em] text-white max-md:text-[22px]">
            Guests don't just attend.
            <br />
            They exhale.
            <br />
            They connect.
            <br />
            They remember.
          </p>
        </Reveal>
      </Section>

      {/* Our Approach */}
      <Section
        className="min-h-[357px] overflow-hidden bg-cream py-[55px]"
        overlay={
          <Overlay
            image="/assets/texture-paper.jpg"
            opacity={0.99}
            blend="screen"
            repeat="repeat"
            size="31% auto"
          />
        }
        innerWidth={864}
        innerClassName="items-center gap-5 p-[10px]"
      >
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-[48px] font-light leading-[1.1em] text-foreground max-md:text-center max-md:text-[34px]">
            Our Approach
          </h2>
          <p className="text-center font-display text-[23px] font-light italic leading-[1.1em] text-foreground">
            How we design unforgettable retreats.
          </p>
          <p className="t-body text-center text-foreground">
            Through our affiliation with Virtuoso and direct relationships with the world's leading
            luxury hospitality brands, Incognito Atelier clients receive exclusive recognition and
            benefits that go beyond traditional bookings.
            <br />
            These alliances allow us to deliver experiences that are as seamless as they are
            extraordinary, designed for those who expect nothing less than the exceptional.
          </p>
          <Link to="/contact?subject=Private%20Retreat" className="btn-dark">
            Design My Retreat
          </Link>
        </Reveal>
      </Section>

      {/* What We Deliver */}
      <Section
        className="bg-white"
        innerClassName="items-center justify-center gap-5 py-[66px] md:flex-row-reverse"
      >
        <div className="flex items-start w-full flex-col justify-center gap-5 p-[60px] max-md:items-center max-md:p-5 md:w-[560px]">
          <Reveal className="flex flex-col items-start gap-5">
            <h2 className="font-display text-[40px] font-light leading-[1.1em] text-foreground max-md:text-center">
              What We Deliver.
            </h2>
            <p className="-mt-[10px] mb-[10px] font-display text-[23px] font-light italic leading-[1.1em] text-foreground max-md:text-center">
              Every detail. Perfectly aligned.
            </p>
            <p className="t-body text-foreground max-md:text-center">
              Our Private Retreat Design service covers every element of the journey, from concept
              to execution, so you can focus on what truly matters: connection and presence.
              <br />
              <br />
              Includes:
            </p>
            <ul className="e-list">
              {deliverables.map((item) => (
                <li key={item} className="t-body text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <p className="t-body font-medium text-foreground max-md:text-center">
              Whether it's two days or ten, in Marrakech or the Riviera Maya, we ensure your retreat
              flows seamlessly, balancing elegance and depth.
            </p>
            <Link
              to="/contact?subject=Private%20Retreat"
              className="btn-dark self-start max-md:self-center"
            >
              Discover What's Possible
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <PhotoSlideshowPanel images={deliverSlideshow} height={648} />
        </Reveal>
      </Section>

      {/* The Difference */}
      <Section
        className="min-h-[566px] bg-black bg-cover bg-center bg-no-repeat px-[10px]"
        style={{ backgroundImage: "url(/assets/woman-viewpoint.jpg)" }}
        overlay={<Overlay color="#000000" opacity={0.54} />}
        innerWidth={910}
        innerClassName="min-h-[566px] items-end justify-center py-[10px]"
      >
        <div className="flex items-start w-full flex-col justify-center gap-5 p-[10px] max-md:items-center md:w-[637px]">
          <Reveal className="flex flex-col items-start gap-5">
            <h2 className="font-display text-[48px] font-light leading-[1.1em] text-white max-md:text-center max-md:text-[34px]">
              The Difference
            </h2>
            <p className="-mt-[10px] mb-[10px] font-display text-[23px] font-light italic leading-[1.1em] text-white max-md:text-center">
              When a retreat becomes a memory.
            </p>
            <p className="t-body text-white max-md:text-center">
              Every retreat we design is unique, but all share one goal: to create a sense of
              presence and connection that endures.
              <br />
              <br />
              We craft experiences with emotional intelligence. We curate experiences that feel
              effortless yet profound, weaving together luxury, culture, and authenticity. Guests
              leave not just rested, but renewed, with memories that become part of their personal
              story.
            </p>
            <Link
              to="/contact?subject=Private%20Retreat"
              className="btn-light self-start max-md:self-center"
            >
              Let's Begin
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Who It's For */}
      <Section
        className="bg-cream"
        innerClassName="items-center justify-center gap-5 py-[66px] md:flex-row"
      >
        <div className="flex items-start w-full flex-col justify-center gap-5 p-[60px] max-md:items-center max-md:p-5 md:w-[560px]">
          <Reveal className="flex flex-col items-start gap-5">
            <h2 className="font-display text-[40px] font-light leading-[1.1em] text-foreground max-md:text-center">
              Who It's For
            </h2>
            <p className="-mt-[10px] mb-[10px] font-display text-[23px] font-light italic leading-[1.1em] text-foreground max-md:text-center">
              For visionaries who gather with purpose.
            </p>
            <p className="t-body text-foreground max-md:text-center">
              The Private Retreat Design service is crafted for those who understand that space and
              intention create transformation.
              <br />
              It's ideal for:
            </p>
            <ul className="e-list">
              {audience.map((item) => (
                <li key={item} className="t-body text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <p className="t-body font-medium text-foreground max-md:text-center">
              Each retreat is an expression of your values, designed to align perfectly with the
              energy of your group and the story you want to tell.
            </p>
            <Link
              to="/contact?subject=Private%20Retreat"
              className="btn-dark self-start max-md:self-center"
            >
              Start Planning Your Retreat
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <PhotoSlideshowPanel images={audienceSlideshow} height={648} />
        </Reveal>
      </Section>

      {/* Bridging line */}
      <Section
        className="bg-white"
        innerWidth={1000}
        innerClassName="items-center justify-center pt-[75px]"
      >
        <Reveal animation="fadeInDown">
          <p className="-mt-[13px] text-center font-serif text-[25px] font-light italic leading-[1.3em] text-copper max-md:text-[20px]">
            It's not about how much you do, it's about how it feels.
          </p>
        </Reveal>
      </Section>

      {/* Closing */}
      <Section
        className="min-h-[864px] bg-black bg-cover bg-center bg-no-repeat pt-[55px]"
        style={{ backgroundImage: "url(/assets/retreat-woman-rock.jpg)" }}
        overlay={<Overlay color="#000000" opacity={0.35} />}
        innerWidth={1440}
        innerClassName="min-h-[809px] items-center gap-5 pb-[75px] pt-[100px] text-center"
      >
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-[48px] font-light leading-[1.1em] text-white max-md:text-[34px]">
            The retreat you've been meaning to create.
          </h2>
          <p className="t-body max-w-[640px] text-center text-white">
            Let your next gathering feel different.
            <br />
            Grounded. Meaningful. Beautifully executed. We'll handle every detail, every guest,
            every quiet moment in between.
            <br />
            All you need to do is show up, with your people, your purpose, and your vision.
            <br />
            <br />
            Because when a retreat is designed with care, it doesn't end when it's over. It lives
            on, in stories, in memories, and in how people return home.
          </p>
          <Link to="/contact?subject=Private%20Retreat" className="btn-light">
            Start Planning Your Retreat
          </Link>
        </Reveal>
      </Section>
    </Layout>
  );
};

export default PrivateRetreats;
