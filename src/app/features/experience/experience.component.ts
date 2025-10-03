import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Experience } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding:2.5rem 0;">
      <div style="max-width:1000px; margin:0 auto;">
        <h2 style="text-align:center; font-size:2rem; margin-bottom:1.5rem;">Expériences Professionnelles</h2>
        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          <div *ngFor="let e of experiences" class="card">
            <div style="margin-bottom:.75rem;">
              <h3 style="margin:0 0 .25rem 0; color:#93c5fd;">{{e.title}}</h3>
              <div style="color:#93c5fd; font-size:1rem; margin-bottom:.25rem;">{{e.company}}, {{e.location}}</div>
              <div style="color:var(--muted); font-size:.9rem;">{{e.period}}</div>
            </div>
            <ul style="padding-left:1.25rem; margin:0; color:#dbeafe; line-height:1.6;">
              <li *ngFor="let t of e.tasks" style="margin-bottom:.5rem;">{{t}}</li>
            </ul>
          </div>
        </div>

        <div style="margin-top:2rem;">
          <h2 style="text-align:center; font-size:2rem; margin-bottom:1rem;">Parcours Académique</h2>
          <div class="card">
            <div style="display:flex; flex-direction:column; gap:1.25rem;">
              <div *ngFor="let edu of education">
                <div style="color:#93c5fd; font-weight:600; margin-bottom:.25rem;">{{edu.degree}}</div>
                <div style="color:#dbeafe; margin-bottom:.25rem;">{{edu.institution}}</div>
                <div style="color:var(--muted); font-size:.9rem;">{{edu.period}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  education: any[] = [];
  
  constructor(private ds: DataService) {}
  
  ngOnInit(): void { 
    this.ds.getExperiences().subscribe(e => this.experiences = e);
    this.ds.getEducation().subscribe(edu => this.education = edu);
  }
}
