import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
export const APP_CONFIG = {
  name: 'Mohamed Ali Ben Jaber',
  title: 'Développeur Full-Stack',
  email: 'mohamedalibenjaber205@gmail.com',
  phone: '+216 29 148 881',
  github: 'https://github.com/medali-code',
  linkedin: 'https://www.linkedin.com/in/mohamedali-benjaber',
  location: 'Gabès, Tunisie',
  profileImage: 'assets/images/mohamedAli.jpg'

};