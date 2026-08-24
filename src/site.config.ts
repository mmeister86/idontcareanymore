export const SITE = {
  brand: "idontcareanymore",
  tld: ".lol",
  kaomoji: "¯\\_(ツ)_/¯",
  tagline: "The all-in-one platform for giving me money.",
  paypalUrl: "https://paypal.me/mmeister86",
  paypalLabel: "paypal.me/mmeister86",

  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Give me money",
  },

  hero: {
    pill: "v1.0 — shipped in one afternoon",
    titleTop: "The all-in-one platform for",
    titleGradient: "giving me money",
    subtitle:
      "We spent years building products nobody wanted. Then we pivoted to a single link. Zero features. Zero bugs. Zero regrets. Mostly.",
    ctaPrimary: "Start donating — free forever",
    ctaSecondary: "See pricing",
    microcopy: "No account. No credit card. No catch. Just a link.",
    stats: ["1 link shipped", "0 features", "0 downtime (it's static)", "∞ apathy"],
  },

  logos: {
    label: "Trusted by absolutely no one (yet)",
    placeholder: "your logo here",
    count: 5,
  },

  features: {
    eyebrow: "Features",
    title: "Everything you never asked for",
    subtitle:
      "A rich set of no features, thoughtfully omitted. Each one production-ready since there is no production.",
    items: [
      {
        icon: [
          "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        ],
        title: "Blazing fast",
        text: "The entire product is a hyperlink. It loads before you finish clicking. Benchmarks: yes.",
      },
      {
        icon: [
          "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        ],
        title: "Enterprise-grade apathy",
        text: "Our support team doesn't care at any scale. Consistently. Across all tiers. That's an SLA you can feel.",
      },
      {
        icon: ["M9 17H7A5 5 0 0 1 7 7h2", "M15 7h2a5 5 0 1 1 0 10h-2", "M8 12h8"],
        title: "Seamless integration",
        text: "Integrates natively with your wallet. No API keys, no webhooks, no OAuth flow. Just money.",
      },
      {
        icon: [
          "M7 11V7a5 5 0 0 1 10 0v4",
          "M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z",
        ],
        title: "Privacy-first",
        text: "We collect zero data, mostly because we didn't build anything that could collect it.",
      },
      {
        icon: [
          "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
        ],
        title: "Infinite scalability",
        text: "One link serves one user or ten billion. Our infrastructure costs $0 and always will.",
      },
      {
        icon: [
          "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        ],
        title: "Honest pricing",
        text: "We charge exactly what you decide. The most transparent pricing model ever devised.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "What people are saying",
    subtitle: "Real quotes from real people who may not exist.",
    items: [
      {
        stars: "★★★★★",
        quote:
          "I paid $3 and felt a brief moment of purpose. 10/10 would question my choices again.",
        author: "Anonymous",
        role: "Verified payer",
      },
      {
        stars: "★★★★★",
        quote: "Finally a SaaS that ships exactly what it promises: a link.",
        author: "Gartner",
        role: "Probably not",
      },
      {
        stars: "★★★☆☆",
        quote: "The timer at the bottom made me feel watched. I liked it.",
        author: "Someone",
        role: "Hacker News",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Pay what you don't have to",
    subtitle: "Three tiers. One link. Same product every time.",
    tiers: [
      {
        name: "Indifferent",
        price: "$0",
        period: "forever",
        blurb: "For people who also don't care.",
        features: [
          { label: "Access to the link", included: true },
          { label: "0 features", included: true },
          { label: "0 emails, forever", included: true },
          { label: "Refunds", included: false },
        ],
        cta: "You're already on this plan",
        href: "#",
        highlight: false,
      },
      {
        name: "Whatever",
        price: "$ you decide",
        period: "one time, or not",
        blurb: "For supporters of giving up.",
        badge: "Least unpopular",
        features: [
          { label: "Everything in Indifferent", included: true },
          { label: "Money leaves your account", included: true },
          { label: "My genuine, momentary surprise", included: true },
          { label: "One (1) thank you, in spirit", included: true },
        ],
        cta: "Start giving up",
        href: "PAYPAL",
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "don't ask",
        period: "per quarter, maybe",
        blurb: "For organizations that have given up at scale.",
        features: [
          { label: "Everything in Whatever", included: true },
          { label: "Dedicated apathy manager", included: true },
          { label: "Custom-tailored indifference", included: true },
          { label: "An invoice, I guess", included: false },
        ],
        cta: "Contact sales (don't)",
        href: "PAYPAL",
        highlight: false,
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions nobody asked",
    items: [
      {
        q: "Is this a joke?",
        a: "It was, until someone sent $5.",
      },
      {
        q: "What do I get for my money?",
        a: "Nothing tangible. Plus the quiet dignity of supporting a developer who finally stopped pretending.",
      },
      {
        q: "Can I get a refund?",
        a: "You can ask. That's not a yes.",
      },
      {
        q: "Will there be new features?",
        a: "No. Feature-complete since launch. You're welcome.",
      },
      {
        q: "Are you okay?",
        a: "Financially? Soon, maybe. Otherwise: next question.",
      },
      {
        q: "Why is there a timer counting my visit?",
        a: "Because time doesn't care either.",
      },
    ],
  },

  finalCta: {
    title: "Ready to stop caring together?",
    subtitle:
      "One click. One link. One mild sense of accomplishment for everyone involved.",
    button: "Send money or don't",
  },

  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Changelog", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Blog", href: "#" },
          { labelOnly: "Careers — No." },
        ],
      },
      {
        title: "Legal",
        links: [
          { labelOnly: "Privacy — we collect nothing." },
          { labelOnly: "Terms — don't sue us." },
        ],
      },
    ],
    status: "all systems whatever",
    copyright: "© whatever year this is",
    timerTemplate: "You've been here for {t}. I still don't care.",
    timerInitial: "0 seconds",
  },
} as const
