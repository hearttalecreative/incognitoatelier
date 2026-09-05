import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/section";
import Reveal from "@/components/ui/reveal";
import Overlay from "@/components/ui/overlay";
import { sendContactRequest } from "@/lib/forms";
import { usePageMeta } from "@/hooks/use-page-meta";

const fieldClass =
  "w-full border border-taupe/40 bg-white px-4 py-3 font-body text-[15px] text-foreground placeholder:text-taupe focus:border-copper focus:outline-none";

const InquiryForm = () => {
  const [params] = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    dates: "",
    message: "",
  });

  /* The header and in-page links pass the enquiry topic as ?subject= */
  const subject = params.get("subject") ?? "";

  useEffect(() => {
    if (!subject) return;
    setValues((current) =>
      current.message ? current : { ...current, message: `${subject}\n\n` }
    );
  }, [subject]);

  const set = (key: keyof typeof values) => (event: { target: { value: string } }) =>
    setValues((current) => ({ ...current, [key]: event.target.value }));

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    const result = await sendContactRequest({
      name: values.name,
      email: values.email,
      phone: values.phone,
      subject: subject || "Website enquiry",
      message: [
        values.message,
        `Country of residence: ${values.country}`,
        `Approximate dates or season: ${values.dates}`,
      ].join("\n"),
    });

    if (result.ok) {
      setStatus("done");
      setMessage("Thank you. We'll be in touch personally.");
      setValues({ name: "", email: "", phone: "", country: "", dates: "", message: "" });
    } else {
      setStatus("error");
      setMessage(result.error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-[500px] flex-col gap-3 p-[10px]">
      <label className="sr-only" htmlFor="contact-name">
        Full Name
      </label>
      <input
        id="contact-name"
        required
        placeholder="Full Name"
        value={values.name}
        onChange={set("name")}
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-email">
        Email Address
      </label>
      <input
        id="contact-email"
        type="email"
        required
        placeholder="Email Address"
        value={values.email}
        onChange={set("email")}
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-phone">
        Phone Number
      </label>
      <input
        id="contact-phone"
        placeholder="Phone Number"
        value={values.phone}
        onChange={set("phone")}
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-country">
        Country of Residence
      </label>
      <input
        id="contact-country"
        required
        placeholder="Country of Residence"
        value={values.country}
        onChange={set("country")}
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-dates">
        Approximate Dates or Season
      </label>
      <input
        id="contact-dates"
        required
        placeholder="Approximate Dates or Season"
        value={values.dates}
        onChange={set("dates")}
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-message">
        Tell Us About What You're Envisioning
      </label>
      <textarea
        id="contact-message"
        rows={5}
        placeholder="Tell Us About What You're Envisioning"
        value={values.message}
        onChange={set("message")}
        className={fieldClass}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-solid-copper rounded-[5px] px-6 py-3 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>

      {message && (
        <p role="status" className="t-body text-center text-foreground">
          {message}
        </p>
      )}
    </form>
  );
};

