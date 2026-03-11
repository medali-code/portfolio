import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Project } from '../../services/data.service';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDetailComponent],
  template: `
    <section class="projects-section">
      <div class="scanlines"></div>
      <div class="container">

        <!-- Header -->
        <div class="section-header">
          <h2 class="main-title">
            <span class="title-glitch" data-text="PROJECTS">PROJECTS</span>
            <span class="title-sub">MISSION LOG</span>
          </h2>
          <div class="header-divider">
            <span class="div-line"></span>
            <span class="div-icon">◆</span>
            <span class="div-line"></span>
          </div>
          <p class="subtitle">// {{ projects.length }} MISSIONS COMPLETED <span class="blink">█</span></p>
        </div>

        <!-- Project list -->
        <div class="projects-list">
          <app-project-detail *ngFor="let p of projects; let i = index"
            [project]="p"
            [index]="i">
          </app-project-detail>
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      --font-display: 'Orbitron', sans-serif;
      --font-mono:    'Share Tech Mono', monospace;
      --font-body:    'Rajdhani', sans-serif;
      --c-accent:     #60a5fa;
      --c-accent-glow: rgba(96,165,250,0.35);
      --c-secondary:  #3b82f6;
      --c-text-1:     #f1f5f9;
      --c-text-2:     #e2e8f0;
      --c-muted:      #64748b;
    }

    @keyframes fadeInUp {
      from { opacity:0; transform:translateY(18px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes glitch {
      0%,90%,100% { clip-path:none; transform:none; }
      91% { clip-path:inset(30% 0 50% 0); transform:translateX(-4px); }
      93% { clip-path:inset(60% 0 20% 0); transform:translateX(4px); }
      95% { clip-path:inset(10% 0 80% 0); transform:translateX(-2px); }
    }
    @keyframes glitch2 {
      0%,88%,100% { opacity:0; }
      89% { clip-path:inset(20% 0 60% 0); transform:translateX(6px); opacity:.5; color:#38bdf8; }
      91% { clip-path:inset(70% 0 10% 0); transform:translateX(-6px); opacity:.5; color:#818cf8; }
      93% { opacity:0; }
    }
    @keyframes blink {
      0%,100%{opacity:1;} 50%{opacity:0;}
    }
    @keyframes scanline {
      0%   { transform:translateY(-100%); }
      100% { transform:translateY(100vh); }
    }

    .projects-section {
      min-height: 100vh;
      padding: 4rem 0 3rem;
      position: relative;
      overflow: hidden;
    }

    .scanlines {
      pointer-events: none;
      position: fixed;
      inset: 0; z-index: 10;
      background: repeating-linear-gradient(
        0deg, transparent, transparent 3px,
        rgba(30,58,138,0.05) 3px, rgba(30,58,138,0.05) 4px
      );
    }
    .scanlines::after {
      content:'';
      position:absolute; width:100%; height:60px;
      background:linear-gradient(transparent,rgba(96,165,250,.02),transparent);
      animation:scanline 5s linear infinite;
    }

    .container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    /* Header */
    .section-header {
      text-align: center;
      margin-bottom: 3.5rem;
      animation: fadeInUp .8s ease-out;
    }
    .system-label {
      font-family: var(--font-mono);
      font-size: .72rem;
      color: var(--c-muted);
      letter-spacing: .15em;
      margin-bottom: 1.5rem;
    }
    .main-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
      margin-bottom: 1.25rem;
      line-height: 1;
    }
    .title-glitch {
      font-family: var(--font-display);
      font-size: clamp(2.8rem,6vw,5rem);
      font-weight: 900;
      color: var(--c-accent);
      letter-spacing: .15em;
      text-shadow: 0 0 20px var(--c-accent-glow), 0 0 60px rgba(96,165,250,.15);
      position: relative;
      animation: glitch 7s infinite;
    }
    .title-glitch::after {
      content: attr(data-text);
      position: absolute;
      left:0; top:0; width:100%;
      animation: glitch2 7s infinite;
    }
    .title-sub {
      font-family: var(--font-display);
      font-size: clamp(.7rem,1.6vw,.9rem);
      font-weight: 400;
      color: var(--c-secondary);
      letter-spacing: .55em;
      text-shadow: 0 0 10px rgba(59,130,246,.4);
    }
    .header-divider {
      display:flex; align-items:center; gap:1rem;
      margin:1.25rem auto; max-width:340px;
    }
    .div-line {
      flex:1; height:1px;
      background:linear-gradient(90deg,transparent,var(--c-accent),transparent);
    }
    .div-icon { color:var(--c-accent); font-size:.7rem; text-shadow:0 0 8px var(--c-accent-glow); }
    .subtitle {
      font-family: var(--font-mono);
      font-size: .85rem;
      color: var(--c-text-2);
      letter-spacing: .04em;
    }
    .blink { animation:blink 1s step-end infinite; color:var(--c-accent); }

    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    @media (max-width: 767px) {
      .projects-section { padding: 3rem 0; }
      .container { padding: 0 1rem; }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  private readonly newProjects: Project[] = [
    {
      title: 'LoveBooking 💍 — Pedagogical project designed for my learners',
      location: 'Associé(e) à Ecole Elyssa Formation',
      period: 'févr. 2026 – févr. 2026',
      description:
        'As part of my accelerated web development training, I designed this guided mini project from scratch for my learners. ' +
        'LoveBooking is a fictional wedding agency website created specifically to help participants practice front-end fundamentals through a concrete and engaging real-world case.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      impact: '3 complete interfaces (Home · Packages · Partners) · Mini chatbot in vanilla JS · Modern responsive design in pure CSS'
    },
    {
      title: 'UpDays 🛠️ — Trainer at UpDays · Web Development Workshop',
      location: 'UpDays Tech Event',
      period: 'févr. 2026 – févr. 2026',
      description:
        'As part of my participation as a trainer at the UpDays tech event, I designed this complete website to showcase my WebCraft workshop dedicated to web development. ' +
        'Built entirely in pure HTML & CSS — no framework, no JavaScript — proving that modern and professional interfaces can be created with front-end fundamentals alone.',
      tech: ['HTML5', 'CSS3'],
      impact: 'Detailed day schedule · Registration form · Contact page · About section presenting event highlights'
    },
    {
      title: 'Personal Portfolio Website',
      location: '',
      period: 'oct. 2025 – oct. 2025',
      description:
        'Developed a fully responsive portfolio website to showcase professional projects and technical expertise. ' +
        'Designed and built the front-end using Angular with emphasis on modern UI/UX principles and performance optimization. ' +
        'Implemented reusable component architecture following Angular best practices for maintainability and scalability. ' +
        'Ensured cross-browser compatibility and mobile responsiveness for optimal user experience across all devices.',
      tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      impact: '🔗 Live Demo: https://medali-code.github.io/portfolio/'
    }
  ];

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.getProjects().subscribe(existing => {
      this.projects = this.sortNewestFirst([...existing, ...this.newProjects]);
    });
  }

  private sortNewestFirst(list: Project[]): Project[] {
    const MONTHS: Record<string, number> = {
      jan:1, fév:2, feb:2, mar:3, avr:4, apr:4,
      mai:5, may:5, juin:6, jun:6, juil:7, jul:7,
      août:8, aug:8, sep:9, oct:10, nov:11, déc:12, dec:12
    };
    const score = (period: string): number => {
      const lower = period.toLowerCase();
      const year  = parseInt((lower.match(/(\d{4})/) ?? ['0','0'])[1]);
      let month = 0;
      for (const [key, val] of Object.entries(MONTHS)) {
        if (lower.startsWith(key)) { month = val; break; }
      }
      return year * 100 + month;
    };
    return [...list].sort((a, b) => score(b.period) - score(a.period));
  }
}