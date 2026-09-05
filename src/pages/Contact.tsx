import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

/* TODO: port the full Contact layout from the WordPress source. */
const Contact = () => {
  usePageMeta({
    title: "Contact | Incognito Atelier",
    description: "Contact at Incognito Atelier.",
  });

  return (
    <Layout transparentHeader={false}>
      <section className="section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px]">
          <h1 className="font-display text-5xl font-light text-ink">Contact</h1>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
