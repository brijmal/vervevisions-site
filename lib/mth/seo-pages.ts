import type { ContentPageProps } from "@/app/components/mth/ContentPage";
import { MTH_PRODUCT_PATH } from "@/lib/mth/constants";

export type SEOPageConfig = ContentPageProps & {
  slug: string;
  /** Unique browser/search title (without site name suffix) */
  seoTitle: string;
  /** Unique meta description (~150–160 characters) */
  seoDescription: string;
};

export const seoPages: SEOPageConfig[] = [
  {
    slug: "daily-check-in-app",
    title: "Daily Check-In App",
    seoTitle: "Daily Check-In App for Family Peace of Mind",
    seoDescription:
      "A simple daily check-in app to let trusted contacts know you're okay—without constant calls, GPS tracking, or surveillance. Try Main Theek Hoon.",
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
          "Main Theek Hoon keeps the ritual simple: check in when you're ready, and your chosen contacts get peace of mind. No GPS tracking, no always-on surveillance—just a daily wellness habit that works for seniors, people living alone, and families who want to stay connected.",
        ],
      },
    ],
    ctaDescription:
      "One tap a day to let the people who matter know you're okay—without calls, tracking, or complicated setup.",
    relatedLinks: [
      {
        href: "/resources/why-daily-check-ins-matter",
        label: "Why daily check-ins matter",
      },
    ],
  },
  {
    slug: "safety-app-for-seniors",
    title: "Safety App for Seniors",
    seoTitle: "Safety App for Seniors — Simple Daily Check-Ins",
    seoDescription:
      "A privacy-first safety app for seniors: easy daily check-ins, optional family alerts, and no complicated tech or constant monitoring. Learn about Main Theek Hoon.",
    description:
      "A privacy-first safety app designed for seniors—simple check-ins, not complicated tech. Seniors and their families often want reassurance without complicated apps or invasive tracking.",
    intro: "",
    sections: [
      {
        heading: "What seniors need from a safety app",
        paragraphs: [
          "Large text, clear actions, and no steep learning curve matter. Seniors shouldn't need to navigate complex settings or share their location 24/7 to feel safe.",
          "A safety app built for seniors should be easy to use, respectful of privacy, and focused on connection—not surveillance.",
        ],
      },
      {
        heading: "Simple enough for everyday use",
        paragraphs: [
          "A safety app for seniors should be easy to understand and use. A clear action and a simple daily routine can be more useful than complicated features that are difficult to remember.",
        ],
      },
      {
        heading: "How MTH supports seniors",
        paragraphs: [
          "Main Theek Hoon is designed with seniors in mind—one daily check-in, optional location alerts to family, and no GPS tracking. It's reassurance without the burden of constant monitoring.",
        ],
      },
    ],
    ctaDescription:
      "Designed for seniors who want independence with a simple daily check-in—not complicated tech or constant monitoring.",
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
    seoTitle: "Safety App for People Living Alone",
    seoDescription:
      "Stay independent with a safety net. Main Theek Hoon is a check-in app for people living alone—no GPS surveillance, just daily reassurance for you and your loved ones.",
    description:
      "Living alone doesn't mean you want to be watched—but it can help to know someone will notice if something's wrong. A safety app for people living alone should offer that safety net without compromising privacy or independence.",
    intro: "",
    sections: [
      {
        heading: "Independence with a safety net",
        paragraphs: [
          "Many people living alone want autonomy first. They don't want family calling every day—or tracking their every move. A check-in based safety app offers a middle ground: you confirm you're okay on your schedule; if you don't, someone you trust can be alerted.",
        ],
      },
      {
        heading: "Safety without surveillance",
        paragraphs: [
          "Main Theek Hoon doesn't require continuous GPS tracking or someone watching your movements. You decide when to check in, who your trusted contacts are, and whether to share your location.",
        ],
      },
      {
        heading: "MTH for solo living",
        paragraphs: [
          "Main Theek Hoon is built for people who live alone and want peace of mind for themselves and their loved ones. One daily check-in. Optional alerts. No GPS. No surveillance.",
        ],
      },
    ],
    ctaDescription:
      "Built for people who live alone and want peace of mind for themselves and their loved ones—on your terms.",
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
    seoTitle: "Check-In App for Elderly Parents",
    seoDescription:
      "Know your elderly parents are okay without constant calls or monitoring. A simple daily check-in app that respects their independence and gives you peace of mind.",
    description:
      "Caring for elderly parents often means balancing their independence with your worry. A check-in app for elderly parents lets them live on their own terms while giving you a simple signal that they're okay each day.",
    intro: "",
    sections: [
      {
        heading: "Peace of mind without overstepping",
        paragraphs: [
          "Daily phone calls can feel intrusive—for parents and for you. A check-in app reduces that friction: parents check in when it suits them; you get notified only when they don't, so you know when to reach out.",
        ],
      },
      {
        heading: "Is there a simple way to know they're okay?",
        paragraphs: [
          "If you have elderly parents, you worry about them—that's natural. But you don't want to constantly monitor them or call every day asking if they're fine. A daily check-in app answers that question simply: parents confirm they're okay when it suits them, and you're alerted only when they don't. Reassurance for you, independence for them.",
        ],
      },
      {
        heading: "Why families choose MTH",
        paragraphs: [
          "Main Theek Hoon is easy for parents to use and respectful of their privacy. No location tracking, no complicated setup—just a daily habit that keeps everyone connected.",
        ],
      },
    ],
    ctaDescription:
      "Give your parents independence and yourself peace of mind—with one simple daily check-in.",
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
    seoTitle: "Family Reassurance Without Constant Calls or Tracking",
    seoDescription:
      "Give your family peace of mind with a simple daily check-in—not hourly texts or GPS tracking. Main Theek Hoon keeps everyone connected on your terms.",
    description:
      "Family reassurance doesn't have to mean hourly texts or GPS tracking. A thoughtful daily check-in can tell the people who care about you that you're fine—on your terms.",
    intro: "",
    sections: [
      {
        heading: "A simple way to stay connected",
        paragraphs: [
          "One check-in a day can become a simple signal that everything is okay. It's especially useful when family members live apart or have different routines and schedules.",
        ],
      },
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
    ctaDescription:
      "Stay connected across distance and busy schedules with one check-in a day that replaces dozens of worried messages.",
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
    seoTitle: "Privacy-First Safety App — No Login, No Cloud Tracking",
    seoDescription:
      "A privacy-first safety app with no login, no cloud storage, and no data sharing. Main Theek Hoon uses simple check-ins—not GPS surveillance—to keep you connected.",
    description:
      "Not every safety app respects your privacy. Many track your location, sell your data, or store your information in the cloud. Main Theek Hoon is different—a privacy-first safety app built on simple daily check-ins, not surveillance. No login. No cloud. No data sharing. No location tracking unless you choose it.",
    intro: "",
    sections: [
      {
        heading: "What privacy-first means",
        paragraphs: [
          "Privacy-first means no hidden tracking, no selling your data, and no features that turn reassurance into surveillance. Your check-in is yours—shared only with the contacts you choose, on your terms.",
        ],
      },
      {
        heading: "No login. No cloud. No data sharing.",
        paragraphs: [
          "No login required—use Main Theek Hoon without creating an account or handing over personal credentials.",
          "No cloud storage—all your data stays on your device, not on distant servers you can't control.",
          "No data sharing—we don't sell your information, share it with third parties, or use it for advertising.",
        ],
      },
      {
        heading: "No location tracking—unless you choose",
        paragraphs: [
          "No GPS tracking by default. Main Theek Hoon doesn't follow your movements or monitor you continuously. Location is shared only if you enable it—and only when sending an alert to trusted contacts you select.",
        ],
      },
      {
        heading: "MTH's privacy commitment",
        paragraphs: [
          "Main Theek Hoon is built privacy-first from the ground up: no login, no cloud, no data sharing, no ads, and no always-on location tracking. Clear controls over who gets notified. Safety and privacy can—and should—go together.",
        ],
      },
    ],
    ctaDescription:
      "No login, no cloud, no data sharing—just a private daily check-in that puts you in control.",
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
