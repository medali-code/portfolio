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
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <h1 class="main-title">Contactez-moi</h1>
          <p class="subtitle">Discutons de votre projet et créons quelque chose d'extraordinaire ensemble</p>
        </div>

        <!-- Main Content Grid -->
        <div class="content-grid">
          <!-- Left Side: Contact Info Cards -->
          <div class="info-cards">
            <div class="info-card">
              <div class="card-icon email-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="card-content">
                <h3 class="card-title">Email</h3>
                <a [href]="'mailto:' + config.email" class="card-value">{{ config.email }}</a>
              </div>
            </div>

            <div class="info-card">
              <div class="card-icon phone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div class="card-content">
                <h3 class="card-title">Téléphone</h3>
                <a [href]="'tel:' + config.phone" class="card-value">{{ config.phone }}</a>
              </div>
            </div>

            <div class="info-card">
              <div class="card-icon location-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="card-content">
                <h3 class="card-title">Localisation</h3>
                <p class="card-value">{{ config.location }}</p>
              </div>
            </div>

            <div class="social-links">
              <a [href]="config.github" target="_blank" class="social-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a [href]="config.linkedin" target="_blank" class="social-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <!-- Map Card -->
            <div class="map-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3312.161817977122!2d10.0956429!3d33.8854861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556fc50590e317%3A0xf2b4d600b72eaa9f!2zMzI4IEF2LiBGYXJoYXQgSGFjaGFkIC0g2LTYp9ix2Lkg2YHYsdit2KfYqiDYrdi02KfYrywgR2Fiw6hz!5e0!3m2!1sfr!2stn!4v1759242614299!5m2!1sfr!2stn"
                title="Localisation"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <!-- Right Side: Contact Form -->
          <div class="form-card">
            <div class="form-header">
              <h2 class="form-title">Envoyez un message</h2>
              <p class="form-subtitle">Je vous répondrai dans les plus brefs délais</p>
            </div>

            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    Nom complet
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    placeholder="Votre nom"
                    class="form-input"
                  />
                </div>

                <div class="form-group">
                  <label for="email">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    email
                    placeholder="votre.email@exemple.com"
                    class="form-input"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="subject">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Sujet
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  placeholder="Sujet de votre message"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="message">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="6"
                  placeholder="Décrivez votre projet ou posez votre question..."
                  class="form-input"
                ></textarea>
              </div>

              <div *ngIf="submitStatus" class="status-message" [class.success]="submitStatus === 'success'" [class.error]="submitStatus === 'error'">
                {{ statusMessage }}
              </div>

              <button 
                type="submit" 
                class="submit-btn"
                [disabled]="!contactForm.valid || isSubmitting"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                <span *ngIf="!isSubmitting">Envoyer le message</span>
                <span *ngIf="isSubmitting">Envoi en cours...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Variables */
    :host {
      display: block;
      --primary: #6366f1;
      --primary-dark: #4f46e5;
      --text-primary: #f8fafc;
      --text-secondary: #cbd5e1;
      --text-muted: #64748b;
      --background: #0f172a;
      --card-bg: rgba(30, 41, 59, 0.6);
      --card-border: rgba(255, 255, 255, 0.1);
    }

    /* Main Section */
    .contact-section {
      min-height: 100vh;
      padding: 6rem 0;
      position: relative;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Header */
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .main-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    /* Content Grid */
    .content-grid {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 2rem;
      align-items: start;
    }

    /* Info Cards */
    .info-cards {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: sticky;
      top: 100px;
    }

    .info-card {
      background: var(--card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1.5rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .info-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
      border-color: rgba(99, 102, 241, 0.3);
    }

    .card-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .email-icon {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
    }

    .phone-icon {
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
      box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3);
    }

    .location-icon {
      background: linear-gradient(135deg, #f472b6, #d946ef);
      box-shadow: 0 8px 20px rgba(244, 114, 182, 0.3);
    }

    .card-icon svg {
      color: white;
    }

    .card-content {
      flex: 1;
    }

    .card-title {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .card-value {
      font-size: 1rem;
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      display: block;
      transition: color 0.3s ease;
    }

    a.card-value:hover {
      color: var(--primary);
    }

    /* Social Links */
    .social-links {
      display: flex;
      gap: 0.75rem;
      padding: 1rem;
    }

    .social-link {
      width: 44px;
      height: 44px;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .social-link:hover {
      background: linear-gradient(135deg, var(--primary), #8b5cf6);
      border-color: var(--primary);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
    }

    /* Map Card */
    .map-card {
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid var(--card-border);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .map-card iframe {
      display: block;
      width: 100%;
    }

    /* Form Card */
    .form-card {
      background: var(--card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }

    .form-header {
      margin-bottom: 2rem;
    }

    .form-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .form-subtitle {
      color: var(--text-secondary);
      font-size: 1rem;
    }

    /* Form Styles */
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      color: var(--text-secondary);
      font-size: 0.9rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .form-group label svg {
      opacity: 0.6;
    }

    .form-input {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 12px;
      padding: 0.875rem 1.125rem;
      color: var(--text-primary);
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .form-input:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(15, 23, 42, 0.8);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    }

    .form-input::placeholder {
      color: var(--text-muted);
    }

    textarea.form-input {
      resize: vertical;
      min-height: 140px;
      font-family: inherit;
    }

    /* Submit Button */
    .submit-btn {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      border: none;
      border-radius: 12px;
      padding: 1.125rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      margin-top: 0.5rem;
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
      position: relative;
      overflow: hidden;
    }

    .submit-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s;
    }

    .submit-btn:hover:not(:disabled)::before {
      left: 100%;
    }

    .submit-btn:hover:not(:disabled) {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(99, 102, 241, 0.4);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Status Message */
    .status-message {
      padding: 1rem 1.25rem;
      border-radius: 12px;
      text-align: center;
      font-weight: 500;
      animation: slideDown 0.3s ease;
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

    .status-message.success {
      background: rgba(34, 197, 94, 0.15);
      color: #4ade80;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }

    .status-message.error {
      background: rgba(239, 68, 68, 0.15);
      color: #f87171;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }

    /* Responsive Design */
    @media (max-width: 1199px) {
      .content-grid {
        grid-template-columns: 350px 1fr;
      }
    }

    @media (max-width: 1023px) {
      .content-grid {
        grid-template-columns: 1fr;
      }

      .info-cards {
        position: static;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      .map-card {
        grid-column: 1 / -1;
      }

      .social-links {
        grid-column: 1 / -1;
        justify-content: center;
      }
    }

    @media (max-width: 767px) {
      .contact-section {
        padding: 4rem 0;
      }

      .container {
        padding: 0 1.5rem;
      }

      .main-title {
        font-size: 2.25rem;
      }

      .subtitle {
        font-size: 1.05rem;
      }

      .section-header {
        margin-bottom: 3rem;
      }

      .info-cards {
        grid-template-columns: 1fr;
      }

      .map-card iframe {
        height: 250px;
      }

      .form-card {
        padding: 2rem;
      }

      .form-title {
        font-size: 1.75rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 479px) {
      .contact-section {
        padding: 3rem 0;
      }

      .container {
        padding: 0 1rem;
      }

      .main-title {
        font-size: 2rem;
      }

      .form-card {
        padding: 1.5rem;
      }

      .info-card {
        padding: 1.25rem;
      }

      .card-icon {
        width: 44px;
        height: 44px;
      }

      .social-link {
        width: 40px;
        height: 40px;
      }

      .submit-btn {
        padding: 1rem 1.75rem;
      }
    }
  `]
})
export class ContactComponent {
  config = APP_CONFIG;
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;
  statusMessage = '';

  onSubmit() {
    this.isSubmitting = true;
    this.submitStatus = null;

    const mailtoLink = `mailto:mohamedalibenjaber205@gmail.com?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(
      `Nom: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      this.isSubmitting = false;
      this.submitStatus = 'success';
      this.statusMessage = 'Votre client email a été ouvert. Merci de votre message !';
      
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        this.submitStatus = null;
      }, 5000);
    }, 500);
  }
}