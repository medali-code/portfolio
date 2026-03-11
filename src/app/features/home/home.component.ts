import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_CONFIG } from '../../app.config';
import { Router, RouterModule } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Client {
  name: string;
  logo: string;
  feedback: string;
  role: string;
}

interface Course {
  title: string;
  platform: string;
  icon: string;
  progress: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
  <!-- Hero Section -->
    <section id="home" class="hero-section" aria-label="Home section">
      <div class="hero-background" aria-hidden="true">
        <div class="floating-shapes" aria-hidden="true">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
        <div class="gradient-overlay" aria-hidden="true"></div>
      </div>

      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-grid">
            <div class="hero-text">
              <div class="hero-badge" role="status" aria-live="polite">
                <span class="hero-badge-dot"></span>
                <span class="hero-badge-label">AVAILABLE FOR NEW MISSIONS</span>
              </div>
              <h1 class="hero-title">
                Creator of<br>
                Exceptional<br>
                <span class="hero-title-accent">Digital Experiences</span>
              </h1>
              <p class="hero-subtitle">
                I'm <strong>{{config.name}}</strong>, Full-Stack Developer &amp; UI/UX Designer based in {{config.location}}.
                I transform ideas into elegant and high-performing digital interfaces.
              </p>

              <div class="hero-actions">
                <button class="btn-primary" [routerLink]="['/projects']" aria-label="View my projects">
                  <span>VIEW PROJECTS</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button class="btn-secondary" [routerLink]="['/contact']" aria-label="Contact me">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                  <span>LET'S TALK</span>
                </button>
              </div>
            </div>

            <div class="hero-visual" aria-hidden="false">
              <div class="floating-card card-1" aria-hidden="true">
                <div class="fc-icon">⚡</div>
                <div class="fc-text">Performance</div>
              </div>
              <div class="floating-card card-2" aria-hidden="true">
                <div class="fc-icon">🎨</div>
                <div class="fc-text">Design</div>
              </div>
              <div class="floating-card card-3" aria-hidden="true">
                <div class="fc-icon">🔒</div>
                <div class="fc-text">Security</div>
              </div>

              <div class="hero-image-container" role="group" aria-label="Profile photo and visual elements">
                <div class="image-frame" role="img" [attr.aria-label]="config.name + ' - Profile photo'">
                  <img
                    [src]="config.profileImage ?? 'assets/images/mohamedAli.jpg'"
                    [alt]="config.name + ' - Profile photo'"
                    class="hero-image"
                    (error)="onImageError($event)"
                  />
                </div>
                <div class="image-glow" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title"><span class="section-title-glitch" data-text="SERVICES">SERVICES</span></h2>
          <p class="section-subtitle">Tailor-made solutions to transform your vision into digital reality</p>
        </div>

