import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  usePageMeta({
    title: "Page not found | Incognito Atelier",
    description: "The page you were looking for is no longer here.",
  });

  return (
    <Layout transparentHeader={false}>
      <section className="section-padding">
        <div className="mx-auto w-[95%] max-w-[1140px] text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-6 font-display text-5xl font-light text-ink">
            This page has moved on
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-foreground">
            The page you were looking for is no longer here. Let us guide you back.
          </p>
          <Link to="/" className="btn-atelier-dark mt-10">
            Return home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
