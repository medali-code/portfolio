import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG } from '../../app.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="section-wrap">
      <div class="container">
        <h2 class="title">Me Contacter</h2>

        <div class="split">
          <!-- LEFT: Google Map -->
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3312.161817977122!2d10.0956429!3d33.8854861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556fc50590e317%3A0xf2b4d600b72eaa9f!2zMzI4IEF2LiBGYXJoYXQgSGFjaGFkIC0g2LTYp9ix2Lkg2YHYsdit2KfYqiDYrdi02KfYrywgR2Fiw6hz!5e0!3m2!1sfr!2stn!4v1759242614299!5m2!1sfr!2stn"
              title="Localisation"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <!-- RIGHT: Contact card -->
          <div class="card">
            <div class="card-inner">
              <div class="row">
                <div class="icon">✉</div>
                <div>
                  <div class="label">Email</div>
                  <a [href]="'mailto:' + config.email" class="value">{{ config.email }}</a>
                </div>
              </div>

              <div class="row">
                <div class="icon">📞</div>
                <div>
                  <div class="label">Téléphone</div>
                  <a [href]="'tel:' + config.phone" class="value">{{ config.phone }}</a>
                </div>
              </div>

              <div class="row">
                <div class="icon">📍</div>
                <div>
                  <div class="label">Localisation</div>
                  <div class="value">{{ config.location }}</div>
                </div>
              </div>

              <div class="row">
                <div class="icon">🐙</div>
                <div style="flex:1;">
                  <div class="label">GitHub</div>
                  <a [href]="config.github" target="_blank" class="value link">{{ config.github }}</a>
                </div>
              </div>

              <div class="row">
                <div class="icon">🔗</div>
                <div style="flex:1;">
                  <div class="label">LinkedIn</div>
                  <a [href]="config.linkedin" target="_blank" class="value link">{{ config.linkedin }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="form-section">
          <h3 class="form-title">Envoyez-moi un message</h3>
          
          <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Nom complet *</label>
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
                <label for="email">Email *</label>
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
              <label for="subject">Sujet *</label>
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
              <label for="message">Message *</label>
              <textarea 
                id="message" 
                name="message"
                [(ngModel)]="formData.message"
                required
                rows="6"
                placeholder="Écrivez votre message ici..."
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
              <span *ngIf="!isSubmitting">📧 Envoyer le message</span>
              <span *ngIf="isSubmitting">⏳ Envoi en cours...</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; color: #e6eef8; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
    .section-wrap { padding: 2.5rem 0; }
    .container { max-width: 960px; margin: 0 auto; padding: 0 1rem; }
    .title { text-align: center; font-size: 2rem; margin-bottom: 1.5rem; color: inherit; }

    .split { display: flex; gap: 1.25rem; align-items: flex-start; margin-bottom: 3rem; }
    .map {
      flex: 1;
      min-width: 280px;
      height: 450px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 6px 18px rgba(2,6,23,0.6);
      background: #0b1220;
    }
    .map iframe { width: 100%; height: 100%; display:block; border:0; }

    .card {
      flex: 1;
      min-width: 320px;
      background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 0 6px 18px rgba(2,6,23,0.6);
      display: flex;
      align-items: stretch;
    }
    .card-inner { display:flex; flex-direction:column; gap:1rem; width:100%; }

    .row { display:flex; gap:1rem; align-items:center; }
    .icon {
      width:48px; height:48px; border-radius:8px;
      background: rgba(37,99,235,0.12);
      display:flex; align-items:center; justify-content:center; font-size:1.25rem;
      flex-shrink: 0;
    }
    .label { color: var(--muted, #9aa6b6); font-size: .85rem; margin-bottom: .25rem; }
    .value { color: #e6eef8; text-decoration: none; font-size: 1rem; display:inline-block; word-break: break-all; }
    .link { text-decoration: none; }

    /* Form Styles */
    .form-section {
      background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 6px 18px rgba(2,6,23,0.6);
    }

    .form-title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      text-align: center;
      color: #e6eef8;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      color: #9aa6b6;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .form-input {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(59,130,246,0.2);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      color: #e6eef8;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
    }

    .form-input:focus {
      outline: none;
      border-color: rgba(59,130,246,0.5);
      background: rgba(255,255,255,0.08);
      box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
    }

    .form-input::placeholder {
      color: #9aa6b6;
      opacity: 0.6;
    }

    textarea.form-input {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 0.5rem;
    }

    .submit-btn:hover:not(:disabled) {
      background: linear-gradient(135deg, #1d4ed8, #1e40af);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(37,99,235,0.3);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .status-message {
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      font-weight: 500;
    }

    .status-message.success {
      background: rgba(34,197,94,0.15);
      color: #4ade80;
      border: 1px solid rgba(34,197,94,0.3);
    }

    .status-message.error {
      background: rgba(239,68,68,0.15);
      color: #f87171;
      border: 1px solid rgba(239,68,68,0.3);
    }

    /* Responsive */
    @media (max-width: 720px) {
      .split { flex-direction: column; }
      .map { height: 320px; }
      .card { min-width: auto; }
      .form-row { grid-template-columns: 1fr; }
      .form-section { padding: 1.5rem; }
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

    // Construction du lien mailto
    const mailtoLink = `mailto:mohamedalibenjaber205@gmail.com?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(
      `Nom: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    )}`;

    // Ouvrir le client email
    window.location.href = mailtoLink;

    // Réinitialiser le formulaire après un court délai
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitStatus = 'success';
      this.statusMessage = '✅ Votre client email a été ouvert. Merci de votre message !';
      
      // Réinitialiser le formulaire
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        this.submitStatus = null;
      }, 5000);
    }, 500);
  }
}