import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Resource {
  title: string;
  subtitle?: string;
  type: 'pdf' | 'slides' | 'tp' | 'exam' | 'quiz';
  pages?: number;
  slides?: number;
  category: string;
  tags?: string[];
  highlight?: string;
}

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

    /* ══════════════════════════════════════════
       BREAK OUT OF PARENT CONTAINER
       ══════════════════════════════════════════ */
    :host {
      display: block;
      width: 100vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-top: -2rem;
      margin-bottom: -12rem;
      padding-bottom: 12rem;
      background: #1e3a8a;
    }

    /* ══════════════════════════════════════════
       ROOT — portfolio colors + game atmosphere
       ══════════════════════════════════════════ */
    .lib-root {
      --main:           #2563eb;
      --secondary:      #3b82f6;
      --accent:         #60a5fa;
      --accent-dark:    #3b82f6;
      --muted:          #cbd5e1;
      --card-bg:        rgba(30, 58, 138, 0.6);
      --gradient-start: #1e3a8a;
      --gradient-end:   #2563eb;
      --text-primary:   #f1f5f9;
      --text-secondary: #e2e8f0;
      --glow:           rgba(96, 165, 250, 0.35);
      --border:         rgba(96, 165, 250, 0.22);
      --tp-color:       #4ade80;
      --pdf-color:      #f87171;
      --slides-color:   #60a5fa;
      --exam-color:     #fbbf24;
      --quiz-color:     #a78bfa;

      font-family: 'Rajdhani', sans-serif;
      width: 100%;
      min-height: 100vh;
      background:
        radial-gradient(ellipse 80% 50% at 10% 0%,   rgba(37, 99, 235, .35) 0%, transparent 60%),
        radial-gradient(ellipse 60% 40% at 90% 100%, rgba(30, 58, 138, .4)  0%, transparent 60%),
        radial-gradient(ellipse 100% 80% at 50% 50%, rgba(37, 99, 235, .08) 0%, transparent 70%),
        linear-gradient(160deg, #0f1e4a 0%, #1a2f6e 40%, #0d1a3d 100%);
      position: relative;
      overflow: hidden;
      padding: 3.5rem 0 5rem;
    }

    .lib-root::before {
      content: '';
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(96,165,250,.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(96,165,250,.06) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
      animation: gridScroll 30s linear infinite;
    }
    @keyframes gridScroll {
      from { background-position: 0 0; }
      to   { background-position: 50px 50px; }
    }

    .lib-root::after {
      content: '';
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse at center, transparent 60%, rgba(10, 20, 60, .6) 100%);
      pointer-events: none;
      z-index: 0;
    }

    /* ══════════════════════════════════════════
       FLOATING PARTICLES
       ══════════════════════════════════════════ */
    .particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
    .particle {
      position: absolute;
      border-radius: 50%;
      background: var(--accent);
      animation: float var(--d) ease-in-out infinite;
      opacity: 0;
    }
    @keyframes float {
      0%   { opacity: 0;   transform: translateY(0) scale(1); }
      20%  { opacity: .6; }
      80%  { opacity: .3; }
      100% { opacity: 0;   transform: translateY(-120px) scale(.4); }
    }

    /* ══════════════════════════════════════════
       INNER WRAPPER
       ══════════════════════════════════════════ */
    .lib-inner {
      position: relative; z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* ══════════════════════════════════════════
       HEADER
       ══════════════════════════════════════════ */
    .lib-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2.5rem 2rem;
      position: relative;
    }

    .corner {
      position: absolute;
      width: 28px; height: 28px;
      border-color: var(--accent);
      border-style: solid;
      opacity: .5;
      animation: cornerPulse 2.5s ease-in-out infinite alternate;
    }
    .corner-tl { top: 0; left: 0;  border-width: 2px 0 0 2px; }
    .corner-tr { top: 0; right: 0; border-width: 2px 2px 0 0; animation-delay: .6s; }
    .corner-bl { bottom: 0; left: 0;  border-width: 0 0 2px 2px; animation-delay: 1.2s; }
    .corner-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; animation-delay: 1.8s; }
    @keyframes cornerPulse {
      from { opacity: .3; }
      to   { opacity: .8; }
    }

    .lib-eyebrow {
      display: inline-flex; align-items: center; gap: .7rem;
      font-family: 'Rajdhani', sans-serif;
      font-size: .72rem; letter-spacing: .35em; text-transform: uppercase;
      color: var(--accent); margin-bottom: 1rem;
    }
    .lib-eyebrow::before, .lib-eyebrow::after {
      content: ''; display: block; width: 55px; height: 1px;
    }
    .lib-eyebrow::before { background: linear-gradient(90deg, transparent, var(--accent)); }
    .lib-eyebrow::after  { background: linear-gradient(90deg, var(--accent), transparent); }

    .lib-title {
      font-family: 'Cinzel', serif;
      font-size: clamp(2.2rem, 5.5vw, 4rem);
      font-weight: 900;
      margin: 0 0 .5rem; line-height: 1.05;
      color: var(--text-primary);
      animation: titleGlow 3.5s ease-in-out infinite alternate;
    }
    .lib-title span {
      color: var(--accent);
      display: inline-block;
      animation: spanGlow 3.5s ease-in-out infinite alternate;
    }
    @keyframes titleGlow {
      from { text-shadow: 0 0 20px rgba(96,165,250,.3), 0 2px 8px rgba(0,0,0,.5); }
      to   { text-shadow: 0 0 50px rgba(96,165,250,.65), 0 2px 8px rgba(0,0,0,.5); }
    }
    @keyframes spanGlow {
      from { text-shadow: 0 0 15px rgba(96,165,250,.5); }
      to   { text-shadow: 0 0 40px rgba(96,165,250,.9); }
    }

    .lib-tagline {
      font-size: .82rem; letter-spacing: .22em; text-transform: uppercase;
      color: var(--muted); margin-top: .5rem;
    }

    .lib-rule {
      display: flex; align-items: center; gap: 1rem;
      margin: 1.5rem auto 0; max-width: 500px;
    }
    .lib-rule::before, .lib-rule::after {
      content: ''; flex: 1; height: 1px;
      background: linear-gradient(90deg, transparent, var(--border));
    }
    .lib-rule::after { background: linear-gradient(90deg, var(--border), transparent); }
    .lib-rule-diamond {
      width: 8px; height: 8px; background: var(--accent);
      transform: rotate(45deg); flex-shrink: 0;
      box-shadow: 0 0 10px var(--accent);
      animation: diamondPulse 2s ease-in-out infinite;
    }
    @keyframes diamondPulse {
      0%,100% { box-shadow: 0 0 6px var(--accent); transform: rotate(45deg) scale(1); }
      50%      { box-shadow: 0 0 18px var(--accent); transform: rotate(45deg) scale(1.3); }
    }

    /* ══════════════════════════════════════════
       STATS — HUD PANEL
       ══════════════════════════════════════════ */
    .xp-panel {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 1px; margin-bottom: 2.5rem;
      background: var(--border);
      border: 1px solid var(--border);
      clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
      overflow: hidden;
    }
    .xp-cell {
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      padding: 1.25rem 1rem; text-align: center;
      position: relative; overflow: hidden;
      transition: background .25s;
    }
    .xp-cell:hover { background: rgba(37, 99, 235, .55); }

    .xp-cell::before {
      content: '';
      position: absolute; top: -100%; left: 0; right: 0; height: 100%;
      background: linear-gradient(180deg, transparent, rgba(96,165,250,.08), transparent);
      animation: cellScan 3s ease-in-out infinite;
    }
    .xp-cell:nth-child(2)::before { animation-delay: .75s; }
    .xp-cell:nth-child(3)::before { animation-delay: 1.5s; }
    .xp-cell:nth-child(4)::before { animation-delay: 2.25s; }
    @keyframes cellScan {
      0%   { top: -100%; }
      100% { top: 200%; }
    }

    .xp-cell::after {
      content: ''; position: absolute;
      bottom: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, var(--accent), transparent);
      animation: bottomGlow 2.5s ease-in-out infinite;
    }
    @keyframes bottomGlow {
      0%,100% { opacity: .3; }
      50%      { opacity: 1; }
    }

    .xp-num {
      font-family: 'Cinzel', serif;
      font-size: 2.4rem; font-weight: 700;
      color: var(--accent); line-height: 1;
      text-shadow: 0 0 25px var(--glow);
    }
    .xp-label {
      font-size: .63rem; letter-spacing: .16em; text-transform: uppercase;
      color: var(--muted); margin-top: .35rem;
    }

    /* ══════════════════════════════════════════
       FILTER BAR
       ══════════════════════════════════════════ */
    .filter-bar {
      display: flex; flex-wrap: wrap; gap: .6rem;
      justify-content: center; margin-bottom: 3rem;
    }
    .filter-btn {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700; font-size: .78rem; letter-spacing: .12em; text-transform: uppercase;
      padding: .55rem 1.4rem;
      background: rgba(30, 58, 138, .4);
      border: 1px solid var(--border);
      color: var(--muted); cursor: pointer;
      clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
      transition: all .22s;
      position: relative; overflow: hidden;
    }
    .filter-btn::before {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(96,165,250,.12), transparent);
      opacity: 0; transition: opacity .22s;
    }
    .filter-btn:hover { border-color: var(--accent); color: var(--text-primary); }
    .filter-btn:hover::before { opacity: 1; }
    .filter-btn.active {
      background: linear-gradient(135deg, rgba(37,99,235,.7), rgba(30,58,138,.9));
      border-color: var(--accent); color: #fff;
      box-shadow: 0 0 20px rgba(96,165,250,.3), inset 0 0 12px rgba(96,165,250,.06);
    }
    .filter-btn.active::after {
      content: '';
      position: absolute; bottom: 0; left: 15%; right: 15%; height: 2px;
      background: var(--accent); box-shadow: 0 0 8px var(--accent);
    }

    /* ══════════════════════════════════════════
       CATEGORY BLOCK
       ══════════════════════════════════════════ */
    .category-block {
      margin-bottom: 2.8rem;
      animation: fadeUp .4s ease both;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .cat-header {
      display: flex; align-items: center; gap: 1rem;
      margin-bottom: 1.1rem; padding-bottom: .7rem;
      border-bottom: 1px solid var(--border); position: relative;
    }
    .cat-header::after {
      content: '';
      position: absolute; bottom: -1px; left: 0;
      width: 0; height: 2px;
      background: linear-gradient(90deg, var(--accent), transparent);
      animation: lineExpand .6s ease forwards;
    }
    @keyframes lineExpand {
      from { width: 0; }
      to   { width: 160px; }
    }

    .cat-icon {
      width: 38px; height: 38px;
      border: 1px solid var(--border); border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.15rem; flex-shrink: 0;
      background: var(--card-bg);
      box-shadow: 0 0 12px rgba(96,165,250,.1);
      transition: box-shadow .2s;
    }
    .cat-icon:hover { box-shadow: 0 0 20px rgba(96,165,250,.3); }

    .cat-name {
      font-family: 'Cinzel', serif;
      font-size: 1rem; font-weight: 700;
      color: var(--text-primary); letter-spacing: .07em;
    }
    .cat-divider { flex: 1; height: 1px; background: linear-gradient(90deg, var(--border), transparent); }
    .cat-count {
      font-size: .67rem; letter-spacing: .1em; text-transform: uppercase;
      color: var(--accent);
      border: 1px solid var(--border);
      padding: .2rem .65rem;
      background: rgba(30,58,138,.5);
      clip-path: polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%);
    }

    /* ══════════════════════════════════════════
       RESOURCE GRID
       ══════════════════════════════════════════ */
    .resource-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
      gap: .85rem;
    }

    /* ══════════════════════════════════════════
       RESOURCE CARD
       ══════════════════════════════════════════ */
    .res-card {
      background: var(--card-bg);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(96,165,250,.12);
      border-radius: 2px;
      padding: 1rem 1rem 1rem 1.35rem;
      position: relative; overflow: hidden;
      transition: transform .22s, border-color .22s, box-shadow .22s, background .22s;
      clip-path: polygon(0% 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, 0% 100%);
    }
    .res-card::before {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(96,165,250,.04), transparent 60%);
      opacity: 0; transition: opacity .22s;
    }
    .res-card:hover {
      transform: translateY(-3px);
      border-color: rgba(96,165,250,.4);
      background: rgba(37, 99, 235, .5);
      box-shadow: 0 8px 32px rgba(0,0,0,.35), 0 0 24px rgba(96,165,250,.1);
    }
    .res-card:hover::before { opacity: 1; }

    .res-card::after {
      content: '';
      position: absolute; top: -100%; left: 0; right: 0; height: 40%;
      background: linear-gradient(180deg, transparent, rgba(96,165,250,.05), transparent);
      transition: top .4s ease;
    }
    .res-card:hover::after { top: 130%; }

    .res-bar {
      position: absolute; left: 0; top: 8px; bottom: 8px; width: 3px; border-radius: 0 2px 2px 0;
    }
    .bar-slides { background: linear-gradient(180deg, var(--slides-color), #1d6fa8); box-shadow: 0 0 10px rgba(96,165,250,.5); }
    .bar-pdf    { background: linear-gradient(180deg, var(--pdf-color),    #991b1b); box-shadow: 0 0 10px rgba(248,113,113,.5); }
    .bar-tp     { background: linear-gradient(180deg, var(--tp-color),     #166534); box-shadow: 0 0 10px rgba(74,222,128,.5); }
    .bar-exam   { background: linear-gradient(180deg, var(--exam-color),   #92400e); box-shadow: 0 0 10px rgba(251,191,36,.5); }
    .bar-quiz   { background: linear-gradient(180deg, var(--quiz-color),   #5b21b6); box-shadow: 0 0 10px rgba(167,139,250,.5); }

    .res-top { display: flex; align-items: flex-start; justify-content: space-between; gap: .5rem; margin-bottom: .45rem; }

    .res-title {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 600; font-size: .93rem;
      color: var(--text-primary); line-height: 1.3; flex: 1;
    }

    .type-badge {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700; font-size: .6rem; letter-spacing: .1em; text-transform: uppercase;
      padding: .16rem .5rem; flex-shrink: 0;
      clip-path: polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%);
      position: relative;
    }
    .type-slides { background: rgba(96,165,250,.15);  color: var(--slides-color); border: 1px solid rgba(96,165,250,.3);  }
    .type-pdf    { background: rgba(248,113,113,.15); color: var(--pdf-color);    border: 1px solid rgba(248,113,113,.3); }
    .type-tp     { background: rgba(74,222,128,.12);  color: var(--tp-color);     border: 1px solid rgba(74,222,128,.3);  }
    .type-exam   { background: rgba(251,191,36,.12);  color: var(--exam-color);   border: 1px solid rgba(251,191,36,.3);  }
    .type-quiz   { background: rgba(167,139,250,.12); color: var(--quiz-color);   border: 1px solid rgba(167,139,250,.3); }

    .res-subtitle {
      font-size: .74rem; color: rgba(203,213,225,.45);
      margin-bottom: .35rem; font-style: italic;
    }
    .res-highlight {
      font-size: .76rem; color: var(--muted); line-height: 1.55; margin-bottom: .55rem;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .res-footer { display: flex; flex-wrap: wrap; gap: .3rem; margin-top: .45rem; }
    .res-meta {
      font-size: .63rem; color: var(--accent);
      background: rgba(96,165,250,.08); border: 1px solid rgba(96,165,250,.2);
      padding: .1rem .4rem; letter-spacing: .04em;
      clip-path: polygon(3px 0%,100% 0%,calc(100% - 3px) 100%,0% 100%);
    }
    .res-tag { font-size: .6rem; color: rgba(203,213,225,.3); }

    /* ══════════════════════════════════════════
       EMPTY STATE
       ══════════════════════════════════════════ */
    .empty {
      text-align: center; padding: 4rem;
      color: var(--muted); font-family: 'Rajdhani', sans-serif;
      letter-spacing: .15em; text-transform: uppercase; font-size: .85rem;
      border: 1px solid var(--border);
      background: var(--card-bg);
      clip-path: polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%);
    }

    /* ══════════════════════════════════════════
       RESPONSIVE
       ══════════════════════════════════════════ */
    @media (max-width: 768px) {
      .xp-panel { grid-template-columns: repeat(2, 1fr); }
      .resource-grid { grid-template-columns: 1fr 1fr; }
      .lib-inner { padding: 0 1.2rem; }
    }
    @media (max-width: 520px) {
      .resource-grid { grid-template-columns: 1fr; }
      .filter-btn { font-size: .7rem; padding: .42rem .9rem; }
      .lib-title { font-size: 1.9rem; }
      .xp-num { font-size: 1.8rem; }
    }
  `],
  template: `
    <div class="lib-root">

      <!-- Floating particles -->
      <div class="particles" aria-hidden="true">
        <span *ngFor="let p of particles" class="particle"
          [style.left]="p.x + '%'"
          [style.top]="p.y + '%'"
          [style.width]="p.size + 'px'"
          [style.height]="p.size + 'px'"
          [style.--d]="p.d + 's'"
          [style.animation-delay]="p.delay + 's'">
        </span>
      </div>

      <div class="lib-inner">

        <!-- ── HEADER ── -->
        <div class="lib-header">
          <div class="corner corner-tl"></div>
          <div class="corner corner-tr"></div>
          <div class="corner corner-bl"></div>
          <div class="corner corner-br"></div>
          <div class="lib-eyebrow">Knowledge Vault</div>
          <h2 class="lib-title">LEARNING<br><span>LIBRARY</span></h2>
          <p class="lib-tagline">Lectures · Labs · Exams · Quizzes</p>
          <div class="lib-rule">
            <div class="lib-rule-diamond"></div>
          </div>
        </div>

        <!-- ── HUD STATS ── -->
        <div class="xp-panel">
          <div class="xp-cell">
            <div class="xp-num">{{ totalResources }}</div>
            <div class="xp-label">Resources</div>
          </div>
          <div class="xp-cell">
            <div class="xp-num">{{ totalPages }}</div>
            <div class="xp-label">Pages / Slides</div>
          </div>
          <div class="xp-cell">
            <div class="xp-num">{{ categories.length }}</div>
            <div class="xp-label">Subjects</div>
          </div>
          <div class="xp-cell">
            <div class="xp-num">5</div>
            <div class="xp-label">Types</div>
          </div>
        </div>

        <!-- ── FILTERS ── -->
        <div class="filter-bar">
          <button class="filter-btn" [class.active]="activeFilter()==='all'"    (click)="setFilter('all')">⚔ All</button>
          <button class="filter-btn" [class.active]="activeFilter()==='slides'" (click)="setFilter('slides')">🖥 Slides</button>
          <button class="filter-btn" [class.active]="activeFilter()==='pdf'"    (click)="setFilter('pdf')">📄 PDF</button>
          <button class="filter-btn" [class.active]="activeFilter()==='tp'"     (click)="setFilter('tp')">🛠 Lab</button>
          <button class="filter-btn" [class.active]="activeFilter()==='exam'"   (click)="setFilter('exam')">📝 Exam</button>
          <button class="filter-btn" [class.active]="activeFilter()==='quiz'"   (click)="setFilter('quiz')">🎯 Quiz</button>
        </div>

        <!-- ── CATEGORIES ── -->
        <ng-container *ngFor="let cat of filteredCategories()">
          <div class="category-block">
            <div class="cat-header">
              <div class="cat-icon">{{ cat.icon }}</div>
              <span class="cat-name">{{ cat.name }}</span>
              <div class="cat-divider"></div>
              <span class="cat-count">{{ cat.resources.length }} resource{{ cat.resources.length > 1 ? 's' : '' }}</span>
            </div>
            <div class="resource-grid">
              <div *ngFor="let r of cat.resources" class="res-card">
                <div class="res-bar" [class]="'bar-' + r.type"></div>
                <div class="res-top">
                  <div class="res-title">{{ r.title }}</div>
                  <span class="type-badge" [class]="'type-' + r.type">{{ typeLabel(r.type) }}</span>
                </div>
                <div *ngIf="r.subtitle"  class="res-subtitle">{{ r.subtitle }}</div>
                <div *ngIf="r.highlight" class="res-highlight">{{ r.highlight }}</div>
                <div class="res-footer">
                  <span *ngIf="r.pages"                  class="res-meta">📄 {{ r.pages }}p</span>
                  <span *ngIf="r.slides && r.slides > 0"  class="res-meta">🖥 {{ r.slides }} slides</span>
                  <span *ngFor="let tag of r.tags"        class="res-tag">#{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </ng-container>

        <div *ngIf="filteredCategories().length === 0" class="empty">
          — No resources found for this filter —
        </div>

      </div>
    </div>
  `
})
export class LibraryComponent {

  activeFilter = signal<string>('all');
  setFilter(f: string) { this.activeFilter.set(f); }

  typeLabel(t: string): string {
    return ({ pdf: 'PDF', slides: 'Slides', tp: 'Lab', exam: 'Exam', quiz: 'Quiz' } as Record<string, string>)[t] ?? t;
  }

  readonly particles = Array.from({ length: 35 }, () => ({
    x:     Math.random() * 100,
    y:     Math.random() * 100,
    size:  Math.random() * 3 + 1,
    d:     (Math.random() * 6 + 5).toFixed(1),
    delay: -(Math.random() * 8).toFixed(1),
  }));

  readonly categories: { name: string; icon: string; iconBg: string; resources: Resource[] }[] = [
    {
      name: 'Algorithms', icon: '🧠', iconBg: '',
      resources: [
        { title: 'Introduction to Algorithms',        type: 'slides', category: 'algo', tags: ['algo', 'basics'],           highlight: 'Introduction to the fundamental concepts of algorithms.' },
        { title: 'Core Elements of Algorithms',       type: 'slides', category: 'algo', tags: ['variables', 'types'] },
        { title: 'Iterative Structures',               type: 'slides', category: 'algo', tags: ['loops', 'repetition'] },
        { title: 'Arrays',                             type: 'slides', category: 'algo', tags: ['arrays', 'data'] },
        { title: 'Procedures and Functions',           type: 'slides', category: 'algo', tags: ['functions', 'procedures'] },
        { title: 'Decision Structures',                type: 'slides', category: 'algo', tags: ['if', 'switch', 'conditions'] },
        { title: 'Algorithms Lab',                     type: 'tp',     category: 'algo', tags: ['practice', 'exercises'] },
        { title: 'Algorithms Exam',                    type: 'exam',   category: 'algo', tags: ['assessment'] },
      ]
    },
    {
      name: 'Software Design (UML)', icon: '🗂', iconBg: '',
      resources: [
        { title: 'Introduction to Software Design', type: 'slides', category: 'uml' },
        { title: 'Functional Analysis',             type: 'slides', category: 'uml', tags: ['use cases'] },
        { title: 'Dynamic Analysis',                type: 'slides', category: 'uml', tags: ['sequence', 'states'] },
        { title: 'Static Analysis',                 type: 'slides', category: 'uml', tags: ['classes', 'diagram'] },
        { title: 'Dynamic Design',                  type: 'slides', category: 'uml' },
        { title: 'Static Design',                   type: 'slides', category: 'uml' },
        { title: 'UML Design Lab',                  type: 'tp',     category: 'uml', tags: ['practice'] },
        { title: 'Design Exam',                     type: 'exam',   category: 'uml', tags: ['assessment'] },
      ]
    },
    {
      name: 'HTML', icon: '🌐', iconBg: '',
      resources: [
        { title: 'Getting Started with HTML', type: 'slides', slides: 27, category: 'html', tags: ['html5', 'tags', 'semantics'], highlight: 'HTML5 tags, page structure, forms and web semantics.' },
        { title: 'HTML Lab — Exercise 1',     type: 'tp', category: 'html', tags: ['practice'] },
        { title: 'HTML Lab — Exercise 2',     type: 'tp', category: 'html', tags: ['practice'] },
        { title: 'HTML Lab — Exercise 3',     type: 'tp', category: 'html', tags: ['project'] },
        { title: 'HTML Quiz',                 type: 'quiz', category: 'html', tags: ['assessment'] },
      ]
    },
    {
      name: 'CSS', icon: '🎨', iconBg: '',
      resources: [
        { title: 'Mastering CSS', type: 'slides', slides: 43, category: 'css', tags: ['flexbox', 'grid', 'responsive'], highlight: 'Selectors, box model, Flexbox, Grid, animations and responsive design.' },
        { title: 'CSS Lab — Exercise 1', type: 'tp', category: 'css', tags: ['layout'] },
        { title: 'CSS Lab — Exercise 2', type: 'tp', category: 'css', tags: ['animations'] },
        { title: 'CSS Quiz',             type: 'quiz', category: 'css', tags: ['assessment'] },
      ]
    },
    {
      name: 'Bootstrap', icon: '🅱', iconBg: '',
      resources: [
        { title: 'Mastering Bootstrap', type: 'slides', slides: 22, category: 'bootstrap', tags: ['bootstrap5', 'grid', 'components'], highlight: 'Grid system, UI components, utilities and Bootstrap customization.' },
        { title: 'Bootstrap Lab — Exercise 1', type: 'tp', category: 'bootstrap', tags: ['grid', 'layout'] },
        { title: 'Bootstrap Lab — Exercise 2', type: 'tp', category: 'bootstrap', tags: ['components'] },
        { title: 'Bootstrap Lab — Exercise 3', type: 'tp', category: 'bootstrap', tags: ['responsive project'] },
      ]
    },
    {
      name: 'JavaScript', icon: '⚡', iconBg: '',
      resources: [
        { title: 'Beginner to Intermediate', subtitle: 'Complete JavaScript', type: 'pdf', pages: 27, category: 'js', tags: ['dom', 'events', 'async'], highlight: 'Variables, functions, arrays, objects, DOM, events and async programming.' },
        { title: 'Introduction to JavaScript', type: 'slides', slides: 27, category: 'js', tags: ['basics', 'syntax'] },
        { title: 'JavaScript Lab',             type: 'tp', category: 'js', tags: ['practice', 'projects'] },
      ]
    },
    {
      name: 'TypeScript', icon: '🔷', iconBg: '',
      resources: [
        { title: 'Complete Beginner Guide', subtitle: 'TypeScript', type: 'pdf', pages: 78, category: 'ts', tags: ['types', 'interfaces', 'classes', 'generics'], highlight: 'Static types, interfaces, generics, decorators and Angular integration.' },
        { title: 'TypeScript Lab', type: 'tp', category: 'ts', tags: ['practice'] },
      ]
    },
    {
      name: 'Angular', icon: '🅰', iconBg: '',
      resources: [
        { title: 'Angular 18 — Complete Course',  type: 'pdf',    pages: 67, category: 'angular', tags: ['signals', 'standalone', 'rxjs', 'ssr'], highlight: 'Signals · Standalone · Control Flow · Forms · Router · HttpClient · RxJS · SSR.' },
        { title: 'Angular Essentials',            type: 'slides', slides: 36, category: 'angular', tags: ['components', 'services', 'routing'] },
        { title: 'Angular Lab — Components',      type: 'tp', category: 'angular', tags: ['components', 'inputs'] },
        { title: 'Angular Lab — Services & DI',   type: 'tp', category: 'angular', tags: ['services', 'injection'] },
        { title: 'Angular Lab — Routing',         type: 'tp', category: 'angular', tags: ['routing', 'guards'] },
        { title: 'Angular Lab — Forms',           type: 'tp', category: 'angular', tags: ['reactive forms', 'validation'] },
      ]
    },
    {
      name: 'NestJS', icon: '🐈', iconBg: '',
      resources: [
        { title: 'Beginner to Intermediate', subtitle: 'NestJS — Node.js Framework', type: 'pdf', pages: 38, category: 'nest', tags: ['nestjs', 'rest', 'jwt', 'typeorm'], highlight: 'Modular architecture · REST API · JWT · TypeORM · Swagger.' },
        { title: 'Discovering NestJS',        type: 'slides', slides: 56, category: 'nest', tags: ['modules', 'controllers', 'services'] },
        { title: 'NestJS Lab — REST API',     type: 'tp', category: 'nest', tags: ['api', 'crud'] },
      ]
    },
  ];

  get totalResources(): number {
    return this.categories.reduce((s, c) => s + c.resources.length, 0);
  }
  get totalPages(): number {
    return this.categories.reduce((s, c) =>
      s + c.resources.reduce((rs, r) => rs + (r.pages ?? 0) + (r.slides ?? 0), 0), 0);
  }

  filteredCategories = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.categories;
    return this.categories
      .map(cat => ({ ...cat, resources: cat.resources.filter(r => r.type === f) }))
      .filter(cat => cat.resources.length > 0);
  });
}