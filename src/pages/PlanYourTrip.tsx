import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

/*
  The WordPress page at /plan-your-trip/ has no content of its own: it renders
  the header, newsletter band and footer only. Kept as-is so the route resolves
  the same way; the working entry point for enquiries is /contact.
*/
const PlanYourTrip = () => {
  usePageMeta({
    title: "Plan Your Trip | Incognito Atelier",
    description: "Begin planning a bespoke journey with Incognito Atelier.",
  });

  return <Layout transparentHeader={false}>{null}</Layout>;
};

export default PlanYourTrip;
