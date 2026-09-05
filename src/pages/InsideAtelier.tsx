import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

/* TODO: port the full Inside Incognito Atelier layout from the WordPress source. */
const InsideAtelier = () => {
  usePageMeta({
    title: "Inside Incognito Atelier | Incognito Atelier",
    description: "Inside Incognito Atelier at Incognito Atelier.",
  });

  return (
    <Layout transparentHeader={false}>
      <section className="section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <h1 className="font-display text-5xl font-light text-ink">Inside Incognito Atelier</h1>
        </div>
      </section>
    </Layout>
  );
};

export default InsideAtelier;
