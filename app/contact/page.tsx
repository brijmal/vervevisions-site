import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Verve Visions",
  description:
    "Get in touch with Verve Visions. We’d love to hear about your project and how we can help enrich lives with great apps.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            Have an idea for an app that could enrich people’s lives? We’d love
            to hear from you. Send us a message and we’ll get back to you soon.
          </p>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
