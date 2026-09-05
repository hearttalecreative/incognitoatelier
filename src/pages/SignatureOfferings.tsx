import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

/* TODO: port the full Our Signature Offerings layout from the WordPress source. */
const SignatureOfferings = () => {
  usePageMeta({
    title: "Our Signature Offerings | Incognito Atelier",
    description: "Our Signature Offerings at Incognito Atelier.",
  });

  return (
    <Layout transparentHeader={false}>
      <section className="section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <h1 className="font-display text-5xl font-light text-ink">Our Signature Offerings</h1>
        </div>
      </section>
    </Layout>
  );
};

export default SignatureOfferings;
