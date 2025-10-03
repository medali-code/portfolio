import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="competences-section">
      <div class="full-width-container">
        <h2 class="section-title">Compétences</h2>
        
        <!-- Compétences Techniques -->
        <div class="skills-category">
          <h3 class="category-title">Technologies et Outils</h3>
          <div class="skills-grid">
            <div class="skill-card">
              <h4 class="skill-type">Frameworks</h4>
              <div class="skills-list">
                <span *ngFor="let s of skills.frameworks" class="skill-badge framework">{{s}}</span>
              </div>
            </div>
            <div class="skill-card">
              <h4 class="skill-type">Langages</h4>
              <div class="skills-list">
                <span *ngFor="let s of skills.languages" class="skill-badge language">{{s}}</span>
              </div>
            </div>
            <div class="skill-card">
              <h4 class="skill-type">Bases de données</h4>
              <div class="skills-list">
                <span *ngFor="let s of skills.databases" class="skill-badge database">{{s}}</span>
              </div>
            </div>
            <div class="skill-card">
              <h4 class="skill-type">Outils</h4>
              <div class="skills-list">
                <span *ngFor="let s of skills.tools" class="skill-badge tool">{{s}}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Compétences Transversales -->
        <div class="skills-category">
          <h3 class="category-title">Compétences Transversales</h3>
          <div class="soft-skills-card">
            <ul class="soft-skills-list">
              <li *ngFor="let skill of softSkills" class="soft-skill-item">{{skill}}</li>
            </ul>
          </div>
        </div>

        <!-- Langues -->
        <div class="skills-category">
          <h3 class="category-title">Langues</h3>
          <div class="languages-grid">
            <div *ngFor="let lang of languages" class="language-card">
              <h4 class="language-name">{{lang.name}}</h4>
              <div class="language-level">{{lang.level}}</div>
              <div *ngIf="lang.details" class="language-details">{{lang.details}}</div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="skills-category">
          <h3 class="category-title">Certifications</h3>
          <div class="certifications-grid">
            <div *ngFor="let cert of certifications" class="certification-card">
              <h4 class="certification-title">{{cert.title}}</h4>
              <div class="certification-org">{{cert.organization}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .competences-section {
      padding: 4rem 0;
      min-height: 100vh;
      width: 100vw;
      margin-left: calc(-50vw + 50%);
      margin-right: calc(-50vw + 50%);
    }

    .full-width-container {
      width: 100%;
      max-width: none;
      margin: 0;
      padding: 0 2rem;
      box-sizing: border-box;
    }

    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 3rem;
      
      background-clip: text;
      font-weight: 700;
    }

    .skills-category {
      margin-bottom: 3rem;
      width: 100%;
    }

    .category-title {
      color: #93c5fd;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      border-left: 4px solid #60a5fa;
      padding-left: 1rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
      width: 100%;
    }

    .skill-card {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .skill-card:hover {
      transform: translateY(-5px);
      border-color: #60a5fa;
      box-shadow: 0 10px 25px rgba(96, 165, 250, 0.2);
    }

    .skill-type {
      color: #93c5fd;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-badge {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .skill-badge:hover {
      transform: scale(1.05);
    }

    .framework {
      background: rgba(96, 165, 250, 0.15);
      color: #93c5fd;
      border: 1px solid #60a5fa;
    }

    .language {
      background: rgba(16, 185, 129, 0.15);
      color: #86efac;
      border: 1px solid #10b981;
    }

    .database {
      background: rgba(139, 92, 246, 0.15);
      color: #d6bcfa;
      border: 1px solid #8b5cf6;
    }

    .tool {
      background: rgba(249, 115, 22, 0.15);
      color: #ffd8b5;
      border: 1px solid #f97316;
    }

    .soft-skills-card {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 2rem;
      backdrop-filter: blur(10px);
      width: 100%;
    }

    .soft-skills-list {
      padding-left: 1.5rem;
      margin: 0;
      color: #e2e8f0;
      line-height: 1.8;
    }

    .soft-skill-item {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    .soft-skill-item::marker {
      color: #60a5fa;
    }

    .languages-grid, .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      width: 100%;
    }

    .language-card, .certification-card {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .language-card:hover, .certification-card:hover {
      transform: translateY(-3px);
      border-color: #60a5fa;
      box-shadow: 0 8px 20px rgba(96, 165, 250, 0.15);
    }

    .language-name, .certification-title {
      color: #93c5fd;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .language-level {
      color: #e2e8f0;
      margin-bottom: 0.25rem;
      font-weight: 500;
    }

    .language-details {
      color: #94a3b8;
      font-size: 0.9rem;
    }

    .certification-org {
      color: #e2e8f0;
      font-size: 1rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .full-width-container {
        padding: 0 1rem;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .languages-grid, .certifications-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .competences-section {
        padding: 2rem 0;
      }

      .section-title {
        font-size: 2rem;
      }

      .category-title {
        font-size: 1.5rem;
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