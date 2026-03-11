import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Experience } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
      --c-accent:      #60a5fa;
      --c-accent-glow: rgba(96,165,250,0.35);
      --c-secondary:   #3b82f6;
      --c-deep:        #1e3a8a;
      --c-card-bg:     rgba(30,58,138,0.55);
      --c-card-border: rgba(96,165,250,0.18);
      --c-text-1:      #f1f5f9;
      --c-text-2:      #e2e8f0;
      --c-muted:       #64748b;
      --c-teal:        #38bdf8;
      --c-violet:      #818cf8;
      --c-green:       #34d399;
      --font-display:  'Orbitron', sans-serif;
      --font-mono:     'Share Tech Mono', monospace;
      --font-body:     'Rajdhani', sans-serif;
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
      89% { clip-path:inset(20% 0 60% 0); transform:translateX(6px); opacity:.5; color:var(--c-teal); }
      91% { clip-path:inset(70% 0 10% 0); transform:translateX(-6px); opacity:.5; color:var(--c-violet); }
      93% { opacity:0; }
    }
    @keyframes blink {
      0%,100%{opacity:1;} 50%{opacity:0;}
    }
    @keyframes scanline {
      0%   { transform:translateY(-100%); }
      100% { transform:translateY(100vh); }
    }
    @keyframes hud-pulse {
      0%,100% { box-shadow:0 0 6px var(--c-accent-glow); }
      50%     { box-shadow:0 0 16px var(--c-accent-glow), 0 0 35px rgba(96,165,250,.08); }
    }
    @keyframes bar-slide {
      from { transform:scaleX(0); transform-origin:left; }
      to   { transform:scaleX(1); transform-origin:left; }
    }
    @keyframes dot-ping {
      0%   { transform:scale(1);   opacity:1; }
      70%  { transform:scale(2.2); opacity:0; }
      100% { transform:scale(2.2); opacity:0; }
    }
    @keyframes line-grow {
      from { height:0; }
      to   { height:100%; }
    }

    /* ── Base ── */
    .exp-section {
      min-height: 100vh;
      padding: 4rem 0 3rem;
      position: relative;
      overflow: hidden;
      font-family: var(--font-body);
    }

    .scanlines {
      pointer-events:none; position:fixed; inset:0; z-index:10;
      background:repeating-linear-gradient(
        0deg,transparent,transparent 3px,
        rgba(30,58,138,.05) 3px,rgba(30,58,138,.05) 4px
      );
    }
    .scanlines::after {
      content:''; position:absolute; width:100%; height:60px;
      background:linear-gradient(transparent,rgba(96,165,250,.02),transparent);
      animation:scanline 5s linear infinite;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    /* ── Section Header ── */
    .section-header {
      text-align:center; margin-bottom:3.5rem;
      animation:fadeInUp .8s ease-out;
    }
    .system-label {
      font-family:var(--font-mono); font-size:.72rem;
      color:var(--c-muted); letter-spacing:.15em; margin-bottom:1.5rem;
    }
    .main-title {
      display:flex; flex-direction:column; align-items:center;
      gap:0; margin-bottom:1.25rem; line-height:1;
    }
    .title-glitch {
      font-family:var(--font-display);
      font-size:clamp(2.5rem,6vw,4.5rem); font-weight:900;
      color:var(--c-accent); letter-spacing:.15em;
      text-shadow:0 0 20px var(--c-accent-glow),0 0 60px rgba(96,165,250,.15);
      position:relative; animation:glitch 7s infinite;
    }
    .title-glitch::after {
      content:attr(data-text);
      position:absolute; left:0; top:0; width:100%;
      animation:glitch2 7s infinite;
    }
    .title-sub {
      font-family:var(--font-display);
      font-size:clamp(.65rem,1.6vw,.85rem); font-weight:400;
      color:var(--c-secondary); letter-spacing:.55em;
      text-shadow:0 0 10px rgba(59,130,246,.4);
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
    .subtitle { font-family:var(--font-mono); font-size:.85rem; color:var(--c-text-2); letter-spacing:.04em; }
    .blink { animation:blink 1s step-end infinite; color:var(--c-accent); }

    /* ── Cat header (Experience / Education) ── */
    .cat-header {
      display:flex; align-items:center; gap:.9rem; margin-bottom:2rem;
    }
    .cat-badge {
      font-family:var(--font-display); font-size:.6rem; font-weight:700;
      padding:.28rem .55rem; letter-spacing:.1em; border-radius:2px;
      flex-shrink:0;
    }
    .exp-badge  { background:var(--c-accent);  color:var(--c-deep); }
    .edu-badge  { background:var(--c-violet);  color:#fff; }
    .cat-title {
      font-family:var(--font-display); font-size:1.1rem; font-weight:700;
      color:var(--c-text-1); letter-spacing:.1em; margin:0; white-space:nowrap;
    }
    .cat-line { flex:1; height:1px; background:linear-gradient(90deg,var(--c-card-border),transparent); }
    .cat-tag  { font-family:var(--font-mono); font-size:.65rem; color:var(--c-muted); letter-spacing:.1em; white-space:nowrap; }

    /* ── Timeline ── */
    .timeline {
      position:relative;
      padding-left:2.5rem;
    }

    /* Ligne verticale */
    .timeline::before {
      content:'';
      position:absolute; left:8px; top:0; width:2px;
      background:linear-gradient(to bottom, transparent, var(--c-secondary) 8%, var(--c-secondary) 92%, transparent);
      animation:line-grow .8s ease-out;
      height:100%;
    }

    .timeline-entry {
      position:relative;
      margin-bottom:1.75rem;
      animation:fadeInUp .6s ease-out both;
    }
    .timeline-entry:last-child { margin-bottom:0; }

    /* Dot HUD */
    .tl-dot {
      position:absolute;
      left:-2.18rem; top:.55rem;
      width:14px; height:14px;
    }
    .tl-dot-inner {
      width:100%; height:100%;
      border-radius:2px;
      background:var(--c-accent);
      border:2px solid var(--c-deep);
      box-shadow:0 0 0 3px rgba(96,165,250,.2), 0 0 12px rgba(96,165,250,.3);
      position:relative; z-index:1;
    }
    .tl-dot-ping {
      position:absolute;
      inset:-3px;
      border:1px solid var(--c-accent);
      border-radius:2px;
      animation:dot-ping 2.5s ease-out infinite;
    }

    /* Card */
    .timeline-card {
      background:var(--c-card-bg);
      backdrop-filter:blur(12px);
      border:1px solid var(--c-card-border);
      border-radius:4px;
      padding:1.4rem 1.6rem;
      position:relative;
      overflow:hidden;
      transition:all .3s ease;
      animation:hud-pulse 6s ease-in-out infinite;
    }
    .timeline-card::after {
      content:'';
      position:absolute;
      top:-1px; left:-1px; width:10px; height:10px;
      border-top:2px solid var(--c-accent); border-left:2px solid var(--c-accent);
      pointer-events:none;
    }
    .tl-top-bar {
      position:absolute; top:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,var(--c-accent),transparent);
      transform:scaleX(0); transform-origin:left;
      transition:transform .4s ease;
    }
    .timeline-card:hover .tl-top-bar { transform:scaleX(1); }
    .timeline-card:hover {
      border-color:rgba(96,165,250,.4);
      transform:translateX(5px);
      box-shadow:-4px 0 18px rgba(96,165,250,.12);
    }

    /* Card content */
    .card-top {
      display:flex; justify-content:space-between; align-items:flex-start;
      gap:1rem; margin-bottom:.5rem; flex-wrap:wrap;
    }
    .card-left { flex:1; }
    .card-title {
      font-family:var(--font-display); font-size:.9rem; font-weight:700;
      color:var(--c-text-1); letter-spacing:.05em; margin:0 0 .3rem;
      line-height:1.35;
    }
    .card-company {
      font-family:var(--font-mono); font-size:.72rem;
      color:var(--c-teal); letter-spacing:.06em;
      display:flex; align-items:center; gap:.35rem;
    }
    .company-dot { width:5px; height:5px; background:var(--c-teal); border-radius:1px; }
    .card-period {
      font-family:var(--font-mono); font-size:.63rem;
      padding:.18rem .5rem; border-radius:2px;
      background:rgba(96,165,250,.1);
      color:var(--c-accent);
      border:1px solid rgba(96,165,250,.2);
      white-space:nowrap; flex-shrink:0; align-self:flex-start;
      margin-top:.1rem;
    }

    /* Task list */
    .task-sep {
      height:1px; margin:.85rem 0;
      background:linear-gradient(90deg,rgba(96,165,250,.2),transparent);
    }
    .task-list {
      padding:0; margin:0; list-style:none;
      display:flex; flex-direction:column; gap:.4rem;
    }
    .task-list li {
      font-family:var(--font-body); font-size:.9rem; font-weight:400;
      color:var(--c-text-2); line-height:1.65;
      display:flex; align-items:flex-start; gap:.55rem;
    }
    .task-arrow { color:var(--c-accent); font-size:.65rem; flex-shrink:0; margin-top:.35rem; }

    /* ── Education ── */
    .edu-block { margin-top:3.5rem; }

    .edu-grid { display:flex; flex-direction:column; gap:0; }

    .edu-entry {
      background:var(--c-card-bg);
      backdrop-filter:blur(12px);
      border:1px solid var(--c-card-border);
      border-radius:4px;
      padding:1.25rem 1.5rem;
      position:relative;
      overflow:hidden;
      transition:all .3s ease;
      animation:hud-pulse 6s ease-in-out infinite;
      margin-bottom:.9rem;
    }
    .edu-entry:last-child { margin-bottom:0; }
    .edu-entry::after {
      content:'';
      position:absolute;
      top:-1px; left:-1px; width:10px; height:10px;
      border-top:2px solid var(--c-violet); border-left:2px solid var(--c-violet);
      pointer-events:none;
    }
    .edu-top-bar {
      position:absolute; top:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,var(--c-violet),transparent);
      transform:scaleX(0); transform-origin:left;
      transition:transform .4s ease;
    }
    .edu-entry:hover .edu-top-bar { transform:scaleX(1); }
    .edu-entry:hover {
      border-color:rgba(129,140,248,.4);
      transform:translateX(5px);
      box-shadow:-4px 0 18px rgba(129,140,248,.12);
    }

    .edu-degree {
      font-family:var(--font-display); font-size:.85rem; font-weight:700;
      color:var(--c-text-1); letter-spacing:.06em; margin-bottom:.3rem;
    }
    .edu-inst {
      font-family:var(--font-mono); font-size:.72rem;
      color:var(--c-violet); letter-spacing:.05em; margin-bottom:.35rem;
      display:flex; align-items:center; gap:.35rem;
    }
    .edu-period {
      font-family:var(--font-mono); font-size:.63rem;
      padding:.18rem .5rem; border-radius:2px; display:inline-block;
      background:rgba(129,140,248,.1);
      color:var(--c-violet);
      border:1px solid rgba(129,140,248,.2);
    }

    /* ── Responsive ── */
    @media (max-width:767px) {
      .exp-section { padding:3rem 0; }
      .container   { padding:0 1rem; }
      .timeline    { padding-left:2rem; }
      .cat-header  { flex-wrap:wrap; }
      .cat-line    { display:none; }
    }
    @media (max-width:479px) {
      .container { padding:0 .875rem; }
      .timeline-card,.edu-entry { padding:1.1rem 1.25rem; }
      .card-top { flex-direction:column; }
    }
  `],
  template: `
    <section class="exp-section">
      <div class="scanlines"></div>

      <div class="container">

        <!-- Header -->
        <div class="section-header">
          <h1 class="main-title">
            <span class="title-glitch" data-text="EXPERIENCE">EXPERIENCE</span>
            <span class="title-sub">MISSION HISTORY</span>
          </h1>
          <div class="header-divider">
            <span class="div-line"></span>
            <span class="div-icon">◆</span>
            <span class="div-line"></span>
          </div>
          <p class="subtitle">// {{ experiences.length }} MISSIONS ON RECORD <span class="blink">█</span></p>
        </div>

        <!-- Experience Timeline -->
        <div class="cat-header">
          <div class="cat-badge exp-badge">EXP</div>
          <h2 class="cat-title">PROFESSIONAL EXPERIENCE</h2>
          <div class="cat-line"></div>
          <div class="cat-tag">MODULE_01</div>
        </div>

        <div class="timeline">
          <div *ngFor="let e of experiences; let i = index"
               class="timeline-entry"
               [style.animation-delay]="(i * 0.08) + 's'">

            <div class="tl-dot">
              <div class="tl-dot-inner"></div>
              <div class="tl-dot-ping"></div>
            </div>

            <div class="timeline-card">
              <div class="tl-top-bar"></div>

              <div class="card-top">
                <div class="card-left">
                  <h3 class="card-title">{{ e.title }}</h3>
                  <div class="card-company">
                    <span class="company-dot"></span>
                    {{ e.company }} · {{ e.location }}
                  </div>
                </div>
                <span class="card-period">{{ e.period }}</span>
              </div>

              <div class="task-sep"></div>

              <ul class="task-list">
                <li *ngFor="let t of e.tasks">
                  <span class="task-arrow">▶</span>
                  {{ t }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="edu-block">
          <div class="cat-header">
            <div class="cat-badge edu-badge">EDU</div>
            <h2 class="cat-title">EDUCATION</h2>
            <div class="cat-line"></div>
            <div class="cat-tag">MODULE_02</div>
          </div>

          <div class="edu-grid">
            <div *ngFor="let edu of education" class="edu-entry">
              <div class="edu-top-bar"></div>
              <div class="edu-degree">{{ edu.degree }}</div>
              <div class="edu-inst">
                <span class="company-dot" style="background:var(--c-violet)"></span>
                {{ edu.institution }}
              </div>
              <span class="edu-period">{{ edu.period }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  education: any[] = [];

  private readonly newExperiences: Experience[] = [
    {
      title: 'Instructor in Algorithms and Databases (BTP Level)',
      company: 'ICI Formation',
      location: 'Gouvernorat Gabès, Tunisie',
      period: 'nov. 2025 – aujourd\'hui · 5 mois · Sur site',
      tasks: [
        'Teaching algorithms and database fundamentals to BTP-level students.',
        'Introducing database design through UML diagrams.',
        'Training students in data manipulation and SQL querying.',
        'Helping learners develop logical thinking and structured problem-solving skills.'
      ]
    },
    {
      title: 'Full Stack Development Instructor (Angular & NestJS)',
      company: 'Centre Formation Provision',
      location: 'Gouvernorat Gabès, Tunisie',
      period: 'oct. 2025 – aujourd\'hui · 6 mois · Sur site',
      tasks: [
        'Guide learners from the very basics of web development all the way to building full-stack applications.',
        'Fundamentals: HTML, CSS, JavaScript.',
        'Frontend: Angular (components, services, routing, forms).',
        'Backend: NestJS, REST APIs, JWT authentication.',
        'Database: MySQL with phpMyAdmin and TypeORM.',
        'Tools & Best Practices: VS Code, Node.js, XAMPP, Swagger, Git, and debugging.',
        'Final Project: Building a complete web application (frontend + backend).'
      ]
    },
    {
      title: 'Full Stack Development Instructor (Angular & NestJS)',
      company: 'Ecole Elyssa Formation',
      location: 'Gouvernorat Gabès, Tunisie',
      period: 'déc. 2025 – aujourd\'hui · 4 mois · Sur site',
      tasks: [
        'Guide learners from the very basics of web development all the way to building full-stack applications.',
        'Fundamentals: HTML, CSS, JavaScript.',
        'Frontend: Angular (components, services, routing, forms).',
        'Backend: NestJS, REST APIs, JWT authentication.',
        'Database: MySQL with phpMyAdmin and TypeORM.',
        'Tools & Best Practices: VS Code, Node.js, XAMPP, Swagger, Git, and debugging.',
        'Final Project: Building a complete web application (frontend + backend).'
      ]
    },
    {
      title: 'Baccalaureate IT Instructor | Python & Algorithms',
      company: 'Centre Soji de Formation',
      location: 'Gabès, Gouvernorat Gabès, Tunisie',
      period: 'févr. 2026 – aujourd\'hui · 2 mois · Sur site',
      tasks: [
        'Providing academic support for Baccalaureate-level students in IT, focusing on algorithms and Python.',
        'Helping learners grasp core concepts, improve academic performance, and build a strong foundation for higher education or professional training.',
        'Role may expand to delivering professional Web Development training depending on program demand and student enrollment.'
      ]
    }
  ];

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.getExperiences().subscribe(existing => {
      this.experiences = this.sortOldestFirst([...existing, ...this.newExperiences]);
    });
    this.ds.getEducation().subscribe(edu => this.education = edu);
  }

  private sortOldestFirst(list: Experience[]): Experience[] {
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