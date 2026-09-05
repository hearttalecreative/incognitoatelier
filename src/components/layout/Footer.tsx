import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { footerLinks, legalLinks } from "@/data/navigation";
import { subscribeToNewsletter } from "@/lib/forms";

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
    <section className="bg-taupe py-20 text-white">
      <div className="mx-auto w-[95%] max-w-[1140px] text-center">
        <p className="eyebrow text-white/70">Newsletter</p>
        <h2 className="mt-6 font-display text-4xl font-light md:text-5xl">
          Stay connected to what matters
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/90">
          Insights, curated travel notes, and meaningful updates delivered with intention.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="flex-1 border border-white/50 bg-transparent px-5 py-4 font-sans text-[14px] text-white placeholder:text-white/60 focus:border-white focus:outline-none"
          />
          <button type="submit" disabled={status === "sending"} className="btn-atelier-light disabled:opacity-50">
            {status === "sending" ? "Joining…" : "Join the circle"}
          </button>
        </form>

        {message && (
          <p role="status" className="mt-4 font-sans text-[13px] text-white/80">
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

    <div className="bg-ink py-16 text-white">
      <div className="mx-auto flex w-[95%] max-w-[1140px] flex-col items-center gap-10">
        <Link to="/" aria-label="Incognito Atelier">
          <img src="/assets/logo-horizontal-gold-white.svg" alt="Incognito Atelier" className="h-14 w-auto" />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-sans text-[13px] font-medium text-white/80 transition-colors duration-300 hover:text-copper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[12px] text-white/50 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>

    <div className="bg-[#383838] py-4 text-center">
      <p className="font-sans text-[12px] text-white/60">
        Copyright {new Date().getFullYear()} Incognito Atelier. All Rights Reserved. &nbsp;|&nbsp; Developed with ♥ by{" "}
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
