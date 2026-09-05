import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import VimeoBackground from "@/components/ui/vimeo-background";
import WordRotator from "@/components/ui/word-rotator";
import BackgroundSlideshow from "@/components/ui/background-slideshow";
import { usePageMeta } from "@/hooks/use-page-meta";

const slide = (n: number) =>
  `/assets/the-frequency-return-slide-${String(n).padStart(2, "0")}.jpg`;

const audienceSlideshow = [16, 6, 8, 4, 5].map(slide);
const luxurySlideshow = [11, 13, 12, 15, 9, 7, 10, 14].map(slide);

const outcomes = [
  {
    title: "A regulated nervous system",
    body: "Women leave with a system that no longer lives in anticipation of impact. There is a felt sense of safety, ease, and internal stability that carries into everyday situations.",
  },
  {
    title: "Emotional release and lightness",
    body: "Years of over-giving, silent holding, and unexpressed emotion begin to unwind. What remains is more space, softness, and emotional availability.",
  },
  {
    title: "Clarity without urgency",
    body: "Insight emerges without pressure or force. Many women gain a clearer sense of direction, even when the next step cannot yet be fully named.",
  },
  {
    title: "Grounded presence in daily life",
    body: "Decision-making feels steadier, leadership becomes more embodied, and relationships at work and at home shift toward greater presence and authenticity.",
  },
];

/* Ghost button used throughout this landing page: transparent fill, white rule. */
const GhostButton = ({ children, size = 12 }: { children: string; size?: number }) => (
  <a
    href="#form"
    className="inline-flex items-center justify-center rounded-[3px] border border-current px-6 py-3 font-sans font-medium uppercase transition-colors duration-300 hover:bg-white/10"
    style={{ fontSize: size }}
  >
    {children}
  </a>
);

