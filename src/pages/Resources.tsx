import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import { usePageMeta } from "@/hooks/use-page-meta";

const Resources = () => {
  usePageMeta({
    title: "Travel Resources & Trusted Partners | Incognito Atelier",
    description:
      "Tools and services that support the way you move through the world — trusted partners, expert services, and refined conveniences.",
  });

  return (
    <Layout>
      <Section
        className="min-h-[70vh] bg-[#5A5A5A] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/woman-wooden-bridge.jpg)" }}
        innerWidth={800}
        innerClassName="min-h-[70vh] items-center justify-center gap-5 text-center text-white"
      >
        <Reveal>
          <h1 className="font-serif text-[58px] font-normal leading-[1.2em] max-md:mt-14 max-md:text-[38px]">
            Resources
          </h1>
        </Reveal>
        <Reveal animation="fadeInUp">
          <p className="font-serif text-[22px] font-normal italic leading-[1.2em] max-md:text-[16px]">
            Tools and services that support the way you move through the world.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-sans text-[15px] font-normal leading-[1.3em] max-md:text-[12px]">
            Curated with the same intention that shapes every journey, this collection brings
            together trusted partners, expert services, and refined conveniences designed to make
            travel smoother, lighter, and more aligned with your standards.
          </p>
        </Reveal>
        <Reveal animation="fadeInDown">
          <ChevronDown strokeWidth={1} className="h-[26px] w-[26px]" />
        </Reveal>
      </Section>

      {/*
        Resource listing. Reserved in the WordPress source and currently empty;
        the band is kept so the page matches the live layout.
      */}
      <Section
        className="min-h-[782px] bg-white px-[10px]"
        innerClassName="min-h-[782px] items-center justify-center gap-5 py-[10px]"
      >
        <div />
      </Section>
    </Layout>
  );
};

export default Resources;
