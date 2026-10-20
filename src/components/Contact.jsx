import { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import Reveal from "./Reveal";
const empty = { full_name: "", email: "", message: "" };
const field =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";
export default function Contact() {
  const [formData, setFormData] = useState(empty);
  const [formStatus, setFormStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setOk(false);
    setFormStatus("Sending...");
    try {
      const response = await fetch("https://formspree.io/f/xrpedvkr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setOk(true);
        setFormStatus("Message sent successfully!");
        setFormData(empty);
      } else
        setFormStatus(
          "There was an error sending your message. Please try again.",
        );
    } catch (error) {
      setFormStatus(
        "There was an error sending your message. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-10 rounded-3xl border border-line bg-paper p-6 sm:p-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Have an opportunity in mind?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I'm open to junior frontend developer opportunities, internships,
            and opportunities to learn and contribute to a development team. I'd
            love to hear from you.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a
                href="mailto:oluwasanmidorcas@gmail.com"
                className="flex items-center gap-3 font-medium hover:text-accent"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-accent">
                  <FiMail />
                </span>
                oluwasanmidorcas@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:09058843831"
                className="flex items-center gap-3 font-medium hover:text-accent"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-accent">
                  <FiPhone />
                </span>
                08058843831
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="full_name"
                className="mb-1.5 block text-sm font-semibold"
              >
                Full Name
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                autoComplete="name"
                value={formData.full_name}
                onChange={onChange}
                className={field}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={onChange}
                className={field}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={onChange}
                className={field}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
            <p
              role="status"
              aria-live="polite"
              className={`min-h-6 text-sm font-medium ${ok ? "text-emerald-700" : formStatus === "Sending..." ? "text-muted" : "text-red-700"}`}
            >
              {formStatus}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