        <div class="services-grid">
          <div class="service-card"
               *ngFor="let service of services; let i = index"
               role="article"
               [attr.aria-label]="service.title">
            <div class="sc-corner tl"></div><div class="sc-corner tr"></div>
            <div class="sc-corner bl"></div><div class="sc-corner br"></div>
            <div class="sc-top-bar" [style.background]="service.gradient"></div>
            <div class="service-header">
              <div class="service-icon" aria-hidden="true">{{service.icon}}</div>
              <div class="service-number">0{{i + 1}}</div>
            </div>
            <h3 class="service-title">{{service.title}}</h3>
            <p class="service-description">{{service.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <div class="process-content">
          <div class="process-text">
            <h2 class="section-title"><span class="section-title-glitch" data-text="PROCESS">PROCESS</span></h2>
            <p class="section-subtitle">A methodical approach to ensure excellence at every stage of your project</p>
            <br>
            <div class="process-steps">
              <div class="process-step" *ngFor="let step of processSteps; let i = index" [style.animation-delay]="(i * 0.1) + 's'">
                <div class="step-header">
                  <div class="step-number" [style.background]="step.color">{{step.number}}</div>
                  <h3 class="step-title">{{step.title}}</h3>
                </div>
                <p class="step-description">{{step.description}}</p>
              </div>
            </div>
          </div>

          <div class="process-visual" aria-hidden="true">
            <div class="process-circle">
              <div class="circle-core">
                <div class="core-text">IDEA<br>TO<br>REALITY</div>
              </div>
              <div class="circle-orbit orbit-1"><div class="orbit-item">🎯</div></div>
              <div class="circle-orbit orbit-2"><div class="orbit-item">🎨</div></div>
              <div class="circle-orbit orbit-3"><div class="orbit-item">⚡</div></div>
              <div class="circle-orbit orbit-4"><div class="orbit-item">🚀</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients / Testimonials Section -->
    <section id="clients" class="clients-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title"><span class="section-title-glitch" data-text="THEY TRUST ME">THEY TRUST ME</span></h2>
          <p class="section-subtitle">Collaborations that exceed expectations</p>
        </div>

        <div class="clients-grid">
          <div class="testimonial-card" *ngFor="let client of clients; let i = index"
               role="article" [attr.aria-label]="client.name"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="tc-corner tl"></div><div class="tc-corner tr"></div>
            <div class="tc-corner bl"></div><div class="tc-corner br"></div>
            <div class="tc-top-bar"></div>

            <div class="tc-quote-mark">❝</div>
            <p class="tc-feedback">"{{client.feedback}}"</p>

            <div class="tc-sep"></div>

            <div class="tc-author">
              <div class="tc-avatar">{{client.logo}}</div>
              <div class="tc-author-info">
                <div class="tc-name">{{client.name}}</div>
                <div class="tc-role">{{client.role}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" aria-label="Call to action">
      <div class="cta-background" aria-hidden="true">
        <div class="cta-glow"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to bring your<br>project to life?</h2>
          <p class="cta-description">Let's discuss your vision and create something extraordinary together</p>
          <div class="cta-actions">
            <button class="btn-cta-primary" (click)="navigateToContact()" aria-label="Start a project">
              <div class="cta-btn-corner tl"></div><div class="cta-btn-corner tr"></div>
              <div class="cta-btn-corner bl"></div><div class="cta-btn-corner br"></div>
              <span>START A PROJECT</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
            <button class="btn-cta-secondary" aria-label="View my resume" (click)="showCV()">
              <div class="cta-btn-corner tl"></div><div class="cta-btn-corner tr"></div>
              <div class="cta-btn-corner bl"></div><div class="cta-btn-corner br"></div>
              <span>VIEW RESUME</span>
            </button>

            <div class="cv-viewer" *ngIf="isCVVisible">
              <div class="cv-overlay" (click)="closeCV()"></div>
              <div class="cv-container">
                <button class="close-btn" (click)="closeCV()">×</button>
                <iframe
                  src="assets/documents/CV_Mohamed_Ali_Ben_Jaber.pdf"
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></iframe>
                <a
                  href="assets/documents/CV_Mohamed_Ali_Ben_Jaber.pdf"
                  download="CV_Mohamed_Ali_Ben_Jaber.pdf"
                  class="download-btn"
                >
                  ⬇ Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scroll to Top -->
    <button class="scroll-top" [class.visible]="isScrolled" (click)="scrollToTop()" aria-label="Scroll to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;

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
      --c-bg:          #0f172a;

      --font-display: 'Orbitron', sans-serif;
      --font-mono:    'Share Tech Mono', monospace;
      --font-body:    'Rajdhani', sans-serif;
    }

    * { margin:0; padding:0; box-sizing:border-box; }

    /* ── Keyframes ── */
    @keyframes fadeInUp {
      from { opacity:0; transform:translateY(28px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes float {
      0%,100% { transform:translateY(0) rotate(0deg); }
      33%     { transform:translateY(-18px) rotate(4deg); }
      66%     { transform:translateY(9px) rotate(-4deg); }
    }
    @keyframes rotate {
      from { transform:rotate(0deg); }
      to   { transform:rotate(360deg); }
    }
    @keyframes glitch {
      0%,90%,100% { clip-path:none; transform:none; }
      91% { clip-path:inset(30% 0 50% 0); transform:translateX(-4px); }
      93% { clip-path:inset(60% 0 20% 0); transform:translateX(4px); }
      95% { clip-path:inset(10% 0 80% 0); transform:translateX(-2px); }
    }
    @keyframes glitch2 {
      0%,88%,100% { opacity:0; }
      89% { clip-path:inset(20% 0 60% 0); transform:translateX(5px); opacity:.45; color:var(--c-teal); }
      91% { clip-path:inset(70% 0 10% 0); transform:translateX(-5px); opacity:.45; color:var(--c-violet); }
      93% { opacity:0; }
    }
    @keyframes blink {
      0%,100%{opacity:1;} 50%{opacity:0;}
    }
    @keyframes hud-pulse {
      0%,100% { box-shadow:0 0 6px var(--c-accent-glow); }
      50%     { box-shadow:0 0 16px var(--c-accent-glow), 0 0 30px rgba(96,165,250,.08); }
    }
    @keyframes bar-slide {
      from { transform:scaleX(0); transform-origin:left; }
      to   { transform:scaleX(1); transform-origin:left; }
    }
    @keyframes badge-dot {
      0%,100%{opacity:1;} 50%{opacity:.3;}
    }
    @keyframes fadeIn {
      from{opacity:0;} to{opacity:1;}
    }
    @keyframes scaleIn {
      from{transform:scale(.9);opacity:0;} to{transform:scale(1);opacity:1;}
    }

    /* ── Container ── */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* ════════════════════════════════════
       HERO
    ════════════════════════════════════ */
    .hero-section {
      position: relative;
      width: 100vw;
      left: 50%; right: 50%;
      margin-left: -50vw; margin-right: -50vw;
      margin-top: -3rem;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: linear-gradient(135deg, #0a1628 0%, #0f1e3d 100%);
      z-index: 0;
      padding: 2rem 0;
    }

    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      width: 100%;
      position: relative;
      z-index: 2;
    }

    .hero-background { position:absolute; inset:0; z-index:0; }

    .floating-shapes { position:absolute; width:100%; height:100%; }
    .shape {
      position:absolute; border-radius:50%;
      background:linear-gradient(135deg,var(--c-secondary),var(--c-teal));
      opacity:.08; animation:float 20s infinite ease-in-out;
    }
    .shape-1 { width:300px;height:300px; top:10%;left:5%; animation-delay:0s; }
    .shape-2 { width:200px;height:200px; top:60%;right:10%; animation-delay:-5s; background:linear-gradient(135deg,var(--c-violet),var(--c-accent)); }
    .shape-3 { width:150px;height:150px; bottom:20%;left:20%; animation-delay:-10s; background:linear-gradient(135deg,var(--c-teal),var(--c-secondary)); }
    .shape-4 { width:100px;height:100px; top:20%;right:20%; animation-delay:-15s; }

    .gradient-overlay {
      position:absolute; inset:0;
      background:
        radial-gradient(circle at 20% 80%, rgba(37,99,235,.12) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(56,189,248,.08) 0%, transparent 50%);
      z-index:1;
    }

    /* Hero HUD grid background */
    .hero-section::before {
      content:''; pointer-events:none;
      position:absolute; inset:0; z-index:1;
      background-image:
        linear-gradient(rgba(96,165,250,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(96,165,250,.03) 1px, transparent 1px);
      background-size:44px 44px;
    }

    .hero-content { animation:fadeInUp 1s ease-out; }

    .hero-grid {
      display:grid; grid-template-columns:1fr 1fr;
      gap:4rem; align-items:center; min-height:calc(100vh - 8rem);
    }

    .hero-text { animation:fadeInUp 1s ease-out .2s backwards; }

    /* Hero badge */
    .hero-badge {
      display:inline-flex; align-items:center; gap:.6rem;
      font-family:var(--font-display); font-size:.62rem; font-weight:700;
      letter-spacing:.12em;
      background:rgba(96,165,250,.1);
      border:1px solid rgba(96,165,250,.25);
      color:var(--c-accent);
      padding:.45rem 1rem;
      border-radius:3px;
      margin-bottom:2rem;
    }
    .hero-badge-dot {
      width:7px; height:7px; border-radius:1px;
      background:var(--c-green);
      animation:badge-dot 1.5s ease-in-out infinite;
      box-shadow:0 0 6px rgba(52,211,153,.5);
    }

    .hero-title {
      font-family:var(--font-display);
      font-size:clamp(1.8rem,4vw,3.5rem);
      font-weight:900;
      line-height:1.15;
      margin-bottom:1.5rem;
      color:var(--c-text-1);
      letter-spacing:.03em;
    }
    .hero-title-accent {
      color:var(--c-accent);
      text-shadow:0 0 20px var(--c-accent-glow),0 0 60px rgba(96,165,250,.15);
    }

    .hero-subtitle {
      font-family:var(--font-body);
      font-size:1.1rem; color:var(--c-text-2);
      margin-bottom:2.5rem; line-height:1.7;
    }

    .hero-actions { display:flex; gap:1rem; flex-wrap:wrap; }

    .btn-primary {
      font-family:var(--font-display); font-size:.7rem; font-weight:700;
      letter-spacing:.15em;
      background:linear-gradient(135deg,var(--c-secondary),var(--c-accent));
      color:white; border:none;
      padding:.9rem 1.75rem; border-radius:3px;
      cursor:pointer;
      display:inline-flex; align-items:center; gap:.55rem;
      transition:all .25s ease;
      box-shadow:0 8px 25px rgba(37,99,235,.35);
      position:relative; overflow:hidden;
    }
    .btn-primary::before {
      content:''; position:absolute; top:0; left:-100%; width:100%; height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
      transition:left .5s;
    }
    .btn-primary:hover::before { left:100%; }
    .btn-primary:hover { transform:translateY(-2px); box-shadow:0 12px 35px rgba(96,165,250,.4); }

    .btn-secondary {
      font-family:var(--font-display); font-size:.7rem; font-weight:700;
      letter-spacing:.15em;
      background:rgba(96,165,250,.08);
      color:var(--c-text-1);
      border:1px solid var(--c-card-border);
      padding:.9rem 1.75rem; border-radius:3px;
      cursor:pointer;
      display:inline-flex; align-items:center; gap:.55rem;
      transition:all .25s ease;
    }
    .btn-secondary:hover {
      background:rgba(96,165,250,.15);
      border-color:var(--c-accent);
      transform:translateY(-2px);
      box-shadow:0 0 12px var(--c-accent-glow);
    }

    /* Hero visual */
    .hero-visual { position:relative; animation:fadeInUp 1s ease-out .4s backwards; }

    .floating-card {
      position:absolute;
      background:var(--c-card-bg); backdrop-filter:blur(10px);
      border:1px solid var(--c-card-border); border-radius:4px;
      padding:.7rem .9rem;
      display:flex; align-items:center; gap:.45rem;
      box-shadow:0 8px 24px rgba(0,0,0,.3);
      animation:float 6s ease-in-out infinite;
      z-index:3; font-family:var(--font-mono);
    }
    .card-1 { top:20%; right:10%; animation-delay:0s; }
    .card-2 { top:55%; left:8%; animation-delay:-2s; }
    .card-3 { bottom:30%; right:5%; animation-delay:-4s; }
    .fc-icon { font-size:1.2rem; }
    .fc-text { font-size:.65rem; font-weight:600; color:var(--c-accent); letter-spacing:.06em; }

    .hero-image-container { position:relative; display:flex; justify-content:center; align-items:center; }
    .image-frame {
      position:relative; border-radius:4px; overflow:hidden;
      box-shadow:0 25px 50px rgba(0,0,0,.5), 0 0 0 1px var(--c-card-border);
      z-index:1; background:white;
    }
    .hero-image { width:100%; max-width:400px; height:auto; display:block; transition:transform .3s ease; }
    .image-frame:hover .hero-image { transform:scale(1.05); }
    .image-glow {
      position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
      width:120%; height:120%;
      background:radial-gradient(circle,rgba(37,99,235,.15) 0%,transparent 70%);
      filter:blur(40px); border-radius:50%; z-index:0;
    }

    /* ════════════════════════════════════
       SECTION HEADER SHARED
    ════════════════════════════════════ */
    .section-header {
      text-align:center; max-width:700px;
      margin:0 auto 4rem;
      animation:fadeInUp .8s ease-out;
    }
    .section-sys-label {
      font-family:var(--font-mono); font-size:.68rem;
      color:var(--c-muted); letter-spacing:.15em; margin-bottom:1rem;
    }
    .section-title {
      font-family:var(--font-display);
      font-size:clamp(2rem,5vw,3rem); font-weight:900;
      margin-bottom:.9rem; letter-spacing:.08em;
      color:var(--c-text-1);
    }
    .section-title-glitch {
      color:var(--c-accent);
      text-shadow:0 0 20px var(--c-accent-glow);
      position:relative; animation:glitch 8s infinite;
    }
    .section-title-glitch::after {
      content:attr(data-text); position:absolute; left:0; top:0; width:100%;
      animation:glitch2 8s infinite;
    }
    .section-subtitle {
      font-family:var(--font-body); font-size:1.1rem;
      color:var(--c-text-2); line-height:1.6;
    }

    /* Shared HUD corners */
    .sc-corner,.tc-corner,.cta-btn-corner { position:absolute; width:9px; height:9px; pointer-events:none; }
    .sc-corner.tl,.tc-corner.tl,.cta-btn-corner.tl { top:-1px;    left:-1px;  border-top:2px solid var(--c-accent);   border-left:2px solid var(--c-accent); }
    .sc-corner.tr,.tc-corner.tr,.cta-btn-corner.tr { top:-1px;    right:-1px; border-top:2px solid var(--c-accent);   border-right:2px solid var(--c-accent); }
    .sc-corner.bl,.tc-corner.bl,.cta-btn-corner.bl { bottom:-1px; left:-1px;  border-bottom:2px solid var(--c-accent);border-left:2px solid var(--c-accent); }
    .sc-corner.br,.tc-corner.br,.cta-btn-corner.br { bottom:-1px; right:-1px; border-bottom:2px solid var(--c-accent);border-right:2px solid var(--c-accent); }

    /* ════════════════════════════════════
       SERVICES
    ════════════════════════════════════ */
    .services-section { padding:8rem 0; }
    .services-grid {
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));
      gap:1.5rem;
    }

    .service-card {
      background:var(--c-card-bg); backdrop-filter:blur(12px);
      border:1px solid var(--c-card-border); border-radius:4px;
      padding:2.25rem; position:relative; overflow:hidden;
      transition:all .3s ease; cursor:pointer;
      animation:hud-pulse 6s ease-in-out infinite;
    }
    .sc-top-bar {
      position:absolute; top:0; left:0; right:0; height:3px;
      animation:bar-slide .8s ease-out;
    }
    .service-card:hover {
      transform:translateY(-8px);
      border-color:rgba(96,165,250,.4);
      box-shadow:0 20px 40px rgba(0,0,0,.4), 0 0 20px rgba(96,165,250,.1);
    }

    .service-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; }
    .service-icon { font-size:2.5rem; transition:transform .3s ease; }
    .service-card:hover .service-icon { transform:scale(1.1) rotate(5deg); }
    .service-number {
      font-family:var(--font-display); font-size:3rem; font-weight:900;
      opacity:.08; color:white; letter-spacing:-.02em;
    }
    .service-title {
      font-family:var(--font-display); font-size:.9rem; font-weight:700;
      letter-spacing:.08em; color:var(--c-text-1); margin-bottom:.85rem;
    }
    .service-description {
      font-family:var(--font-body); font-size:.95rem;
      color:var(--c-text-2); line-height:1.65;
    }

    /* ════════════════════════════════════
       PROCESS
    ════════════════════════════════════ */
    .process-section { padding:8rem 0; }
    .process-content {
      display:grid; grid-template-columns:1fr 1fr;
      gap:4rem; align-items:center;
    }
    .process-steps { display:flex; flex-direction:column; gap:2.25rem; }
    .process-step {
      opacity:0; animation:fadeInUp .6s ease-out forwards;
    }
    .step-header { display:flex; align-items:center; gap:1rem; margin-bottom:.75rem; }
    .step-number {
      font-family:var(--font-display); font-size:.72rem; font-weight:700;
      width:38px; height:38px; border-radius:3px;
      display:flex; align-items:center; justify-content:center;
      color:white; letter-spacing:.05em;
    }
    .step-title {
      font-family:var(--font-display); font-size:.9rem; font-weight:700;
      color:var(--c-text-1); letter-spacing:.06em;
    }
    .step-description {
      font-family:var(--font-body); font-size:.9rem;
      color:var(--c-text-2); line-height:1.65; padding-left:3.25rem;
    }

    .process-visual { display:flex; justify-content:center; align-items:center; }
    .process-circle {
      position:relative; width:400px; height:400px;
      animation:rotate 20s linear infinite;
    }
    .circle-core {
      position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
      width:120px; height:120px;
      background:linear-gradient(135deg,var(--c-secondary),var(--c-accent));
      border-radius:4px;
      display:flex; align-items:center; justify-content:center;
      font-family:var(--font-display); font-weight:700; font-size:.65rem;
      letter-spacing:.08em; text-align:center; color:white;
      box-shadow:0 10px 30px rgba(37,99,235,.4);
    }
    .core-text { line-height:1.4; }
    .circle-orbit {
      position:absolute; border:1px dashed rgba(96,165,250,.15);
      border-radius:50%; animation:rotate 15s linear infinite reverse;
    }
    .orbit-1 { width:200px;height:200px; top:100px;left:100px; }
    .orbit-2 { width:280px;height:280px; top:60px;left:60px; }
    .orbit-3 { width:360px;height:360px; top:20px;left:20px; }
    .orbit-4 { width:400px;height:400px; top:0;left:0; }
    .orbit-item {
      position:absolute; top:50%; left:-18px; transform:translateY(-50%);
      width:36px; height:36px; background:var(--c-card-bg); border-radius:3px;
      display:flex; align-items:center; justify-content:center; font-size:1.1rem;
      border:1px solid var(--c-card-border); box-shadow:0 4px 12px rgba(0,0,0,.3);
    }

    /* ════════════════════════════════════
       CLIENTS / TESTIMONIALS
    ════════════════════════════════════ */
    .clients-section { padding:8rem 0; }

    .clients-grid {
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));
      gap:1.5rem;
    }

    .testimonial-card {
      background:var(--c-card-bg); backdrop-filter:blur(12px);
      border:1px solid var(--c-card-border); border-radius:4px;
      padding:2rem; position:relative; overflow:hidden;
      transition:all .3s ease;
      animation:fadeInUp .6s ease-out both, hud-pulse 7s ease-in-out infinite;
    }
    .tc-top-bar {
      position:absolute; top:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,var(--c-accent),var(--c-violet),transparent);
      transform:scaleX(0); transform-origin:left;
      transition:transform .4s ease;
    }
    .testimonial-card:hover .tc-top-bar { transform:scaleX(1); }
    .testimonial-card:hover {
      border-color:rgba(96,165,250,.4);
      transform:translateY(-5px);
      box-shadow:0 16px 40px rgba(0,0,0,.4), 0 0 18px rgba(96,165,250,.1);
    }

