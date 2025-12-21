import { Project, SocialLink, Inspiration } from './types';

// Add timestamp to force cache refresh
const v = "?v=" + new Date().getTime();

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Driver Event App (FTN)',
    category: 'Logistics Platform',
    year: '2024',
    image: `https://picsum.photos/seed/ftnhero/2560/1600`,
    description: 'Enabling real-time driver updates and proactive monitoring for logistics operations teams.',
    caseStudy: {
      role: 'Product Designer',
      timeline: '3 Months',
      team: 'Product, Engineering, Operations',
      status: 'Live',
      company: 'Movam Technologies',
      problem: {
        statement: 'Admins had to manually call drivers to get updates, leading to unstructured data and no real-time visibility.',
        before: [
          'Admins manually called drivers for updates',
          'Driver updates were unstructured and inconsistent',
          'No real-time visibility into driver activity',
          'High-level statuses lacked context'
        ],
        ledTo: [
          'Delayed operational decisions',
          'Inconsistent reporting across drivers',
          'High manual effort for ops teams'
        ],
        needs: [
          'Reduce manual calls between admins and drivers',
          'Provide structured, real-time visibility',
          'Scale workflows across different organizations'
        ]
      },
      context: {
        description: 'FTN (Field Task Notifications) is a new feature within the existing Movam B2B logistics platform. It was requested by an enterprise client but designed to scale.',
        constraints: [
          'Must align with Movam’s existing design language and UI patterns',
          'Had to work with existing backend event structures',
          'Needed to scale across multiple client organizations',
          'Designed for high-volume, real-time operational data',
          'Used daily by ops teams under time pressure'
        ],
        additional: 'This was not greenfield freedom. I worked within strict system constraints to deliver a scalable tool.'
      },
      myRole: {
        main: [
          'Owned problem framing and UX direction',
          'Designed driver event update flows',
          'Designed admin monitoring dashboard',
          'Defined status and sub-status logic',
          'Led UX for the workflow configuration feature'
        ],
        collaborated: [
          'Product managers on scope and rollout',
          'Engineers on real-time data, event logic, and loops',
          'Operations teams on validation and usability'
        ]
      },
      research: {
        description: 'Research focused on operational realities. Sources included client feedback, internal ops workflows, and analysis of existing manual logs.',
        inputs: [
          'Feedback from requesting enterprise client',
          'Internal operations workflows',
          'Existing driver activity logs'
        ],
        insights: [
          'Admins don’t want more data — they want clear signals.',
          'The most important question is: “Who needs attention right now?”',
          'A fixed driver flow would not scale; organizations operate differently.'
        ]
      },
      decisions: [
        {
          id: 'd1',
          problem: 'Unstructured driver updates',
          subProblem: 'Drivers reported events inconsistently via calls/text.',
          decision: 'Created a standardized driver-facing event update flow.',
          why: 'Replaced informal communication with structured, timestamped data points.',
          image: 'https://picsum.photos/seed/ftn_d1/1600/1200'
        },
        {
          id: 'd2',
          problem: 'No real-time visibility',
          subProblem: 'Admins had to dig for information.',
          decision: 'Built a status-based admin dashboard grouping drivers by state.',
          why: 'Enabled admins to scan for exceptions rather than monitoring everyone.',
          image: 'https://picsum.photos/seed/ftn_d2/1600/1200'
        },
        {
          id: 'd3',
          problem: 'High-level statuses lacked context',
          subProblem: 'Knowing a driver is "Delayed" isn\'t enough.',
          decision: 'Introduced sub-statuses revealed on interaction.',
          why: 'Preserved dashboard clarity while allowing drill-down for actionable details.',
          image: 'https://picsum.photos/seed/ftn_d3/1600/1200'
        },
        {
          id: 'd4',
          problem: 'Different organizations had different flows',
          subProblem: 'A hardcoded sequence wouldn\'t scale.',
          decision: 'Developed a Workflow Configuration feature.',
          why: 'Allowed admins to define sequences, loops, and rules, turning a feature into a platform capability.',
          image: 'https://picsum.photos/seed/ftn_d4/1600/1200'
        }
      ],
      solutions: [
        {
          title: 'Driver App',
          features: [
            'Simple, guided event updates',
            'Clear next-step prompts',
            'Designed for quick field interaction'
          ],
          image: 'https://picsum.photos/seed/ftn_s1/1600/1200'
        },
        {
          title: 'Admin Dashboard',
          features: [
            'Real-time monitoring cards',
            'Status & sub-status drill-downs',
            'Detailed activity logs',
            'Aligned with Design System'
          ],
          image: 'https://picsum.photos/seed/ftn_s2/1600/1200'
        },
        {
          title: 'Workflow Configuration',
          description: 'A critical system upgrade that allows admins to build their own driver logic.',
          features: [
            'Sequential step definition',
            'Conditional paths',
            'Loop support for recurring tasks'
          ],
          image: 'https://picsum.photos/seed/ftn_s3/1600/1200'
        },
        {
          title: 'Notifications & Alerts',
          description: 'Scheduled reports and exception-based alerts (e.g., "Driver idle for 2 hours") to reduce dashboard fatigue.',
          features: [
            'Scheduled email reports',
            'Exception-based alerts',
            'Reduced monitoring noise'
          ],
          image: 'https://picsum.photos/seed/ftn_s4/1600/1200'
        }
      ],
      impact: {
        description: 'FTN successfully generalized beyond the original client request and is now a core part of the Movam platform.',
        outcomes: [
          'Reduced manual calls between admins and drivers',
          'Faster identification of stalled or inactive drivers',
          'More consistent and reliable driver updates',
          'Daily adoption by operations teams'
        ]
      },
      learnings: {
        good: [
          'Designing for operational clarity over visual flair',
          'Scaling via Status + Sub-status logic',
          'Designing effectively within an established system'
        ],
        improve: [
          'Workflow setup usability (initial friction)',
          'Alert fatigue prevention mechanisms',
          'Role-based customization for different admin types'
        ]
      },
      summary: 'FTN transformed how drivers report activity and how admins monitor operations. The project reinforced my ability to design scalable, operations-driven systems that work within real-world constraints.'
    }
  },
  {
    id: '02',
    title: 'Belyfted Banking as a Service',
    category: 'Fintech Platform',
    year: '2023',
    image: `https://picsum.photos/seed/belyfted_hero/2560/1600`,
    description: 'Enabling secure local UK-to-UK transactions within the Belyfted platform, built with strong compliance and user fund protection.',
    caseStudy: {
      role: 'Product Designer',
      timeline: '4 Months',
      team: 'Product, Engineering, Compliance, Security',
      status: 'Live',
      company: 'Belyfted',
      problem: {
        statement: 'Belyfted’s remittance platform needed to expand beyond international transfers to support local UK-to-UK transactions, allowing users to move money seamlessly within the UK.',
        before: [
          'Platform only supported international transfers',
          'Users had to rely on other banks for local needs',
          'Lack of integrated compliance checks for local flows'
        ],
        ledTo: [
          'Fragmented financial experience for users',
          'Missed revenue opportunities from local transaction volume',
          'User churn to competitors offering full banking suites'
        ],
        needs: [
          'Build a secure, reliable, and compliant local payments experience',
          'Give users confidence while using the Belyfted platform',
          'Ensure strict adherence to AML and KYC regulations'
        ]
      },
      context: {
        description: 'This feature was built from the ground up to support a new business vertical, considering strict regulatory compliance (AML, KYC) and security-first design principles.',
        constraints: [
          'Supporting multiple verification and authentication flows',
          'Ensuring transactions are reversible/traceable in case of disputes',
          'Designing a simple UI despite complex backend compliance logic',
          'Strict protection of user funds and fraud risk minimization'
        ],
        additional: 'Heavily involved cross-functional collaboration with compliance, legal, and engineering teams.'
      },
      myRole: {
        main: [
          'Designing the end-to-end user flow for UK local transfers',
          'Crafting UX that balances compliance, security, and usability',
          'Designing visual components consistent with Belyfted’s existing system'
        ],
        collaborated: [
          'Compliance and legal teams to integrate regulatory requirements',
          'Engineers to ensure secure transaction flows and error handling',
          'Product managers to align on business goals'
        ]
      },
      research: {
        description: 'Key research activities focused on regulatory requirements and user trust.',
        inputs: [
          'Reviewing regulatory requirements: AML, KYC, transaction monitoring',
          'Benchmarking other fintech BaaS providers',
          'User interviews on trust concerns with digital transactions',
          'Internal audit of existing flows'
        ],
        insights: [
          'Users value security and clarity over speed when handling money.',
          'Users expect real-time updates and confirmations for every step.',
          'Transparency in fees, processing times, and authentication increases trust.'
        ]
      },
      decisions: [
        {
          id: 'Problem 1',
          problem: 'Complex regulatory flows risked confusing users',
          subProblem: 'Compliance requires multiple verification steps (KYC, AML checks, identity verification).',
          decision: 'Use progressive disclosure, showing only necessary steps at each stage, with clear instructions and real-time feedback.',
          why: 'Reduces cognitive load while ensuring all regulatory requirements are met.',
          image: 'https://picsum.photos/seed/belyfted_d1/1600/1200'
        },
        {
          id: 'Problem 2',
          problem: 'Users needed reassurance that funds were secure',
          subProblem: 'Large transfers can cause anxiety if users are uncertain whether their money is protected.',
          decision: 'Added secure transaction indicators, real-time status updates, and transparent messaging about regulatory protections.',
          why: 'Builds trust and prevents confusion or unnecessary support requests.',
          image: 'https://picsum.photos/seed/belyfted_d2/1600/1200'
        },
        {
          id: 'Problem 3',
          problem: 'Handling errors or blocked transactions',
          subProblem: 'Compliance or banking rules may trigger transaction blocks.',
          decision: 'Design clear error states and guidance, with actionable steps (e.g., “Verify identity to proceed”) and contact options.',
          why: 'Prevents user frustration and reduces support load.',
          image: 'https://picsum.photos/seed/belyfted_d3/1600/1200'
        }
      ],
      solutions: [
        {
          title: 'Guided Transfer Flow',
          features: [
            'Simple, guided UK-to-UK transfer flow',
            'Real-time validation and feedback',
            'Intuitive beneficiary management'
          ],
          image: 'https://picsum.photos/seed/belyfted_s1/1600/1200'
        },
        {
          title: 'Security & Compliance',
          features: [
            'Clear security and compliance messaging',
            'Reassuring confirmations for completed transactions',
            'Secure authentication steps integrated seamlessly'
          ],
          image: 'https://picsum.photos/seed/belyfted_s2/1600/1200'
        },
        {
          title: 'Error Handling',
          features: [
            'Error handling with actionable next steps',
            'Clear guidance for blocked or pending transactions',
            'Direct access to support for critical issues'
          ],
          image: 'https://picsum.photos/seed/belyfted_s3/1600/1200'
        }
      ],
      impact: {
        description: 'After launch:',
        outcomes: [
          'Users were able to send local transfers safely and confidently',
          'Transaction errors were handled with minimal support intervention',
          'Positive qualitative feedback on trust and clarity',
          'Feature opened opportunities for additional local financial services'
        ],
        note: 'The feature has seen steady adoption and high trust scores from the user base.'
      },
      learnings: {
        good: [
          'Designing with security and compliance at the forefront',
          'Balancing regulatory requirements with user experience',
          'Building trust through transparent messaging'
        ],
        improve: [
          'Earlier testing of edge-case transaction flows',
          'Deeper personalization for frequent users to reduce friction'
        ]
      },
      summary: 'The Belyfted BaaS feature demonstrates how complex compliance-heavy fintech experiences can be designed to be simple, secure, and trustworthy. It strengthened my ability to work across product, compliance, and engineering teams to deliver high-stakes financial features.'
    }
  },
  {
    id: '03',
    title: 'Marketplace',
    category: 'Logistics SaaS',
    year: '2024',
    image: `https://picsum.photos/seed/marketplace_hero_v1/2560/1600`,
    description: 'A unified logistics marketplace connecting shippers with carriers to streamline freight procurement and capacity management.'
  },
  {
    id: '04',
    title: 'Mylabscope',
    category: 'Healthcare Platform',
    year: '2024',
    image: `https://picsum.photos/seed/mylabscope_hero_v1/2560/1600`,
    description: 'A comprehensive solution for laboratories and hospitals to manage patient samples, diagnostic workflows, and results.'
  }
];

