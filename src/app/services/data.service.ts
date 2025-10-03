import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export type Project = {
  title: string;
  period: string;
  description: string;
  tech: string[];
  impact: string;
  location?: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  tasks: string[];
};

export type Certification = {
  title: string;
  organization: string;
  details?: string;
};

export type Language = {
  name: string;
  level: string;
  details?: string;
};

@Injectable({ providedIn: 'root' })
export class DataService {
  private projects: Project[] = [
    {
      title: "TennisDreamer – Application web de gestion d'académie de tennis",
      period: "Mar. 2025 - Août 2025",
      location: "Projet Personnel Full-Stack, Gabès, Tunisie",
      description: "Gestion de 4 profils utilisateurs et 3 espaces distincts avec authentification sécurisée et automatisation des réservations",
      tech: ["Angular", "NestJS", "PHPMyAdmin", "MySQL", "Swagger", "Bootstrap", "Git"],
      impact: "Réduction estimée de 30 % du temps administratif"
    },
    {
      title: "VroomStat – Application web de gestion des constats d'accidents",
      period: "Jan. 2025 - Mar. 2025",
      location: "Freelance, Gabès, Tunisie",
      description: "Conception UML, APIs backend et interface responsive pour la gestion des accidents",
      tech: ["Angular", "NestJS", "PHPMyAdmin", "MySQL", "Swagger", "Bootstrap", "Git"],
      impact: "Solution complète de gestion des constats"
    },
    {
      title: "Ejrili – Application web de remorquage (Projet de fin d'études)",
      period: "Mai 2023",
      location: "L'Institut Supérieur de Gestion de Gabès, Gabès, Tunisie",
      description: "Conception et modélisation d'une architecture UML avancée (cas d'utilisation, classes) adaptée à plusieurs profils utilisateurs. Mise en place d'une authentification multi-rôles (4 profils) avec contrôle d'accès et gestion de 3 interfaces principales.",
      tech: ["Angular", "Node.js", "Express", "MongoDB"],
      impact: "MEAN Stack - 4 profils utilisateurs"
    },
    {
      title: "B.A.M - Site E-commerce de vente de vêtements",
      period: "Août 2022",
      location: "Centre de Formation ENTIC, Gabès - Tunisie",
      description: "Développement de trois interfaces de consultation produit. Mise en page responsive et respect des bonnes pratiques front-end",
      tech: ["HTML5", "CSS3", "JavaScript"],
      impact: "Design responsive et bonnes pratiques"
    }
  ];

  private experiences: Experience[] = [
    {
      title: "Stage Développeur Full-Stack",
      company: "Barsha Technology",
      period: "Oct. 2024 - Août 2025",
      location: "Gabès, Tunisie",
      tasks: [
        "Développement front-end Angular et back-end NestJS avec intégration d'API REST et gestion des données MySQL",
        "Création, documentation et tests automatisés des API avec Swagger",
        "Technologies clés : Angular, NestJS, MySQL, Swagger, API REST"
      ]
    },
    {
      title: "Stage Développeur Front-End",
      company: "DigiLife",
      period: "Juil. 2024 - Août 2024",
      location: "Gabès, Tunisie",
      tasks: [
        "Implémentation de pages front (HTML/CSS/JS) et optimisation des performances front",
        "Mise en place de layouts responsives et bonnes pratiques front",
        "Technologies clés : HTML5, CSS3, JavaScript"
      ]
    },
    {
      title: "Stage en Gestion des Données Financières",
      company: "Société Régionale de Transport",
      period: "Août 2021 - Sept. 2021",
      location: "Gabès, Tunisie",
      tasks: [
        "Traitement et analyse de données financières sous Excel",
        "Préparation de rapports périodiques",
        "Techniques clés : Excel (formules, tableaux croisés dynamiques)"
      ]
    }
  ];

  private skills = {
    frameworks: ["Angular (Front-end)", "NestJS (Back-end)", "Node.js", "Express.js"],
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "PHP", "Python"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "Swagger", "Postman", "StarUML", "Visual Studio Code"]
  };

  private softSkills = [
    "Autonomie et organisation",
    "Gestion de projet agile",
    "Travail en équipe et communication efficace",
    "Résolution de problèmes complexes"
  ];

  private certifications: Certification[] = [
    {
      title: "Hackathon Hack4Food",
      organization: "ISIM Gabès et JCI-Gabès"
    },
    {
      title: "Python Masterclass pour débutants",
      organization: "Udemy"
    },
    {
      title: "La MEAN Stack par la pratique",
      organization: "Udemy"
    },
     { 
      title: "FIGMA : Le Cours Complet pour Designer UI / UX 2025 ",
      organization: "Udemy"
    },
    {
      title: "Formation approfondie en développement web",
      organization: "ENTIC Gabès"
    }
  ];

  private languages: Language[] = [
    {
      name: "Arabe",
      level: "Langue maternelle"
    },
    {
      name: "Français",
      level: "B1 : Compétence professionnelle",
      details: "TCF : 391/699"
    },
    {
      name: "Anglais",
      level: "Intermédiaire"
    }
  ];

  private education = [
    {
      degree: "Master en E-Commerce",
      institution: "Institut Supérieur de Gestion (ISG), Gabès, Tunisie",
      period: "2024 - 2025"
    },
    {
      degree: "Licence en Informatique Appliquée à la Gestion",
      institution: "L'Institut Supérieur de Gestion, Gabès, Tunisie",
      period: "2022 - 2023"
    },
    {
      degree: "Baccalauréat en Economie et Gestion",
      institution: "Lycée secondaire Manara, Gabès, Tunisie",
      period: "2019 - 2020"
    }
  ];

  getProjects(): Observable<Project[]> { return of(this.projects); }
  getExperiences(): Observable<Experience[]> { return of(this.experiences); }
  getSkills() { return of(this.skills); }
  getSoftSkills() { return of(this.softSkills); }
  getCertifications() { return of(this.certifications); }
  getLanguages() { return of(this.languages); }
  getEducation() { return of(this.education); }
}