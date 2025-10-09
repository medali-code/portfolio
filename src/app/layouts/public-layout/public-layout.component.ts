import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONFIG } from '../../app.config';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="header">
      <div class="inner">
         <a class="brand" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
  <div class="logo">MA</div>
  <div>
    <div style="font-weight:700">{{ config.name }}</div>
    <div style="font-size:.85rem; color:var(--muted)">{{ config.title }}</div>
  </div>
</a>


        <div class="nav-desktop">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
          <a routerLink="/projects" routerLinkActive="active">Projects</a>
          <a routerLink="/experience" routerLinkActive="active">Experience</a>
          <a routerLink="/competences" routerLinkActive="active">Skills</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </div>

        <button class="menu-btn" (click)="mobileOpen = !mobileOpen">{{ mobileOpen ? '✕' : '☰' }}</button>
      </div>

      <div *ngIf="mobileOpen" class="mobile-menu">
        <a routerLink="/" (click)="mobileOpen=false" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Accueil</a>
        <a routerLink="/projects" (click)="mobileOpen=false" routerLinkActive="active">Projets</a>
        <a routerLink="/experience" (click)="mobileOpen=false" routerLinkActive="active">Expérience</a>
        <a routerLink="/competences" (click)="mobileOpen=false" routerLinkActive="active">Compétences</a>
        <a routerLink="/contact" (click)="mobileOpen=false" routerLinkActive="active">Contact</a>
      </div>
    </nav>

    <main class="container">
      <router-outlet></router-outlet>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-main">
            <div class="footer-brand">
              <h3 class="footer-logo">Mohamed Ali</h3>
              <p class="footer-description">
              Passionate Full-Stack Developer creating exceptional web experiences              </p>
            </div>

            <div class="footer-links">
              <h4 class="footer-title">Contact</h4>
              <p class="footer-info">📍 {{config.location}}</p>
              <p class="footer-info">📧 {{config.email}}</p>
              <p class="footer-info">📞 {{config.phone}}</p>
            </div>

            <div class="footer-social">
              <h4 class="footer-title">Réseaux Sociaux</h4>
              <div class="social-links">
                <a [href]="config.linkedin" target="_blank" class="social-link" title="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a [href]="config.github" target="_blank" class="social-link" title="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/mohamedalibjr/" target="_blank" class="social-link" title="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/mohamedali.benjaber.161" target="_blank" class="social-link" title="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="footer-copyright">
              © {{currentYear}} {{config.name}}. All rights reserve.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
  padding-top: 0;
  margin-top: 0;
  flex: 1;
}

    /* ==================== HEADER / NAVBAR ==================== */
    .header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(7, 16, 45, 0.85);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(99, 102, 241, 0.15);
      padding: 0.875rem 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .header::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
      opacity: 0.5;
    }

    .inner {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .brand:hover {
      transform: translateY(-2px);
    }

    .logo {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.2rem;
      color: white;
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .logo::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transform: rotate(45deg);
      animation: shimmer 3s infinite;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
      }
      100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
      }
    }

    .brand:hover .logo {
      transform: scale(1.05) rotate(-5deg);
      box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
    }

    .nav-desktop {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      background: rgba(30, 41, 59, 0.4);
      padding: 0.5rem;
      border-radius: 12px;
      border: 1px solid rgba(99, 102, 241, 0.1);
    }

    .nav-desktop a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      padding: 0.65rem 1.25rem;
      border-radius: 8px;
      overflow: hidden;
    }

    .nav-desktop a::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 8px;
    }

    .nav-desktop a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
      transition: width 0.3s ease;
    }

    .nav-desktop a:hover::before {
      opacity: 1;
    }

    .nav-desktop a:hover {
      color: var(--text-primary);
      transform: translateY(-1px);
    }

    .nav-desktop a:hover::after {
      width: 70%;
    }

    .nav-desktop a.active {
      color: var(--text-primary);
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
      box-shadow: 0 2px 10px rgba(99, 102, 241, 0.2);
    }

    .nav-desktop a.active::after {
      width: 70%;
    }

    .menu-btn {
      display: none;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: var(--text-primary);
      padding: 0.75rem 1rem;
      border-radius: 10px;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .menu-btn::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      background: rgba(99, 102, 241, 0.2);
      border-radius: 50%;
      transition: width 0.3s ease, height 0.3s ease;
    }

    .menu-btn:hover::before {
      width: 200%;
      height: 200%;
    }

    .menu-btn:hover {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
      border-color: #6366f1;
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    }

    .mobile-menu {
      display: none;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem 0;
      margin-top: 1rem;
      border-top: 1px solid rgba(99, 102, 241, 0.2);
      animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mobile-menu a {
      color: var(--text-secondary);
      text-decoration: none;
      padding: 1rem 1.25rem;
      border-radius: 10px;
      font-weight: 500;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
      border: 1px solid transparent;
      position: relative;
      overflow: hidden;
    }

    .mobile-menu a::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #6366f1, #8b5cf6);
      transform: scaleY(0);
      transition: transform 0.3s ease;
    }

    .mobile-menu a:hover::before,
    .mobile-menu a.active::before {
      transform: scaleY(1);
    }

    .mobile-menu a:hover,
    .mobile-menu a.active {
      color: var(--text-primary);
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
      border-color: rgba(99, 102, 241, 0.3);
      transform: translateX(8px);
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ==================== FOOTER ==================== */
    .footer {
      background: linear-gradient(180deg, rgba(7, 16, 45, 0.9) 0%, rgba(7, 16, 45, 1) 100%);
      border-top: 1px solid rgba(59, 130, 246, 0.2);
      padding: 4rem 2rem 2rem;
      margin-top: 10rem;
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: 0;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 2rem;
    }

    .footer-brand {
      max-width: 400px;
    }

    .footer-logo {
      font-size: 1.75rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #60a5fa, #3b82f6, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-description {
      color: var(--text-secondary);
      line-height: 1.8;
      font-size: 0.95rem;
    }

    .footer-title {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .footer-info {
      color: var(--text-secondary);
      margin-bottom: 0.75rem;
      line-height: 1.8;
      font-size: 0.95rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }

    .social-link {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 10px;
      color: var(--text-primary);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .social-link:hover {
      background: linear-gradient(135deg, var(--accent), #1d4ed8);
      border-color: var(--accent);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(37, 99, 235, 0.4);
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      text-align: center;
      margin-top: 1rem;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    .footer-copyright {
      color: var(--muted);
      font-size: 0.9rem;
      letter-spacing: 0.3px;
      margin: 0;
      padding: 0;
    }

    /* ==================== RESPONSIVE DESIGN ==================== */
    
    /* Large Desktop (1440px+) */
    @media (min-width: 1440px) {
      .footer-content {
        max-width: 1400px;
      }

      .footer-main {
        gap: 4rem;
      }

      .footer-logo {
        font-size: 2rem;
      }

      .footer-description,
      .footer-info {
        font-size: 1rem;
      }
    }

    /* Desktop (1200px - 1439px) */
    @media (min-width: 1200px) and (max-width: 1439px) {
      .footer-content {
        max-width: 1140px;
      }
    }

    /* Tablet Landscape (1024px - 1199px) */
    @media (max-width: 1199px) {
      .inner {
        max-width: 960px;
      }

      .nav-desktop {
        gap: 1.5rem;
      }

      .nav-desktop a {
        font-size: 0.9rem;
      }

      .footer-content {
        max-width: 960px;
      }

      .footer-main {
        gap: 2.5rem;
      }
    }

    /* Tablet (768px - 1023px) */
    @media (max-width: 1023px) {
      .header {
        padding: 1rem 1.5rem;
      }

      .inner {
        max-width: 720px;
      }

      .nav-desktop {
        gap: 1.25rem;
      }

      .logo {
        width: 44px;
        height: 44px;
        font-size: 1.1rem;
      }

      .footer-content {
        max-width: 720px;
        padding: 0 1.5rem;
      }

      .footer {
        padding: 3.5rem 1.5rem 2rem;
        margin-top: 8rem;
      }

      .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }

      .footer-brand {
        grid-column: 1 / -1;
        max-width: 100%;
      }

      .footer-logo {
        font-size: 1.6rem;
      }

      .social-link {
        width: 40px;
        height: 40px;
      }
    }

    /* Mobile Landscape / Small Tablet (640px - 767px) */
    @media (max-width: 767px) {
      .nav-desktop {
        display: none;
      }

      .menu-btn {
        display: block;
      }

      .mobile-menu {
        display: flex;
      }

      .header {
        padding: 0.75rem 1.25rem;
      }

      .logo {
        width: 40px;
        height: 40px;
        font-size: 1rem;
      }

      .brand > div > div:first-child {
        font-size: 0.95rem;
      }

      .brand > div > div:last-child {
        font-size: 0.75rem;
      }

      .footer {
        padding: 3rem 1.5rem 1.5rem;
        margin-top: 6rem;
      }

      .footer-main {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
      }

      .footer-brand {
        max-width: 100%;
      }

      .footer-logo {
        font-size: 1.5rem;
      }

      .footer-description,
      .footer-info {
        font-size: 0.92rem;
      }

      .social-links {
        justify-content: center;
      }

      .footer-title {
        font-size: 1rem;
      }
    }

    /* Mobile Portrait (480px - 639px) */
    @media (max-width: 639px) {
      .header {
        padding: 0.75rem 1rem;
      }

      .brand {
        gap: 0.75rem;
      }

      .logo {
        width: 38px;
        height: 38px;
        font-size: 0.95rem;
        border-radius: 10px;
      }

      .brand > div > div:first-child {
        font-size: 0.9rem;
      }

      .brand > div > div:last-child {
        font-size: 0.7rem;
      }

      .menu-btn {
        padding: 0.6rem 0.85rem;
        font-size: 1.3rem;
      }

      .mobile-menu {
        padding: 1rem 0;
        gap: 0.4rem;
      }

      .mobile-menu a {
        padding: 0.85rem;
        font-size: 0.9rem;
      }

      .footer {
        padding: 2.5rem 1.25rem 1.5rem;
        margin-top: 5rem;
      }

      .footer-main {
        gap: 2rem;
      }

      .footer-logo {
        font-size: 1.4rem;
      }

      .footer-description,
      .footer-info {
        font-size: 0.88rem;
      }

      .social-link {
        width: 38px;
        height: 38px;
      }

      .social-link svg {
        width: 18px;
        height: 18px;
      }
    }

    /* Small Mobile (320px - 479px) */
    @media (max-width: 479px) {
      .header {
        padding: 0.65rem 0.85rem;
      }

      .brand {
        gap: 0.6rem;
      }

      .logo {
        width: 36px;
        height: 36px;
        font-size: 0.9rem;
        border-radius: 8px;
      }

      .brand > div > div:first-child {
        font-size: 0.85rem;
      }

      .brand > div > div:last-child {
        font-size: 0.65rem;
      }

      .menu-btn {
        padding: 0.5rem 0.75rem;
        font-size: 1.2rem;
      }

      .mobile-menu {
        padding: 0.75rem 0;
        gap: 0.35rem;
      }

      .mobile-menu a {
        padding: 0.75rem;
        font-size: 0.85rem;
      }

      .footer {
        padding: 2rem 1rem 1rem;
        margin-top: 4rem;
      }

      .footer-main {
        gap: 1.5rem;
      }

      .footer-logo {
        font-size: 1.3rem;
      }

      .footer-description,
      .footer-info {
        font-size: 0.85rem;
        line-height: 1.6;
      }

      .footer-title {
        font-size: 0.95rem;
      }

      .social-link {
        width: 36px;
        height: 36px;
      }

      .social-link svg {
        width: 16px;
        height: 16px;
      }

      .footer-copyright {
        font-size: 0.8rem;
      }

      .footer-bottom {
        padding-top: 1.5rem;
      }
    }

    /* Extra Small Mobile (< 320px) */
    @media (max-width: 319px) {
      .header {
        padding: 0.5rem 0.65rem;
      }

      .brand {
        gap: 0.5rem;
      }

      .logo {
        width: 32px;
        height: 32px;
        font-size: 0.8rem;
        border-radius: 6px;
      }

      .brand > div > div:first-child {
        font-size: 0.8rem;
      }

      .brand > div > div:last-child {
        font-size: 0.6rem;
      }

      .menu-btn {
        padding: 0.4rem 0.65rem;
        font-size: 1.1rem;
      }

      .mobile-menu a {
        padding: 0.65rem;
        font-size: 0.8rem;
      }

      .footer {
        padding: 1.5rem 0.75rem 1rem;
        margin-top: 3rem;
      }

      .footer-main {
        gap: 1.25rem;
      }

      .footer-logo {
        font-size: 1.2rem;
      }

      .footer-description,
      .footer-info {
        font-size: 0.8rem;
      }

      .footer-title {
        font-size: 0.9rem;
      }

      .social-links {
        gap: 0.75rem;
      }

      .social-link {
        width: 34px;
        height: 34px;
      }

      .social-link svg {
        width: 15px;
        height: 15px;
      }

      .footer-copyright {
        font-size: 0.75rem;
      }
    }
  `]
})
export class PublicLayoutComponent {
  config = APP_CONFIG;
  mobileOpen = false;
  currentYear = new Date().getFullYear();
}