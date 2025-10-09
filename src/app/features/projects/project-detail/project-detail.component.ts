import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../services/data.service';

@Component({
  selector: 'app-project-detail', 
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="card project-card">
      <div style="margin-bottom:.75rem;">
        <h3 style="color:#93c5fd; margin:0 0 .25rem 0; font-size:1.25rem;">{{ project.title }}</h3>
        <div style="color:var(--muted); font-size:.9rem; margin-bottom:.25rem;">{{ project.location }}</div>
        <div style="color:var(--muted); font-size:.9rem;">{{ project.period }}</div>
      </div>
      <p style="color:#dbeafe; line-height:1.6; margin-bottom:.75rem;">{{ project.description }}</p>
      <div style="margin:.75rem 0;">
        <span style="color:#86efac; font-size:.9rem; display:block; margin-bottom:.5rem;">Key Technologies:</span>
        <div style="display:flex; flex-wrap:wrap; gap:.4rem;">
          <span *ngFor="let t of project.tech" class="badge">{{t}}</span>
        </div>
      </div>
      <div style="color:#86efac; font-size:.95rem; display:flex; align-items:center; gap:.5rem; margin-top:.75rem;">
        ➜ <span>{{ project.impact }}</span>
      </div>
    </article>
  `
})
export class ProjectDetailComponent {   
  @Input() project!: Project;
}