    .tc-quote-mark {
      font-size:2.5rem; line-height:1;
      color:var(--c-accent); opacity:.5;
      margin-bottom:.75rem;
    }

    .tc-feedback {
      font-family:var(--font-body); font-size:.95rem;
      color:var(--c-text-2); line-height:1.75;
      margin-bottom:1.25rem; font-style:italic;
    }

    .tc-sep {
      height:1px; margin-bottom:1.25rem;
      background:linear-gradient(90deg,rgba(96,165,250,.2),transparent);
    }

    .tc-author { display:flex; align-items:center; gap:.85rem; }

    .tc-avatar {
      width:44px; height:44px; border-radius:3px; flex-shrink:0;
      background:linear-gradient(135deg,var(--c-secondary),var(--c-accent));
      display:flex; align-items:center; justify-content:center;
      font-size:1.2rem;
      box-shadow:0 4px 12px rgba(37,99,235,.3);
      border:1px solid rgba(96,165,250,.2);
    }

    .tc-author-info { display:flex; flex-direction:column; gap:.2rem; }
    .tc-name {
      font-family:var(--font-display); font-size:.75rem; font-weight:700;
      color:var(--c-text-1); letter-spacing:.06em;
    }
    .tc-role {
      font-family:var(--font-mono); font-size:.65rem;
      color:var(--c-teal); letter-spacing:.04em; line-height:1.4;
    }

