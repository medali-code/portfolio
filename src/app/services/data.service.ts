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
      title: "TennisDreamer – Tennis Academy Management Web Application",
      period: "Mar. 2025 - Aug. 2025",
      location: "Full-Stack Personal Project, Gabès, Tunisia",
      description: "Management of 4 user profiles and 3 distinct spaces with secure authentication and automated booking system",
      tech: ["Angular", "NestJS", "PHPMyAdmin", "MySQL", "Swagger", "Bootstrap", "Git"],
      impact: "Estimated 30% reduction in administrative time"
    },
    {
      title: "VroomStat – Accident Report Management Web Application",
      period: "Jan. 2025 - Mar. 2025",
      location: "Freelance, Gabès, Tunisia",
      description: "UML design, backend APIs and responsive interface for accident management",
      tech: ["Angular", "NestJS", "PHPMyAdmin", "MySQL", "Swagger", "Bootstrap", "Git"],
      impact: "Complete accident report management solution"
    },
    {
      title: "Ejrili – Towing Web Application (Final Year Project)",
      period: "May 2023",
      location: "Higher Institute of Management of Gabès, Gabès, Tunisia",
      description: "Design and modeling of advanced UML architecture (use cases, classes) adapted to multiple user profiles. Implementation of multi-role authentication (4 profiles) with access control and management of 3 main interfaces.",
      tech: ["Angular", "Node.js", "Express", "MongoDB"],
      impact: "MEAN Stack - 4 user profiles"
    },
    {
      title: "B.A.M - E-commerce Clothing Store Website",
      period: "Aug. 2022",
      location: "ENTIC Training Center, Gabès - Tunisia",
      description: "Development of three product consultation interfaces. Responsive layout and adherence to front-end best practices",
      tech: ["HTML5", "CSS3", "JavaScript"],
      impact: "Responsive design and best practices"
    }
  ];

  private experiences: Experience[] = [
    {
      title: "Full-Stack Developer Intern",
      company: "Barsha Technology",
      period: "Oct. 2024 - Aug. 2025",
      location: "Gabès, Tunisia",
      tasks: [
        "Angular front-end and NestJS back-end development with REST API integration and MySQL data management",
        "API creation, documentation and automated testing with Swagger",
        "Key technologies: Angular, NestJS, MySQL, Swagger, REST API"
      ]
    },
    {
      title: "Front-End Developer Intern",
      company: "DigiLife",
      period: "Jul. 2024 - Aug. 2024",
      location: "Gabès, Tunisia",
      tasks: [
        "Front-end page implementation (HTML/CSS/JS) and front-end performance optimization",
        "Implementation of responsive layouts and front-end best practices",
        "Key technologies: HTML5, CSS3, JavaScript"
      ]
    },
    {
      title: "Financial Data Management Intern",
      company: "Regional Transport Company",
      period: "Aug. 2021 - Sep. 2021",
      location: "Gabès, Tunisia",
      tasks: [
        "Processing and analysis of financial data in Excel",
        "Preparation of periodic reports",
        "Key techniques: Excel (formulas, pivot tables)"
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
    "Autonomy and organization",
    "Agile project management",
    "Teamwork and effective communication",
    "Complex problem-solving"
  ];

  private certifications: Certification[] = [
    {
      title: "Hack4Food Hackathon",
      organization: "ISIM Gabès and JCI-Gabès"
    },
    {
      title: "Python Masterclass for Beginners",
      organization: "Udemy"
    },
    {
      title: "MEAN Stack in Practice",
      organization: "Udemy"
    },
    { 
      title: "FIGMA: The Complete Course for UI/UX Design 2025",
      organization: "Udemy"
    },
    {
      title: "In-depth Web Development Training",
      organization: "ENTIC Gabès"
    }
  ];

  private languages: Language[] = [
    {
      name: "Arabic",
      level: "Native language"
    },
    {
      name: "French",
      level: "B1: Professional proficiency",
      details: "TCF: 391/699"
    },
    {
      name: "English",
      level: "Intermediate"
    }
  ];

  private education = [
    {
      degree: "Master's in E-Commerce",
      institution: "Higher Institute of Management (ISG), Gabès, Tunisia",
      period: "2024 - 2025"
    },
    {
      degree: "Bachelor's in Computer Science Applied to Management",
      institution: "Higher Institute of Management, Gabès, Tunisia",
      period: "2022 - 2023"
    },
    {
      degree: "Baccalaureate in Economics and Management",
      institution: "Manara High School, Gabès, Tunisia",
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