import type { ContentPageProps } from "@/app/components/mth/ContentPage";
import { MTH_PRODUCT_PATH } from "@/lib/mth/constants";

export type SEOPageConfig = ContentPageProps & {
  slug: string;
};

export const seoPages: SEOPageConfig[] = [
  {
    slug: "daily-check-in-app",
    title: "Daily Check-In App",
    description:
      "A simple daily check-in app that helps you stay connected with the people who matter, without constant calls or surveillance. Check in once a day to let your trusted contacts know you're okay.",
    intro: "",
    sections: [
      {
        heading: "How does a daily check-in work?",
        subheading: "A simple habit that keeps people connected",
        paragraphs: [
          "Set a convenient time for your daily check-in and confirm you're okay with a single tap. It's a small everyday habit that gives your family or trusted contacts peace of mind.",
        ],
      },
      {
        heading: "What happens when you miss a check-in?",
        paragraphs: [
          "If you don't check in as expected, Main Theek Hoon can send an SMS alert to your trusted contacts, letting them know that your usual check-in hasn't happened. They can then reach out and make sure you're okay.",
        ],
      },
      {
        heading: "Reassurance, not surveillance",
        paragraphs: [
          "Main Theek Hoon is designed to help people stay connected without constantly monitoring them. There is no need for someone to track your movements or keep calling to ask if you're okay. You simply check in, and your trusted contacts know.",
        ],
      },
    ],
    relatedLinks: [
      { href: MTH_PRODUCT_PATH, label: "About Main Theek Hoon" },
      {
        href: "/resources/why-daily-check-ins-matter",
        label: "Why daily check-ins matter",
      },
    ],
  },
  {
    slug: "safety-app-for-seniors",
    title: "Safety App for Seniors",
    description:
      "A privacy-first safety app designed for seniors—simple check-ins, not complicated tech.",
    intro:
      "Seniors and their families often want reassurance without complicated apps or invasive tracking. A safety app built for seniors should be easy to use, respectful of privacy, and focused on connection—not surveillance.",
    sections: [
      {
        heading: "What seniors need from a safety app",
        paragraphs: [
          "Large text, clear actions, and no steep learning curve matter. Seniors shouldn't need to navigate complex settings or share their location 24/7 to feel safe.",
          "The best safety apps for seniors combine simplicity with reliability: a daily check-in, optional alerts to family, and respect for independence.",
        ],
      },
      {
        heading: "How MTH supports seniors",
        paragraphs: [
          "Main Theek Hoon is designed with seniors in mind—one daily check-in, optional SMS alerts to family, and no GPS tracking. It's reassurance without the burden of constant monitoring.",
        ],
      },
    ],
    relatedLinks: [
      { href: MTH_PRODUCT_PATH, label: "Main Theek Hoon features" },
      {
        href: "/check-in-app-for-elderly-parents",
        label: "Check-in app for elderly parents",
      },
    ],
  },
  {
    slug: "safety-app-for-people-living-alone",
    title: "Safety App for People Living Alone",
    description:
      "Stay connected and reassure loved ones with a simple safety app—no surveillance required.",
    intro:
      "Living alone doesn't mean you want to be watched—but it can help to know someone will notice if something's wrong. A safety app for people living alone should offer that safety net without compromising privacy or independence.",
    sections: [
      {
        heading: "Independence with a safety net",
        paragraphs: [
          "Many people living alone want autonomy first. They don't want family calling every day—or tracking their every move. A check-in based safety app offers a middle ground: you confirm you're okay on your schedule; if you don't, someone you trust can be alerted.",
        ],
      },
      {
        heading: "MTH for solo living",
        paragraphs: [
          "Main Theek Hoon is built for people who live alone and want peace of mind for themselves and their loved ones. One daily check-in. Optional alerts. No GPS. No surveillance.",
        ],
      },
    ],
    relatedLinks: [
      { href: MTH_PRODUCT_PATH, label: "Learn about MTH" },
      {
        href: "/resources/safety-without-surveillance",
        label: "Safety without surveillance",
      },
    ],
  },
  {
    slug: "check-in-app-for-elderly-parents",
    title: "Check-In App for Elderly Parents",
    description:
      "Help elderly parents stay independent while giving your family peace of mind.",
    intro:
      "Caring for elderly parents often means balancing their independence with your worry. A check-in app for elderly parents lets them live on their own terms while giving you a simple signal that they're okay each day.",
    sections: [
      {
        heading: "Peace of mind without overstepping",
        paragraphs: [
          "Daily phone calls can feel intrusive—for parents and for you. A check-in app reduces that friction: parents check in when it suits them; you get notified only when they don't, so you know when to reach out.",
        ],
      },
      {
        heading: "Why families choose MTH",
        paragraphs: [
          "Main Theek Hoon is easy for parents to use and respectful of their privacy. No location tracking, no complicated setup—just a daily habit that keeps everyone connected.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/family-reassurance", label: "Family reassurance" },
      {
        href: "/resources/how-to-check-on-elderly-parents",
        label: "How to check on elderly parents",
      },
    ],
  },
  {
    slug: "family-reassurance",
    title: "Family Reassurance",
    description:
      "Give your family reassurance with a simple daily check-in—without constant calls or tracking.",
    intro:
      "Family reassurance doesn't have to mean hourly texts or GPS tracking. A thoughtful daily check-in can tell the people who care about you that you're fine—on your terms.",
    sections: [
      {
        heading: "Reassurance, not surveillance",
        paragraphs: [
          "True reassurance comes from knowing someone will notice if something's wrong—not from watching someone's every move. A daily check-in creates that signal without eroding trust or privacy.",
        ],
      },
      {
        heading: "MTH for families",
        paragraphs: [
          "Main Theek Hoon helps families stay connected across distance and busy schedules. One check-in a day can replace dozens of worried messages—and give everyone more peace of mind.",
        ],
      },
    ],
    relatedLinks: [
      { href: MTH_PRODUCT_PATH, label: "Main Theek Hoon" },
      {
        href: "/resources/emergency-vs-reassurance",
        label: "Emergency vs reassurance",
      },
    ],
  },
  {
    slug: "privacy-first-safety-app",
    title: "Privacy-First Safety App",
    description:
      "A safety app that protects your privacy—no GPS tracking, no surveillance, just simple check-ins.",
    intro:
      "Not every safety app respects your privacy. Many track your location, read your data, or share information with third parties. A privacy-first safety app puts you in control: you choose what to share, when, and with whom.",
    sections: [
      {
        heading: "What privacy-first means",
        paragraphs: [
          "Privacy-first means no hidden tracking, no selling your data, and no features that turn reassurance into surveillance. Your check-in is yours—shared only with the contacts you choose.",
        ],
      },
      {
        heading: "MTH's privacy commitment",
        paragraphs: [
          "Main Theek Hoon is built privacy-first: no GPS tracking, minimal data collection, and clear controls over who gets notified. Safety and privacy can—and should—go together.",
        ],
      },
    ],
    relatedLinks: [
      { href: MTH_PRODUCT_PATH, label: "MTH privacy" },
      {
        href: "/resources/safety-without-gps-tracking",
        label: "Safety without GPS tracking",
      },
    ],
  },
];

export function getSEOPage(slug: string): SEOPageConfig | undefined {
  return seoPages.find((page) => page.slug === slug);
}