    /* ════════════════════════════════════
       CTA
    ════════════════════════════════════ */
    .cta-section {
      padding:8rem 0; position:relative;
      overflow:hidden;
    }
    .cta-background { position:absolute; inset:0; }
    .cta-glow {
      position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
      width:80%; height:80%;
      background:radial-gradient(circle,rgba(37,99,235,.12) 0%,transparent 70%);
      filter:blur(40px);
    }
    .cta-content {
      text-align:center; position:relative; z-index:2;
      max-width:600px; margin:0 auto;
    }
    .cta-title {
      font-family:var(--font-display);
      font-size:clamp(1.75rem,4vw,3rem); font-weight:900;
      margin-bottom:1.25rem; color:var(--c-text-1);
      letter-spacing:.05em; line-height:1.25;
    }
    .cta-description {
      font-family:var(--font-body); font-size:1.1rem;
      color:var(--c-text-2); line-height:1.6; margin-bottom:3rem;
    }
    .cta-actions {
      display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;
    }
    .btn-cta-primary {
      font-family:var(--font-display); font-size:.7rem; font-weight:700;
      letter-spacing:.15em;
      background:linear-gradient(135deg,var(--c-secondary),var(--c-accent));
      color:white; border:none;
      padding:1.1rem 2.25rem; border-radius:3px;
      cursor:pointer;
      display:inline-flex; align-items:center; gap:.6rem;
      transition:all .25s ease;
      box-shadow:0 10px 30px rgba(37,99,235,.4);
      position:relative;
    }
    .btn-cta-primary:hover {
      transform:translateY(-2px);
      box-shadow:0 15px 40px rgba(96,165,250,.45);
    }
    .btn-cta-secondary {
      font-family:var(--font-display); font-size:.7rem; font-weight:700;
      letter-spacing:.15em;
      background:rgba(96,165,250,.08);
      color:var(--c-text-1);
      border:1px solid var(--c-card-border);
      padding:1.1rem 2.25rem; border-radius:3px;
      cursor:pointer;
      display:inline-flex; align-items:center; gap:.6rem;
      transition:all .25s ease; position:relative;
    }
    .btn-cta-secondary:hover {
      background:rgba(96,165,250,.15);
      border-color:var(--c-accent);
      transform:translateY(-2px);
      box-shadow:0 0 14px var(--c-accent-glow);
    }

