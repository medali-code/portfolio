import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="competences-section">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <h1 class="main-title">Skills</h1>
          <p class="subtitle">A comprehensive overview of my technical and soft skills</p>
        </div>

        <!-- Technical Skills -->
        <div class="skills-category">
          <div class="category-header">
            <div class="icon-wrapper frameworks-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h2 class="category-title">Technologies & Tools</h2>
          </div>
          
          <div class="skills-grid">
            <div class="skill-card frameworks">
              <div class="card-header">
                <svg class="card-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <h3 class="skill-type">Frameworks</h3>
              </div>
              <div class="skills-list">
                <span *ngFor="let s of skills.frameworks" class="skill-badge framework">
                  <span class="badge-text">{{s}}</span>
                </span>
              </div>
            </div>

            <div class="skill-card languages">
              <div class="card-header">
                <svg class="card-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                <h3 class="skill-type">Languages</h3>
              </div>
              <div class="skills-list">
                <span *ngFor="let s of skills.languages" class="skill-badge language">
                  <span class="badge-text">{{s}}</span>
                </span>
              </div>
            </div>

            <div class="skill-card databases">
              <div class="card-header">
                <svg class="card-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
                <h3 class="skill-type">Databases</h3>
              </div>
              <div class="skills-list">
                <span *ngFor="let s of skills.databases" class="skill-badge database">
                  <span class="badge-text">{{s}}</span>
                </span>
              </div>
            </div>

            <div class="skill-card tools">
              <div class="card-header">
                <svg class="card-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <h3 class="skill-type">Tools</h3>
              </div>
              <div class="skills-list">
                <span *ngFor="let s of skills.tools" class="skill-badge tool">
                  <span class="badge-text">{{s}}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="skills-category">
          <div class="category-header">
            <div class="icon-wrapper soft-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h2 class="category-title">Soft Skills</h2>
          </div>
          
          <div class="soft-skills-grid">
            <div *ngFor="let skill of softSkills" class="soft-skill-card">
              <div class="soft-skill-icon">✓</div>
              <span class="soft-skill-text">{{skill}}</span>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="skills-category">
          <div class="category-header">
            <div class="icon-wrapper languages-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h2 class="category-title">Languages</h2>
          </div>
          
          <div class="languages-grid">
            <div *ngFor="let lang of languages" class="language-card">
              <div class="language-header">
                <h3 class="language-name">{{lang.name}}</h3>
                <div class="language-badge">{{lang.level}}</div>
              </div>
              <p *ngIf="lang.details" class="language-details">{{lang.details}}</p>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="skills-category">
          <div class="category-header">
            <div class="icon-wrapper certifications-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h2 class="category-title">Certifications</h2>
          </div>
          
          <div class="certifications-grid">
            <div *ngFor="let cert of certifications" class="certification-card">
              <div class="cert-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <h3 class="certification-title">{{cert.title}}</h3>
              <p class="certification-org">{{cert.organization}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
     :host {
      display: block;
      --primary: #6366f1;
      --primary-dark: #4f46e5;
      --text-primary: #f8fafc;
      --text-secondary: #cbd5e1;
      --text-muted: #64748b;
      --background: #0f172a;
      --card-bg: rgba(30, 41, 59, 0.5);
      --card-border: rgba(255, 255, 255, 0.08);
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Main Section */
    .competences-section {
      min-height: 100vh;
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    /* Header */
    .section-header {
      text-align: center;
      margin-bottom: 5rem;
      position: relative;
      animation: fadeInUp 0.8s ease-out;
    }

    .header-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
      filter: blur(60px);
      animation: pulse 4s ease-in-out infinite;
    }

    .main-title {
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .title-word {
      display: inline-block;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }

    .gradient-text {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 200% auto;
      animation: float 3s ease-in-out infinite;
    }

    .subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.7;
      position: relative;
    }

    /* Category */
    .skills-category {
      margin-bottom: 5rem;
      animation: fadeInUp 0.8s ease-out;
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .icon-wrapper {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      position: relative;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .icon-wrapper:hover {
      transform: scale(1.1) rotate(5deg);
    }

    .icon-glow {
      position: absolute;
      inset: -10px;
      border-radius: 20px;
      filter: blur(20px);
      opacity: 0.4;
      z-index: -1;
    }

    .frameworks-icon {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
    }

    .frameworks-glow {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
    }

    .soft-icon {
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
    }

    .soft-glow {
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
    }

    .languages-icon {
      background: linear-gradient(135deg, #f472b6, #d946ef);
    }

    .languages-glow {
      background: linear-gradient(135deg, #f472b6, #d946ef);
    }

    .certifications-icon {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
    }

    .certifications-glow {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
    }

    .category-info {
      flex: 1;
    }

    .category-title {
      font-size: 2.25rem;
      font-weight: 800;
      color: var(--text-primary);
      margin: 0 0 0.25rem 0;
      letter-spacing: -0.02em;
    }

    .category-desc {
      color: var(--text-secondary);
      font-size: 1rem;
      margin: 0;
    }

    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .skill-card {
      background: var(--card-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--card-border);
      border-radius: 24px;
      padding: 2.5rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      animation: fadeInUp 0.6s ease-out;
      animation-fill-mode: both;
    }

    .card-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 200px;
      opacity: 0;
      filter: blur(40px);
      transition: opacity 0.4s ease;
      pointer-events: none;
    }

    .skill-card:hover .card-glow {
      opacity: 0.3;
    }

    .languages-glow {
      background: linear-gradient(180deg, #10b981 0%, transparent 100%);
    }

    .databases-glow {
      background: linear-gradient(180deg, #8b5cf6 0%, transparent 100%);
    }

    .tools-glow {
      background: linear-gradient(180deg, #f97316 0%, transparent 100%);
    }

    .skill-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--gradient-color), transparent);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .skill-card:hover::before {
      opacity: 1;
    }

    .skill-card.frameworks::before {
      --gradient-color: #6366f1;
    }

    .skill-card.languages::before {
      --gradient-color: #10b981;
    }

    .skill-card.databases::before {
      --gradient-color: #8b5cf6;
    }

    .skill-card.tools::before {
      --gradient-color: #f97316;
    }

    .skill-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
      border-color: rgba(99, 102, 241, 0.4);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      position: relative;
    }

    .card-icon {
      color: var(--text-secondary);
      opacity: 0.8;
      transition: all 0.3s ease;
    }

    .skill-card:hover .card-icon {
      opacity: 1;
      transform: scale(1.1);
    }

    .skill-type {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
      flex: 1;
    }

    .skill-count {
      font-size: 0.875rem;
      padding: 0.375rem 0.75rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      color: var(--text-secondary);
      font-weight: 600;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-badge {
      padding: 0.75rem 1.25rem;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 600;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: fadeInUp 0.4s ease-out;
      animation-fill-mode: both;
    }

    .badge-icon {
      font-size: 1rem;
      transition: transform 0.3s ease;
    }

    .skill-badge:hover .badge-icon {
      transform: scale(1.2) rotate(10deg);
    }

    .skill-badge::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.6s;
    }

    .skill-badge:hover::before {
      left: 100%;
    }

    .skill-badge:hover {
      transform: translateY(-3px) scale(1.05);
    }

    .framework {
      background: rgba(99, 102, 241, 0.12);
      color: #c7d2fe;
      border: 1.5px solid rgba(99, 102, 241, 0.25);
    }

    .framework:hover {
      background: rgba(99, 102, 241, 0.25);
      border-color: #6366f1;
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
    }

    .language {
      background: rgba(16, 185, 129, 0.12);
      color: #86efac;
      border: 1.5px solid rgba(16, 185, 129, 0.25);
    }

    .language:hover {
      background: rgba(16, 185, 129, 0.25);
      border-color: #10b981;
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
    }

    .database {
      background: rgba(139, 92, 246, 0.12);
      color: #d8b4fe;
      border: 1.5px solid rgba(139, 92, 246, 0.25);
    }

    .database:hover {
      background: rgba(139, 92, 246, 0.25);
      border-color: #8b5cf6;
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
    }

    .tool {
      background: rgba(249, 115, 22, 0.12);
      color: #fdba74;
      border: 1.5px solid rgba(249, 115, 22, 0.25);
    }

    .tool:hover {
      background: rgba(249, 115, 22, 0.25);
      border-color: #f97316;
      box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);
    }

    .badge-text {
      position: relative;
      z-index: 1;
    }

    /* Soft Skills */
    .soft-skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
    }

    .soft-skill-card {
      background: var(--card-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1.5rem 1.75rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      animation: fadeInUp 0.5s ease-out;
      animation-fill-mode: both;
    }

    .skill-shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      transition: left 0.6s;
    }

    .soft-skill-card:hover .skill-shine {
      left: 100%;
    }

    .soft-skill-card:hover {
      transform: translateX(10px);
      border-color: rgba(6, 182, 212, 0.6);
      background: rgba(30, 41, 59, 0.8);
      box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
    }

    .soft-skill-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
      flex-shrink: 0;
      box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
      transition: transform 0.3s ease;
    }

    .soft-skill-card:hover .soft-skill-icon {
      transform: scale(1.1) rotate(5deg);
    }

    .soft-skill-text {
      color: var(--text-primary);
      font-size: 1.05rem;
      font-weight: 600;
    }

    /* Languages */
    .languages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .language-card {
      background: var(--card-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 2.5rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      animation: fadeInUp 0.6s ease-out;
      animation-fill-mode: both;
    }

    .language-decoration {
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(244, 114, 182, 0.15) 0%, transparent 70%);
      border-radius: 50%;
      transition: all 0.4s ease;
    }

    .language-card:hover .language-decoration {
      top: -30%;
      right: -30%;
      width: 250px;
      height: 250px;
    }

    .language-card:hover {
      transform: translateY(-8px);
      border-color: rgba(244, 114, 182, 0.5);
      box-shadow: 0 20px 50px rgba(244, 114, 182, 0.3);
    }

    .language-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .language-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }

    .language-badge {
      padding: 0.5rem 1rem;
      background: linear-gradient(135deg, #f472b6, #d946ef);
      border-radius: 25px;
      font-size: 0.875rem;
      font-weight: 600;
      color: white;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 15px rgba(244, 114, 182, 0.4);
    }

    .badge-dot {
      width: 6px;
      height: 6px;
      background: white;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }

    .language-details {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0;
    }

    /* Certifications */
    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .certification-card {
      background: var(--card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .certification-card:hover {
      transform: translateY(-8px) scale(1.02);
      border-color: rgba(245, 158, 11, 0.5);
      box-shadow: 0 15px 40px rgba(245, 158, 11, 0.25);
    }

    .cert-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 1.5rem;
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
    }

    .certification-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.75rem 0;
    }

    .certification-org {
      color: var(--text-secondary);
      font-size: 1rem;
      font-weight: 500;
      margin: 0;
    }

    /* Responsive */
    @media (max-width: 1199px) {
      .container {
        max-width: 1140px;
      }

      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 1023px) {
      .container {
        padding: 0 1.5rem;
      }

      .competences-section {
        padding: 5rem 0;
      }
    }

    @media (max-width: 767px) {
      .competences-section {
        padding: 4rem 0;
      }

      .main-title {
        font-size: 2.25rem;
      }

      .subtitle {
        font-size: 1.05rem;
      }

      .category-title {
        font-size: 1.5rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .soft-skills-grid {
        grid-template-columns: 1fr;
      }

      .languages-grid,
      .certifications-grid {
        grid-template-columns: 1fr;
      }

      .skill-card {
        padding: 1.5rem;
      }
    }

    @media (max-width: 479px) {
      .container {
        padding: 0 1rem;
      }

      .competences-section {
        padding: 3rem 0;
      }

      .main-title {
        font-size: 2rem;
      }

      .category-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }

      .skill-card {
        padding: 1.25rem;
      }

      .card-header {
        flex-direction: column;
        align-items: flex-start;
      }
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