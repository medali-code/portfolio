import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Project } from '../../services/data.service';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDetailComponent],
  template: `
    <section style="padding:2.5rem 0;">
      <div style="max-width:1120px; margin:0 auto;">
        <h2 style="text-align:center; font-size:2rem; margin-bottom:1.25rem;">Personal Projects</h2>
        <div style="display:flex; flex-direction:column; gap:1.5rem;">
          <app-project-detail *ngFor="let p of projects" [project]="p"></app-project-detail>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private ds: DataService) {}
  ngOnInit(): void {
    this.ds.getProjects().subscribe(p => this.projects = p);
  }
}