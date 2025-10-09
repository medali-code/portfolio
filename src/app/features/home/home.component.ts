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

      <!-- hero-inner: centered content but full-width background -->
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-grid">
            <div class="hero-text">
              <div class="badge" role="status" aria-live="polite">
                <span class="badge-icon" aria-hidden="true">🚀</span>
                <span>Available for new projects</span>
              </div>
              <h1 class="hero-title">
                Creator of<br>
                Exceptional<br>
                <span class="text-white">Digital Experiences</span>
              </h1>
              <p class="hero-subtitle">
                I'm <strong>{{config.name}}</strong>, Full-Stack Developer & UI/UX Designer based in {{config.location}}. 
                I transform ideas into elegant and high-performing digital interfaces.
              </p>
              
              <div class="hero-actions">
                <button class="btn-primary" [routerLink]="['/projects']" aria-label="View my projects">
                  <span>View My Projects</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                <button class="btn-secondary" [routerLink]="['/contact']" aria-label="Contact me">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                  <span>Let's Talk</span>
                </button>
              </div>
            </div>
            
            <div class="hero-visual" aria-hidden="false">
              <div class="floating-card card-1" aria-hidden="true">
                <div class="card-icon" aria-hidden="true">⚡</div>
                <div class="card-text">Performance</div>
              </div>
              <div class="floating-card card-2" aria-hidden="true">
                <div class="card-icon" aria-hidden="true">🎨</div>
                <div class="card-text">Design</div>
              </div>
              <div class="floating-card card-3" aria-hidden="true">
                <div class="card-icon" aria-hidden="true">🔒</div>
                <div class="card-text">Security</div>
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
          <h2 class="section-title">My Services</h2>
          <p class="section-subtitle">
            Tailor-made solutions to transform your vision into digital reality
          </p>
        </div>

        <div class="services-grid">
          <div class="service-card" 
               *ngFor="let service of services" 
               [style.background]="service.gradient"
               role="article"
               [attr.aria-label]="service.title">
            <div class="service-header">
              <div class="service-icon" aria-hidden="true">{{service.icon}}</div>
              <div class="service-number">0{{services.indexOf(service) + 1}}</div>
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
            <h2 class="section-title">My Creative Process</h2>
            <p class="section-subtitle">
              A methodical approach to ensure excellence at every stage of your project
            </p>
            <br>
            <div class="process-steps">
              <div class="process-step" *ngFor="let step of processSteps">
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
              <div class="circle-orbit orbit-1">
                <div class="orbit-item">🎯</div>
              </div>
              <div class="circle-orbit orbit-2">
                <div class="orbit-item">🎨</div>
              </div>
              <div class="circle-orbit orbit-3">
                <div class="orbit-item">⚡</div>
              </div>
              <div class="circle-orbit orbit-4">
                <div class="orbit-item">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section id="clients" class="clients-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">They Trust Me</h2>
          <p class="section-subtitle">
            Collaborations that exceed expectations
          </p>
        </div>

        <div class="clients-showcase">
          <div class="client-testimonial" *ngFor="let client of clients" role="article" [attr.aria-label]="client.name">
            <div class="testimonial-content">
              <div class="quote-icon" aria-hidden="true">❝</div>
              <p class="testimonial-text">"{{client.feedback}}"</p>
              <div class="client-info">
                <div class="client-avatar" aria-hidden="true">{{client.logo}}</div>
                <div class="client-details">
                  <div class="client-name">{{client.name}}</div>
                  <div class="client-role">{{client.role}}</div>
                </div>
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
          <h2 class="cta-title">Ready to bring your project to life?</h2>
          <p class="cta-description">
            Let's discuss your vision and create something extraordinary together
          </p>
          <div class="cta-actions">
            <button 
              class="btn-cta-primary" 
              (click)="navigateToContact()" 
              aria-label="Start a project">
              <span>Start a Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
            <button 
              class="btn-cta-secondary" 
              aria-label="View my resume"
              (click)="showCV()"
            >
              <span>View My Resume</span>
            </button>

            <!-- Modal or section to display CV -->
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
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" [class.visible]="isScrolled" (click)="scrollToTop()" aria-label="Scroll to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  `,
  styles: [`
    :root {
      --primary: #6366f1;
      --primary-dark: #4f46e5;
      --secondary: #f472b6;
      --accent: #06b6d4;
      --text-primary: #f8fafc;
      --text-secondary: #cbd5e1;
      --text-muted: #64748b;
      --background: #0f172a;
      --card-bg: rgba(30, 41, 59, 0.6);
      --card-border: rgba(255, 255, 255, 0.1);
      --gradient-1: linear-gradient(135deg, #6366f1, #8b5cf6);
      --gradient-2: linear-gradient(135deg, #06b6d4, #3b82f6);
      --gradient-3: linear-gradient(135deg, #f472b6, #d946ef);
      --gradient-4: linear-gradient(135deg, #f59e0b, #ef4444);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--background);
      color: var(--text-primary);
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      overflow-x: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
      
    .cv-viewer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.3s ease;
      padding: 60px 20px 20px 20px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .cv-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(5px);
    }

    .cv-container {
      position: relative;
      width: 90%;
      max-width: 900px;
      height: calc(100vh - 140px);
      max-height: 700px;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      z-index: 1001;
      display: flex;
      flex-direction: column;
      animation: scaleIn 0.3s ease;
      margin-top: 20px;
    }

    @keyframes scaleIn {
      from {
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 36px;
      height: 36px;
      font-size: 24px;
      background: rgba(255, 255, 255, 0.95);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1003;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      color: #333;
      font-weight: 300;
      line-height: 1;
    }

    .close-btn:hover {
      background: #ff4444;
      color: white;
      transform: rotate(90deg) scale(1.1);
      box-shadow: 0 4px 15px rgba(255, 68, 68, 0.4);
    }

    iframe {
      width: 100%;
      height: calc(100% - 70px);
      border: none;
      background: #f5f5f5;
      flex: 1;
    }

    .download-btn {
      position: relative;
      width: 100%;
      padding: 16px 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border: none;
      font-weight: 600;
      font-size: 15px;
      z-index: 1002;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      border-radius: 0 0 16px 16px;
    }

    .download-btn:hover {
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
      box-shadow: 0 -4px 20px rgba(102, 126, 234, 0.4);
    }

    .download-btn::before {
      content: "⬇";
      font-size: 18px;
    }

    /* HERO: full-width background while content remains centered */
    .hero-section {
      position: relative;
      width: 100vw;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-top: -3rem;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
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

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }

    .floating-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      opacity: 0.1;
      animation: float 20s infinite ease-in-out;
    }

    .shape-1 {
      width: 300px;
      height: 300px;
      top: 10%;
      left: 5%;
      animation-delay: 0s;
    }

    .shape-2 {
      width: 200px;
      height: 200px;
      top: 60%;
      right: 10%;
      animation-delay: -5s;
      background: var(--gradient-3);
    }

    .shape-3 {
      width: 150px;
      height: 150px;
      bottom: 20%;
      left: 20%;
      animation-delay: -10s;
      background: var(--gradient-4);
    }

    .shape-4 {
      width: 100px;
      height: 100px;
      top: 20%;
      right: 20%;
      animation-delay: -15s;
    }

    .gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
      z-index: 1;
    }

    .hero-content {
      animation: fadeInUp 1s ease-out;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      min-height: calc(100vh - 8rem);
    }

    .hero-text {
      animation: fadeInUp 1s ease-out 0.2s backwards;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: var(--text-primary);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.875rem;
      margin-bottom: 2rem;
      backdrop-filter: blur(10px);
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--primary), var(--accent), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: var(--gradient-1);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
      position: relative;
      overflow: hidden;
    }

    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s;
    }

    .btn-primary:hover::before {
      left: 100%;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(99, 102, 241, 0.4);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: var(--text-primary);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 1rem 2rem;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }

    .hero-visual {
      position: relative;
      animation: fadeInUp 1s ease-out 0.4s backwards;
    }

    .floating-card {
      position: absolute;
      background: var(--card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      animation: float 6s ease-in-out infinite;
      z-index: 3;
    }

    .card-1 {
      top: 20%;
      right: 10%;
      animation-delay: 0s;
    }

    .card-2 {
      top: 55%;
      left: 8%;
      animation-delay: -2s;
    }

    .card-3 {
      bottom: 30%;
      right: 5%;
      animation-delay: -4s;
    }

    .hero-image-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-frame {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      z-index: 1;
      background: white;
    }

    .hero-image {
      width: 100%;
      max-width: 400px;
      height: auto;
      display: block;
      transition: transform 0.3s ease;
    }

    .image-frame:hover .hero-image {
      transform: scale(1.05);
    }

    .image-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120%;
      height: 120%;
      background: var(--gradient-1);
      opacity: 0.1;
      filter: blur(40px);
      border-radius: 50%;
      z-index: 0;
    }

    /* Services Section */
    .services-section {
      padding: 8rem 0;
      background: linear-gradient(180deg, var(--background) 0%, rgba(15, 23, 42, 0.8) 100%);
    }

    .section-header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 4rem;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: var(--card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 2.5rem;
      position: relative;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: inherit;
    }

    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    .service-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .service-icon {
      font-size: 3rem;
      transition: transform 0.3s ease;
    }

    .service-card:hover .service-icon {
      transform: scale(1.1) rotate(5deg);
    }

    .service-number {
      font-size: 4rem;
      font-weight: 800;
      opacity: 0.1;
      color: white;
    }

    .service-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .service-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    /* Process Section */
    .process-section {
      padding: 8rem 0;
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, var(--background) 100%);
    }

    .process-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .process-steps {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    .process-step {
      opacity: 0;
      animation: fadeInUp 0.6s ease-out forwards;
    }

    .process-step:nth-child(1) { animation-delay: 0.1s; }
    .process-step:nth-child(2) { animation-delay: 0.2s; }
    .process-step:nth-child(3) { animation-delay: 0.3s; }
    .process-step:nth-child(4) { animation-delay: 0.4s; }

    .step-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .step-number {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
      font-size: 0.875rem;
    }

    .step-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .step-description {
      color: var(--text-secondary);
      line-height: 1.6;
      padding-left: 3.5rem;
    }

    .process-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .process-circle {
      position: relative;
      width: 400px;
      height: 400px;
      animation: rotate 20s linear infinite;
    }

    .circle-core {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background: var(--gradient-1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.75rem;
      text-align: center;
      color: white;
      box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
    }

    .circle-orbit {
      position: absolute;
      border: 2px dashed rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      animation: rotate 15s linear infinite reverse;
    }

    .orbit-1 { width: 200px; height: 200px; top: 100px; left: 100px; }
    .orbit-2 { width: 280px; height: 280px; top: 60px; left: 60px; }
    .orbit-3 { width: 360px; height: 360px; top: 20px; left: 20px; }
    .orbit-4 { width: 400px; height: 400px; top: 0; left: 0; }

    .orbit-item {
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background: var(--card-bg);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      border: 1px solid var(--card-border);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    /* Clients Section */
    .clients-section {
      padding: 8rem 0;
      background: linear-gradient(180deg, var(--background) 0%, rgba(15, 23, 42, 0.9) 100%);
    }

    .clients-showcase {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .client-testimonial {
      background: var(--card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 2.5rem;
      transition: all 0.3s ease;
    }

    .client-testimonial:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    }

    .quote-icon {
      font-size: 3rem;
      color: var(--primary);
      margin-bottom: 1rem;
      opacity: 0.7;
    }

    .testimonial-text {
      font-size: 1.125rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
      font-style: italic;
    }

    .client-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .client-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--gradient-1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }

    .client-details {
      display: flex;
      flex-direction: column;
    }

    .client-name {
      font-weight: 700;
      color: var(--text-primary);
    }

    .client-role {
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    /* CTA Section */
    .cta-section {
      padding: 8rem 0;
      position: relative;
      background: linear-gradient(135deg, var(--background) 0%, #1e293b 100%);
      overflow: hidden;
    }

    .cta-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .cta-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
      filter: blur(40px);
    }

    .cta-content {
      text-align: center;
      position: relative;
      z-index: 2;
      max-width: 600px;
      margin: 0 auto;
    }

    .cta-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .cta-description {
      font-size: 1.25rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 3rem;
    }

    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-cta-primary {
      background: var(--gradient-1);
      color: white;
      border: none;
      padding: 1.25rem 2.5rem;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
    }

    .btn-cta-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(99, 102, 241, 0.5);
    }

    .btn-cta-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: var(--text-primary);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 1.25rem 2.5rem;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .btn-cta-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }

    /* Scroll to Top Button */
    .scroll-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      background: var(--gradient-1);
      border: none;
      border-radius: 12px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      visibility: hidden;
      z-index: 1000;
    }

    .scroll-top.visible {
      opacity: 1;
      visibility: visible;
    }

    .scroll-top:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 35px rgba(99, 102, 241, 0.5);
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
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      33% {
        transform: translateY(-20px) rotate(5deg);
      }
      66% {
        transform: translateY(10px) rotate(-5deg);
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-grid,
      .process-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .process-circle {
        width: 300px;
        height: 300px;
      }

      .circle-core {
        width: 100px;
        height: 100px;
        font-size: 0.7rem;
      }

      .orbit-1 { width: 150px; height: 150px; top: 75px; left: 75px; }
      .orbit-2 { width: 210px; height: 210px; top: 45px; left: 45px; }
      .orbit-3 { width: 270px; height: 270px; top: 15px; left: 15px; }
      .orbit-4 { width: 300px; height: 300px; top: 0; left: 0; }
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 1.5rem;
      }

      .hero-section {
        width: 100%;
        left: 0;
        margin-left: 0;
        margin-right: 0;
        padding: 6rem 0;
      }

      .hero-inner {
        padding: 0 1.5rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.125rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .services-grid,
      .clients-showcase {
        grid-template-columns: 1fr;
      }

      .service-card,
      .client-testimonial {
        padding: 2rem;
      }

      .cta-title {
        font-size: 2rem;
      }

      .cta-actions {
        flex-direction: column;
        align-items: center;
      }

      .btn-cta-primary,
      .btn-cta-secondary {
        width: 100%;
        max-width: 300px;
        justify-content: center;
      }

      .floating-card {
        display: none;
      }

      .scroll-top {
        bottom: 1.5rem;
        right: 1.5rem;
        width: 45px;
        height: 45px;
      }

      .cv-viewer {
        padding: 80px 10px 10px 10px;
      }
      
      .cv-container {
        width: 95%;
        height: calc(100vh - 100px);
        max-height: none;
        border-radius: 12px;
        margin-top: 0;
      }
      
      .close-btn {
        width: 32px;
        height: 32px;
        font-size: 20px;
      }
      
      iframe {
        height: calc(100% - 60px);
      }
      
      .download-btn {
        padding: 14px 20px;
        font-size: 14px;
        border-radius: 0 0 12px 12px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.75rem;
      }

      .section-title {
        font-size: 1.75rem;
      }

      .hero-actions {
        flex-direction: column;
      }

      .btn-primary,
      .btn-secondary {
        width: 100%;
        justify-content: center;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .service-card {
        padding: 1.5rem;
      }

      .cv-viewer {
        padding: 70px 5px 5px 5px;
      }
      
      .cv-container {
        width: 98%;
        height: calc(100vh - 80px);
        border-radius: 8px;
      }
      
      .download-btn {
        border-radius: 0 0 8px 8px;
        padding: 12px 20px;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  config = APP_CONFIG;
  isScrolled = false;
  isCVVisible = false;

  showCV() {
    this.isCVVisible = true;
  }

  closeCV() {
    this.isCVVisible = false;
  }

  services: Service[] = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces and memorable user experiences that engage and convert.',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Creating modern and responsive web applications with Angular, React and the latest technologies.',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Solid architecture and high-performance APIs to support your most demanding applications.',
      gradient: 'linear-gradient(135deg, #f472b6, #d946ef)'
    },
    {
      icon: '📱',
      title: 'Web Applications',
      description: 'Development of modern and high-performance applications with Angular and NestJS',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
    },
    {
      icon: '🚀',
      title: 'SEO Optimization',
      description: 'Performance and SEO improvements to maximize your online visibility.',
      gradient: 'linear-gradient(135deg, #10b981, #059669)'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Continuous support and proactive maintenance to ensure the sustainability of your projects.',
      gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)'
    }
  ];

  processSteps: ProcessStep[] = [
    {
      number: '01',
      icon: '🔍',
      title: 'Discovery & Analysis',
      description: 'In-depth understanding of your vision, needs analysis and goal definition.',
      color: '#6366f1'
    },
    {
      number: '02',
      icon: '🎨',
      title: 'Design & Creation',
      description: 'Creating interactive mockups and user experience-centered interface design.',
      color: '#06b6d4'
    },
    {
      number: '03',
      icon: '⚙️',
      title: 'Development & Integration',
      description: 'Robust development with best practices and feature integration.',
      color: '#f472b6'
    },
    {
      number: '04',
      title: 'Testing & Delivery',
      icon: '🚀',
      description: 'Rigorous testing, performance optimization and deployment with post-delivery monitoring.',
      color: '#f59e0b'
    }
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
      role: 'Sports Club — Client for master\'s thesis project',
      feedback: "TennisDreamer: professional work adapted to our context. The application facilitates club management, improves member engagement and perfectly meets expressed needs. Very satisfactory result."
    },
    {
      name: 'DigiLife',
      logo: '🏢',
      role: 'Agency — Internship (Project: B.A.M, e-commerce website)',
      feedback: "Excellent contribution to the B.A.M project: quality e-commerce website delivered, clean code, respect for deadlines and good understanding of digital issues."
    }
  ];

  courses: Course[] = [
    {
      title: 'Angular Expert',
      platform: 'Udemy',
      icon: '🅰️',
      progress: 100
    },
    {
      title: 'Node.js Advanced',
      platform: 'Pluralsight',
      icon: '📗',
      progress: 90
    }
  ];

  ngOnInit() {
    // Initialization logic
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId) || document.querySelector('#' + sectionId);
    if (element) {
      (element as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && !img.src.includes('mohamedAli.jpg')) {
      img.src = 'assets/images/mohamedAli.jpg';
    }
  }
}