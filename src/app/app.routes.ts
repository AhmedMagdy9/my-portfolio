import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { Projects } from './shared/Reusbale-compnent/projects/projects';
import { Experience } from './shared/Reusbale-compnent/experience/experience';
import { Skills } from './shared/Reusbale-compnent/skills/skills';
import { Testimonal } from './shared/Reusbale-compnent/testimonal/testimonal';
import { Footer } from './features/pages/footer/footer';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:Home , title: 'Home' },
  { path: 'projects', component:Projects , title: 'Projects' },
  { path: 'experience', component:Experience  , title: 'Experience' },
  { path: 'skills', component:Skills , title: 'Skills' },
  { path: 'testimonial', component:Testimonal , title: 'Testimonial' },
  { path: 'contact', component: Footer , title: 'Contact' },
  { path: '**', redirectTo: 'home' }
];
