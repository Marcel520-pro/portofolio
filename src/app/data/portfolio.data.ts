export const PROFILE = {
  name: 'Adrian',
  lastName: 'Cole',
  initials: 'AC',
  role: 'Software Engineer & UX Developer',
  intro:
    'Je crée des expériences web performantes, avec un code propre et un design intuitif. Je transforme les idées en solutions numériques solides et centrées sur l’utilisateur.',
  email: 'adrian.cole@dev',
  location: 'San Francisco, CA',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: '7+', label: 'Années d’expérience', icon: '>_' },
  { value: '50+', label: 'Projets livrés', icon: '</>' },
  { value: '30+', label: 'Clients satisfaits', icon: '☺' },
];

export const SKILLS = [
  { icon: '</>', title: 'Web Development', text: 'Sites responsives, rapides et évolutifs.' },
  { icon: '▭', title: 'Frontend Engineering', text: 'Interfaces modernes avec React, Next.js et Tailwind CSS.' },
  { icon: '☰', title: 'Backend Development', text: 'APIs robustes et applications serveur avec Node.js.' },
  { icon: '◍', title: 'Database Design', text: 'Bases de données efficaces et sécurisées.' },
  { icon: '✎', title: 'UX/UI Design', text: 'Interfaces intuitives, accessibles et centrées utilisateur.' },
  { icon: '➶', title: 'Performance & SEO', text: 'Optimisation de la vitesse, des Core Web Vitals et du référencement.' },
];

export const PROJECTS = [
  { name: 'Trackify', text: 'Plateforme d’analytics pour suivre le comportement des utilisateurs en temps réel.', tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'] },
  { name: 'BookNest', text: 'Expérience e-commerce pour les amoureux des livres, avec recommandations personnalisées.', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'] },
  { name: 'FlowTask', text: 'Outil de gestion de projets pour équipes agiles : tableaux kanban et suivi du temps.', tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'] },
];

export const EXPERIENCES = [
  { period: '2022 – Présent', title: 'Senior Frontend Engineer', company: 'LimeSoft Inc.', text: 'Architecture frontend et développement UI pour des produits SaaS utilisés par des milliers de clients.' },
  { period: '2019 – 2022', title: 'Full Stack Developer', company: 'DevCraft Solutions', text: 'Applications web évolutives et APIs RESTful, en équipe pluridisciplinaire.' },
  { period: '2017 – 2019', title: 'Junior Web Developer', company: 'WebCore Studio', text: 'Sites et applications web, avec un focus sur la performance et le responsive.' },
];

export const TESTIMONIALS = [
  { text: 'Adrian est un mélange rare de développeur talentueux et de designer attentif. Le produit livré est magnifique et très performant.', name: 'Sarah Johnson', role: 'Product Manager, Trackify' },
  { text: 'Travailler avec Adrian a tout changé. Il a compris nos besoins, communiqué clairement et dépassé nos attentes.', name: 'Michael Chen', role: 'CEO, BookNest' },
  { text: 'Son sens du détail et sa façon de résoudre les problèmes sont excellents. Je le recommande pour n’importe quel projet.', name: 'Jessica Lee', role: 'CTO, FlowTask' },
];