const Contact = () => {
  usePageMeta({
    title: "Contact Incognito Atelier | Luxury Travel & Bespoke Journeys",
    description:
      "Tell us where you are in your journey. Every enquiry is treated with the same discretion and care as the journeys we design.",
  });

  return (
    <Layout>
      {/* Hero */}
      <Section
        className="min-h-[70vh] bg-[#5A5A5A] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/woman-cafe-tablet.jpg)" }}
        overlay={<Overlay color="#000000" opacity={0.5} />}
        innerWidth={800}
        innerClassName="min-h-[70vh] items-center justify-center gap-5 text-center text-white"
      >
        <Reveal>
          <h1 className="font-serif text-[70px] font-normal leading-[1.2em] max-md:mt-14 max-md:text-[38px]">
            Contact Us
          </h1>
        </Reveal>
        <Reveal animation="fadeInUp">
          <p className="font-serif text-[22px] font-normal italic leading-[1.2em] max-md:text-[16px]">
            Tell us where you are in your journey.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-sans text-[15px] font-normal leading-[1.3em] max-md:text-[12px]">
            Whether you already have a destination in mind or simply feel that it's time for
            something new, this is where your next chapter begins. This is not a booking form. It's
            an invitation to begin a private dialogue. Each message we receive is treated with the
            same discretion, care, and attention to detail as the journeys we design.
          </p>
        </Reveal>
        <Reveal animation="fadeInDown">
          <ChevronDown strokeWidth={1} className="h-[26px] w-[26px]" />
        </Reveal>
      </Section>

      {/* Statement */}
      <Section
        className="min-h-[193px] bg-white px-[10px]"
        innerClassName="min-h-[193px] items-center justify-center py-[10px]"
      >
        <Reveal>
          <p className="text-center font-serif text-[21px] font-light italic leading-[1.4em] text-foreground max-md:text-[18px]">
            At Incognito Atelier, every experience starts with intention. We listen carefully,
            design thoughtfully, and curate journeys that feel aligned with who you are and how you
            wish to travel.
          </p>
        </Reveal>
      </Section>

      {/* The Philosophy of Connection */}
      <Section
        className="min-h-[469px] bg-ink"
        innerClassName="min-h-[469px] items-stretch justify-center gap-0 pb-[65px] pt-[55px] max-md:items-center md:flex-row"
      >
        <div className="flex items-center justify-start max-md:justify-center md:w-[342px]">
          <Reveal>
            <div className="flex flex-col items-start justify-center gap-5 max-md:items-center">
              <h2 className="-mb-[20px] font-display text-[36px] font-light leading-[1.1em] text-white max-md:text-center">
                The Philosophy of
              </h2>
              <p className="-mt-[4px] font-display text-[58px] font-light italic leading-[1.1em] text-white max-md:text-center">
                Connection
              </p>
              <p className="mt-4 font-serif text-[21px] font-light italic leading-[1.4em] text-white max-md:text-center max-md:text-[18px]">
                Every conversation becomes part of your story.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-center p-[45px] max-md:items-center max-md:p-5 md:w-[570px]">
          <Reveal delay={120}>
            <p className="t-body text-white max-md:text-center">
              We believe that how something begins matters just as much as how it unfolds.
              <br />
              <br />
              This first conversation allows us to listen, to understand not only where you want to
              go, but why this journey feels important now.
              <br />
              <br />
              From there, we translate your story into motion, meaning, and memory, creating a
              travel experience that feels like it was always meant for you.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Inquiry form */}
      <Section className="bg-white" innerClassName="items-center gap-5 py-[55px]">
        <Reveal className="w-full">
          <div className="flex flex-col items-center gap-4 p-[10px] text-center">
            <h2 className="font-display text-[48px] font-light leading-[1.1em] text-foreground max-md:text-[34px]">
              Let's design something Meaningful.
            </h2>
            <p className="t-body text-center text-foreground">
              Please complete the form below so we can begin understanding your vision.
              <br />
              The more insight you share, the more intentionally we can design your experience,
              whether it's a bespoke journey, a private retreat, or your Legacy Travel Portfolio.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex w-full flex-col items-center">
          <InquiryForm />
          <p className="mt-4 text-center font-serif text-[16px] font-normal italic leading-[1.2em] text-foreground">
            All inquiries are responded to personally and confidentially.
          </p>
        </Reveal>
      </Section>

      {/* Closing */}
      <Section
        className="min-h-[193px] bg-cream px-[10px]"
        innerClassName="min-h-[193px] items-center justify-center py-[10px]"
      >
        <Reveal>
          <p className="text-center font-serif text-[25px] font-light italic leading-[1.4em] text-foreground max-md:text-[20px]">
            Luxury begins the moment you feel seen.
          </p>
        </Reveal>
      </Section>
    </Layout>
  );
};

export default Contact;