    /* ── CV Viewer (unchanged logic) ── */
    .cv-viewer {
      position:fixed; inset:0; z-index:1000;
      display:flex; align-items:center; justify-content:center;
      animation:fadeIn .3s ease; padding:60px 20px 20px;
    }
    .cv-overlay {
      position:absolute; inset:0;
      background:rgba(0,0,0,.85); backdrop-filter:blur(5px);
    }
    .cv-container {
      position:relative; width:90%; max-width:900px;
      height:calc(100vh - 140px); max-height:700px;
      background:#fff; border-radius:4px;
      box-shadow:0 20px 60px rgba(0,0,0,.6);
      overflow:hidden; z-index:1001;
      display:flex; flex-direction:column;
      animation:scaleIn .3s ease; margin-top:20px;
    }
    .close-btn {
      position:absolute; top:12px; right:12px;
      width:34px; height:34px; font-size:22px;
      background:rgba(255,255,255,.95); border:none; border-radius:50%;
      cursor:pointer; z-index:1003;
      display:flex; align-items:center; justify-content:center;
      transition:all .3s ease; box-shadow:0 2px 10px rgba(0,0,0,.2);
      color:#333; font-weight:300;
    }
    .close-btn:hover { background:#ff4444; color:white; transform:rotate(90deg) scale(1.1); }
    iframe { width:100%; height:calc(100% - 70px); border:none; background:#f5f5f5; flex:1; }
    .download-btn {
      display:flex; align-items:center; justify-content:center; gap:.5rem;
      width:100%; padding:16px 30px;
      background:linear-gradient(135deg,var(--c-secondary),var(--c-accent));
      color:white; text-decoration:none;
      font-family:var(--font-display); font-size:.72rem; font-weight:700;
      letter-spacing:.1em; cursor:pointer;
      transition:all .3s ease; border-radius:0 0 4px 4px;
    }
    .download-btn:hover { box-shadow:0 -4px 20px rgba(96,165,250,.3); }

    /* ── Scroll Top ── */
    .scroll-top {
      position:fixed; bottom:2rem; right:2rem;
      width:46px; height:46px;
      background:linear-gradient(135deg,var(--c-secondary),var(--c-accent));
      border:none; border-radius:3px;
      color:white; cursor:pointer;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 8px 25px rgba(37,99,235,.4);
      transition:all .3s ease;
      opacity:0; visibility:hidden; z-index:1000;
    }
    .scroll-top.visible { opacity:1; visibility:visible; }
    .scroll-top:hover { transform:translateY(-4px); box-shadow:0 12px 35px rgba(96,165,250,.5); }

    /* ── Process step animation delays ── */
    .process-step:nth-child(1) { animation-delay:.1s; }
    .process-step:nth-child(2) { animation-delay:.2s; }
    .process-step:nth-child(3) { animation-delay:.3s; }
    .process-step:nth-child(4) { animation-delay:.4s; }

    /* ════════════════════════════════════
       RESPONSIVE
    ════════════════════════════════════ */
    @media (max-width:1024px) {
      .process-content { grid-template-columns:1fr; gap:3rem; }
      .process-circle { width:300px; height:300px; }
      .circle-core  { width:100px; height:100px; font-size:.6rem; }
      .orbit-1 { width:150px;height:150px;top:75px;left:75px; }
      .orbit-2 { width:210px;height:210px;top:45px;left:45px; }
      .orbit-3 { width:270px;height:270px;top:15px;left:15px; }
      .orbit-4 { width:300px;height:300px;top:0;left:0; }
    }
    @media (max-width:768px) {
      .container { padding:0 1.5rem; }
      .hero-section { padding:4rem 0; }
      .hero-inner { padding:0 1rem; }
      .hero-grid { grid-template-columns:1fr 1fr; gap:1.5rem; min-height:auto; }
      .hero-title { font-size:1.5rem; }
      .hero-subtitle { font-size:.875rem; }
      .hero-badge { font-size:.55rem; }
      .btn-primary,.btn-secondary { padding:.7rem 1.25rem; font-size:.6rem; }
      .fc-text { font-size:.6rem; }
      .card-1 { top:5%;right:5%; } .card-2 { top:50%;left:5%; } .card-3 { bottom:15%;right:5%; }
      .hero-image { max-width:100%; width:100%; }
      .services-grid,.clients-grid { grid-template-columns:1fr; }
      .cta-title { font-size:1.75rem; }
      .cta-actions { flex-direction:column; align-items:center; }
      .btn-cta-primary,.btn-cta-secondary { width:100%; max-width:320px; justify-content:center; }
      .cv-viewer { padding:80px 10px 10px; }
      .cv-container { width:95%; height:calc(100vh - 100px); max-height:none; }
    }
    @media (max-width:480px) {
      .hero-grid { gap:1rem; }
      .hero-title { font-size:1.2rem; }
      .hero-subtitle { font-size:.75rem; }
      .hero-actions { flex-direction:column; gap:.5rem; }
      .btn-primary,.btn-secondary { width:100%; justify-content:center; }
      .services-grid { grid-template-columns:1fr; }
      .cv-viewer { padding:70px 5px 5px; }
      .cv-container { width:98%; height:calc(100vh - 80px); }
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  navigateToContact() { this.router.navigate(['/contact']); }
  navigateToProjects() { this.router.navigate(['/projects']); }

  config = APP_CONFIG;
  isScrolled = false;
  isCVVisible = false;

  showCV()  { this.isCVVisible = true; }
  closeCV() { this.isCVVisible = false; }

  services: Service[] = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces and memorable user experiences that engage and convert.',
      gradient: 'linear-gradient(135deg, #2563eb, #60a5fa)'
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Creating modern and responsive web applications with Angular, React and the latest technologies.',
      gradient: 'linear-gradient(135deg, #38bdf8, #3b82f6)'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Solid architecture and high-performance APIs to support your most demanding applications.',
      gradient: 'linear-gradient(135deg, #818cf8, #60a5fa)'
    },
    {
      icon: '📱',
      title: 'Web Applications',
      description: 'Development of modern and high-performance applications with Angular and NestJS.',
      gradient: 'linear-gradient(135deg, #7dd3fc, #2563eb)'
    },
    {
      icon: '🚀',
      title: 'SEO Optimization',
      description: 'Performance and SEO improvements to maximize your online visibility.',
      gradient: 'linear-gradient(135deg, #34d399, #38bdf8)'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Continuous support and proactive maintenance to ensure the sustainability of your projects.',
      gradient: 'linear-gradient(135deg, #818cf8, #2563eb)'
    }
  ];

  processSteps: ProcessStep[] = [
    { number:'01', icon:'🔍', title:'Discovery & Analysis',
      description:'In-depth understanding of your vision, needs analysis and goal definition.',
      color:'#2563eb' },
    { number:'02', icon:'🎨', title:'Design & Creation',
      description:'Creating interactive mockups and user experience-centered interface design.',
      color:'#38bdf8' },
    { number:'03', icon:'⚙️', title:'Development & Integration',
      description:'Robust development with best practices and feature integration.',
      color:'#818cf8' },
    { number:'04', icon:'🚀', title:'Testing & Delivery',
      description:'Rigorous testing, performance optimization and deployment with post-delivery monitoring.',
      color:'#34d399' }
  ];

  clients: Client[] = [
    {
      name: 'Oussema Yahya',
      logo: '🎓',
      role: "Student, Higher Institute of Management of Gabès (ISGG) — Bachelor's Degree Final Project",
      feedback: "Thank you for developing the Vroomstat project for my final project: compliant delivery, ergonomic interface and clear support until the defense."
    },
    {
      name: 'Grand Tennis Club of Gabès',
      logo: '🎾',
      role: "Sports Club — Client for master's thesis project",
      feedback: "TennisDreamer: professional work adapted to our context. The application facilitates club management, improves member engagement and perfectly meets expressed needs. Very satisfactory result."
    },
    {
      name: 'DigiLife',
      logo: '🏢',
      role: 'Agency — Internship (Project: B.A.M, e-commerce website)',
      feedback: "Excellent contribution to the B.A.M project: quality e-commerce website delivered, clean code, respect for deadlines and good understanding of digital issues."
    },
    {
      name: 'Nouiri Rayen',
      logo: '💻',
      role: 'Business Computing Student',
      feedback: "I had the pleasure of participating in the HelpTech hackathon supervised by Mohamed Ali Ben Jaber. He is a young, creative, passionate and talented trainer who knows how to share his web development knowledge with great pedagogy and energy. I strongly recommend working or learning with him."
    },
    {
      name: 'Takwa Nagga',
      logo: '🧑‍💻',
      role: 'Business Computing Student | MERN Stack | Python',
      feedback: "I had the pleasure of meeting Mohamed Ali at the last HelpTec workshop organized at ISG Gabès. As the technical expert at this event, he demonstrated impressive mastery of web development, particularly Angular. Beyond his undeniable technical skills, it is his pedagogy and human qualities that made the difference. He has an excellent ability to communicate complex concepts with clarity and patience. I strongly recommend him for any opportunity requiring both sharp technical expertise and strong interpersonal skills."
    },
    {
      name: 'Hadil Amari',
      logo: '🎓',
      role: 'Student at Institut Supérieur des Langues de Gabès (I.S.L)',
      feedback: "An excellent computer science teacher — very pedagogical, rigorous, and passionate about his profession. He stands out for his ability to explain concepts in a clear and structured way, while adapting to the level of his students. Always committed and attentive, he encourages analytical thinking, curiosity, and serious work. A true source of inspiration for his students, both academically and personally."
    }
  ];

  courses: Course[] = [
    { title:'Angular Expert',    platform:'Udemy',      icon:'🅰️', progress:100 },
    { title:'Node.js Advanced',  platform:'Pluralsight', icon:'📗', progress:90  }
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onWindowScroll() { this.isScrolled = window.scrollY > 300; }

  scrollToTop() { window.scrollTo({ top:0, behavior:'smooth' }); }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId) || document.querySelector('#' + sectionId);
    if (el) (el as HTMLElement).scrollIntoView({ behavior:'smooth' });
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && !img.src.includes('mohamedAli.jpg')) img.src = 'assets/images/mohamedAli.jpg';
  }
}