import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../services/data.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="proj-card" [class.has-url]="!!impactUrl">

    <!-- Coins HUD -->
    <div class="corner tl"></div>
    <div class="corner tr"></div>
    <div class="corner bl"></div>
    <div class="corner br"></div>

    <!-- Barre top animée au hover -->
    <div class="proj-top-bar"></div>

    <div class="proj-body">

      <!-- En-tête -->
      <div class="proj-header">
        <div class="proj-left">
          <div class="proj-index">{{ padIndex(index) }}</div>
          <div class="proj-title-wrap">
            <h3 class="proj-title">{{ project.title }}</h3>
            <span *ngIf="project.location" class="proj-loc">
              <span class="loc-icon">◉</span> {{ project.location }}
            </span>
          </div>
        </div>
        <div class="proj-period">{{ project.period }}</div>
      </div>

      <!-- Séparateur -->
      <div class="proj-sep"></div>

      <!-- Description -->
      <p class="proj-desc">{{ project.description }}</p>

      <!-- Stack -->
      <div class="proj-tech-row">
        <span class="tech-label">&gt; STACK</span>
        <div class="tech-tags">
          <span class="tech-tag" *ngFor="let t of project.tech">{{ t }}</span>
        </div>
      </div>

      <!-- Impact -->
      <div class="proj-impact">
        <span class="impact-arrow">➜</span>
        <div class="impact-text">
          <ng-container *ngIf="!impactUrl">{{ project.impact }}</ng-container>
          <ng-container *ngIf="impactUrl">
            {{ impactLabel }}
            <a [href]="impactUrl" target="_blank" rel="noopener noreferrer" class="impact-link">
              {{ impactUrl }}
            </a>
          </ng-container>
        </div>
      </div>

    </div>
  </div>
  `,
  styles: [`
    :host {
      display: block;

      --c-accent:      #60a5fa;
      --c-accent-glow: rgba(96,165,250,0.35);
      --c-secondary:   #3b82f6;
      --c-card-bg:     rgba(30,58,138,0.55);
      --c-card-border: rgba(96,165,250,0.18);
      --c-text-1:      #f1f5f9;
      --c-text-2:      #e2e8f0;
      --c-muted:       #64748b;
      --c-teal:        #38bdf8;
      --c-violet:      #818cf8;
      --c-green:       #34d399;

      --font-display: 'Orbitron',        sans-serif;
      --font-mono:    'Share Tech Mono', monospace;
      --font-body:    'Rajdhani',        sans-serif;
    }

    @keyframes fadeInUp {
      from { opacity:0; transform:translateY(14px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes hud-pulse {
      0%,100% { box-shadow: 0 0 6px var(--c-accent-glow); }
      50%     { box-shadow: 0 0 16px var(--c-accent-glow), 0 0 35px rgba(96,165,250,.08); }
    }
    @keyframes bar-slide {
      from { transform:scaleX(0); transform-origin:left; }
      to   { transform:scaleX(1); transform-origin:left; }
    }

    /* ── Card shell ── */
    .proj-card {
      background: var(--c-card-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--c-card-border);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      transition: all .3s ease;
      animation: fadeInUp .6s ease-out both, hud-pulse 6s ease-in-out infinite;
    }

    .proj-card:hover {
      border-color: rgba(96,165,250,.4);
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(30,58,138,.5), 0 0 20px rgba(96,165,250,.12);
    }

    /* Coins HUD */
    .corner        { position:absolute; width:10px; height:10px; pointer-events:none; }
    .corner.tl     { top:-1px;    left:-1px;  border-top:2px solid var(--c-accent);   border-left:2px solid var(--c-accent); }
    .corner.tr     { top:-1px;    right:-1px; border-top:2px solid var(--c-accent);   border-right:2px solid var(--c-accent); }
    .corner.bl     { bottom:-1px; left:-1px;  border-bottom:2px solid var(--c-accent);border-left:2px solid var(--c-accent); }
    .corner.br     { bottom:-1px; right:-1px; border-bottom:2px solid var(--c-accent);border-right:2px solid var(--c-accent); }

    /* Barre top */
    .proj-top-bar {
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--c-accent), var(--c-violet), transparent);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .4s ease;
    }
    .proj-card:hover .proj-top-bar {
      transform: scaleX(1);
    }

    /* ── Body ── */
    .proj-body { padding: 1.6rem 1.75rem; }

    /* ── Header ── */
    .proj-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: .75rem;
      flex-wrap: wrap;
    }

    .proj-left {
      display: flex;
      align-items: flex-start;
      gap: .9rem;
      flex: 1;
    }

    .proj-index {
      font-family: var(--font-display);
      font-size: .65rem;
      font-weight: 700;
      color: var(--c-accent);
      background: rgba(96,165,250,.1);
      border: 1px solid rgba(96,165,250,.2);
      border-radius: 2px;
      padding: .25rem .45rem;
      letter-spacing: .05em;
      flex-shrink: 0;
      margin-top: .15rem;
      min-width: 36px;
      text-align: center;
    }

    .proj-title-wrap {
      display: flex;
      flex-direction: column;
      gap: .3rem;
    }

    .proj-title {
      font-family: var(--font-display);
      font-size: .95rem;
      font-weight: 700;
      color: var(--c-text-1);
      letter-spacing: .04em;
      line-height: 1.4;
      margin: 0;
    }

    .proj-loc {
      font-family: var(--font-mono);
      font-size: .65rem;
      color: var(--c-teal);
      letter-spacing: .06em;
      display: flex;
      align-items: center;
      gap: .3rem;
    }
    .loc-icon { font-size: .55rem; }

    .proj-period {
      font-family: var(--font-mono);
      font-size: .65rem;
      color: var(--c-muted);
      letter-spacing: .06em;
      white-space: nowrap;
      flex-shrink: 0;
      margin-top: .2rem;
    }

    /* ── Separateur ── */
    .proj-sep {
      height: 1px;
      background: linear-gradient(90deg, rgba(96,165,250,.2), transparent);
      margin-bottom: 1rem;
    }

    /* ── Description ── */
    .proj-desc {
      font-family: var(--font-body);
      font-size: .95rem;
      font-weight: 400;
      color: var(--c-text-2);
      line-height: 1.75;
      margin-bottom: 1.1rem;
      opacity: .85;
    }

    /* ── Stack ── */
    .proj-tech-row {
      display: flex;
      align-items: center;
      gap: .75rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .tech-label {
      font-family: var(--font-mono);
      font-size: .65rem;
      color: var(--c-teal);
      letter-spacing: .12em;
      flex-shrink: 0;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: .35rem;
    }

    .tech-tag {
      font-family: var(--font-mono);
      font-size: .65rem;
      padding: .2rem .55rem;
      border-radius: 2px;
      background: rgba(56,189,248,.08);
      color: var(--c-teal);
      border: 1px solid rgba(56,189,248,.2);
      transition: all .2s;
    }
    .tech-tag:hover {
      background: rgba(56,189,248,.18);
      border-color: var(--c-teal);
      box-shadow: 0 0 8px rgba(56,189,248,.3);
      transform: scale(1.04);
    }

    /* ── Impact ── */
    .proj-impact {
      display: flex;
      align-items: flex-start;
      gap: .65rem;
      background: rgba(52,211,153,.04);
      border: 1px solid rgba(52,211,153,.15);
      border-radius: 3px;
      padding: .65rem 1rem;
      font-family: var(--font-body);
      font-size: .9rem;
      color: #86efac;
      line-height: 1.6;
    }

    .impact-arrow {
      color: var(--c-green);
      font-weight: 700;
      flex-shrink: 0;
      margin-top: .05rem;
    }

    .impact-link {
      color: var(--c-accent);
      text-decoration: none;
      border-bottom: 1px solid rgba(96,165,250,.3);
      transition: all .2s;
      word-break: break-all;
    }
    .impact-link:hover {
      color: white;
      border-bottom-color: var(--c-accent);
      text-shadow: 0 0 8px var(--c-accent-glow);
    }

    @media (max-width: 600px) {
      .proj-body { padding: 1.25rem; }
      .proj-header { flex-direction: column; }
      .proj-period { align-self: flex-start; }
    }
  `]
})
export class ProjectDetailComponent {
  @Input() project!: Project;
  @Input() index: number = 0;

  padIndex(i: number): string {
    return (i + 1).toString().padStart(2, '0');
  }

  get impactUrl(): string | null {
    const m = this.project?.impact?.match(/https?:\/\/\S+/);
    return m ? m[0] : null;
  }
  get impactLabel(): string {
    return this.project?.impact?.replace(/https?:\/\/\S+/, '').trim() ?? '';
  }
}