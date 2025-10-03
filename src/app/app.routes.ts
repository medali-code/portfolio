import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
      { path: 'projects', loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent) },
      { path: 'experience', loadComponent: () => import('./features/experience/experience.component').then(m => m.ExperienceComponent) },
      { path: 'competences', loadComponent: () => import('./features/competences/competences.component').then(m => m.CompetencesComponent) },
      { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
