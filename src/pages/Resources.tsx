import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

/* TODO: port the full Resources layout from the WordPress source. */
const Resources = () => {
  usePageMeta({
    title: "Resources | Incognito Atelier",
    description: "Resources at Incognito Atelier.",
  });

  return (
    <Layout transparentHeader={false}>
      <section className="section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <h1 className="font-display text-5xl font-light text-ink">Resources</h1>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
