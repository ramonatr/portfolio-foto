export type Language = 'en' | 'de';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    sectionTitle: string;
    description: string[];
  };
  skills: {
    sectionTitle: string;
    items: { title: string; description: string; icon: string }[];
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewProject: string;
    backToProjects: string;
    overview: string;
    role: string;
    duration: string;
    tools: string;
    challenge: string;
    solution: string;
    results: string;
  };
  contact: {
    sectionTitle: string;
    description: string;
    email: string;
    linkedin: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hello, I\'m',
    name: 'Ramona',
    title: 'UX Designer',
    subtitle: 'I design clear digital experiences that link user needs with business goals. Through a human-centered process, I turn complex challenges into elegant, accessible products.',
    cta: 'View My Work',
  },
  about: {
    sectionTitle: 'About Me',
    description: [
      'Hi and welcome to my Portfolio!!',
      'My name is Ramona, i\'m 23 years old and currently studying UXD in the 4th semester.',
      'Outside of uni i really enjoy doing sports and going to the gym, besides that i recently started running as well.',
      'Other interests of mine are of course being creative in many different ways, my love and excitement about cars and motorsports, which i got from my dad, and idealy a combination of both!',
    ],
  },
  skills: {
    sectionTitle: 'What I Do',
    items: [
      {
        title: 'UX Research',
        description: 'User interviews, surveys, usability testing, persona development, and journey mapping to uncover deep user insights.',
        icon: '🔍',
      },
      {
        title: 'UI Design',
        description: 'Pixel-perfect interface design with a focus on visual hierarchy, typography, and cohesive design systems.',
        icon: '🎨',
      },
      {
        title: 'Prototyping & Interaction Design',
        description: 'Crafting meaningful micro-interactions and animations that enhance the user experience and delight users. From low-fidelity wireframes to high-fidelity interactive prototypes using Figma, Sketch, and Adobe XD.',
        icon: '✨',
      },
      /*{
        title: 'Prototyping',
        description: 'From low-fidelity wireframes to high-fidelity interactive prototypes using Figma, Sketch, and Adobe XD.',
        icon: '📐',
      },
      {
        title: 'Design Systems',
        description: 'Building scalable, consistent component libraries and design tokens that accelerate team productivity.',
        icon: '🧩',
      },
      {
        title: 'Strategy & Workshop',
        description: 'Facilitating design thinking workshops, stakeholder alignment sessions, and product strategy development.',
        icon: '💡',
      },*/
    ],
  },
  projects: {
    sectionTitle: 'Featured Projects',
    sectionSubtitle: 'A selection of recent work that showcases my design process and problem-solving approach.',
    viewProject: 'View Case Study',
    backToProjects: '← Back to Projects',
    overview: 'Overview',
    role: 'Role',
    duration: 'Duration',
    tools: 'Tools',
    challenge: 'The Challenge',
    solution: 'The Solution',
    results: 'Results & Impact',
  },
  contact: {
    sectionTitle: 'Let\'s Connect',
    description: 'I\'m always open to discussing new opportunities, creative ideas, or ways to bring your vision to life. Let\'s create something amazing together.',
    email: 'Send an Email',
    linkedin: 'Connect on LinkedIn',
  },
  footer: {
    copyright: '© 2026 Ramona. All rights reserved.',
    madeWith: 'Designed with passion',
  },
};

const de: Translations = {
  nav: {
    home: 'Start',
    projects: 'Projekte',
    about: 'Über mich',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    name: 'Ramona',
    title: 'UX Designerin',
    subtitle: 'Ich gestalte klare digitale Erlebnisse, die Nutzerbedürfnisse und Geschäftsziele miteinander verbinden. Mit einem menschenzentrierten Ansatz mache ich komplexe Herausforderungen elegant und zugänglich.',
    cta: 'Meine Arbeiten ansehen',
  },
  about: {
    sectionTitle: 'Über Mich',
    description: [
      'Hi und herzlich willkommen zu meinem Portfolio!!',
      'Mein Name ist Ramona, ich bin 23 Jahre alt und studiere derzeit UX-Design im 4. Semester.',
      'Außerhalb der Uni mache ich sehr gerne Sport und gehe ins Fitnessstudio, außerdem habe ich vor Kurzem angefangen zu laufen.',
      'Weitere Interessen von mir sind natürlich kreativ zu sein auf vielfältige Weise, meine Liebe und Begeisterung für Autos und Motorsport, die ich von meinem Papa habe, und idealerweise eine Kombination aus beidem!',
    ],
  },
  skills: {
    sectionTitle: 'Was Ich Mache',
    items: [
      {
        title: 'UX Research',
        description: 'Nutzerinterviews, Umfragen, Usability-Tests, Persona-Entwicklung und Journey Mapping für tiefe Nutzereinblicke.',
        icon: '🔍',
      },
      {
        title: 'UI Design',
        description: 'Pixelgenaues Interface-Design mit Fokus auf visuelle Hierarchie, Typografie und kohärente Designsysteme.',
        icon: '🎨',
      },
      {
        title: 'Prototyping & Interaction Design',
        description: 'Entwicklung aussagekräftiger Mikrointeraktionen und Animationen, die das Nutzererlebnis verbessern und die Nutzer begeistern. Von Low-Fidelity-Wireframes bis hin zu interaktiven High-Fidelity-Prototypen unter Verwendung von Figma, Sketch und Adobe XD.',
        icon: '✨',
      },
      /*{
        title: 'Prototyping',
        description: 'From low-fidelity wireframes to high-fidelity interactive prototypes using Figma, Sketch, and Adobe XD.',
        icon: '📐',
      },
      {
        title: 'Design Systems',
        description: 'Building scalable, consistent component libraries and design tokens that accelerate team productivity.',
        icon: '🧩',
      },
      {
        title: 'Strategy & Workshop',
        description: 'Facilitating design thinking workshops, stakeholder alignment sessions, and product strategy development.',
        icon: '💡',
      },*/
    ],
  },
  projects: {
    sectionTitle: 'Ausgewählte Projekte',
    sectionSubtitle: 'Eine Auswahl aktueller Arbeiten, die meinen Designprozess und Problemlösungsansatz zeigen.',
    viewProject: 'Case Study ansehen',
    backToProjects: '← Zurück zu Projekten',
    overview: 'Überblick',
    role: 'Rolle',
    duration: 'Dauer',
    tools: 'Tools',
    challenge: 'Die Herausforderung',
    solution: 'Die Lösung',
    results: 'Ergebnisse & Impact',
  },
  contact: {
    sectionTitle: 'Kontakt aufnehmen',
    description: 'Ich freue mich immer über neue Möglichkeiten, kreative Ideen oder Wege, Ihre Vision zum Leben zu erwecken. Lassen Sie uns gemeinsam etwas Großartiges schaffen.',
    email: 'E-Mail senden',
    linkedin: 'Auf LinkedIn vernetzen',
  },
  footer: {
    copyright: '© 2026 Ramona. Alle Rechte vorbehalten.',
    madeWith: 'Mit Leidenschaft gestaltet',
  },
};

export const translations: Record<Language, Translations> = { en, de };
