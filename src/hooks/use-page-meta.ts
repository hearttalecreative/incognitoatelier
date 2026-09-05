import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
};

/*
  Replaces what Yoast handled on WordPress: per-page title, description and
  canonical. Keep this in sync with the routes declared in App.tsx.
*/
export const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string, content: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;
  }, [title, description]);
};

export default usePageMeta;
