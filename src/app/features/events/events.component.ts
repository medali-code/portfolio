import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EventSession {
  time: string;
  title: string;
  highlight?: boolean;
  sub?: string[];
}

interface AppEvent {
  id: string;
  status: 'done' | 'soon';
  name: string;
  tagline: string;
  date: string;
  location: string;
  role: string;
  color: string;
  colorAlt: string;
  icon: string;
  description: string;
  tags: string[];
  morning?: EventSession[];
  afternoon?: EventSession[];
  highlights?: string[];
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');

    /* ══════════════════════════════════════════
       FULL BLEED ESCAPE
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
      background: #0d1a3d;
    }

    /* ══════════════════════════════════════════
       ROOT
       ══════════════════════════════════════════ */
    .ev-root {
      --main:    #2563eb;
      --accent:  #60a5fa;
      --muted:   #cbd5e1;
      --card-bg: rgba(30,58,138,.55);
      --text:    #f1f5f9;
      --border:  rgba(96,165,250,.2);

      font-family: 'Rajdhani', sans-serif;
      width: 100%;
      min-height: 100vh;
      background:
        radial-gradient(ellipse 70% 40% at 15% 10%, rgba(37,99,235,.28) 0%, transparent 55%),
        radial-gradient(ellipse 60% 35% at 85% 90%, rgba(30,58,138,.35) 0%, transparent 55%),
        linear-gradient(160deg, #0a1530 0%, #111e4a 50%, #080f28 100%);
      position: relative;
      overflow: hidden;
      padding: 3.5rem 0 5rem;
    }

    .ev-root::before {
      content: '';
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(96,165,250,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(96,165,250,.05) 1px, transparent 1px);
      background-size: 52px 52px;
      pointer-events: none;
      animation: gridMove 25s linear infinite;
    }
    @keyframes gridMove { to { background-position: 52px 52px; } }

    .ev-inner {
      position: relative; z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* ══════════════════════════════════════════
       HEADER
       ══════════════════════════════════════════ */
    .ev-header {
      text-align: center;
      margin-bottom: 3.5rem;
      padding: 2rem 1rem;
      position: relative;
    }
    .corner { position: absolute; width: 26px; height: 26px; border-color: var(--accent); border-style: solid; animation: cp 2.5s ease-in-out infinite alternate; }
    .corner-tl { top:0; left:0;   border-width: 2px 0 0 2px; }
    .corner-tr { top:0; right:0;  border-width: 2px 2px 0 0; animation-delay: .6s; }
    .corner-bl { bottom:0; left:0;  border-width: 0 0 2px 2px; animation-delay: 1.2s; }
    .corner-br { bottom:0; right:0; border-width: 0 2px 2px 0; animation-delay: 1.8s; }
    @keyframes cp { from { opacity: .25; } to { opacity: .75; } }

    .ev-eyebrow {
      display: inline-flex; align-items: center; gap: .7rem;
      font-family: 'Orbitron', sans-serif;
      font-size: .65rem; letter-spacing: .35em; text-transform: uppercase;
      color: var(--accent); margin-bottom: 1rem;
    }
    .ev-eyebrow::before, .ev-eyebrow::after { content: ''; display: block; width: 52px; height: 1px; }
    .ev-eyebrow::before { background: linear-gradient(90deg, transparent, var(--accent)); }
    .ev-eyebrow::after  { background: linear-gradient(90deg, var(--accent), transparent); }

    .ev-title {
      font-family: 'Cinzel', serif;
      font-size: clamp(2rem, 5.5vw, 3.8rem);
      font-weight: 900; margin: 0 0 .5rem; line-height: 1.05;
      color: var(--text);
      animation: tg 4s ease-in-out infinite alternate;
    }
    .ev-title span { color: var(--accent); }
    @keyframes tg {
      from { text-shadow: 0 0 20px rgba(96,165,250,.3); }
      to   { text-shadow: 0 0 55px rgba(96,165,250,.65); }
    }
    .ev-subtitle { font-size: .8rem; letter-spacing: .22em; text-transform: uppercase; color: var(--muted); margin-top: .4rem; }

    .ev-rule { display: flex; align-items: center; gap: 1rem; margin: 1.5rem auto 0; max-width: 420px; }
    .ev-rule::before, .ev-rule::after { content: ''; flex: 1; height: 1px; }
    .ev-rule::before { background: linear-gradient(90deg, transparent, var(--border)); }
    .ev-rule::after  { background: linear-gradient(90deg, var(--border), transparent); }
    .ev-diamond {
      width: 8px; height: 8px; background: var(--accent); transform: rotate(45deg);
      box-shadow: 0 0 12px var(--accent); flex-shrink: 0;
      animation: dp 2s ease-in-out infinite;
    }
    @keyframes dp {
      0%,100% { box-shadow: 0 0 6px var(--accent);  transform: rotate(45deg) scale(1); }
      50%      { box-shadow: 0 0 20px var(--accent); transform: rotate(45deg) scale(1.35); }
    }

    /* ══════════════════════════════════════════
       TIMELINE CONNECTOR
       ══════════════════════════════════════════ */
    .events-list {
      display: flex;
      flex-direction: column;
      gap: 0;
      position: relative;
    }
    /* Vertical timeline line */
    .events-list::before {
      content: '';
      position: absolute;
      left: 28px; top: 20px; bottom: 20px;
      width: 2px;
      background: linear-gradient(180deg, var(--accent), rgba(96,165,250,.1));
      opacity: .25;
    }

    .ev-item {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
      position: relative;
    }

    /* Timeline dot */
    .ev-dot {
      flex-shrink: 0;
      width: 58px; height: 58px;
      border-radius: 50%;
      border: 2px solid var(--ev-c1);
      background: rgba(10, 20, 60, .9);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem;
      box-shadow: 0 0 18px var(--ev-glow);
      position: relative; z-index: 1;
      transition: box-shadow .3s;
      animation: dotPulse 3s ease-in-out infinite;
    }
    .ev-item:hover .ev-dot {
      box-shadow: 0 0 32px var(--ev-glow);
    }
    @keyframes dotPulse {
      0%,100% { box-shadow: 0 0 12px var(--ev-glow); }
      50%      { box-shadow: 0 0 28px var(--ev-glow); }
    }
    .ev-dot.soon-dot-anim {
      animation: dotPulse 1.4s ease-in-out infinite;
    }

    /* ══════════════════════════════════════════
       EVENT CARD
       ══════════════════════════════════════════ */
    .ev-card {
      flex: 1;
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(96,165,250,.12);
      border-left: 3px solid var(--ev-c1);
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      transition: box-shadow .3s, border-color .3s;
      animation: fadeUp .5s ease both;
    }
    .ev-item:nth-child(1) .ev-card { animation-delay: 0s; }
    .ev-item:nth-child(2) .ev-card { animation-delay: .15s; }
    .ev-item:nth-child(3) .ev-card { animation-delay: .3s; }
    .ev-card:hover {
      box-shadow: 0 12px 50px rgba(0,0,0,.4), 0 0 30px var(--ev-glow);
      border-color: var(--ev-c1);
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Animated shimmer top bar */
    .ev-card-bar {
      height: 3px;
      background: linear-gradient(90deg, var(--ev-c1), var(--ev-c2), var(--ev-c1));
      background-size: 200% 100%;
      animation: barShift 3s linear infinite;
    }
    @keyframes barShift {
      from { background-position: 0% 0; }
      to   { background-position: 200% 0; }
    }

    .ev-card-inner {
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px));
      padding: 1.6rem 1.8rem;
    }

    /* ── TOP ROW ── */
    .ev-top {
      display: flex; align-items: flex-start;
      justify-content: space-between; gap: 1.5rem;
      margin-bottom: 1.2rem; flex-wrap: wrap;
    }

    .ev-badges { display: flex; gap: .5rem; flex-wrap: wrap; align-items: center; }

    .ev-badge {
      font-family: 'Orbitron', sans-serif;
      font-size: .55rem; letter-spacing: .18em; text-transform: uppercase;
      padding: .28rem .85rem; font-weight: 700;
      clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
    }
    .badge-done {
      background: rgba(74,222,128,.15); color: #4ade80;
      border: 1px solid rgba(74,222,128,.35);
    }
    .badge-soon {
      background: rgba(251,191,36,.12); color: #fbbf24;
      border: 1px solid rgba(251,191,36,.35);
      animation: pulseSoon 1.8s ease-in-out infinite;
    }
    @keyframes pulseSoon {
      0%,100% { box-shadow: 0 0 0 rgba(251,191,36,0); }
      50%      { box-shadow: 0 0 14px rgba(251,191,36,.4); }
    }
    .badge-initiator {
      background: rgba(96,165,250,.1); color: var(--accent);
      border: 1px solid rgba(96,165,250,.3);
    }

    .ev-meta { display: flex; flex-direction: column; align-items: flex-end; gap: .25rem; }
    .ev-meta-item { font-size: .76rem; color: var(--muted); letter-spacing: .04em; }
    .ev-meta-item span { color: var(--accent); font-weight: 600; }

    /* ── NAME ROW ── */
    .ev-name-row { display: flex; align-items: center; gap: .85rem; margin-bottom: .45rem; }
    .ev-name {
      font-family: 'Cinzel', serif;
      font-size: clamp(1.4rem, 3vw, 2rem);
      font-weight: 900; color: var(--text);
      text-shadow: 0 0 25px var(--ev-glow);
      line-height: 1.1;
    }
    .ev-role {
      font-family: 'Orbitron', sans-serif;
      font-size: .6rem; letter-spacing: .16em; text-transform: uppercase;
      color: var(--ev-c1); margin-bottom: .75rem;
    }
    .ev-desc {
      font-size: .95rem; color: var(--muted);
      line-height: 1.6; max-width: 620px; margin-bottom: .9rem;
    }

    .ev-tags { display: flex; flex-wrap: wrap; gap: .35rem; margin-bottom: 1.2rem; }
    .ev-tag {
      font-family: 'Orbitron', sans-serif;
      font-size: .55rem; letter-spacing: .08em; text-transform: uppercase;
      padding: .18rem .6rem;
      background: rgba(96,165,250,.07);
      border: 1px solid rgba(96,165,250,.18);
      color: var(--accent);
      clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
    }

    /* ── DIVIDER ── */
    .ev-divider {
      height: 1px;
      background: linear-gradient(90deg, var(--ev-c1), transparent);
      margin: 1rem 0; opacity: .35;
    }

    /* ── PROGRAMME ── */
    .programme-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }

    .prog-label {
      font-family: 'Orbitron', sans-serif;
      font-size: .6rem; letter-spacing: .18em; text-transform: uppercase;
      color: var(--ev-c1); margin-bottom: .7rem;
      display: flex; align-items: center; gap: .5rem;
    }
    .prog-label::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, var(--ev-c1), transparent); opacity: .3; }

    .prog-session {
      display: flex; align-items: flex-start; gap: .7rem;
      margin-bottom: .6rem; padding: .55rem .7rem;
      border-left: 2px solid rgba(96,165,250,.2);
      transition: border-color .2s, background .2s;
      border-radius: 0 4px 4px 0;
    }
    .prog-session:hover   { border-color: var(--ev-c1); background: rgba(96,165,250,.05); }
    .prog-session.hl      { border-color: var(--ev-c1); background: rgba(96,165,250,.08); }

    .prog-time {
      font-family: 'Orbitron', sans-serif;
      font-size: .58rem; color: var(--ev-c1); font-weight: 700;
      white-space: nowrap; margin-top: .12rem; min-width: 90px;
    }
    .prog-title { font-weight: 700; font-size: .88rem; color: var(--text); }
    .prog-sub-item { font-size: .7rem; color: var(--ev-c2); margin-top: .1rem; }

    /* ── HIGHLIGHTS ── */
    .highlights {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
      gap: .7rem; margin-top: .5rem;
    }
    .highlight-item {
      background: rgba(96,165,250,.06);
      border: 1px solid rgba(96,165,250,.14);
      border-radius: 4px; padding: .7rem .9rem;
      display: flex; align-items: flex-start; gap: .55rem;
      transition: background .2s, border-color .2s;
    }
    .highlight-item:hover { background: rgba(96,165,250,.12); border-color: var(--ev-c1); }
    .hi-icon { font-size: 1rem; flex-shrink: 0; margin-top: .1rem; }
    .hi-text { font-size: .8rem; color: var(--muted); line-height: 1.45; }

    /* ── COMING SOON STRIP ── */
    .soon-strip {
      background: linear-gradient(135deg, rgba(251,191,36,.1), rgba(251,191,36,.03));
      border: 1px solid rgba(251,191,36,.22);
      border-radius: 4px; padding: .75rem 1.1rem;
      display: flex; align-items: center; gap: .9rem; margin-top: 1.1rem;
    }
    .soon-blink {
      width: 9px; height: 9px; border-radius: 50%; background: #fbbf24; flex-shrink: 0;
      animation: blink 1.2s ease-in-out infinite;
    }
    @keyframes blink {
      0%,100% { opacity: 1; box-shadow: 0 0 0 rgba(251,191,36,0); }
      50%      { opacity: .5; box-shadow: 0 0 10px rgba(251,191,36,.6); }
    }
    .soon-txt {
      font-family: 'Orbitron', sans-serif;
      font-size: .64rem; letter-spacing: .14em; text-transform: uppercase; color: #fbbf24;
    }

    /* ══════════════════════════════════════════
       RESPONSIVE
       ══════════════════════════════════════════ */
    @media (max-width: 768px) {
      .events-list::before { display: none; }
      .ev-dot  { display: none; }
      .ev-item { gap: 0; }
      .programme-grid { grid-template-columns: 1fr; }
      .ev-top  { flex-direction: column; }
      .ev-meta { align-items: flex-start; }
      .ev-card-inner { padding: 1.2rem 1.1rem; }
      .ev-inner { padding: 0 1.1rem; }
    }
    @media (max-width: 480px) {
      .ev-name { font-size: 1.3rem; }
      .highlights { grid-template-columns: 1fr; }
      .prog-time { min-width: 68px; font-size: .53rem; }
    }
  `],
  template: `
    <div class="ev-root">
      <div class="ev-inner">

        <!-- HEADER -->
        <div class="ev-header">
          <div class="corner corner-tl"></div><div class="corner corner-tr"></div>
          <div class="corner corner-bl"></div><div class="corner corner-br"></div>
          <div class="ev-eyebrow">Events & Community</div>
          <h2 class="ev-title">MY <span>EVENTS</span></h2>
          <p class="ev-subtitle">Trainer · Speaker · Initiator · Community Builder</p>
          <div class="ev-rule"><div class="ev-diamond"></div></div>
        </div>

        <!-- TIMELINE -->
        <div class="events-list">
          <div *ngFor="let ev of events" class="ev-item"
               [style.--ev-c1]="ev.color"
               [style.--ev-c2]="ev.colorAlt"
               [style.--ev-glow]="ev.color + '55'">

            <!-- Timeline dot -->
            <div class="ev-dot" [class.soon-dot-anim]="ev.status === 'soon'">
              {{ ev.icon }}
            </div>

            <!-- Card -->
            <div class="ev-card">
              <div class="ev-card-bar"></div>
              <div class="ev-card-inner">

                <!-- Status badges + date/location -->
                <div class="ev-top">
                  <div class="ev-badges">
                    <span class="ev-badge" [class.badge-done]="ev.status==='done'" [class.badge-soon]="ev.status==='soon'">
                      {{ ev.status === 'done' ? '✓ Completed' : '⏳ Coming Soon' }}
                    </span>
                    <span class="ev-badge badge-initiator">💡 Initiator</span>
                  </div>
                  <div class="ev-meta">
                    <div class="ev-meta-item">🗓&nbsp;<span>{{ ev.date }}</span></div>
                    <div class="ev-meta-item">📍&nbsp;<span>{{ ev.location }}</span></div>
                  </div>
                </div>

                <!-- Name -->
                <div class="ev-name-row">
                  <div class="ev-name">{{ ev.name }}</div>
                </div>
                <div class="ev-role">{{ ev.role }}</div>
                <p class="ev-desc">{{ ev.description }}</p>

                <!-- Tags -->
                <div class="ev-tags">
                  <span *ngFor="let t of ev.tags" class="ev-tag">{{ t }}</span>
                </div>

                <!-- Programme -->
                <ng-container *ngIf="ev.morning || ev.afternoon">
                  <div class="ev-divider"></div>
                  <div class="programme-grid">
                    <div *ngIf="ev.morning">
                      <div class="prog-label">🌅 Morning</div>
                      <div *ngFor="let s of ev.morning" class="prog-session" [class.hl]="s.highlight">
                        <div class="prog-time">{{ s.time }}</div>
                        <div>
                          <div class="prog-title">{{ s.title }}</div>
                          <div *ngIf="s.sub">
                            <div *ngFor="let sub of s.sub" class="prog-sub-item">↳ {{ sub }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div *ngIf="ev.afternoon">
                      <div class="prog-label">🌆 Afternoon</div>
                      <div *ngFor="let s of ev.afternoon" class="prog-session" [class.hl]="s.highlight">
                        <div class="prog-time">{{ s.time }}</div>
                        <div>
                          <div class="prog-title">{{ s.title }}</div>
                          <div *ngIf="s.sub">
                            <div *ngFor="let sub of s.sub" class="prog-sub-item">↳ {{ sub }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ng-container>

                <!-- Highlights (coming soon) -->
                <ng-container *ngIf="ev.highlights">
                  <div class="ev-divider"></div>
                  <div class="highlights">
                    <div *ngFor="let h of ev.highlights" class="highlight-item">
                      <span class="hi-icon">{{ h.split('|')[0] }}</span>
                      <span class="hi-text">{{ h.split('|')[1] }}</span>
                    </div>
                  </div>
                  <div class="soon-strip">
                    <div class="soon-blink"></div>
                    <div class="soon-txt">Event in preparation — Date to be confirmed</div>
                  </div>
                </ng-container>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class EventsComponent {

  readonly events: AppEvent[] = [
    // ── 1. Tech Battle — Coming Soon (most recent / upcoming first) ──
    {
      id: 'techbattle',
      status: 'soon',
      name: 'Tech Battle',
      tagline: 'Inter-club challenge · Mini-projects · Jury · Soft Skills',
      date: 'Coming Soon',
      location: 'Gabès · TBD',
      role: '🎯 Initiator · Organizer · Trainer — Angular + NestJS + MySQL',
      color: '#fbbf24',
      colorAlt: '#f97316',
      icon: '⚔️',
      description: "My initiative — a short, intense challenge between student clubs. Teams build a mini-project under time pressure, then pitch it before a jury. Designed as a pre-PFE rehearsal: idea presentation, time management, teamwork, English delivery, and soft skills development.",
      tags: ['Challenge', 'Inter-clubs', 'Mini-project', 'Jury', 'Soft Skills', 'English', 'PFE Prep', 'Angular', 'NestJS', 'Initiator'],
      highlights: [
        '⚔️|Team challenge — build a mini-project under time pressure',
        '🧑‍⚖️|Live presentation before a professional jury',
        '🎓|Pre-PFE rehearsal: pitching, time management & teamwork',
        '🇬🇧|Focus on presenting in English',
        '💬|Soft skills coaching & communication tips',
        '🌐|Web track: Angular + NestJS + MySQL',
        '🏆|Awards & recognition for top teams',
      ]
    },
    // ── 2. HelpTech — February 15, 2026 ─────────────────────────────
    {
      id: 'helptech',
      status: 'done',
      name: 'HelpTech Day',
      tagline: 'Intensive Full-Stack workshop — HelpTech × ProVision',
      date: 'February 15, 2026',
      location: 'Centre Formation ProVision · Gabès',
      role: '🎤 Trainer — Web Track · Angular + NestJS + MySQL',
      color: '#bf5fff',
      colorAlt: '#f472b6',
      icon: '🔮',
      description: "I co-initiated and led the Web track at HelpTech Day — an intensive full-day workshop in partnership with ProVision. I guided participants through the full Angular + NestJS + MySQL stack, from environment setup to deploying a working mini-application.",
      tags: ['Angular', 'NestJS', 'MySQL', 'Full-Stack', 'Workshop', 'HelpTech', 'ProVision', 'Initiator'],
      morning: [
        { time: '08h30–09h00', title: 'Welcome & team introduction' },
        { time: '09h00–10h15', title: 'Development environment setup' },
        { time: '10h15–10h30', title: '☕ Coffee Break' },
        { time: '10h30–12h30', title: 'Front-end Web & Mobile Development', highlight: true,
          sub: ['Track A: Web — Angular + NestJS + MySQL', 'Track B: Mobile — Flutter + MySQL / Firebase'] },
        { time: '12h30–13h30', title: '🍽 Lunch Break' },
      ],
      afternoon: [
        { time: '13h45–16h00', title: '⚔️ Challenge: Web VS Mobile', highlight: true },
        { time: '16h15–17h15', title: 'Challenge results & Feedback session' },
        { time: '17h30–18h00', title: '🏁 Closing ceremony' },
      ]
    },
    // ── 3. Days Up — February 1, 2026 ───────────────────────────────
    {
      id: 'daysup',
      status: 'done',
      name: 'Days Up — WebCraft',
      tagline: 'Web Development workshop at the Days Up Tech Event',
      date: 'February 1, 2026',
      location: 'Gabès',
      role: '🎤 Trainer — WebCraft Workshop · Web Development',
      color: '#39ff14',
      colorAlt: '#84cc16',
      icon: '🚀',
      description: "I initiated and led the WebCraft workshop at the Days Up tech event — proving that modern, professional interfaces can be built with pure HTML & CSS fundamentals. Participants went from zero to a fully styled webpage in a single session.",
      tags: ['HTML5', 'CSS3', 'Workshop', 'Days Up', 'WebCraft', 'Front-end', 'Initiator'],
      morning: [
        { time: '09h00–09h30', title: 'Opening & event presentation' },
        { time: '09h30–10h30', title: '🤖 Artificial Intelligence', highlight: true },
        { time: '10h45–11h45', title: '🧠 Algorithms & Python', highlight: true },
        { time: '12h00–13h00', title: '🍽 Lunch Break' },
      ],
      afternoon: [
        { time: '13h15–14h15', title: '🌐 Web Development — WebCraft', highlight: true },
        { time: '14h30–15h30', title: '📣 Digital Marketing' },
        { time: '15h45–16h45', title: '🎤 Karaoke Party' },
        { time: '17h00–18h00', title: '🏆 Certificate ceremony & Closing' },
      ]
    }
  ];
}