export const INSPIRATIONS: Inspiration[] = [
  {
    id: 'c1',
    title: 'Glassmorphism Music Player',
    category: 'UI Concept',
    image: `/images/concepts/music-player.jpg${v}`,
    link: 'https://x.com/ToluTopsy', // Replace with actual post link
    platform: 'twitter'
  },
  {
    id: 'c2',
    title: 'Crypto Wallet Dark Mode',
    category: 'Mobile Design',
    image: `/images/concepts/crypto-wallet.jpg${v}`,
    link: 'https://dribbble.com',
    platform: 'dribbble'
  },
  {
    id: 'c3',
    title: 'AI Chat Interface',
    category: 'Interaction',
    image: `/images/concepts/ai-chat.jpg${v}`,
    link: 'https://www.linkedin.com/in/tolutopeadebayo/',
    platform: 'linkedin'
  },
  {
    id: 'c4',
    title: 'Minimalist Weather App',
    category: 'Concept',
    image: `/images/concepts/weather-app.jpg${v}`,
    link: 'https://www.behance.net/tolutopeadebayo',
    platform: 'behance'
  }
];

export const SOCIALS: SocialLink[] = [
  { name: 'Twitter / X', url: 'https://x.com/ToluTopsy' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tolutopeadebayo/' },
  { name: 'Behance', url: 'https://www.behance.net/tolutopeadebayo' }
];

export const AVATAR_IMAGE = `/images/avatar/profile.jpg${v}`;

export const EMAIL_ADDRESS = "tolutopeadebayo@gmail.com";

// NOTE: Replace this with the actual URL to your hosted Resume PDF
export const RESUME_URL = "#";

export const HERO_TEXT = "Building digital products that feel inevitable.";

export const ABOUT_PARAGRAPHS = [
  "I’ve always been the person who takes things apart just to see how they work, and then tries to put them back together. I’m endlessly curious, whether it’s figuring out how a product is built, fixing things myself, or learning a new skill just for fun.",
  "Over the years, I’ve tried tennis, ran in competitions, and play the bass guitar. I’ve also been drawing and making whiteboard animations before I found my calling as a product designer. For the past four years, I’ve designed SaaS platforms and web/mobile experiences leveraging AI across logistics, fintech, health, education, and real estate. I design products that live at the intersection of utility and art.",
  "Today, I’m shaping the future of logistics at Movam, an AI powered logistics company, while exploring all the things I used to love doing and discovering new passions along the way.",
  "Curious? So am I."
];