import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

/* TODO: port the full Legacy Travel Portfolio layout from the WordPress source. */
const LegacyTravelPortfolio = () => {
  usePageMeta({
    title: "Legacy Travel Portfolio | Incognito Atelier",
    description: "Legacy Travel Portfolio at Incognito Atelier.",
  });

  return (
    <Layout transparentHeader={false}>
      <section className="section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <h1 className="font-display text-5xl font-light text-ink">Legacy Travel Portfolio</h1>
        </div>
      </section>
    </Layout>
  );
};

export default LegacyTravelPortfolio;
