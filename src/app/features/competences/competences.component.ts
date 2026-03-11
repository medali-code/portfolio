import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="competences-section">
      <!-- Scanline overlay -->
      <div class="scanlines"></div>
      <!-- Grid background -->
      <div class="grid-bg"></div>

      <div class="container">

        <!-- Header -->
        <div class="section-header">
          <h1 class="main-title">
            <span class="title-glitch" data-text="SKILLS">SKILLS</span>
            <span class="title-sub">DATABASE</span>
          </h1>
          <div class="header-divider">
            <span class="div-line"></span>
            <span class="div-icon">◆</span>
            <span class="div-line"></span>
          </div>
        </div>

        <!-- Technical Skills -->
        <div class="skills-category">
          <div class="category-header">
            <div class="cat-badge frameworks-badge">SYS</div>
            <h2 class="category-title">TECHNOLOGIES <span class="amp">&</span> TOOLS</h2>
            <div class="cat-line"></div>
            <div class="cat-tag">MODULE_01</div>
          </div>

          <div class="skills-grid">
            <div class="skill-card frameworks">
              <div class="card-corner tl"></div>
              <div class="card-corner tr"></div>
              <div class="card-corner bl"></div>
              <div class="card-corner br"></div>
              <div class="card-header">
                <svg class="card-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <h3 class="skill-type">FRAMEWORKS</h3>
                <div class="card-id">F.01</div>
              </div>
              <div class="skill-separator"></div>
              <div class="skills-list">
                <span *ngFor="let s of skills.frameworks" class="skill-badge framework">
                  <span class="badge-prefix">&gt;</span>
                  <span class="badge-text">{{s}}</span>
                </span>
              </div>
            </div>

            <div class="skill-card languages">
              <div class="card-corner tl"></div>
              <div class="card-corner tr"></div>
              <div class="card-corner bl"></div>
              <div class="card-corner br"></div>
              <div class="card-header">
                <svg class="card-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                <h3 class="skill-type">LANGUAGES</h3>
                <div class="card-id">L.02</div>
              </div>
              <div class="skill-separator"></div>
              <div class="skills-list">
                <span *ngFor="let s of skills.languages" class="skill-badge language">
                  <span class="badge-prefix">&gt;</span>
                  <span class="badge-text">{{s}}</span>
                </span>
              </div>
            </div>

            <div class="skill-card databases">
              <div class="card-corner tl"></div>
              <div class="card-corner tr"></div>
              <div class="card-corner bl"></div>
              <div class="card-corner br"></div>
              <div class="card-header">
                <svg class="card-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
                <h3 class="skill-type">DATABASES</h3>
                <div class="card-id">D.03</div>
              </div>
              <div class="skill-separator"></div>
              <div class="skills-list">
                <span *ngFor="let s of skills.databases" class="skill-badge database">
                  <span class="badge-prefix">&gt;</span>
                  <span class="badge-text">{{s}}</span>
                </span>
              </div>
            </div>

            <div class="skill-card tools">
              <div class="card-corner tl"></div>
              <div class="card-corner tr"></div>
              <div class="card-corner bl"></div>
              <div class="card-corner br"></div>
              <div class="card-header">
                <svg class="card-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <h3 class="skill-type">TOOLS</h3>
                <div class="card-id">T.04</div>
              </div>
              <div class="skill-separator"></div>
              <div class="skills-list">
                <span *ngFor="let s of skills.tools" class="skill-badge tool">
                  <span class="badge-prefix">&gt;</span>
                  <span class="badge-text">{{s}}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="skills-category">
          <div class="category-header">
            <div class="cat-badge soft-badge">PSY</div>
            <h2 class="category-title">SOFT SKILLS</h2>
            <div class="cat-line"></div>
            <div class="cat-tag">MODULE_02</div>
          </div>

          <div class="soft-skills-grid">
            <div *ngFor="let skill of softSkills; let i = index" class="soft-skill-card">
              <div class="soft-rank">{{ (i + 1).toString().padStart(2, '0') }}</div>
              <div class="soft-skill-icon">✓</div>
              <span class="soft-skill-text">{{skill}}</span>
              <div class="soft-bar">
                <div class="soft-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="skills-category">
          <div class="category-header">
            <div class="cat-badge lang-badge">LNG</div>
            <h2 class="category-title">LANGUAGES</h2>
            <div class="cat-line"></div>
            <div class="cat-tag">MODULE_03</div>
          </div>

          <div class="languages-grid">
            <div *ngFor="let lang of languages" class="language-card">
              <div class="lang-glyph">{{ lang.name[0] }}</div>
              <div class="language-header">
                <h3 class="language-name">{{lang.name}}</h3>
                <div class="language-badge">{{lang.level}}</div>
              </div>
              <p *ngIf="lang.details" class="language-details">// {{lang.details}}</p>
              <div class="lang-meter">
                <div class="lang-meter-fill"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="skills-category">
          <div class="category-header">
            <div class="cat-badge cert-badge">ACH</div>
            <h2 class="category-title">CERTIFICATIONS</h2>
            <div class="cat-line"></div>
            <div class="cat-tag">MODULE_04</div>
          </div>

          <div class="certifications-grid">
            <div *ngFor="let cert of certifications" class="certification-card">
              <div class="cert-top-bar"></div>
              <div class="cert-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <div class="cert-rarity">★ CERTIFIED</div>
              <h3 class="certification-title">{{cert.title}}</h3>
              <p class="certification-org">{{cert.organization}}</p>
              <div class="cert-unlock">UNLOCKED</div>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;

      /* ── Palette calée sur styles.css ── */
      --c-main:        #2563eb;
      --c-secondary:   #3b82f6;
      --c-accent:      #60a5fa;
      --c-accent-dim:  rgba(96, 165, 250, 0.12);
      --c-accent-glow: rgba(96, 165, 250, 0.35);
      --c-deep:        #1e3a8a;
      --c-card-bg:     rgba(30, 58, 138, 0.55);
      --c-card-border: rgba(96, 165, 250, 0.18);
      --c-text-1:      #f1f5f9;
      --c-text-2:      #e2e8f0;
      --c-text-muted:  #64748b;

      /* ── Accents par catégorie (famille bleue) ── */
      --c-cyan:   #38bdf8;
      --c-violet: #818cf8;
      --c-sky:    #7dd3fc;
      --c-gold:   #fbbf24;

      --font-mono:    'Share Tech Mono', monospace;
      --font-display: 'Orbitron', sans-serif;
      --font-body:    'Rajdhani', sans-serif;
    }

    /* ── Keyframes ─────────────────────────────────── */
    @keyframes scanline {
      0%   { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    @keyframes glitch {
      0%,90%,100% { clip-path: none; transform: none; }
      91% { clip-path: inset(30% 0 50% 0); transform: translateX(-4px); }
      93% { clip-path: inset(60% 0 20% 0); transform: translateX(4px); }
      95% { clip-path: inset(10% 0 80% 0); transform: translateX(-2px); }
    }
    @keyframes glitch2 {
      0%,88%,100% { opacity:0; clip-path:none; transform:none; }
      89% { clip-path:inset(20% 0 60% 0); transform:translateX(6px); opacity:.6; color:var(--c-cyan); }
      91% { clip-path:inset(70% 0 10% 0); transform:translateX(-6px); opacity:.6; color:var(--c-violet); }
      93% { opacity:0; }
    }
    @keyframes fadeInUp {
      from { opacity:0; transform:translateY(18px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes blink {
      0%,100% { opacity:1; }
      50%     { opacity:0; }
    }
    @keyframes hud-slide {
      from { transform:scaleX(0); transform-origin:left; }
      to   { transform:scaleX(1); transform-origin:left; }
    }
    @keyframes bar-fill {
      from { width:0; }
      to   { width:80%; }
    }
    @keyframes pulse-glow {
      0%,100% { box-shadow: 0 0 6px var(--c-accent-glow); }
      50%     { box-shadow: 0 0 18px var(--c-accent-glow), 0 0 40px rgba(96,165,250,0.1); }
    }

    /* ── Base ─────────────────────────────────────── */
    .competences-section {
      min-height: 100vh;
      padding: 4rem 0 3rem;
      position: relative;
      overflow: hidden;
      font-family: var(--font-body);
    }

    .scanlines {
      pointer-events: none;
      position: fixed;
      inset: 0;
      z-index: 10;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 3px,
        rgba(30, 58, 138, 0.05) 3px,
        rgba(30, 58, 138, 0.05) 4px
      );
    }
    .scanlines::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 60px;
      background: linear-gradient(transparent, rgba(96,165,250,0.02), transparent);
      animation: scanline 5s linear infinite;
    }

    .grid-bg {
      pointer-events: none;
      position: fixed;
      inset: 0;
      z-index: 0;
      background-image:
        linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px);
      background-size: 44px 44px;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    /* ── Header ───────────────────────────────────── */
    .section-header {
      text-align: center;
      margin-bottom: 4.5rem;
      animation: fadeInUp .8s ease-out;
    }

    .system-label {
      font-family: var(--font-mono);
      font-size: .72rem;
      color: var(--c-text-muted);
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
      font-size: clamp(3rem, 7vw, 5.5rem);
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
      left: 0; top: 0; width: 100%;
      animation: glitch2 7s infinite;
    }

    .title-sub {
      font-family: var(--font-display);
      font-size: clamp(.75rem, 1.8vw, .95rem);
      font-weight: 400;
      color: var(--c-secondary);
      letter-spacing: .55em;
      text-shadow: 0 0 10px rgba(59,130,246,.4);
    }

    .header-divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 1.25rem auto;
      max-width: 360px;
    }
    .div-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--c-accent), transparent);
    }
    .div-icon {
      color: var(--c-accent);
      font-size: .7rem;
      text-shadow: 0 0 8px var(--c-accent-glow);
    }

    .subtitle {
      font-family: var(--font-mono);
      font-size: .85rem;
      color: var(--c-text-2);
      letter-spacing: .04em;
    }
    .blink {
      animation: blink 1s step-end infinite;
      color: var(--c-accent);
    }

    /* ── Category header ──────────────────────────── */
    .skills-category {
      margin-bottom: 4rem;
      animation: fadeInUp .7s ease-out;
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: .9rem;
      margin-bottom: 1.75rem;
    }

    .cat-badge {
      font-family: var(--font-display);
      font-size: .6rem;
      font-weight: 700;
      padding: .28rem .55rem;
      letter-spacing: .1em;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .frameworks-badge { background: var(--c-accent);  color: var(--c-deep); }
    .soft-badge       { background: var(--c-cyan);    color: var(--c-deep); }
    .lang-badge       { background: var(--c-violet);  color: #fff; }
    .cert-badge       { background: var(--c-gold);    color: var(--c-deep); }

    .category-title {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--c-text-1);
      letter-spacing: .1em;
      margin: 0;
      white-space: nowrap;
    }
    .amp { color: var(--c-secondary); }

    .cat-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, var(--c-card-border), transparent);
    }
    .cat-tag {
      font-family: var(--font-mono);
      font-size: .65rem;
      color: var(--c-text-muted);
      letter-spacing: .1em;
      white-space: nowrap;
    }

    /* ── Skill Cards ──────────────────────────────── */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.4rem;
    }

    .skill-card {
      background: var(--c-card-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--c-card-border);
      border-radius: 4px;
      padding: 1.75rem;
      position: relative;
      transition: all .3s ease;
      animation: pulse-glow 5s ease-in-out infinite;
    }

    .card-corner        { position: absolute; width: 11px; height: 11px; }
    .card-corner.tl     { top:-1px;    left:-1px;  border-top:2px solid var(--c-accent);  border-left:2px solid var(--c-accent); }
    .card-corner.tr     { top:-1px;    right:-1px; border-top:2px solid var(--c-accent);  border-right:2px solid var(--c-accent); }
    .card-corner.bl     { bottom:-1px; left:-1px;  border-bottom:2px solid var(--c-accent); border-left:2px solid var(--c-accent); }
    .card-corner.br     { bottom:-1px; right:-1px; border-bottom:2px solid var(--c-accent); border-right:2px solid var(--c-accent); }

    .skill-card.languages .card-corner { border-color: var(--c-cyan); }
    .skill-card.databases .card-corner { border-color: var(--c-violet); }
    .skill-card.tools     .card-corner { border-color: var(--c-sky); }

    .skill-card:hover {
      background: rgba(37, 99, 235, 0.25);
      border-color: var(--c-accent);
      transform: translateY(-5px);
      box-shadow: 0 12px 32px rgba(37,99,235,.35), 0 0 0 1px rgba(96,165,250,.15);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: .75rem;
      margin-bottom: .9rem;
    }

    .card-icon {
      color: var(--c-accent);
      filter: drop-shadow(0 0 5px var(--c-accent-glow));
      flex-shrink: 0;
    }
    .skill-card.languages .card-icon { color:var(--c-cyan);   filter:drop-shadow(0 0 5px rgba(56,189,248,.5)); }
    .skill-card.databases .card-icon { color:var(--c-violet); filter:drop-shadow(0 0 5px rgba(129,140,248,.5)); }
    .skill-card.tools     .card-icon { color:var(--c-sky);    filter:drop-shadow(0 0 5px rgba(125,211,252,.5)); }

    .skill-type {
      font-family: var(--font-display);
      font-size: .9rem;
      font-weight: 700;
      color: var(--c-text-1);
      letter-spacing: .1em;
      flex: 1;
      margin: 0;
    }

    .card-id {
      font-family: var(--font-mono);
      font-size: .65rem;
      color: var(--c-text-muted);
    }

    .skill-separator {
      height: 1px;
      margin-bottom: 1.1rem;
      background: linear-gradient(90deg, rgba(96,165,250,.25), transparent);
    }
    .skill-card.languages .skill-separator { background: linear-gradient(90deg, rgba(56,189,248,.2), transparent); }
    .skill-card.databases .skill-separator { background: linear-gradient(90deg, rgba(129,140,248,.2), transparent); }
    .skill-card.tools     .skill-separator { background: linear-gradient(90deg, rgba(125,211,252,.2), transparent); }

    /* ── Badges ───────────────────────────────────── */
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
    }

    .skill-badge {
      font-family: var(--font-mono);
      font-size: .78rem;
      padding: .32rem .65rem;
      border-radius: 2px;
      transition: all .2s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: .3rem;
    }
    .badge-prefix { opacity: .4; font-size: .68rem; }

    .framework {
      background: rgba(96,165,250,.1);
      color: var(--c-accent);
      border: 1px solid rgba(96,165,250,.22);
    }
    .framework:hover {
      background: rgba(96,165,250,.22);
      border-color: var(--c-accent);
      box-shadow: 0 0 10px var(--c-accent-glow);
      transform: scale(1.05);
    }

    .language {
      background: rgba(56,189,248,.1);
      color: var(--c-cyan);
      border: 1px solid rgba(56,189,248,.22);
    }
    .language:hover {
      background: rgba(56,189,248,.22);
      border-color: var(--c-cyan);
      box-shadow: 0 0 10px rgba(56,189,248,.4);
      transform: scale(1.05);
    }

    .database {
      background: rgba(129,140,248,.1);
      color: var(--c-violet);
      border: 1px solid rgba(129,140,248,.22);
    }
    .database:hover {
      background: rgba(129,140,248,.22);
      border-color: var(--c-violet);
      box-shadow: 0 0 10px rgba(129,140,248,.4);
      transform: scale(1.05);
    }

    .tool {
      background: rgba(125,211,252,.1);
      color: var(--c-sky);
      border: 1px solid rgba(125,211,252,.22);
    }
    .tool:hover {
      background: rgba(125,211,252,.22);
      border-color: var(--c-sky);
      box-shadow: 0 0 10px rgba(125,211,252,.4);
      transform: scale(1.05);
    }

    /* ── Soft Skills ──────────────────────────────── */
    .soft-skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
      gap: .7rem;
    }

    .soft-skill-card {
      background: var(--c-card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--c-card-border);
      border-radius: 3px;
      padding: .9rem 1.1rem;
      display: flex;
      align-items: center;
      gap: .9rem;
      transition: all .25s ease;
    }
    .soft-skill-card:hover {
      border-color: var(--c-cyan);
      background: rgba(56,189,248,.06);
      transform: translateX(6px);
      box-shadow: -3px 0 12px rgba(56,189,248,.2);
    }

    .soft-rank {
      font-family: var(--font-mono);
      font-size: .65rem;
      color: var(--c-text-muted);
      min-width: 22px;
    }

    .soft-skill-icon {
      width: 26px; height: 26px;
      border: 1px solid var(--c-cyan);
      color: var(--c-cyan);
      font-size: .7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border-radius: 2px;
      box-shadow: 0 0 6px rgba(56,189,248,.2);
    }

    .soft-skill-text {
      font-family: var(--font-body);
      font-size: .95rem;
      font-weight: 600;
      color: var(--c-text-1);
      letter-spacing: .02em;
      flex: 1;
    }

    .soft-bar {
      width: 52px; height: 3px;
      background: rgba(56,189,248,.1);
      border-radius: 1px;
      overflow: hidden;
    }
    .soft-bar-fill {
      height: 100%;
      background: var(--c-cyan);
      width: 80%;
      box-shadow: 0 0 5px rgba(56,189,248,.6);
      animation: bar-fill 1.2s ease-out;
    }

    /* ── Language Cards ───────────────────────────── */
    .languages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 1.4rem;
    }

    .language-card {
      background: var(--c-card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(129,140,248,.2);
      border-radius: 4px;
      padding: 1.75rem;
      position: relative;
      transition: all .3s ease;
      overflow: hidden;
    }
    .language-card:hover {
      border-color: var(--c-violet);
      background: rgba(129,140,248,.08);
      transform: translateY(-4px);
      box-shadow: 0 10px 28px rgba(129,140,248,.2);
    }

    .lang-glyph {
      position: absolute;
      top: .75rem; right: 1.25rem;
      font-family: var(--font-display);
      font-size: 3.2rem;
      font-weight: 900;
      color: rgba(129,140,248,.07);
      pointer-events: none;
      user-select: none;
      line-height: 1;
    }

    .language-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .6rem;
    }

    .language-name {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--c-text-1);
      letter-spacing: .05em;
      margin: 0;
    }

    .language-badge {
      font-family: var(--font-mono);
      font-size: .65rem;
      padding: .22rem .55rem;
      background: rgba(129,140,248,.12);
      color: var(--c-violet);
      border: 1px solid rgba(129,140,248,.3);
      border-radius: 2px;
      letter-spacing: .05em;
    }

    .language-details {
      font-family: var(--font-mono);
      font-size: .75rem;
      color: var(--c-text-muted);
      margin: 0 0 .9rem;
      line-height: 1.5;
    }

    .lang-meter {
      height: 3px;
      background: rgba(129,140,248,.1);
      border-radius: 1px;
      overflow: hidden;
    }
    .lang-meter-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--c-violet), var(--c-accent));
      width: 85%;
      box-shadow: 0 0 5px rgba(129,140,248,.5);
      animation: bar-fill 1.2s ease-out;
    }

    /* ── Certifications ───────────────────────────── */
    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 1.4rem;
    }

    .certification-card {
      background: var(--c-card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(251,191,36,.15);
      border-radius: 4px;
      padding: 1.75rem;
      text-align: center;
      transition: all .3s ease;
      position: relative;
      overflow: hidden;
    }

    .cert-top-bar {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--c-gold), transparent);
      animation: hud-slide 1s ease-out;
    }

    .certification-card:hover {
      border-color: var(--c-gold);
      background: rgba(251,191,36,.05);
      transform: translateY(-4px);
      box-shadow: 0 10px 28px rgba(251,191,36,.15);
    }

    .cert-icon {
      width: 56px; height: 56px;
      border-radius: 50%;
      border: 1px solid rgba(251,191,36,.3);
      background: rgba(251,191,36,.08);
      margin: 0 auto 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--c-gold);
      box-shadow: 0 0 12px rgba(251,191,36,.2);
      transition: all .3s ease;
    }
    .certification-card:hover .cert-icon {
      box-shadow: 0 0 22px rgba(251,191,36,.4);
    }

    .cert-rarity {
      font-family: var(--font-mono);
      font-size: .6rem;
      color: var(--c-gold);
      letter-spacing: .15em;
      margin-bottom: .6rem;
      opacity: .7;
    }

    .certification-title {
      font-family: var(--font-display);
      font-size: .95rem;
      font-weight: 700;
      color: var(--c-text-1);
      letter-spacing: .05em;
      margin: 0 0 .4rem;
    }

    .certification-org {
      font-family: var(--font-body);
      font-size: .85rem;
      color: var(--c-text-2);
      font-weight: 500;
      margin: 0 0 .8rem;
    }

    .cert-unlock {
      font-family: var(--font-mono);
      font-size: .6rem;
      color: var(--c-accent);
      letter-spacing: .15em;
      opacity: .55;
    }

    /* ── System footer ────────────────────────────── */
    .system-footer {
      font-family: var(--font-mono);
      font-size: .65rem;
      color: var(--c-text-muted);
      text-align: center;
      letter-spacing: .1em;
      padding: 1.75rem 0 0;
      border-top: 1px solid rgba(96,165,250,.08);
      display: flex;
      justify-content: center;
      gap: 1rem;
      align-items: center;
    }
    .footer-sep { color: rgba(96,165,250,.2); }

    /* ── Responsive ───────────────────────────────── */
    @media (max-width: 1023px) {
      .skills-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 767px) {
      .competences-section { padding: 3rem 0; }
      .skills-grid,
      .soft-skills-grid,
      .languages-grid,
      .certifications-grid { grid-template-columns: 1fr; }
      .category-header { flex-wrap: wrap; gap: .5rem; }
      .cat-line { display: none; }
    }
    @media (max-width: 479px) {
      .container { padding: 0 1rem; }
      .skill-card { padding: 1.25rem; }
    }
  `]
})
export class CompetencesComponent implements OnInit {
  skills: any = {};
  softSkills: string[] = [];
  languages: any[] = [];
  certifications: any[] = [];

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.getSkills().subscribe(s => this.skills = s);
    this.ds.getSoftSkills().subscribe(ss => this.softSkills = ss);
    this.ds.getLanguages().subscribe(l => this.languages = l);
    this.ds.getCertifications().subscribe(c => this.certifications = c);
  }
}