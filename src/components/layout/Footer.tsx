import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { footerLinks, legalLinks } from "@/data/navigation";
import Overlay from "@/components/ui/overlay";
import { subscribeToNewsletter } from "@/lib/forms";

/*
  Taupe band with the paper texture tiled at 20% width, exactly as the Elementor
  container is configured.
*/
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    const result = await subscribeToNewsletter({ email });
    if (result.ok) {
      setStatus("done");
      setMessage("You're on the list.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.error);
    }
  };

  return (
    <section className="relative min-h-[283px] overflow-hidden bg-taupe py-16">
      {/* Paper texture tiled at 20% and laid over the taupe at 48% */}
      <Overlay
        image="/assets/texture-paper.jpg"
        opacity={0.48}
        blend="multiply"
        repeat="repeat"
        size="20% auto"
      />
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col items-center px-[10px]">
        <p className="mb-[23px] font-serif text-[14px] font-medium uppercase tracking-normal text-cream">
          newsletter
        </p>

        <h2 className="text-center font-serif text-[34px] font-normal leading-[34px] tracking-[-0.8px] text-cream max-md:tracking-[-0.1px]">
          Stay connected to what matters
        </h2>

        <p className="mt-[19px] text-center font-sans text-[16px] font-normal leading-[1.2em] text-cream max-md:text-[14px]">
          Insights, curated travel notes, and meaningful updates delivered with intention.
        </p>

        <form onSubmit={onSubmit} className="mt-5 flex w-full flex-col gap-[5px] sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="flex-1 rounded-[5px] border-none bg-white px-4 py-4 font-sans text-[15px] text-ink placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-copper"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-solid-ink rounded-[5px] px-4 py-4 disabled:opacity-50"
          >
            {status === "sending" ? "Joining…" : "Join the circle"}
          </button>
        </form>

        {message && (
          <p role="status" className="mt-4 font-sans text-[13px] text-cream">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer>
    <Newsletter />

    <div className="bg-ink py-12">
      <div className="e-container flex flex-col items-center gap-6">
        <Link to="/" aria-label="Incognito Atelier">
          <img
            src="/assets/logo-stacked-color-alt.svg"
            alt="Incognito Atelier"
            className="w-[277px] max-md:w-[190px]"
          />
        </Link>

        <nav className="flex flex-wrap items-center justify-center">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="px-[13px] py-1 font-sans text-[11px] font-semibold text-white transition-colors duration-300 hover:text-copper max-md:text-[13px] max-md:py-[9px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <hr className="w-full border-white/20" />

        <div className="flex items-center gap-5 text-copper">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram strokeWidth={1.25} className="h-5 w-5 transition-opacity hover:opacity-70" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin strokeWidth={1.25} className="h-5 w-5 transition-opacity hover:opacity-70" />
          </a>
        </div>

        <hr className="w-full border-white/20" />

        <nav className="flex flex-wrap items-center justify-center">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-[13px] font-sans text-[9px] font-semibold text-white transition-colors duration-300 hover:text-copper"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>

    <div className="bg-[#383838] py-4">
      <p className="mx-auto max-w-[560px] text-center font-sans text-[11px] font-medium leading-[11px] text-[#DFDFDF] max-md:leading-[1.2em]">
        Copyright {new Date().getFullYear()} Incognito Atelier. All Rights Reserved. &nbsp;|&nbsp;
        Developed with ♥ by{" "}
        <a
          href="https://hearttalecreative.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-white"
        >
          Hearttale Creative
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
