import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import { usePageMeta } from "@/hooks/use-page-meta";

const TheJournal = () => {
  usePageMeta({
    title: "The Journal | Reflections on Intentional Luxury Travel | Incognito Atelier",
    description:
      "Reflections, insights, and stories shaped by a life lived through travel.",
  });

  return (
    <Layout>
      <Section
        className="min-h-[630px] bg-[#5A5A5A] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/sea-sunset.jpg)" }}
        innerWidth={800}
        innerClassName="min-h-[630px] items-center justify-center gap-5 text-center text-white"
      >
        <Reveal>
          <h1 className="font-serif text-[58px] font-normal leading-[1.2em] max-md:mt-14 max-md:text-[38px]">
            The Journal
          </h1>
        </Reveal>
        <Reveal animation="fadeInUp">
          <p className="font-serif text-[22px] font-normal italic leading-[1.2em] max-md:text-[16px]">
            Reflections, insights, and stories shaped by a life lived through travel.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-sans text-[15px] font-normal leading-[1.3em] max-md:text-[12px]">
            Here, ideas unfold with intention, from thoughtful perspectives on destinations and
            design, to the subtle art of creating experiences that stay with you long after you
            return home.
          </p>
        </Reveal>
        <Reveal animation="fadeInDown">
          <ChevronDown strokeWidth={1} className="h-[26px] w-[26px]" />
        </Reveal>
      </Section>

      {/*
        Article listing. The WordPress source reserves this 782px band for the
        posts feed, which is currently empty; the space is kept so the page
        matches the live layout.
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

export default TheJournal;
