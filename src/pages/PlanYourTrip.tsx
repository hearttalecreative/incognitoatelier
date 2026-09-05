import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

/* TODO: port the full Plan Your Trip layout from the WordPress source. */
const PlanYourTrip = () => {
  usePageMeta({
    title: "Plan Your Trip | Incognito Atelier",
    description: "Plan Your Trip at Incognito Atelier.",
  });

  return (
    <Layout transparentHeader={false}>
      <section className="section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <h1 className="font-display text-5xl font-light text-ink">Plan Your Trip</h1>
        </div>
      </section>
    </Layout>
  );
};

export default PlanYourTrip;
