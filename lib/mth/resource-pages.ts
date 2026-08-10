import type { ContentPageProps } from "@/app/components/mth/ContentPage";
import { MTH_PRODUCT_PATH } from "@/lib/mth/constants";

export type ResourcePageConfig = ContentPageProps & {
  slug: string;
};

export const resourcePages: ResourcePageConfig[] = [
  {
    slug: "why-daily-check-ins-matter",
    title: "Why Daily Check-Ins Matter",
    description:
      "How a simple daily check-in can improve wellbeing, connection, and peace of mind for you and your family.",
    intro:
      "A daily check-in isn't just about safety—it's a small ritual that builds connection, routine, and awareness. For seniors, people living alone, and families spread across cities, that one moment each day can make a real difference.",
    breadcrumb: { label: "Resources", href: "/resources" },
    sections: [
      {
        heading: "Routine supports wellbeing",
        paragraphs: [
          "Daily habits anchor our days. A check-in gives structure—a moment to pause, reflect, and confirm you're okay. For many people, that consistency supports mental and physical wellbeing.",
        ],
      },
      {
        heading: "Connection without intrusion",
        paragraphs: [
          "Families want to know you're fine without calling three times a day. A check-in bridges that gap: one signal that says 'I'm okay today,' and everyone can breathe easier.",
        ],
      },
      {
        heading: "Early awareness when something's wrong",
        paragraphs: [
          "When check-ins are missed, it's a gentle prompt for someone to reach out—not an alarm, but an early nudge that something might need attention.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/daily-check-in-app", label: "Daily check-in app" },
      { href: MTH_PRODUCT_PATH, label: "Main Theek Hoon" },
    ],
  },
  {
    slug: "emergency-vs-reassurance",
    title: "Emergency vs Reassurance",
    description:
      "Understanding the difference between emergency alerts and daily reassurance—and why both matter.",
    intro:
      "Not every safety tool is built for the same job. Emergency systems respond to crises; reassurance tools help prevent worry before it becomes a crisis. Knowing the difference helps you choose the right approach for yourself or your family.",
    breadcrumb: { label: "Resources", href: "/resources" },
    sections: [
      {
        heading: "Emergency: when something is wrong now",
        paragraphs: [
          "Emergency alerts are for acute situations—falls, medical events, immediate danger. They're loud, urgent, and designed for rapid response.",
        ],
      },
      {
        heading: "Reassurance: everyday peace of mind",
        paragraphs: [
          "Reassurance is quieter. It's the daily 'I'm fine' that keeps families from worrying unnecessarily—and the missed check-in that prompts a caring call before a small issue becomes a big one.",
        ],
      },
      {
        heading: "Why MTH focuses on reassurance",
        paragraphs: [
          "Main Theek Hoon is built for daily reassurance, not emergency response. It complements—not replaces—medical alert systems and emergency services.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/family-reassurance", label: "Family reassurance" },
      { href: MTH_PRODUCT_PATH, label: "About MTH" },
    ],
  },
  {
    slug: "how-to-check-on-elderly-parents",
    title: "How to Check on Elderly Parents",
    description:
      "Practical, respectful ways to stay connected with elderly parents without overwhelming them.",
    intro:
      "Checking on elderly parents is an act of love—but it can feel awkward for everyone if it's too frequent or too intrusive. Here's how to find a balance that respects their independence and your peace of mind.",
    breadcrumb: { label: "Resources", href: "/resources" },
    sections: [
      {
        heading: "Start with a conversation",
        paragraphs: [
          "Ask what kind of contact feels right to them. Some parents want a daily call; others prefer a weekly visit and space in between. Listen first, then agree on a rhythm.",
        ],
      },
      {
        heading: "Use tools that reduce friction",
        paragraphs: [
          "A simple check-in app can replace anxious 'did you eat?' texts with one clear signal. Parents check in when ready; you only hear when they don't.",
        ],
      },
      {
        heading: "Respect independence",
        paragraphs: [
          "The goal isn't control—it's connection. Choose approaches that empower parents to live on their terms while keeping a safety net in place.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/check-in-app-for-elderly-parents",
        label: "Check-in app for elderly parents",
      },
      { href: MTH_PRODUCT_PATH, label: "Main Theek Hoon" },
    ],
  },
  {
    slug: "safety-without-surveillance",
    title: "Safety Without Surveillance",
    description:
      "You can stay safe and connected without giving up your privacy or independence.",
    intro:
      "Safety and surveillance are not the same thing. Real safety respects autonomy; surveillance often erodes it. Here's how to think about staying connected without being watched.",
    breadcrumb: { label: "Resources", href: "/resources" },
    sections: [
      {
        heading: "The surveillance trap",
        paragraphs: [
          "Many 'safety' apps track location, listen for sounds, or monitor activity 24/7. That can feel protective—but it can also feel invasive, especially for seniors and adults who value independence.",
        ],
      },
      {
        heading: "A better model: consent and check-ins",
        paragraphs: [
          "Check-in based safety puts you in control. You decide when to check in and who gets notified. No hidden tracking, no always-on monitoring.",
        ],
      },
      {
        heading: "MTH's approach",
        paragraphs: [
          "Main Theek Hoon is designed for safety without surveillance—one daily check-in, optional alerts, and privacy by default.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/privacy-first-safety-app", label: "Privacy-first safety app" },
      {
        href: "/resources/safety-without-gps-tracking",
        label: "Safety without GPS tracking",
      },
    ],
  },
  {
    slug: "safety-without-gps-tracking",
    title: "Safety Without GPS Tracking",
    description:
      "Why GPS tracking isn't always the answer—and what to use instead for peace of mind.",
    intro:
      "GPS tracking promises safety by showing where someone is. But for many people, that's not safety—it's loss of privacy. There are better ways to stay connected without following someone's every move.",
    breadcrumb: { label: "Resources", href: "/resources" },
    sections: [
      {
        heading: "When GPS helps—and when it doesn't",
        paragraphs: [
          "GPS can be useful in specific situations, but constant location sharing isn't necessary for everyday reassurance. Most families simply want to know their loved one is okay—not where they are every hour.",
        ],
      },
      {
        heading: "Check-ins over coordinates",
        paragraphs: [
          "A daily check-in answers the question families actually ask: 'Are you alright today?' That's often more meaningful than a dot on a map.",
        ],
      },
      {
        heading: "MTH: no GPS required",
        paragraphs: [
          "Main Theek Hoon never tracks your location. Peace of mind comes from connection, not coordinates.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/privacy-first-safety-app", label: "Privacy-first safety app" },
      { href: MTH_PRODUCT_PATH, label: "MTH privacy" },
    ],
  },
  {
    slug: "why-sms-for-safety-alerts",
    title: "Why SMS for Safety Alerts",
    description:
      "Why text messages are still one of the most reliable ways to reach family in a check-in app.",
    intro:
      "When a check-in is missed, someone needs to know—quickly and reliably. SMS remains one of the most dependable ways to reach people, regardless of smartphone habits or app notifications.",
    breadcrumb: { label: "Resources", href: "/resources" },
    sections: [
      {
        heading: "SMS reaches almost everyone",
        paragraphs: [
          "Not everyone checks app notifications promptly. SMS cuts through—most people see texts within minutes, even on basic phones or when data is limited.",
        ],
      },
      {
        heading: "Simple for family members",
        paragraphs: [
          "Family contacts don't need to install another app to receive an alert. A text is universal, familiar, and hard to miss.",
        ],
      },
      {
        heading: "How MTH uses SMS",
        paragraphs: [
          "Main Theek Hoon can notify trusted contacts via SMS when a check-in is missed—so the right people know to reach out, without complicated setup.",
        ],
      },
    ],
    relatedLinks: [
      { href: MTH_PRODUCT_PATH, label: "How MTH works" },
      { href: "/family-reassurance", label: "Family reassurance" },
    ],
  },
  {
    slug: "daily-wellness-check",
    title: "Daily Wellness Check",
    description:
      "What a daily wellness check is, why it matters, and how to make it a simple habit.",
    intro:
      "A daily wellness check is a brief moment to confirm you're okay—physically, mentally, or both. It's a small habit with outsized benefits for individuals and families who want to stay connected.",
    breadcrumb: { label: "Resources", href: "/resources" },
    sections: [
      {
        heading: "More than a safety feature",
        paragraphs: [
          "Wellness checks encourage reflection. Am I okay today? Do I need rest, water, a walk, or a conversation? That pause can support long-term health.",
        ],
      },
      {
        heading: "Easy to maintain",
        paragraphs: [
          "The best wellness habits are simple. One tap, one confirmation, done. Apps like Main Theek Hoon are built to make that ritual effortless.",
        ],
      },
      {
        heading: "Shared with people who care",
        paragraphs: [
          "When you choose, your check-in can reassure family too—turning a personal habit into a shared source of peace of mind.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/resources/why-daily-check-ins-matter",
        label: "Why daily check-ins matter",
      },
      { href: "/daily-check-in-app", label: "Daily check-in app" },
    ],
  },
];

export function getResourcePage(slug: string): ResourcePageConfig | undefined {
  return resourcePages.find((page) => page.slug === slug);
}
