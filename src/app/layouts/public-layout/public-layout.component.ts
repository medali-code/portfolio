import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { APP_CONFIG } from '../../app.config';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <!-- ══ NAVBAR ══ -->
    <nav class="navbar" [class.scrolled]="scrolled">
      <div class="scan-line"></div>
      <div class="nav-inner">

        <!-- ── Brand ── -->
        <a class="nav-brand" routerLink="/" routerLinkActive="brand-active" [routerLinkActiveOptions]="{exact:true}">
          <div class="nav-logo">
            <span>MA</span>
            <div class="logo-ring"></div>
            <div class="logo-corner tl"></div>
            <div class="logo-corner tr"></div>
            <div class="logo-corner bl"></div>
            <div class="logo-corner br"></div>
          </div>
          <div class="brand-text">
            <span class="brand-name">{{ config.name }}</span>
            <span class="brand-title">{{ config.title }}</span>
          </div>
        </a>

        <!-- ── Desktop links (>1024px) ── -->
        <div class="nav-links">
          <a class="nav-link" routerLink="/"            routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
            <span class="link-dot"></span> Home
          </a>
          <a class="nav-link" routerLink="/projects"    routerLinkActive="active">
            <span class="link-dot"></span> Projects
          </a>
          <a class="nav-link" routerLink="/experience"  routerLinkActive="active">
            <span class="link-dot"></span> Experience
          </a>
          <a class="nav-link" routerLink="/competences" routerLinkActive="active">
            <span class="link-dot"></span> Skills
          </a>
          <a class="nav-link" routerLink="/library"     routerLinkActive="active">
            <span class="link-dot"></span> Library
          </a>
          <a class="nav-link" routerLink="/events"      routerLinkActive="active">
            <span class="link-dot"></span> Events
          </a>
          <a class="nav-link" routerLink="/contact"     routerLinkActive="active">
            <span class="link-dot"></span> Contact
          </a>
        </div>

        <!-- ── Tablet icon-only links (769–1024px) ── -->
        <div class="nav-icons">
          <a class="nav-icon-link" routerLink="/"            routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" title="Home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </a>
          <a class="nav-icon-link" routerLink="/projects"    routerLinkActive="active" title="Projects">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </a>
          <a class="nav-icon-link" routerLink="/experience"  routerLinkActive="active" title="Experience">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </a>
          <a class="nav-icon-link" routerLink="/competences" routerLinkActive="active" title="Skills">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </a>
          <a class="nav-icon-link" routerLink="/library"     routerLinkActive="active" title="Library">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </a>
          <a class="nav-icon-link" routerLink="/events"      routerLinkActive="active" title="Events">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </a>
          <a class="nav-icon-link" routerLink="/contact"     routerLinkActive="active" title="Contact">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </a>
        </div>

        <!-- ── Right actions ── -->
        <div class="nav-right">
          <!-- CTA — visible >768px -->
          <button class="nav-cta" (click)="cvOpen = true">
            <span class="cta-inner">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span class="cta-text">View CV</span>
            </span>
          </button>

          <!-- CV icon-only — visible ≤768px -->
          <button class="nav-cv-icon" (click)="cvOpen = true" title="View CV">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>

          <!-- Hamburger — visible ≤768px -->
          <button class="hamburger" (click)="mobileOpen = !mobileOpen" [class.open]="mobileOpen" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <!-- ══ Mobile Drawer (≤768px) ══ -->
      <div class="mobile-menu" [class.open]="mobileOpen" (click)="close()">
        <div class="mob-menu-inner" (click)="$event.stopPropagation()">
          <a class="mob-link" routerLink="/"            routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="close()">
            <span class="mob-num">01</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Home
          </a>
          <a class="mob-link" routerLink="/projects"    routerLinkActive="active" (click)="close()">
            <span class="mob-num">02</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            Projects
          </a>
          <a class="mob-link" routerLink="/experience"  routerLinkActive="active" (click)="close()">
            <span class="mob-num">03</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            Experience
          </a>
          <a class="mob-link" routerLink="/competences" routerLinkActive="active" (click)="close()">
            <span class="mob-num">04</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Skills
          </a>
          <a class="mob-link" routerLink="/library"     routerLinkActive="active" (click)="close()">
            <span class="mob-num">05</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            Library
          </a>
          <a class="mob-link" routerLink="/events"      routerLinkActive="active" (click)="close()">
            <span class="mob-num">06</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Events
          </a>
          <a class="mob-link" routerLink="/contact"     routerLinkActive="active" (click)="close()">
            <span class="mob-num">07</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Contact
          </a>
        </div>
      </div>
    </nav>

    <!-- ══ PAGE CONTENT ══ -->
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <!-- ══ FOOTER ══ -->
    <footer class="footer" [class.no-gap]="isSpecialPage">
      <div class="footer-grid-bg"></div>
      <div class="footer-top-line"></div>
      <div class="container">
        <div class="footer-grid">

          <div class="footer-brand">
            <div class="brand-logo-wrap">
              <div class="footer-logo-box">
                <span>MA</span>
                <div class="fl-corner tl"></div>
                <div class="fl-corner tr"></div>
                <div class="fl-corner bl"></div>
                <div class="fl-corner br"></div>
              </div>
              <h3>Mohamed Ali Ben Jaber</h3>
            </div>
            <p>Passionate Full-Stack Developer & Trainer crafting exceptional digital experiences from Gabès, Tunisia.</p>
            <div class="footer-socials">
              <a [href]="config.github"   target="_blank" class="f-soc" title="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a [href]="config.linkedin" target="_blank" class="f-soc" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mohamedalibjr/" target="_blank" class="f-soc" title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/mohamedali.benjaber.161" target="_blank" class="f-soc" title="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4><span class="col-num">01</span> Contact</h4>
            <p>📍 {{ config.location }}</p>
            <p>📧 <a [href]="'mailto:'+config.email">{{ config.email }}</a></p>
            <p>📞 <a [href]="'tel:'+config.phone">{{ config.phone }}</a></p>
          </div>

          <div class="footer-col">
            <h4><span class="col-num">02</span> Navigate</h4>
            <a routerLink="/">Home</a>
            <a routerLink="/projects">Projects</a>
            <a routerLink="/experience">Experience</a>
            <a routerLink="/competences">Skills</a>
            <a routerLink="/events">Events</a>
            <a routerLink="/contact">Contact</a>
          </div>
        </div>

        <div class="footer-bottom">
          <span class="footer-copy">© {{ year }} {{ config.name }} — All rights reserved.</span>
        </div>
      </div>
    </footer>

    <!-- ══ CV MODAL ══ -->
    <div class="cv-overlay" [class.open]="cvOpen" (click)="cvOpen=false">
      <div class="cv-modal" (click)="$event.stopPropagation()">
        <iframe src="assets/documents/CV_Mohamed_Ali_Ben_Jaber.pdf" title="CV"></iframe>
        <div class="cv-toolbar">
          <button class="cv-close" (click)="cvOpen=false">✕</button>
          <a href="assets/documents/CV_Mohamed_Ali_Ben_Jaber.pdf" download class="cv-dl">⬇ Download CV</a>
        </div>
      </div>
    </div>

    <!-- ══ SCROLL TO TOP ══ -->
    <button class="scroll-top" [class.visible]="scrolled" (click)="scrollTop()">▲</button>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;600;700;900&family=Share+Tech+Mono&display=swap');

    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: 'Rajdhani', sans-serif;
    }

    :host {
      --bg:         #040810;
      --bg2:        #070e1e;
      --primary:    #4f8ef7;
      --gold:       #c9a227;
      --gold2:      #f0c040;
      --teal:       #00d4aa;
      --purple:     #8b5cf6;
      --text:       #e8eaf0;
      --muted:      #7a8599;
      --border:     rgba(79, 142, 247, .18);
      --font-title: 'Cinzel', serif;
      --font-mono:  'Share Tech Mono', monospace;
      --font-hud:   'Orbitron', sans-serif;
      --font-body:  'Rajdhani', sans-serif;
    }

    .main-content { flex: 1; }

    /* ══════════════════════════════════
       NAVBAR
    ══════════════════════════════════ */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(4, 8, 16, .95);
      backdrop-filter: blur(28px) saturate(180%);
      border-bottom: 1px solid var(--border);
      transition: all .3s;
      overflow: visible; /* drawer doit dépasser */
    }

    .scan-line {
      position: absolute;
      top: 0; left: -100%;
      width: 100%; height: 1px;
      background: linear-gradient(90deg, transparent, var(--primary), var(--gold), var(--teal), transparent);
      animation: scanMove 4s linear infinite;
      opacity: .5;
      pointer-events: none;
    }
    @keyframes scanMove { 0%{left:-100%} 100%{left:100%} }

    .navbar::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, var(--primary), var(--gold), transparent);
      opacity: .35;
    }

    .navbar.scrolled {
      box-shadow: 0 8px 40px rgba(0,0,0,.5), 0 0 0 1px rgba(79,142,247,.08);
    }

    /* ── nav-inner : always one row ── */
    .nav-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      height: 60px; /* hauteur fixe garantie */
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: .75rem;
    }

    /* ── Brand ── */
    .nav-brand {
      display: flex;
      align-items: center;
      gap: .75rem;
      text-decoration: none;
      flex-shrink: 0;
      min-width: 0;
    }

    .nav-logo {
      width: 40px; height: 40px;
      flex-shrink: 0;
      background: linear-gradient(135deg, var(--primary), var(--purple));
      border-radius: 9px;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-title);
      font-weight: 900; font-size: .95rem; color: #fff;
      box-shadow: 0 0 20px rgba(79,142,247,.4);
      position: relative; overflow: hidden;
    }

    .nav-logo::before {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,.18) 50%, transparent 60%);
      animation: logoShine 3.5s ease-in-out infinite;
    }
    @keyframes logoShine {
      0%   { transform: translateX(-200%) rotate(45deg); }
      100% { transform: translateX(200%) rotate(45deg); }
    }

    .logo-ring {
      position: absolute; inset: -2px; border-radius: 11px;
      border: 1px solid rgba(79,142,247,.5);
      animation: ringPulse 2s ease-in-out infinite;
    }
    @keyframes ringPulse { 0%,100%{opacity:.4} 50%{opacity:.9} }

    .logo-corner {
      position: absolute; width: 6px; height: 6px;
      border-color: rgba(240,192,64,.8); border-style: solid;
    }
    .logo-corner.tl { top:1px; left:1px;   border-width:1px 0 0 1px; }
    .logo-corner.tr { top:1px; right:1px;  border-width:1px 1px 0 0; }
    .logo-corner.bl { bottom:1px; left:1px;  border-width:0 0 1px 1px; }
    .logo-corner.br { bottom:1px; right:1px; border-width:0 1px 1px 0; }

    .brand-text {
      display: flex; flex-direction: column;
      overflow: hidden;
    }

    .brand-name {
      font-family: var(--font-title);
      font-weight: 700; font-size: .9rem;
      color: var(--text); line-height: 1.2;
      letter-spacing: .02em;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }

    .brand-title {
      font-family: var(--font-hud);
      font-size: .5rem; color: var(--muted);
      letter-spacing: .16em; text-transform: uppercase;
      white-space: nowrap;
    }

    /* ══════════════════════════════════
       DESKTOP LINKS  (>1024px)
    ══════════════════════════════════ */
    .nav-links {
      display: flex;
      gap: 0; align-items: center;
      background: rgba(7,14,30,.6);
      padding: .35rem;
      border-radius: 9px;
      border: 1px solid rgba(79,142,247,.1);
      flex-shrink: 1;
    }

    .nav-link {
      font-family: var(--font-hud);
      font-weight: 400; font-size: .6rem;
      letter-spacing: .1em; text-transform: uppercase;
      color: var(--muted);
      text-decoration: none;
      padding: .45rem .8rem;
      border-radius: 6px;
      transition: all .2s;
      position: relative;
      display: flex; align-items: center; gap: .3rem;
      white-space: nowrap;
    }

    .link-dot {
      width: 3px; height: 3px; border-radius: 50%;
      background: var(--muted);
      transition: all .2s; flex-shrink: 0;
    }

    .nav-link:hover { color: var(--text); background: rgba(79,142,247,.12); }
    .nav-link.active { color: var(--primary); background: rgba(79,142,247,.12); }

    .nav-link:hover .link-dot,
    .nav-link.active .link-dot {
      background: var(--primary); box-shadow: 0 0 5px var(--primary);
    }

    .nav-link::after {
      content: '';
      position: absolute; bottom: 2px; left: 20%; right: 20%;
      height: 1px; background: var(--primary);
      opacity: 0; transition: opacity .2s;
      box-shadow: 0 0 4px var(--primary);
    }
    .nav-link:hover::after,
    .nav-link.active::after { opacity: 1; }

    /* ══════════════════════════════════
       TABLET ICON LINKS  (769–1024px)
    ══════════════════════════════════ */
    .nav-icons {
      display: none; /* affiché via media query */
      gap: .15rem; align-items: center;
      background: rgba(7,14,30,.6);
      padding: .35rem;
      border-radius: 9px;
      border: 1px solid rgba(79,142,247,.1);
    }

    .nav-icon-link {
      width: 34px; height: 34px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 6px;
      color: var(--muted);
      text-decoration: none;
      transition: all .2s;
      position: relative;
    }

    .nav-icon-link:hover { color: var(--text); background: rgba(79,142,247,.12); }
    .nav-icon-link.active { color: var(--primary); background: rgba(79,142,247,.12); }

    /* tooltip label */
    .nav-icon-link::after {
      content: attr(title);
      position: absolute;
      bottom: -28px; left: 50%;
      transform: translateX(-50%);
      font-family: var(--font-hud);
      font-size: .45rem; letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--primary);
      background: rgba(4,8,16,.9);
      border: 1px solid var(--border);
      padding: 2px 6px; border-radius: 4px;
      white-space: nowrap;
      opacity: 0; pointer-events: none;
      transition: opacity .15s;
    }
    .nav-icon-link:hover::after { opacity: 1; }

    /* ══════════════════════════════════
       RIGHT ACTIONS
    ══════════════════════════════════ */
    .nav-right {
      display: flex; align-items: center; gap: .5rem;
      flex-shrink: 0;
    }

    /* CTA bouton texte */
    .nav-cta {
      background: transparent;
      border: 1px solid rgba(79,142,247,.4);
      border-radius: 7px; padding: 0;
      cursor: pointer; transition: all .3s;
      white-space: nowrap; position: relative; overflow: hidden;
    }
    .nav-cta::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, var(--primary), var(--purple));
      opacity: 0; transition: opacity .3s;
    }
    .nav-cta:hover::before { opacity: 1; }
    .nav-cta:hover { border-color: transparent; box-shadow: 0 0 22px rgba(79,142,247,.4); transform: translateY(-1px); }

    .cta-inner {
      position: relative; z-index: 1;
      display: flex; align-items: center; gap: .4rem;
      padding: .45rem 1rem;
      font-family: var(--font-hud);
      font-size: .58rem; letter-spacing: .12em;
      text-transform: uppercase; font-weight: 700;
      color: var(--text);
    }

    /* CV icône seule (mobile) */
    .nav-cv-icon {
      display: none;
      width: 36px; height: 36px;
      background: rgba(79,142,247,.08);
      border: 1px solid var(--border);
      border-radius: 8px;
      align-items: center; justify-content: center;
      color: var(--text);
      cursor: pointer; transition: all .2s;
      flex-shrink: 0;
    }
    .nav-cv-icon:hover { background: rgba(79,142,247,.2); border-color: var(--primary); }

    /* Hamburger */
    .hamburger {
      display: none;
      flex-direction: column; gap: 4px;
      background: rgba(79,142,247,.08);
      border: 1px solid var(--border);
      padding: .5rem .55rem; border-radius: 8px;
      cursor: pointer;
      width: 36px; height: 36px;
      align-items: center; justify-content: center;
      flex-shrink: 0; transition: all .2s;
    }
    .hamburger:hover { background: rgba(79,142,247,.18); border-color: rgba(79,142,247,.4); }
    .hamburger span {
      display: block; width: 16px; height: 1.5px;
      background: var(--text); transition: all .25s;
      transform-origin: center;
    }
    .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4px,4px); }
    .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4px,-4px); }

    /* ══════════════════════════════════
       MOBILE DRAWER  (≤768px)
    ══════════════════════════════════ */
    .mobile-menu {
      display: none;
      overflow: hidden;
      max-height: 0;
      transition: max-height .35s ease;
      border-top: 1px solid transparent;
      background: rgba(4,8,16,.98);
    }
    .mobile-menu.open {
      display: block;
      max-height: 500px;
      border-top-color: var(--border);
    }

    .mob-menu-inner {
      padding: .75rem 1rem 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: .3rem;
    }

    .mob-link {
      font-family: var(--font-hud);
      font-size: .58rem; letter-spacing: .1em;
      text-transform: uppercase; color: var(--muted);
      text-decoration: none;
      padding: .6rem .75rem;
      border-radius: 6px;
      border: 1px solid transparent;
      display: flex; align-items: center; gap: .5rem;
      transition: all .18s;
    }

    .mob-num {
      font-family: var(--font-mono);
      font-size: .5rem; color: rgba(79,142,247,.4);
    }

    .mob-link:hover { color: var(--text); background: rgba(79,142,247,.08); border-color: var(--border); }
    .mob-link.active { color: var(--primary); background: rgba(79,142,247,.08); border-color: var(--border); }
    .mob-link.active .mob-num { color: var(--primary); }

    /* ══════════════════════════════════
       FOOTER
    ══════════════════════════════════ */
    .footer {
      background: rgba(2,5,12,.98);
      border-top: 1px solid var(--border);
      padding: 4.5rem 0 1.75rem;
      margin-top: 8rem;
      position: relative; overflow: hidden;
      font-family: var(--font-body);
    }
    .footer.no-gap { margin-top: 0; }

    .footer-grid-bg {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(79,142,247,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(79,142,247,.03) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    }
    .footer-grid-bg::after {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79,142,247,.06) 0%, transparent 60%);
    }

    .footer-top-line {
      position: absolute; top:0; left:0; right:0; height:1px;
      background: linear-gradient(90deg, transparent, var(--primary), var(--gold), var(--teal), transparent);
      opacity: .35;
    }

    .container {
      max-width: 1400px; margin: 0 auto;
      padding: 0 2rem; position: relative; z-index: 1;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3.5rem; margin-bottom: 3rem;
    }

    .footer-brand .brand-logo-wrap {
      display: flex; align-items: center; gap: .85rem; margin-bottom: 1rem;
    }

    .footer-logo-box {
      width: 42px; height: 42px; flex-shrink: 0;
      background: linear-gradient(135deg, var(--primary), var(--purple));
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-title); font-weight: 900;
      font-size: .95rem; color: #fff; position: relative;
    }

    .fl-corner {
      position: absolute; width:6px; height:6px;
      border-color: var(--gold); border-style: solid; opacity: .6;
    }
    .fl-corner.tl { top:-1px; left:-1px;   border-width:1px 0 0 1px; }
    .fl-corner.tr { top:-1px; right:-1px;  border-width:1px 1px 0 0; }
    .fl-corner.bl { bottom:-1px; left:-1px;  border-width:0 0 1px 1px; }
    .fl-corner.br { bottom:-1px; right:-1px; border-width:0 1px 1px 0; }

    .footer-brand h3 {
      font-family: var(--font-title); font-size:1.1rem; font-weight:700;
      background: linear-gradient(135deg, var(--primary), var(--gold));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-brand p {
      color: var(--muted); font-size:.92rem; line-height:1.75; max-width:340px;
    }

    .footer-socials {
      display: flex; gap: .55rem; margin-top: 1.25rem; flex-wrap: wrap;
    }

    .f-soc {
      width:36px; height:36px; border-radius:7px;
      background:rgba(79,142,247,.06); border:1px solid var(--border);
      display:flex; align-items:center; justify-content:center;
      color:var(--text); transition:all .22s; text-decoration:none;
      clip-path:polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);
    }
    .f-soc:hover {
      background:linear-gradient(135deg, var(--primary), var(--purple));
      border-color:var(--primary); transform:translateY(-2px);
      box-shadow:0 8px 20px rgba(79,142,247,.35);
      clip-path:none; border-radius:8px;
    }

    .footer-col h4 {
      font-family:var(--font-hud); font-size:.65rem; font-weight:700;
      letter-spacing:.18em; text-transform:uppercase;
      color:var(--text); margin-bottom:1.25rem;
      display:flex; align-items:center; gap:.6rem;
    }

    .col-num { font-family:var(--font-mono); font-size:.6rem; color:rgba(79,142,247,.5); }

    .footer-col p, .footer-col a {
      display:block; color:var(--muted); font-family:var(--font-body);
      font-size:.9rem; margin-bottom:.55rem; line-height:1.65;
      text-decoration:none; transition:color .2s;
    }
    .footer-col a:hover { color:var(--primary); }

    .footer-bottom {
      display:flex; justify-content:space-between; align-items:center;
      padding-top:1.75rem;
      border-top:1px solid rgba(79,142,247,.08);
      flex-wrap:wrap; gap:.5rem;
    }

    .footer-copy { font-family:var(--font-mono); font-size:.7rem; color:var(--muted); }
    .footer-tagline { font-family:var(--font-hud); font-size:.55rem; letter-spacing:.18em; color:rgba(79,142,247,.35); }

    /* ══════════════════════════════════
       CV MODAL
    ══════════════════════════════════ */
    .cv-overlay {
      position:fixed; inset:0; z-index:9000;
      background:rgba(0,0,0,.92); backdrop-filter:blur(14px);
      display:flex; align-items:center; justify-content:center;
      padding:1rem; opacity:0; pointer-events:none; transition:opacity .3s;
    }
    .cv-overlay.open { opacity:1; pointer-events:all; }

    .cv-modal {
      width:90%; max-width:900px; height:85vh;
      background:#fff; border-radius:12px; overflow:hidden;
      display:flex; flex-direction:column;
      box-shadow:0 40px 100px rgba(0,0,0,.7), 0 0 0 1px rgba(79,142,247,.35);
      transform:scale(.95); transition:transform .3s;
    }
    .cv-overlay.open .cv-modal { transform:scale(1); }
    .cv-modal iframe { flex:1; border:none; width:100%; }

    .cv-toolbar {
      display:flex; justify-content:space-between; align-items:center;
      padding:.75rem 1.25rem; background:#0a1428;
      border-top:1px solid rgba(79,142,247,.2);
    }

    .cv-close {
      background:none; border:1px solid rgba(255,255,255,.2);
      color:#fff; width:32px; height:32px; border-radius:50%;
      cursor:pointer; font-size:1rem;
      display:flex; align-items:center; justify-content:center;
      transition:all .2s;
    }
    .cv-close:hover { background:rgba(220,38,38,.3); border-color:#dc2626; }

    .cv-dl {
      background:linear-gradient(135deg, var(--primary), var(--purple));
      color:#fff; text-decoration:none; padding:.5rem 1.25rem;
      border-radius:7px; font-family:var(--font-hud); font-weight:700;
      font-size:.65rem; letter-spacing:.1em; text-transform:uppercase; transition:all .2s;
    }
    .cv-dl:hover { box-shadow:0 0 20px rgba(79,142,247,.4); }

    /* ══════════════════════════════════
       SCROLL TOP
    ══════════════════════════════════ */
    .scroll-top {
      position:fixed; bottom:2rem; right:2rem; z-index:500;
      width:40px; height:40px;
      background:linear-gradient(135deg, var(--primary), var(--purple));
      border:none; border-radius:8px; color:#fff; font-size:.85rem;
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      box-shadow:0 8px 25px rgba(79,142,247,.35);
      transition:all .3s; opacity:0; visibility:hidden;
      clip-path:polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);
    }
    .scroll-top.visible { opacity:1; visibility:visible; }
    .scroll-top:hover { transform:translateY(-4px); box-shadow:0 12px 35px rgba(79,142,247,.5); }

    /* ════════════════════════════════════════════════
       RESPONSIVE — STRATÉGIE 3 NIVEAUX
       • > 1024px  → texte complet (nav-links)
       • 769–1024px → icônes seules (nav-icons)
       • ≤ 768px   → hamburger + drawer (mobile-menu)
       Navbar TOUJOURS sur une seule ligne
    ════════════════════════════════════════════════ */

    /* ── Tablet paysage : icônes seules ── */
    @media (max-width: 1024px) {
      .nav-links  { display: none; }
      .nav-icons  { display: flex; }
      .brand-title { display: none; }
      .nav-inner  { padding: 0 1.25rem; }
    }

    /* ── ≤ 768px : hamburger, masquer icônes ── */
    @media (max-width: 768px) {
      .nav-icons   { display: none; }
      .nav-cta     { display: none; }
      .nav-cv-icon { display: flex; }
      .hamburger   { display: flex; }
      .nav-inner   { padding: 0 .875rem; height: 54px; }
      .nav-logo    { width: 36px; height: 36px; font-size: .88rem; }
      .brand-name  { font-size: .82rem; }

      /* footer 1 col */
      .footer { margin-top: 4rem; padding: 3rem 0 1rem; }
      .footer-grid { grid-template-columns: 1fr; gap: 1.75rem; }
      .footer-brand { grid-column: auto; }
      .footer-bottom { flex-direction: column; text-align: center; }
      .container { padding: 0 1rem; }

      .cv-modal { width: 95%; height: 88vh; }
      .scroll-top { bottom: 1.25rem; right: .875rem; }
    }

    /* ── ≤ 480px : tout réduit ── */
    @media (max-width: 480px) {
      .nav-inner   { padding: 0 .625rem; height: 50px; gap: .35rem; }
      .nav-logo    { width: 32px; height: 32px; font-size: .78rem; border-radius: 7px; }
      .brand-name  { font-size: .75rem; }
      .nav-brand   { gap: .45rem; }
      .nav-cv-icon { width: 32px; height: 32px; }
      .hamburger   { width: 32px; height: 32px; }

      .mob-menu-inner { grid-template-columns: 1fr 1fr; gap: .25rem; padding: .6rem .75rem .875rem; }
      .mob-link  { font-size: .54rem; padding: .55rem .65rem; }

      .footer { margin-top: 2.5rem; padding: 2rem 0 .75rem; }
      .container { padding: 0 .75rem; }
      .footer-brand p { font-size: .82rem; }
      .footer-socials { gap: .35rem; }
      .f-soc { width: 30px; height: 30px; }
      .footer-col h4 { font-size: .58rem; }
      .footer-col p, .footer-col a { font-size: .8rem; }
      .footer-copy { font-size: .62rem; }
      .footer-tagline { font-size: .48rem; }

      .cv-modal { width: 98%; height: 90vh; border-radius: 10px; }
      .scroll-top { bottom: .875rem; right: .625rem; width: 36px; height: 36px; }
    }

    /* ── ≤ 360px : très petits écrans ── */
    @media (max-width: 360px) {
      .nav-inner   { padding: 0 .5rem; height: 48px; gap: .25rem; }
      .nav-logo    { width: 28px; height: 28px; font-size: .7rem; border-radius: 6px; }
      .brand-name  { font-size: .68rem; }
      .nav-brand   { gap: .35rem; }
      .nav-cv-icon { width: 28px; height: 28px; }
      .hamburger   { width: 28px; height: 28px; padding: .4rem .45rem; }
      .hamburger span { width: 13px; }

      .mob-menu-inner { grid-template-columns: 1fr 1fr; gap: .2rem; padding: .5rem; }
      .mob-link  { font-size: .5rem; padding: .5rem .55rem; gap: .35rem; }
      .mob-num   { display: none; }

      .container { padding: 0 .5rem; }
      .footer-tagline { display: none; }
      .scroll-top { width: 32px; height: 32px; font-size: .75rem; bottom: .75rem; right: .5rem; }
    }
  `]
})
export class PublicLayoutComponent {
  config = APP_CONFIG;
  mobileOpen = false;
  cvOpen = false;
  scrolled = false;
  year = new Date().getFullYear();

  constructor(private router: Router) {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 80;
      });
    }
  }

  get isSpecialPage(): boolean {
    return ['/library', '/events'].includes(this.router.url);
  }

  close() { this.mobileOpen = false; }
  scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}