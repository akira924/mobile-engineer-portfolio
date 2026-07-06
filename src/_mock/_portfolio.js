import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const PORTFOLIO_PROFILE = {
  name: 'Alex Morgan',
  role: 'Senior Mobile Engineer',
  tagline: 'Crafting polished iOS & Android apps with React Native and native SDKs.',
  location: 'San Francisco, CA',
  email: 'alex.morgan@email.com',
  availability: 'Open to freelance & full-time roles',
  stats: [
    { label: 'Years experience', value: 8 },
    { label: 'Apps shipped', value: 24 },
    { label: 'App Store rating', value: 4.8 },
  ],
  quote:
    'I turn complex product ideas into fast, reliable mobile experiences — from architecture and offline-first data to App Store launches.',
};

// ----------------------------------------------------------------------

export const PORTFOLIO_SKILLS = [
  {
    title: 'Native Development',
    description: 'Swift, Kotlin, and platform APIs for camera, push, biometrics, and background tasks.',
    icon: 'solar:smartphone-2-bold-duotone',
  },
  {
    title: 'Cross-Platform',
    description: 'React Native and Flutter apps with shared business logic and platform-specific polish.',
    icon: 'solar:layers-bold-duotone',
  },
  {
    title: 'Architecture & Scale',
    description: 'Clean architecture, modular features, dependency injection, and testable codebases.',
    icon: 'solar:code-square-bold-duotone',
  },
  {
    title: 'Performance',
    description: 'Startup time, memory profiling, list virtualization, and smooth 60fps interactions.',
    icon: 'solar:bolt-bold-duotone',
  },
  {
    title: 'CI/CD & Release',
    description: 'Fastlane, GitHub Actions, staged rollouts, crash monitoring, and store compliance.',
    icon: 'solar:rocket-2-bold-duotone',
  },
  {
    title: 'Product Collaboration',
    description: 'Partner with design and backend teams to ship iteratively with measurable outcomes.',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_TECH_STACK = [
  { name: 'React Native', icon: 'logos:react' },
  { name: 'Swift', icon: 'logos:swift' },
  { name: 'Kotlin', icon: 'logos:kotlin-icon' },
  { name: 'Flutter', icon: 'logos:flutter' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Firebase', icon: 'logos:firebase' },
  { name: 'GraphQL', icon: 'logos:graphql' },
  { name: 'GitHub Actions', icon: 'logos:github-actions' },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_PROJECTS = [
  {
    id: _mock.id(1),
    title: 'PulseFit',
    category: 'Health & Fitness',
    description:
      'Wearable-synced workout tracker with offline logging, HealthKit integration, and personalized coaching.',
    coverUrl: `${_mock.image.cover(1)}`,
    tech: ['React Native', 'HealthKit', 'Firebase'],
    links: { appStore: '#', playStore: '#', github: '#' },
    featured: true,
  },
  {
    id: _mock.id(2),
    title: 'PayFlow',
    category: 'Fintech',
    description:
      'Secure peer-to-peer payments with biometric auth, real-time fraud signals, and instant notifications.',
    coverUrl: `${_mock.image.cover(2)}`,
    tech: ['Swift', 'Kotlin', 'Stripe SDK'],
    links: { appStore: '#', playStore: '#' },
    featured: true,
  },
  {
    id: _mock.id(3),
    title: 'TravelMate',
    category: 'Travel',
    description:
      'Trip planner with offline maps, itinerary sharing, and AR landmark discovery for iOS and Android.',
    coverUrl: `${_mock.image.cover(3)}`,
    tech: ['Flutter', 'Mapbox', 'GraphQL'],
    links: { appStore: '#', playStore: '#' },
    featured: true,
  },
  {
    id: _mock.id(4),
    title: 'DevBoard',
    category: 'Productivity',
    description:
      'Mobile kanban for engineering teams with GitHub integration, sprint metrics, and push alerts.',
    coverUrl: `${_mock.image.cover(4)}`,
    tech: ['React Native', 'REST', 'Push Notifications'],
    links: { github: '#', web: '#' },
    featured: false,
  },
  {
    id: _mock.id(5),
    title: 'EcoCart',
    category: 'E-commerce',
    description:
      'Sustainable shopping app with carbon footprint scoring, one-tap checkout, and loyalty rewards.',
    coverUrl: `${_mock.image.cover(5)}`,
    tech: ['Kotlin', 'Jetpack Compose', 'Shopify'],
    links: { playStore: '#', web: '#' },
    featured: false,
  },
  {
    id: _mock.id(6),
    title: 'Mindful',
    category: 'Wellness',
    description:
      'Guided meditation with adaptive sessions, Apple Watch companion, and streak-based habit tracking.',
    coverUrl: `${_mock.image.cover(6)}`,
    tech: ['Swift', 'SwiftUI', 'WatchKit'],
    links: { appStore: '#' },
    featured: false,
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_EXPERIENCE = [
  {
    id: _mock.id(1),
    role: 'Senior Mobile Engineer',
    company: 'NovaTech Labs',
    period: '2022 — Present',
    description:
      'Lead mobile platform for a B2B SaaS product. Reduced crash-free sessions to 99.8% and cut release cycle from 3 weeks to 5 days.',
    color: 'primary',
    icon: 'solar:smartphone-2-bold',
  },
  {
    id: _mock.id(2),
    role: 'Mobile Engineer',
    company: 'Streamline Apps',
    period: '2019 — 2022',
    description:
      'Shipped React Native features used by 2M+ monthly active users. Introduced feature flags and modular navigation.',
    color: 'info',
    icon: 'solar:code-bold',
  },
  {
    id: _mock.id(3),
    role: 'iOS Developer',
    company: 'Pixel Studio',
    period: '2017 — 2019',
    description:
      'Built consumer iOS apps from MVP to App Store featuring. Implemented Core Data sync and custom UI animations.',
    color: 'success',
    icon: 'solar:gallery-bold',
  },
  {
    id: _mock.id(4),
    role: 'Junior Android Developer',
    company: 'StartUp Hub',
    period: '2016 — 2017',
    description:
      'Contributed to Kotlin migration and established unit/UI testing practices for a logistics startup.',
    color: 'warning',
    icon: 'solar:rocket-bold',
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_TESTIMONIALS = [
  {
    id: _mock.id(1),
    name: 'Sarah Chen',
    role: 'Product Manager, NovaTech',
    avatar: _mock.image.avatar(1),
    rating: 5,
    content:
      'Alex consistently delivers production-ready mobile features ahead of schedule. Our App Store ratings jumped after the performance overhaul.',
    postedAt: 'March 12, 2025',
  },
  {
    id: _mock.id(2),
    name: 'James Rivera',
    role: 'Engineering Lead, Streamline',
    avatar: _mock.image.avatar(2),
    rating: 5,
    content:
      'One of the strongest mobile engineers I have worked with — deep platform knowledge, clean architecture, and great communication.',
    postedAt: 'January 8, 2025',
  },
  {
    id: _mock.id(3),
    name: 'Emily Watson',
    role: 'Design Director, Pixel Studio',
    avatar: _mock.image.avatar(3),
    rating: 5,
    content:
      'Bridges design and engineering beautifully. Pixel-perfect implementations and thoughtful motion on every screen.',
    postedAt: 'November 20, 2024',
  },
  {
    id: _mock.id(4),
    name: 'Michael Brooks',
    role: 'CTO, StartUp Hub',
    avatar: _mock.image.avatar(4),
    rating: 5,
    content:
      'Helped us scale from prototype to 500k downloads. Reliable, proactive, and always focused on user impact.',
    postedAt: 'August 5, 2024',
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_FAQS = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'I work on native iOS/Android apps, React Native and Flutter products, MVPs, rewrites, performance audits, and long-term team engagements.',
  },
  {
    question: 'Are you available for remote work?',
    answer:
      'Yes. I collaborate with teams across US and European time zones and am comfortable with async communication and regular standups.',
  },
  {
    question: 'How do you approach a new project?',
    answer:
      'Discovery call → technical assessment → phased roadmap → iterative delivery with TestFlight/Internal testing before store release.',
  },
  {
    question: 'Do you handle App Store submissions?',
    answer:
      'Absolutely. I manage certificates, provisioning, store listings, review guidelines, and staged rollouts via Fastlane or CI pipelines.',
  },
  {
    question: 'Can you join an existing codebase?',
    answer:
      'Yes. I regularly onboard to brownfield apps, improve architecture incrementally, and add tests without blocking feature work.',
  },
];

// ----------------------------------------------------------------------

export const PORTFOLIO_SOCIALS = [
  { value: 'github', label: 'GitHub', path: 'https://github.com', icon: 'mdi:github' },
  { value: 'linkedin', label: 'LinkedIn', path: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { value: 'twitter', label: 'Twitter', path: 'https://twitter.com', icon: 'mdi:twitter' },
  { value: 'dribbble', label: 'Dribbble', path: 'https://dribbble.com', icon: 'mdi:dribbble' },
];