const TheFrequencyReturn = () => {
  usePageMeta({
    title: "The Frequency Return | Intentional Travel & Renewal | Incognito Atelier",
    description:
      "A nine-day, small-group luxury wellness retreat with wild dolphins in the Red Sea. April 17–26, 2026. Private luxury yacht, fifteen women only.",
  });

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero */}
        <Section
          className="min-h-[85vh] overflow-hidden bg-black px-[10px]"
          innerWidth={900}
          innerClassName="relative min-h-[85vh] items-center justify-center gap-4 py-16 text-center text-white"
        >
          <VimeoBackground videoId="1150089115" poster="/assets/poster-frequency-hero.jpg" />
          <Reveal>
            <img
              src="/assets/logo-stacked-color.svg"
              alt="Incognito Atelier"
              className="mx-auto w-[160px]"
            />
          </Reveal>
          <Reveal>
            <h1 className="font-display text-[93px] font-light leading-[1.05em] max-lg:text-[64px] max-md:text-[44px]">
              The Frequency Return
            </h1>
          </Reveal>
          <Reveal animation="fadeInUp">
            <p className="font-serif text-[35px] font-light italic leading-[1.2em] max-md:text-[22px]">
              A dolphin-led journey back to your essence
            </p>
          </Reveal>
          <Reveal>
            <p className="font-body text-[20px] max-md:text-[16px]">April 17–26, 2026</p>
            <p className="font-body text-[16px] max-md:text-[14px]">
              Private luxury yacht | 15 women only
            </p>
            <p className="mt-3 font-body text-[15px] leading-[1.4em] max-md:text-[14px]">
              A 9-day, small-group luxury wellness retreat with wild dolphins, designed for nervous
              system regulation and emotional release.
            </p>
          </Reveal>
          <Reveal animation="zoomIn">
            <GhostButton size={14}>Request Full Details</GhostButton>
          </Reveal>
        </Section>

        {/* More than a Trip */}
        <Section
          className="min-h-[439px] bg-white"
          innerClassName="min-h-[439px] items-center justify-center gap-5 py-[55px] md:flex-row"
        >
          <div className="flex w-full flex-col justify-center p-[10px] max-md:items-center md:w-1/2">
            <Reveal>
              <h2 className="font-display text-[66px] font-light italic leading-[1.1em] text-foreground max-md:text-center max-md:text-[42px]">
                This is More
              </h2>
              <h2 className="font-display text-[48px] font-light leading-[1.1em] text-foreground max-md:text-center max-md:text-[32px]">
                than a Trip
              </h2>
            </Reveal>
          </div>

          <div className="flex w-full flex-col justify-center gap-5 p-[10px] md:w-1/2">
            <Reveal delay={200} className="flex flex-col gap-5">
              <p className="t-body text-foreground">
                In nine days in Egypt, you release what has been weighing on your body and nervous
                system, reconnect with your natural rhythm, and return home clearer, lighter, and
                more present in your life.
              </p>

              <div className="flex items-center gap-5 max-md:flex-col max-md:text-center">
                <img
                  src="/assets/frequency-return-mark.webp"
                  alt=""
                  aria-hidden="true"
                  className="w-[124px] shrink-0"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-body text-[16px] leading-[1.4em] text-foreground">
                    Co-hosted by Michelle Cameron-Coulter
                  </p>
                  <p className="font-body text-[14px] leading-[1.4em] text-foreground">
                    Olympic Gold Medalist, TEDx Speaker, Best-Selling Author
                    <br />
                    Her work bridges high performance, embodiment, and emotional regulation.
                  </p>
                </div>
              </div>

              <p className="t-body text-foreground">
                This is a carefully facilitated retreat with a clear container, professional
                hosting, and an intentionally limited group of 15 women.
                <br />
                <br />
                Every element, from the setting to the pacing, is designed to support safety, depth,
                and integration.
              </p>
            </Reveal>
          </div>
        </Section>

        {/* Dolphin statement */}
        <Section
          className="min-h-[278px] bg-black bg-cover bg-center bg-no-repeat px-[10px]"
          style={{ backgroundImage: "url(/assets/dolphins-swimming.jpg)" }}
          innerWidth={900}
          innerClassName="min-h-[278px] items-center justify-center py-[10px]"
        >
          <Reveal>
            <p className="text-center font-serif text-[22px] font-light italic leading-[1.5em] text-white max-md:text-[18px]">
              You need a return.
              <br />
              <br />
              Not to a place, but to yourself.
              <br />
              <br />
              To the woman you were before the world asked you to hold everything together.
              <br />
              <br />
              This journey is not about escape.
              <br />
              <br />
              It is about allowing your system to stand down.
            </p>
          </Reveal>
        </Section>

        {/* Who this is for */}
        <Section
          className="bg-white"
          innerClassName="items-center justify-center gap-5 py-[55px] md:flex-row-reverse"
        >
          <div className="flex w-full flex-col gap-5 p-[10px] max-md:items-center md:w-1/2">
            <Reveal animation="fadeInLeft" className="flex flex-col gap-5">
              <h2 className="font-display text-[48px] font-light leading-[1.1em] text-foreground max-md:text-center max-md:text-[32px]">
                Who this Experience is for
              </h2>
              <p className="t-body text-foreground">
                In a World That Moves Fast, We Curate the Opposite.
                <br />
                Your life moves fast. Your schedule is full. Your roles carry weight. And yet, what
                you crave is simple:
                <br />
                <br />
                You may have built a business, a family, a reputation, or a life that looks complete
                on the outside.
                <br />
                <br />
                Or you may be standing at the edge of a new chapter, knowing something inside you is
                ready to shift.
                <br />
                <br />
                You are capable, reliable, and generous with your energy.
                <br />
                <br />
                And your nervous system is rarely at rest. Your joy feels managed.
              </p>
              <p className="t-body text-foreground">
                Your presence feels scheduled.
                <br />
                <br />
                And there is a clear sense that something essential is asking for attention.
              </p>
              <GhostButton>Join the Private Waitlist</GhostButton>
            </Reveal>
          </div>

          <div className="flex w-full items-center justify-center p-[10px] md:w-1/2">
            <Reveal animation="fadeInRight" className="w-full">
              <div className="relative flex min-h-[600px] w-full items-end justify-end overflow-hidden p-[25px]">
                <BackgroundSlideshow images={audienceSlideshow} />
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

        {/* At a glance */}
        <Section
          className="min-h-[357px] bg-white py-[55px]"
          innerClassName="items-center justify-center gap-5 p-[10px]"
        >
          <Reveal className="flex w-full max-w-[60%] flex-col items-center gap-5 text-center max-md:max-w-full">
            <h2 className="font-display text-[48px] font-light leading-[1.1em] text-foreground max-md:text-[32px]">
              The Experience at a Glance
            </h2>
            <p className="font-display text-[23px] font-light italic leading-[1.3em] text-foreground">
              This is not a workshop. It is a return.
            </p>
            <p className="t-body text-center text-foreground">
              In April 2026, fifteen women gather in the Red Sea for a carefully designed experience
              that includes seven nights aboard a private luxury yacht, two nights at a five-star
              hotel, and six days anchored at Sataya Reef, home to wild dolphins.
              <br />
              Daily practices support emotional release, nervous system regulation, and deep rest.
            </p>
            <GhostButton>Receive Full Experience Details</GhostButton>
          </Reveal>
        </Section>

        {/* Why dolphins */}
        <Section
          className="min-h-[469px] overflow-hidden bg-black px-[10px]"
          innerClassName="relative min-h-[469px] items-center justify-center gap-5 py-[55px] text-white md:flex-row"
        >
          <VimeoBackground videoId="1150089063" poster="/assets/dolphins-water.jpg" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative flex w-full flex-col justify-center p-[10px] max-md:items-center md:w-[30%]">
            <Reveal>
              <h2 className="font-display text-[65px] font-light italic leading-[1.1em] max-md:text-center max-md:text-[42px]">
                Why Dolphins
              </h2>
              <h2 className="font-display text-[48px] font-light leading-[1.1em] max-md:text-center max-md:text-[32px]">
                WHY SATAYA.
              </h2>
            </Reveal>
          </div>

          <div className="relative flex w-full flex-col justify-center p-[10px] md:w-1/2">
            <Reveal delay={200}>
              <p className="t-body max-md:text-center">
                This is not a staged interaction or a bucket-list activity.
                <br />
                <br />
                The dolphins at Sataya Reef are wild and choose interaction freely.
                <br />
                <br />
                All interactions are non-invasive, guided, and fully respectful of the dolphins'
                natural behavior.
                <br />
                <br />
                Research shows that dolphin sonar and interaction can support nervous system
                regulation, shift brainwaves into restorative states, and reduce mental noise.
                <br />
                <br />
                Beyond the science, there is something your body recognizes immediately.
                <br />
                <br />
                Dolphins do not perform.
                <br />
                They transmit.
              </p>
            </Reveal>
          </div>
        </Section>

        {/* What changes */}
        <Section className="bg-white" innerClassName="items-center gap-5 py-[55px]">
          <Reveal className="flex flex-col items-center gap-4 p-[10px] text-center">
            <h2 className="font-display text-[48px] font-light leading-[1.1em] text-foreground max-md:text-[32px]">
              What changes when you Return
            </h2>
            <p className="t-body text-center text-foreground">
              What shifts here is not conceptual.
              <br />
              It is felt in your body, your decisions, and the way you move through daily life.
            </p>
          </Reveal>

          <div className="flex w-full items-stretch justify-center gap-5 p-[10px] max-md:flex-col">
            {outcomes.map((outcome, index) => (
              <Reveal key={outcome.title} delay={index * 200} className="w-1/4 max-md:w-full">
                <div className="flex h-full flex-col gap-5 p-[25px] max-md:items-center">
                  <h3 className="font-display text-[24px] font-light leading-[1.1em] text-foreground max-md:text-center">
                    {outcome.title}
                  </h3>
                  <hr className="pillar-divider max-md:mx-auto" />
                  <p className="t-body-sm text-foreground max-md:text-center">{outcome.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal animation="zoomIn">
            <div className="flex justify-center p-[10px] text-foreground">
              <GhostButton>I Want More Information</GhostButton>
            </div>
          </Reveal>
        </Section>

        {/* Not for everyone */}
        <Section
          className="min-h-[698px] overflow-hidden bg-black bg-cover bg-center px-[10px]"
          style={{ backgroundImage: "url(/assets/woman-sea-view.jpg)" }}
          innerClassName="relative min-h-[698px] items-center justify-center gap-5 py-[55px] text-white"
        >
          <VimeoBackground videoId="1150089041" poster="/assets/woman-sea-view.jpg" />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative flex w-full flex-col gap-5 p-[10px] max-md:items-center">
            <Reveal className="flex flex-col gap-5">
              <h2 className="font-display text-[48px] font-light leading-[1.1em] max-md:text-center max-md:text-[32px]">
                This Experience is not for Everyone
              </h2>
              <p className="t-body max-md:text-center">
                This retreat is not designed for the masses.
                <br />
                It is for women who already know.
                <br />
                Who feel the pull in their body before their mind explains it.
              </p>
              <p className="t-body max-md:text-center">
                Who are willing to choose themselves, even when it feels unfamiliar.
              </p>
              <p className="font-body text-[17px] italic leading-[1.4em] max-md:text-center">
                You might be wondering...
              </p>
              <p className="t-body max-md:text-center">
                Can I really step away for ten days?
                <br />
                Yes. Your world will continue.
                <br />
                <br />
                And you will return with more presence, clarity, and patience than before.
                <br />
                <br />
                Is it selfish to invest in myself?
                <br />
                No. Restoration is not indulgence.
                <br />
                <br />
                It is responsibility to your own well-being.
                <br />
                <br />
                Is it worth it?
                <br />
                The tangible elements are clear.
                <br />
                <br />
                The return to your own aliveness cannot be measured on a spreadsheet.
              </p>
            </Reveal>
          </div>
        </Section>

        {/* A different standard of luxury */}
        <Section
          className="bg-white"
          innerClassName="items-center justify-center gap-5 py-[55px] md:flex-row"
        >
          <div className="flex w-full flex-col gap-5 p-[10px] max-md:items-center md:w-[40%]">
            <Reveal className="flex flex-col gap-5">
              <h2 className="font-display text-[38px] font-light leading-[1.1em] text-foreground max-md:text-center max-md:text-[30px]">
                A different Standard of Luxury.
              </h2>
              <p className="t-body text-foreground max-md:text-center">
                Luxury here is not excess.
                <br />
                <br />
                It is time, space, and safety.
                <br />
                It is being fed without decision fatigue.
                <br />
                Being held without explanation.
                <br />
                Being allowed to rest without justification.
                <br />
                <br />
                Every element of this experience supports your system settling enough for real
                change to occur.
              </p>
              <div className="text-foreground">
                <GhostButton>Join the Private Waitlist</GhostButton>
              </div>
            </Reveal>
          </div>

          <div className="flex w-full items-center justify-center p-[10px] md:w-[60%]">
            <Reveal className="w-full">
              <div className="relative flex min-h-[431px] w-full items-end justify-end overflow-hidden p-[25px]">
                <BackgroundSlideshow images={luxurySlideshow} />
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

        {/* Request full details — JotForm */}
        <Section id="form" className="bg-white" innerClassName="items-center gap-5 py-[55px]">
          <Reveal className="flex flex-col items-center gap-4 p-[10px] text-center">
            <h2 className="font-display text-[48px] font-light leading-[1.1em] text-foreground max-md:text-[32px]">
              Request Full Details.
            </h2>
            <p className="t-body text-center text-foreground">
              Because this is an intimate experience with limited space, full details are shared
              privately.
              <br />
              <br />
              Submit your information to receive the complete itinerary, investment details, and
              next steps.
            </p>
          </Reveal>

          <div className="flex w-full max-w-[500px] flex-col items-center gap-4">
            {/* The live site embeds this JotForm; kept as-is so submissions keep flowing */}
            <iframe
              title="Request full details"
              src="https://form.jotform.com/251157929677169"
              className="h-[900px] w-full border-0"
              scrolling="no"
            />
            <p className="text-center font-serif text-[16px] font-normal italic leading-[1.3em] text-foreground">
              After you submit, a member of our team will personally review your request and respond
              with the next steps.
            </p>
            <p className="text-center font-body text-[13px] leading-[1.4em] text-foreground">
              Your information is kept private. No mass emails. No pressure.
            </p>
          </div>
        </Section>

        {/* Closing */}
        <Section
          className="min-h-[833px] bg-black bg-cover bg-center bg-no-repeat px-[10px]"
          style={{ backgroundImage: "url(/assets/frequency-return-closing.jpg)" }}
          innerClassName="min-h-[833px] items-center justify-center gap-5 py-[55px] text-center text-white"
        >
          <Reveal className="flex w-full max-w-[60%] flex-col items-center gap-5 max-md:max-w-full">
            <h2 className="font-display text-[48px] font-light leading-[1.1em] max-md:text-[32px]">
              The Frequency Return
            </h2>
            <p className="font-display text-[44px] font-normal leading-[1.1em] max-md:text-[30px]">
              A return to{" "}
              <WordRotator
                words={["your body.", "your presence.", "what has been waiting."]}
              />
            </p>
            <p className="t-body text-center">
              April 17–26, 2026
              <br />
              Red Sea, Egypt
              <br />
              Private luxury yacht
              <br />
              15 women only
            </p>
            <GhostButton>Join the Private Waitlist</GhostButton>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default TheFrequencyReturn;
