export const PROFILE = {
  name: 'Jerry Floyd Marcel',
  lastName: 'De Feudjio',
  initials: 'JFMF',
  role: 'Software Engineer & UX Developer',
  intro:
    'Je crée des expériences web performantes, avec un code propre et un design intuitif. Je transforme les idées en solutions numériques solides et centrées sur l’utilisateur.',
  email: 'jerryfeudjio@gmail.com',
  location: 'Yaounde, Obobogo, Cameroun',
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
  { value: '-3', label: 'Années d’expérience', icon: '>_' },
  { value: '-5', label: 'Projets livrés', icon: '</>' },
  { value: '3+', label: 'Clients satisfaits', icon: '☺' },
];

export const SKILLS = [
  { icon: '</>', title: 'Web Development', text: 'Sites responsives, rapides et évolutifs.' },
  { icon: '▭', title: 'Frontend Engineering', text: 'Interfaces modernes avec Angular, Next.js et Tailwind CSS.' },
  { icon: '☰', title: 'Backend Development', text: 'APIs robustes et applications serveur avec Spring Boot.' },
  { icon: '◍', title: 'Database Design', text: 'Bases de données efficaces et sécurisées.' },
  { icon: '✎', title: 'UX/UI Design', text: 'Interfaces intuitives, accessibles et centrées utilisateur.' },
  { icon: '➶', title: 'Performance & SEO', text: 'Optimisation de la vitesse, des Core Web Vitals et du référencement.' },
];

export const PROJECTS = [
  { name: 'Generateur_CV', text: 'Générateur de CV professionnel avec personnalisation et export PDF.', tags: ['javascript', 'TypeScript', 'CSS', 'HTML'] },
  { name: 'Blue-monarch', text: 'Plateforme de vente de vetement en ligne.', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'] },
  { name: 'Vagabond-front-end', text: 'Une plateforme de e-commerce, un projet scolaire', tags: ['Node.js', 'Tailwind CSS', 'HTML'] },
];

export const EXPERIENCES = [
  { period: '2026 – Présent', title: 'Stagiare developpeur backend', company: 'Quantum Tech.', text: 'Architecture backend solide pour des projets pro' },
  { period: '2023 - 2023', title: 'BAC +3 Informatique Fondamentale', company: 'Universite Yaounde I', text: 'Etudiant en phase finale du cycle Licence, developpant des projets scolaires' },
  //{ period: '2017 – 2019', title: 'Junior Web Developer', company: 'WebCore Studio', text: 'Sites et applications web, avec un focus sur la performance et le responsive.' },
];

export const TESTIMONIALS = [
  { text: 'Jerry est un mélange rare de développeur talentueux et de designer attentif. Le produit livré est magnifique et très performant.', name: 'Sarah Johnson', role: 'Product Manager, Trackify' },
  { text: 'Travailler avec Jerry a tout changé. Il a compris nos besoins, communiqué clairement et dépassé nos attentes.', name: 'Michael Chen', role: 'CEO, BookNest' },
  { text: 'Son sens du détail et sa façon de résoudre les problèmes sont excellents. Je le recommande pour n’importe quel projet.', name: 'Jessica Lee', role: 'CTO, FlowTask' },
];
