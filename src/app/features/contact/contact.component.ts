import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG } from '../../app.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-section">
      <div class="scanlines"></div>

      <div class="container">

        <!-- Header -->
        <div class="section-header">
          <h1 class="main-title">
            <span class="title-glitch" data-text="CONTACT">CONTACT</span>
            <span class="title-sub">OPEN CHANNEL</span>
          </h1>
          <div class="header-divider">
            <span class="div-line"></span>
            <span class="div-icon">◆</span>
            <span class="div-line"></span>
          </div>
          <p class="subtitle">// ESTABLISH SECURE CONNECTION... <span class="blink">█</span></p>
        </div>

        <!-- Grid -->
        <div class="content-grid">

          <!-- LEFT: Info + Map -->
          <div class="info-panel">

            <!-- Info Cards -->
            <div class="info-card">
              <div class="corner tl"></div><div class="corner tr"></div>
              <div class="corner bl"></div><div class="corner br"></div>
              <div class="card-icon email-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="card-content">
                <h3 class="card-title">// EMAIL</h3>
                <a [href]="'mailto:' + config.email" class="card-value">{{ config.email }}</a>
              </div>
            </div>

            <div class="info-card">
              <div class="corner tl"></div><div class="corner tr"></div>
              <div class="corner bl"></div><div class="corner br"></div>
              <div class="card-icon phone-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div class="card-content">
                <h3 class="card-title">// PHONE</h3>
                <a [href]="'tel:' + config.phone" class="card-value">{{ config.phone }}</a>
              </div>
            </div>

            <div class="info-card">
              <div class="corner tl"></div><div class="corner tr"></div>
              <div class="corner bl"></div><div class="corner br"></div>
              <div class="card-icon location-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="card-content">
                <h3 class="card-title">// LOCATION</h3>
                <p class="card-value">{{ config.location }}</p>
              </div>
            </div>

            <!-- Social -->
            <div class="social-row">
              <span class="social-label">&gt; NETWORK</span>
              <a [href]="config.github" target="_blank" class="social-link" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a [href]="config.linkedin" target="_blank" class="social-link" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <!-- Map -->
            <div class="map-card">
              <div class="map-header">
                <span class="map-label">&gt; GPS_COORDINATES</span>
                <span class="map-status"><span class="blink-dot"></span> LOCKED</span>
              </div>
              <div class="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3312.161817977122!2d10.0956429!3d33.8854861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556fc50590e317%3A0xf2b4d600b72eaa9f!2zMzI4IEF2LiBGYXJoYXQgSGFjaGFkIC0g2LTYp9ix2Lkg2YHYsdit2KfYqiDYrdi02KfYrywgR2Fiw6hz!5e0!3m2!1sfr!2stn!4v1759242614299!5m2!1sfr!2stn"
                  title="Location"
                  width="100%"
                  height="240"
                  style="border:0; display:block;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          <!-- RIGHT: Form -->
          <div class="form-card">
            <div class="corner tl"></div><div class="corner tr"></div>
            <div class="corner bl"></div><div class="corner br"></div>
            <div class="form-top-bar"></div>

            <div class="form-header">
              <div class="form-title-row">
                <span class="form-module-id">MSG.01</span>
                <h2 class="form-title">SEND TRANSMISSION</h2>
              </div>
              <p class="form-subtitle">// I'll respond to your message ASAP</p>
            </div>

            <div class="form-sep"></div>

            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">

              <div class="form-row">
                <div class="form-group">
                  <label for="name">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    FULL NAME
                  </label>
                  <input
                    type="text" id="name" name="name"
                    [(ngModel)]="formData.name" required
                    placeholder="Your name"
                    class="form-input"
                  />
                </div>

                <div class="form-group">
                  <label for="email">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    EMAIL
                  </label>
                  <input
                    type="email" id="email" name="email"
                    [(ngModel)]="formData.email" required email
                    placeholder="your.email@example.com"
                    class="form-input"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="subject">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  SUBJECT
                </label>
                <input
                  type="text" id="subject" name="subject"
                  [(ngModel)]="formData.subject" required
                  placeholder="Subject of your message"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="message">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  MESSAGE
                </label>
                <textarea
                  id="message" name="message"
                  [(ngModel)]="formData.message" required
                  rows="6"
                  placeholder="Describe your project or ask your question..."
                  class="form-input"
                ></textarea>
              </div>

              <div *ngIf="submitStatus" class="status-message"
                [class.success]="submitStatus === 'success'"
                [class.error]="submitStatus === 'error'">
                <span class="status-icon">{{ submitStatus === 'success' ? '✓' : '✗' }}</span>
                {{ statusMessage }}
              </div>

              <button type="submit" class="submit-btn" [disabled]="!contactForm.valid || isSubmitting">
                <div class="btn-corner tl"></div><div class="btn-corner tr"></div>
                <div class="btn-corner bl"></div><div class="btn-corner br"></div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                <span *ngIf="!isSubmitting">TRANSMIT</span>
                <span *ngIf="isSubmitting">SENDING<span class="sending-dots">...</span></span>
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  `,
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

      --font-display: 'Orbitron',        sans-serif;
      --font-mono:    'Share Tech Mono', monospace;
      --font-body:    'Rajdhani',        sans-serif;
    }

    /* ── Keyframes ── */
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
    @keyframes blink-dot {
      0%,100%{opacity:1; background:var(--c-green);} 50%{opacity:.3; background:var(--c-muted);}
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
    @keyframes sending {
      0%   { content:'...'; }
      33%  { content:'.  '; }
      66%  { content:'.. '; }
    }
    @keyframes statusIn {
      from { opacity:0; transform:translateY(-8px); }
      to   { opacity:1; transform:translateY(0); }
    }

    /* ── Base ── */
    .contact-section {
      min-height: 100vh;
      padding: 4rem 0 3rem;
      position: relative;
      overflow: hidden;
      font-family: var(--font-body);
    }

    .scanlines {
      pointer-events: none;
      position: fixed; inset:0; z-index:10;
      background: repeating-linear-gradient(
        0deg, transparent, transparent 3px,
        rgba(30,58,138,.05) 3px, rgba(30,58,138,.05) 4px
      );
    }
    .scanlines::after {
      content:''; position:absolute; width:100%; height:60px;
      background:linear-gradient(transparent,rgba(96,165,250,.02),transparent);
      animation:scanline 5s linear infinite;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    /* ── Header ── */
    .section-header {
      text-align:center; margin-bottom:4rem;
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
      font-size:clamp(3rem,7vw,5.5rem); font-weight:900;
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
      font-size:clamp(.75rem,1.8vw,.95rem); font-weight:400;
      color:var(--c-secondary); letter-spacing:.55em;
      text-shadow:0 0 10px rgba(59,130,246,.4);
    }
    .header-divider {
      display:flex; align-items:center; gap:1rem;
      margin:1.25rem auto; max-width:360px;
    }
    .div-line {
      flex:1; height:1px;
      background:linear-gradient(90deg,transparent,var(--c-accent),transparent);
    }
    .div-icon { color:var(--c-accent); font-size:.7rem; text-shadow:0 0 8px var(--c-accent-glow); }
    .subtitle { font-family:var(--font-mono); font-size:.85rem; color:var(--c-text-2); letter-spacing:.04em; }
    .blink { animation:blink 1s step-end infinite; color:var(--c-accent); }

    /* ── Grid ── */
    .content-grid {
      display: grid;
      grid-template-columns: 380px 1fr;
      gap: 2rem;
      align-items: start;
    }

    /* ── Info Panel ── */
    .info-panel {
      display: flex;
      flex-direction: column;
      gap: .9rem;
      position: sticky;
      top: 100px;
    }

    /* ── Info Cards ── */
    .info-card {
      background: var(--c-card-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--c-card-border);
      border-radius: 4px;
      padding: 1.1rem 1.25rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: all .3s ease;
      position: relative;
      animation: hud-pulse 6s ease-in-out infinite;
    }
    .info-card:hover {
      border-color: rgba(96,165,250,.4);
      transform: translateX(5px);
      box-shadow: -4px 0 16px rgba(96,165,250,.15);
    }

    /* Coins HUD partagés */
    .corner,.btn-corner { position:absolute; width:9px; height:9px; pointer-events:none; }
    .corner.tl,.btn-corner.tl { top:-1px;    left:-1px;  border-top:2px solid var(--c-accent);   border-left:2px solid var(--c-accent); }
    .corner.tr,.btn-corner.tr { top:-1px;    right:-1px; border-top:2px solid var(--c-accent);   border-right:2px solid var(--c-accent); }
    .corner.bl,.btn-corner.bl { bottom:-1px; left:-1px;  border-bottom:2px solid var(--c-accent);border-left:2px solid var(--c-accent); }
    .corner.br,.btn-corner.br { bottom:-1px; right:-1px; border-bottom:2px solid var(--c-accent);border-right:2px solid var(--c-accent); }

    .card-icon {
      width: 42px; height: 42px;
      border-radius: 4px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: white;
    }
    .email-icon    { background:linear-gradient(135deg,var(--c-accent),var(--c-secondary)); box-shadow:0 4px 14px rgba(96,165,250,.3); }
    .phone-icon    { background:linear-gradient(135deg,var(--c-teal),var(--c-accent));     box-shadow:0 4px 14px rgba(56,189,248,.3); }
    .location-icon { background:linear-gradient(135deg,var(--c-violet),var(--c-teal));    box-shadow:0 4px 14px rgba(129,140,248,.3); }

    .card-content { flex:1; min-width:0; }
    .card-title {
      font-family:var(--font-mono); font-size:.62rem;
      color:var(--c-muted); margin-bottom:.2rem; letter-spacing:.1em;
    }
    .card-value {
      font-family:var(--font-body); font-size:.95rem; font-weight:600;
      color:var(--c-text-1); text-decoration:none; display:block;
      transition:color .2s; word-break:break-word;
    }
    a.card-value:hover { color:var(--c-accent); text-shadow:0 0 8px var(--c-accent-glow); }

    /* ── Social Row ── */
    .social-row {
      display: flex;
      align-items: center;
      gap: .75rem;
      padding: .5rem .25rem;
    }
    .social-label {
      font-family:var(--font-mono); font-size:.62rem;
      color:var(--c-muted); letter-spacing:.1em;
    }
    .social-link {
      width: 38px; height: 38px;
      background: var(--c-card-bg);
      border: 1px solid var(--c-card-border);
      border-radius: 3px;
      display: flex; align-items: center; justify-content: center;
      color: var(--c-text-2);
      transition: all .25s ease;
    }
    .social-link:hover {
      background: rgba(96,165,250,.15);
      border-color: var(--c-accent);
      color: var(--c-accent);
      transform: translateY(-3px);
      box-shadow: 0 6px 18px rgba(96,165,250,.25);
    }

    /* ── Map ── */
    .map-card {
      background: var(--c-card-bg);
      border: 1px solid var(--c-card-border);
      border-radius: 4px;
      overflow: hidden;
    }
    .map-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .6rem .9rem;
      border-bottom: 1px solid var(--c-card-border);
    }
    .map-label { font-family:var(--font-mono); font-size:.62rem; color:var(--c-teal); letter-spacing:.1em; }
    .map-status {
      font-family:var(--font-mono); font-size:.62rem;
      color:var(--c-green); letter-spacing:.1em;
      display:flex; align-items:center; gap:.4rem;
    }
    .blink-dot {
      width:6px; height:6px; border-radius:50%;
      background:var(--c-green);
      animation:blink-dot 1.5s ease-in-out infinite;
    }
    .map-frame { display:block; }

    /* ── Form Card ── */
    .form-card {
      background: var(--c-card-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--c-card-border);
      border-radius: 4px;
      padding: 2.25rem 2.5rem;
      position: relative;
      animation: hud-pulse 5s ease-in-out infinite;
    }
    .form-top-bar {
      position:absolute; top:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,var(--c-accent),var(--c-violet),transparent);
      animation:bar-slide .8s ease-out;
    }

    .form-header { margin-bottom:1.5rem; }
    .form-title-row {
      display:flex; align-items:center; gap:.85rem; margin-bottom:.4rem;
    }
    .form-module-id {
      font-family:var(--font-display); font-size:.6rem; font-weight:700;
      color:var(--c-accent); background:rgba(96,165,250,.1);
      border:1px solid rgba(96,165,250,.2); border-radius:2px;
      padding:.22rem .45rem; letter-spacing:.05em;
    }
    .form-title {
      font-family:var(--font-display); font-size:1.1rem; font-weight:700;
      color:var(--c-text-1); letter-spacing:.08em; margin:0;
    }
    .form-subtitle {
      font-family:var(--font-mono); font-size:.72rem;
      color:var(--c-muted); letter-spacing:.06em;
    }
    .form-sep {
      height:1px; margin-bottom:1.75rem;
      background:linear-gradient(90deg,rgba(96,165,250,.25),transparent);
    }

    /* ── Form Elements ── */
    .contact-form { display:flex; flex-direction:column; gap:1.4rem; }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.4rem;
    }

    .form-group { display:flex; flex-direction:column; gap:.45rem; }

    .form-group label {
      font-family:var(--font-display); font-size:.65rem; font-weight:700;
      color:var(--c-text-2); letter-spacing:.12em;
      display:flex; align-items:center; gap:.45rem;
    }
    .form-group label svg { opacity:.55; color:var(--c-accent); }

    .form-input {
      font-family: var(--font-mono);
      font-size: .875rem;
      background: rgba(7,16,45,.6);
      border: 1px solid var(--c-card-border);
      border-radius: 3px;
      padding: .8rem 1rem;
      color: var(--c-text-1);
      transition: all .25s ease;
      caret-color: var(--c-accent);
    }
    .form-input:focus {
      outline: none;
      border-color: var(--c-accent);
      background: rgba(7,16,45,.8);
      box-shadow: 0 0 0 3px rgba(96,165,250,.1), 0 0 12px rgba(96,165,250,.1);
    }
    .form-input::placeholder { color:var(--c-muted); font-size:.8rem; }
    textarea.form-input { resize:vertical; min-height:140px; }

    /* ── Submit Button ── */
    .submit-btn {
      font-family: var(--font-display);
      font-size: .75rem;
      font-weight: 700;
      letter-spacing: .15em;
      background: linear-gradient(135deg,var(--c-secondary),var(--c-accent));
      color: white;
      border: none;
      border-radius: 3px;
      padding: 1rem 2rem;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: .65rem;
      transition: all .25s ease;
      margin-top: .5rem;
      box-shadow: var(--shadow-glow), 0 0 16px rgba(96,165,250,.2);
      position: relative;
      overflow: hidden;
    }
    .submit-btn::before {
      content:'';
      position:absolute; top:0; left:-100%; width:100%; height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
      transition:left .5s;
    }
    .submit-btn:hover:not(:disabled)::before { left:100%; }
    .submit-btn:hover:not(:disabled) {
      background:linear-gradient(135deg,var(--c-accent),#93c5fd);
      transform:translateY(-2px);
      box-shadow:0 8px 28px rgba(96,165,250,.4);
    }
    .submit-btn:disabled { opacity:.5; cursor:not-allowed; }

    /* ── Status ── */
    .status-message {
      font-family:var(--font-mono); font-size:.8rem;
      padding:.75rem 1rem; border-radius:3px;
      display:flex; align-items:center; gap:.6rem;
      letter-spacing:.04em;
      animation:statusIn .3s ease;
    }
    .status-icon { font-weight:700; font-size:.9rem; }
    .status-message.success {
      background:rgba(52,211,153,.06);
      color:#86efac;
      border:1px solid rgba(52,211,153,.2);
    }
    .status-message.error {
      background:rgba(239,68,68,.06);
      color:#fca5a5;
      border:1px solid rgba(239,68,68,.2);
    }

    /* ── Responsive ── */
    @media (max-width: 1199px) {
      .content-grid { grid-template-columns:340px 1fr; }
    }
    @media (max-width: 1023px) {
      .content-grid { grid-template-columns:1fr; }
      .info-panel {
        position:static;
        display:grid;
        grid-template-columns:repeat(2,1fr);
      }
      .map-card   { grid-column:1/-1; }
      .social-row { grid-column:1/-1; justify-content:flex-start; }
    }
    @media (max-width: 767px) {
      .contact-section { padding:3rem 0; }
      .container { padding:0 1rem; }
      .info-panel { grid-template-columns:1fr; }
      .map-card   { grid-column:auto; }
      .social-row { grid-column:auto; }
      .form-card  { padding:1.5rem; }
      .form-row   { grid-template-columns:1fr; }
    }
    @media (max-width: 479px) {
      .container { padding:0 .875rem; }
      .form-card  { padding:1.25rem; }
    }
  `]
})
export class ContactComponent {
  config = APP_CONFIG;

  formData = { name:'', email:'', subject:'', message:'' };
  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;
  statusMessage = '';

  onSubmit() {
    this.isSubmitting = true;
    this.submitStatus = null;

    const mailtoLink = `mailto:mohamedalibenjaber205@gmail.com?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      this.isSubmitting = false;
      this.submitStatus = 'success';
      this.statusMessage = 'Transmission sent. Your email client has been opened.';
      this.formData = { name:'', email:'', subject:'', message:'' };
      setTimeout(() => { this.submitStatus = null; }, 5000);
    }, 500);
  }
}