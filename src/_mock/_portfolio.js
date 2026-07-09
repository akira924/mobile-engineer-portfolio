import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const PORTFOLIO_PROFILE = {
  name: 'Ivan Huang',
  role: 'Senior Full Stack Mobile Engineer',
  tagline:
    'Designing and deploying scalable cross-platform apps across web, iOS, and Android with React Native, TypeScript, and native SDKs.',
  location: 'Round Rock, TX',
  email: 'huangivk@gmail.com',
  phone: '+1 (555) 123-4567',
  address: '3503 Laurel Bay Loop, Round Rock, TX 78681',
  website: 'https://ivankh.netlify.app/',
  resumeUrl: '/Ivan_Huang_FlowCV_Resume_2026-07-08.pdf',
  availability: 'Open to remote freelance & full-time roles',
  stats: [
    { label: 'Years experience', value: 12 },
    { label: 'Production apps', value: 4 },
    { label: 'Companies', value: 5 },
  ],
  quote:
    'Product-focused engineer with 12+ years building production-grade mobile and full-stack products — from React Native architecture and native bridges to backend APIs, cloud integration, and App Store launches.',
};

// ----------------------------------------------------------------------

export const PORTFOLIO_SKILLS = [
  {
    title: 'Mobile & Cross-Platform',
    description:
      'React Native, Expo/EAS, Swift, Kotlin, and platform APIs for biometrics, BLE devices, push notifications, and native module bridges.',
    icon: 'solar:smartphone-2-bold-duotone',
  },
  {
    title: 'Backend & API Integration',
    description:
      'Node.js, Nest.js, Python, RESTful and GraphQL APIs, WebSockets, and microservices that power mobile-first products.',
    icon: 'solar:server-bold-duotone',
  },
  {
    title: 'Cloud & Infrastructure',
    description:
      'AWS (Cognito, S3, Lambda), Firebase (Firestore, FCM, Crashlytics), and APNs for secure, scalable production systems.',
    icon: 'solar:cloud-bold-duotone',
  },
  {
    title: 'Performance & Architecture',
    description:
      'New React Native architecture with JSI, Fabric, and Turbo Modules — plus memoization, code splitting, and profiling with Flipper.',
    icon: 'solar:bolt-bold-duotone',
  },
  {
    title: 'CI/CD & Quality',
    description:
      'EAS Build & Submit, GitHub Actions, Bitrise, Jest, Detox, and TestFlight/Play Console workflows for reliable releases.',
    icon: 'solar:rocket-2-bold-duotone',
  },
  {
    title: 'AI-Assisted Development',
    description:
      'LLM-powered coaching workflows and AI-assisted coding with Cursor and Claude to accelerate feature delivery and refactoring.',
    icon: 'solar:magic-stick-3-bold-duotone',
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_TECH_STACK = [
  { name: 'React Native', icon: 'logos:react' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Expo', icon: 'simple-icons:expo' },
  { name: 'Swift', icon: 'logos:swift' },
  { name: 'Kotlin', icon: 'logos:kotlin-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'GraphQL', icon: 'logos:graphql' },
  { name: 'Firebase', icon: 'logos:firebase' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'GitHub Actions', icon: 'logos:github-actions' },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_PROJECTS = [
  {
    id: _mock.id(1),
    title: 'Fruit Street Health',
    category: 'Health & Remote Care',
    description:
      'Virtual diabetes prevention program with class enrollment, food logging, coaching workflows, Fitbit/BLE device sync, and secure dietitian messaging.',
    coverUrl: `${_mock.image.cover(1)}`,
    tech: ['React Native', 'Expo EAS', 'TypeScript', 'Redux Toolkit', 'Swift', 'Kotlin'],
    links: { appStore: '#', playStore: '#' },
    featured: true,
  },
  {
    id: _mock.id(2),
    title: 'ReBet',
    category: 'Social Sports & Casino',
    description:
      'Real-time social sports betting app with live game tracking, social feed, in-app wallet, and instant updates via WebSockets and push notifications.',
    coverUrl: `${_mock.image.cover(2)}`,
    tech: ['React Native', 'TypeScript', 'GraphQL', 'WebSockets', 'Firebase'],
    links: { appStore: '#', playStore: '#' },
    featured: true,
  },
  {
    id: _mock.id(3),
    title: 'ChowNow',
    category: 'Food & E-commerce',
    description:
      'Consumer food ordering experience with real-time order tracking, in-app payments, and migration of legacy native modules into a unified React Native codebase.',
    coverUrl: `${_mock.image.cover(3)}`,
    tech: ['React Native', 'TypeScript', 'Redux', 'Stripe', 'FCM'],
    links: { appStore: '#', playStore: '#' },
    featured: true,
  },
  {
    id: _mock.id(4),
    title: 'Robinhood',
    category: 'Fintech',
    description:
      'Core mobile trading experiences with stock order placement, portfolio tracking, KYC onboarding, and low-latency real-time market data streaming.',
    coverUrl: `${_mock.image.cover(4)}`,
    tech: ['Swift', 'Objective-C', 'Java', 'WebSockets', 'Python'],
    links: { appStore: '#', playStore: '#' },
    featured: false,
  },
  {
    id: _mock.id(5),
    title: 'TekRevol Client Apps',
    category: 'Enterprise & Startup',
    description:
      'Cross-platform mobile apps with biometric auth, offline-first caching, Web3 wallet features, and Node.js backends for startup and enterprise clients.',
    coverUrl: `${_mock.image.cover(5)}`,
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Web3.js', 'AWS'],
    links: { web: '#' },
    featured: false,
  },
  {
    id: _mock.id(6),
    title: 'Upwork Client Projects',
    category: 'Freelance',
    description:
      'End-to-end web apps and custom sites with responsive UIs, REST APIs, Stripe payments, and WordPress/Shopify integrations for diverse clients.',
    coverUrl: `${_mock.image.cover(6)}`,
    tech: ['JavaScript', 'PHP', 'MySQL', 'Stripe', 'AWS'],
    links: { web: '#' },
    featured: false,
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_EXPERIENCE = [
  {
    id: _mock.id(1),
    role: 'Senior Software Engineer (Mobile)',
    company: 'Fruit Street Health',
    period: '2025 — Present',
    description:
      'Built a cross-platform diabetes prevention app with React Native and Expo EAS. Led new architecture migration with JSI modules, native Swift/Kotlin bridges, and automated testing with Jest, Detox, and GitHub Actions.',
    color: 'primary',
    icon: 'solar:smartphone-2-bold',
  },
  {
    id: _mock.id(2),
    role: 'Senior React Native Engineer',
    company: 'Rebet Inc.',
    period: '2023 — 2024',
    description:
      'Developed a real-time social sports betting app with GraphQL, WebSockets, and Firebase. Optimized rendering with Reanimated and Gesture Handler; introduced CI/CD, OTA updates, and crash monitoring.',
    color: 'info',
    icon: 'solar:code-bold',
  },
  {
    id: _mock.id(3),
    role: 'Full Stack Engineer (Mobile & Backend)',
    company: 'TekRevol',
    period: '2020 — 2023',
    description:
      'Delivered React Native apps with biometric auth and offline-first features. Built Node.js APIs with PostgreSQL/MongoDB, Web3 wallet integrations, and AWS/Firebase backends for mobile-first products.',
    color: 'success',
    icon: 'solar:server-bold',
  },
  {
    id: _mock.id(4),
    role: 'Frontend Engineer',
    company: 'ChowNow',
    period: '2017 — 2020',
    description:
      'Enhanced restaurant online ordering for web and mobile. Led migration of legacy iOS/Android modules into a unified React Native codebase with Firebase real-time order updates.',
    color: 'warning',
    icon: 'solar:shop-bold',
  },
  {
    id: _mock.id(5),
    role: 'Software Developer',
    company: 'Robinhood',
    period: '2015 — 2017',
    description:
      'Built core mobile trading features on iOS (Objective-C, Swift) and Android (Java). Developed low-latency WebSocket market data streaming and React/Node.js internal tools.',
    color: 'error',
    icon: 'solar:chart-bold',
  },
  {
    id: _mock.id(6),
    role: 'Freelance Developer',
    company: 'Upwork',
    period: '2013 — 2014',
    description:
      'Developed client web apps with responsive UIs, REST APIs, Stripe payments, and WordPress/Shopify customizations for remote US-based clients.',
    color: 'secondary',
    icon: 'solar:laptop-bold',
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_TESTIMONIALS = [
  {
    id: _mock.id(1),
    name: 'Sarah Chen',
    role: 'Product Manager, Fruit Street Health',
    avatar: _mock.image.avatar(1),
    rating: 5,
    content:
      'Ivan modernized our mobile release pipeline with Expo EAS and delivered a reliable diabetes prevention experience across iOS and Android ahead of schedule.',
    postedAt: 'March 12, 2025',
  },
  {
    id: _mock.id(2),
    name: 'James Rivera',
    role: 'Engineering Lead, Rebet Inc.',
    avatar: _mock.image.avatar(2),
    rating: 5,
    content:
      'Deep React Native expertise and strong instincts for real-time UX. Ivan improved our crash rates and accelerated releases with solid CI/CD and performance work.',
    postedAt: 'January 8, 2025',
  },
  {
    id: _mock.id(3),
    name: 'Emily Watson',
    role: 'Technical Director, TekRevol',
    avatar: _mock.image.avatar(3),
    rating: 5,
    content:
      'A rare full-stack mobile engineer who bridges frontend, native, and backend seamlessly. Delivered biometric auth and offline-first features our clients loved.',
    postedAt: 'November 20, 2024',
  },
  {
    id: _mock.id(4),
    name: 'Michael Brooks',
    role: 'Engineering Manager, ChowNow',
    avatar: _mock.image.avatar(4),
    rating: 5,
    content:
      'Led our React Native migration with care and precision. Testing practices and Firebase integrations significantly reduced post-release bugs.',
    postedAt: 'August 5, 2024',
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_FAQS = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'Cross-platform mobile apps (React Native, Expo), native iOS/Android modules, full-stack products with Node.js or Python backends, MVPs, brownfield rewrites, and performance or architecture audits.',
  },
  {
    question: 'Are you available for remote work?',
    answer:
      'Yes. Based in Round Rock, TX, I collaborate remotely with teams across US time zones and am comfortable with async communication and regular standups.',
  },
  {
    question: 'How do you approach a new project?',
    answer:
      'Discovery call → technical assessment → phased roadmap → iterative delivery with EAS/TestFlight builds, automated testing, and staged App Store and Play Store releases.',
  },
  {
    question: 'Do you handle App Store submissions?',
    answer:
      'Absolutely. I manage certificates, provisioning, EAS Submit, store listings, review guidelines, and staged rollouts via Fastlane, Bitrise, or GitHub Actions.',
  },
  {
    question: 'Can you join an existing codebase?',
    answer:
      'Yes. I regularly onboard to brownfield apps, migrate toward the new React Native architecture, improve testing coverage, and ship features without blocking delivery.',
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_SOCIALS = [
  { value: 'website', label: 'Website', path: 'https://ivankh.netlify.app/', icon: 'solar:global-bold' },
  { value: 'github', label: 'GitHub', path: 'https://github.com', icon: 'mdi:github' },
  { value: 'linkedin', label: 'LinkedIn', path: 'https://linkedin.com', icon: 'mdi:linkedin' },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_CONTACT_ITEMS = [
  {
    label: 'Email',
    value: PORTFOLIO_PROFILE.email,
    href: `mailto:${PORTFOLIO_PROFILE.email}`,
    icon: 'solar:letter-bold',
  },
  {
    label: 'Phone',
    value: PORTFOLIO_PROFILE.phone,
    href: `tel:${PORTFOLIO_PROFILE.phone.replace(/[^\d+]/g, '')}`,
    icon: 'solar:phone-bold',
  },
  {
    label: 'Address',
    value: PORTFOLIO_PROFILE.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(PORTFOLIO_PROFILE.address)}`,
    icon: 'mingcute:location-fill',
  },
  {
    label: 'Website',
    value: PORTFOLIO_PROFILE.website.replace(/^https?:\/\//, ''),
    href: PORTFOLIO_PROFILE.website,
    icon: 'solar:global-bold',
  },
];

export const PORTFOLIO_MAP_CONTACT = [
  {
    latlng: [30.532, -97.654],
    address: PORTFOLIO_PROFILE.address,
    phoneNumber: PORTFOLIO_PROFILE.phone,
  },
];
