// src/content.ts

export const content = {
  header: {
    logo: "StatCat",
    navLinks: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Testimonials', href: '#testimonials' },
    ],
    cta: "Book a Demo",
  },
  hero: {
    badge: "Built for Canadian Football Clubs",
    title: "The All-In-One Platform to Manage, Train, and Grow Your Club",
    subtitle: "StatCat centralizes everything from athlete onboarding and combine data to team calendars and performance reports. Stop chasing paperwork and start building champions.",
    cta1: "Book a Demo",
    cta2: "See in 2 Min",
    startCta: {
      text: "START",
      description: "",
      href: "https://stats-cat.vercel.app/",
    }
  },
  trustedBy: {
    title: "Trusted by Leading Clubs in Ontario",
    logos: ['Club Logo 1', 'Club Logo 2', 'Club Logo 3', 'Club Logo 4', 'Club Logo 5'],
  },
  highlights: {
    title: "Everything Your Club Needs. Nothing It Doesn’t.",
    subtitle: "StatCat eliminates fragmented tools and spreadsheets, giving you a single source of truth to run your entire football operation.",
    cards: [
      {
        title: 'Automated Athlete Onboarding',
        description: 'Capture documents, get approvals, and manage player profiles in one seamless workflow. Approve athletes 5x faster.',
      },
      {
        title: 'Centralized Team Management',
        description: 'Drag-and-drop rosters, manage coaching staff, and keep everyone synced with a central team feed and calendar.',
      },
      {
        title: 'Advanced Combine & Analytics',
        description: 'Enter metrics, track progress with leaderboards, and generate shareable report cards. One combine and reporting runway.',
      },
    ]
  },
  howItWorks: {
    title: "Get Up and Running in Minutes",
    subtitle: "Our intuitive platform makes it simple to centralize your entire club workflow.",
    steps: [
      {
        number: '01',
        title: 'Onboard Athletes Seamlessly',
        description: 'Invite players and parents to a branded portal to complete paperwork, upload documents, and get approved.',
      },
      {
        number: '02',
        title: 'Manage Teams & Events',
        description: 'Build rosters, schedule practices or combines, and track availability with automated RSVPs.',
      },
      {
        number: '03',
        title: 'Track Metrics & Performance',
        description: 'Input combine data, monitor team leaderboards, and identify top performers with powerful analytics.',
      },
      {
        number: '04',
        title: 'Deliver Reports & Feedback',
        description: 'Generate professional athlete report cards and share performance insights with players and staff.',
      },
    ]
  },
  metrics: {
    items: [
      {
        value: '5x',
        label: 'Faster Athlete Approval',
        description: 'Cut down on administrative overhead and get players on the field sooner.'
      },
      {
        value: '80%',
        label: 'More Feed Engagement',
        description: 'Keep teams, coaches, and parents connected with a single, central communication hub.'
      },
      {
        value: '50+',
        label: 'Hours Saved Per Season',
        description: 'Eliminate spreadsheets and manual data entry, freeing up time for coaching.'
      },
    ]
  },
  analytics: {
    title: "Unlock Performance with Powerful Analytics",
    subtitle: "Go beyond simple times and scores. StatCat provides a dedicated combine and reporting runway to track, analyze, and visualize athlete performance over time.",
    metricTiles: ['40-Yard Dash', 'Yo-Yo Test', 'Broad Jump', 'Vertical Jump', '3-Cone Drill', 'Shuttle Run'],
    cta: "Explore Analytics",
    placeholder: {
      title: "[ Dashboard Screenshot Placeholder ]",
      subtitle: "A clean visual of the analytics dashboard showing leaderboards and player report cards.",
    }
  },
  teamEvents: {
    title: "Keep Everyone In Sync, Effortlessly",
    subtitle: "Manage rosters, communicate with your team, and schedule events all in one place. Automated notifications and availability tracking mean no one misses a beat.",
    features: [
      {
        title: 'Drag-and-Drop Rosters',
        description: 'Easily move players between teams and age groups.',
      },
      {
        title: 'Automated RSVP & Availability',
        description: 'Schedule events and know instantly who can attend.',
      },
    ],
    placeholder: {
      title: "[ Team Roster & Calendar UI Placeholder ]",
      subtitle: "A mock-up showing a drag-and-drop roster and an event with RSVP status.",
    }
  },
  branding: {
    title: "Your Club, Your Brand",
    subtitle: "Reinforce your club's identity with white-label branding. StatCat allows you to customize the platform with your logos and color schemes, providing a professional and unified experience for your athletes and staff.",
    defaultTheme: {
      title: "Default Theme",
      placeholder: "[ StatCat App UI ]"
    },
    customTheme: {
      title: "Your Club's Theme",
      placeholder: "[ Your Branded App UI ]"
    }
  },
  security: {
    title: "Security and Trust You Can Rely On",
    subtitle: "We take data security seriously, so you can focus on what matters most.",
    features: [
      {
        title: 'Role-Based Access Control (RBAC)',
        description: 'Ensure users only see what they need to, from club admins to individual athletes.'
      },
      {
        title: 'Data Encryption',
        description: 'All data, including document uploads and athlete information, is encrypted at rest and in transit.'
      },
      {
        title: 'Secure Infrastructure',
        description: 'Built on enterprise-grade infrastructure to ensure reliability, performance, and security.'
      }
    ]
  },
  testimonials: {
    title: "Don't Just Take Our Word For It",
    items: [
      {
        quote: "StatCat transformed our combine process. What used to take weeks of paperwork now takes a few hours. The report cards are a game-changer for player feedback.",
        name: 'John Smith',
        role: 'Head Coach, Ontario Prospects'
      },
      {
        quote: "The athlete onboarding is incredibly efficient. We approved our entire U18 roster in two days. The platform is intuitive and saves our admin staff a ton of time.",
        name: 'Emily Williams',
        role: 'Club Administrator, GTA Football'
      },
      {
        quote: "As a data-driven coach, having all our performance metrics in one place is invaluable. The leaderboards have sparked a new level of competition in practice.",
        name: 'Michael Brown',
        role: 'Performance Coach, Northern Lights Academy'
      }
    ]
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the plan that fits your club's needs. No hidden fees.",
    tiers: [
      {
        name: 'Pro',
        price: '$99',
        frequency: '/ per club / month',
        description: 'For growing clubs that need a powerful, centralized solution.',
        features: [
          'Up to 250 Athletes',
          'Full Athlete Onboarding',
          'Team & Event Management',
          'Combine & Analytics',
          'Standard Support',
        ],
        cta: 'Start Pro Trial',
        isFeatured: false,
      },
      {
        name: 'Elite',
        price: '$199',
        frequency: '/ per club / month',
        description: 'For established clubs demanding advanced features and customization.',
        features: [
          'Unlimited Athletes',
          'Everything in Pro',
          'White-Label Branding',
          'Advanced Reporting',
          'Priority Support',
        ],
        cta: 'Book an Elite Demo',
        isFeatured: true,
      },
    ],
    enterpriseCta: "Need a solution for a large league or organization? Contact us for enterprise pricing."
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: 'Is StatCat designed for a specific level of football?',
        answer: 'StatCat is built for all levels of amateur football, from youth leagues to elite development academies. Its flexible features can be adapted to any club size or complexity.'
      },
      {
        question: 'How does athlete onboarding work?',
        answer: 'You invite athletes (or their guardians) via email. They are directed to a secure, club-branded portal to fill out forms, upload necessary documents (like proof of age or medical forms), and sign waivers electronically.'
      },
      {
        question: 'Can we customize the combine metrics we track?',
        answer: 'Yes. While we provide templates for standard football combines, you have the flexibility to add, remove, or create custom metrics to fit your specific testing protocol.'
      },
      {
        question: 'Is our data secure?',
        answer: 'Absolutely. We use industry-standard encryption for all data in transit and at rest. Our platform includes role-based access control to ensure that only authorized personnel can view sensitive information.'
      }
    ]
  },
  finalCta: {
    title: "Ready to See StatCat in Action?",
    subtitle: "Schedule a free, no-obligation demo with one of our experts. We’ll walk you through the platform and show you how StatCat can be tailored to your club's exact needs.",
    formPlaceholder: "Enter your email",
    cta: "Book a Demo"
  },
  footer: {
    tagline: "The All-In-One Football Club Platform",
    copyright: "StatCat. All Rights Reserved.",
    navLinks: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Book a Demo', href: '#cta' },
    ],
    socialLinks: [
      { name: 'twitter', href: '#' },
      { name: 'facebook', href: '#' },
      { name: 'linkedin', href: '#' },
    ],
    legalLinks: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
    ]
  }
};
