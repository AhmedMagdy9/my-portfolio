import { Injectable, signal, WritableSignal } from '@angular/core';
import { Project } from '../../../shared/interfaces/project-face';
import { Skill } from '../../../shared/interfaces/skill-face';

@Injectable({
  providedIn: 'root',
})
export class Shared {

    projects:WritableSignal<Project[]> = signal([
    {
      title: 'Fresh Cart',
      img: '/img/e-comerce.png',
      live: 'https://e-commerce-7mjh.vercel.app/#/home',
      code: 'https://github.com/AhmedMagdy9/E-commerce-',
      details: 'Modern e-commerce web app with secure login and registration, smooth shopping cart, and seamless user experience.',
      features: [ 'Angular', 'Tailwind', 'Database',  ]
    },
    {
      title: 'its skin',
      img: '/img/itsSkin.png',
      live: 'https://its-skin-e-com.vercel.app/home',
      code: 'https://github.com/AhmedMagdy9/its-skin-E-com',
      details: '"Skincare store web app with product catalog, cart system, and an interactive dashboard for managing sales and orders.',
      features: [ 'Angular', 'Tailwind', 'firebase',  ]
    },
    {
      title: 'Karam ElSham',
      img: '/img/karamElsham.png',
      live: 'https://karm-elsham.vercel.app/#/home',
      code: 'https://github.com/AhmedMagdy9/Karm-elsham',
      details: 'Restaurant website for Karam ElSham featuring menu showcase, online orders, and a smooth user-friendly interface.',
      features: [ 'Angular', 'Tailwind', 'firebase',  ]
    },
    {
      title: 'Movie Vault',
      img: '/img/Moviefev.png',
      live: 'https://movie-crud-woad.vercel.app/home',
      code: 'https://github.com/AhmedMagdy9/Movie-crud',
      details: 'Personal movie library app to save your favorite films and revisit them anytime with ease.',
      features: [ 'Angular', 'Tailwind', 'SASS',  ]
    },
    {
      title: 'Movie Night',
      img: '/img/movies.png',
      live: 'https://movie-bice-gamma.vercel.app/popular',
      code: 'https://github.com/AhmedMagdy9/movie',
      details: 'Website showcasing real movies with detailed info and easy browsing for film enthusiasts',
      features: [ 'Angular', 'Tailwind', 'Database',  ]

    },
    {
      title: 'Quiz App',
      img: '/img/quiesapp.png',
      live: 'https://ahmedmagdy9.github.io/Quiz-App/',
      code: 'https://github.com/AhmedMagdy9/Quiz-App',
      details: 'Interactive quiz platform to test your knowledge with multiple-choice questions and instant feedback.',
      features: [ 'javaScript', 'bootstrap', 'Database',  ]
    },
    {
      title: 'Book Mark ',
      img: '/img/bookmark.png',
      live: 'https://ahmedmagdy9.github.io/bookmark/',
      code: 'https://github.com/AhmedMagdy9/bookmark',
      details: 'Web app to save and organize your favorite links for quick access anytime.',
      features: [ 'javaScript', 'bootstrap',   ]
    },
    {
      title: 'Weather APP ',
      img: '/img/Weather.png',
      live: 'https://ahmedmagdy9.github.io/ass-js2/',
      code: 'https://github.com/AhmedMagdy9/ass-js2',
      details: 'Real-time weather forecast app to check current conditions and upcoming forecasts easily.',
      features: [ 'javaScript', 'bootstrap', 'Database'   ] 
    }]);

  allskills:WritableSignal<Skill[]> = signal<Skill[]>( [
   { 
    name: 'HTML5',
    abbr: 'HT',
    Ocolors: { from: 'from-orange-500', to: 'to-yellow-500' },
    Tcolors: { Obg: 'bg-orange-500/10', bg: 'group-hover:bg-orange-500', border: 'border-orange-500/20' },
    Thcolors: 'bg-orange-500',
    level: '95%'
  },
  { 
    name: 'CSS',
    abbr: 'CS',
    Ocolors: { from: 'from-sky-500', to: 'to-blue-400' },
    Tcolors: { Obg: 'bg-sky-500/10', bg: 'group-hover:bg-sky-500', border: 'border-sky-500/20' },
    Thcolors: 'bg-sky-500',
    level: '90%'
  },
  { 
    name: 'JavaScript',
    abbr: 'JS',
    Ocolors: { from: 'from-blue-500', to: 'to-cyan-500' },
    Tcolors: { Obg: 'bg-blue-500/10', bg: 'group-hover:bg-blue-500', border: 'border-blue-500/20' },
    Thcolors: 'bg-blue-500',
    level: '90%'
  },
    { 
    name: 'TypeScript',
    abbr: 'TS',
    Ocolors: { from: 'from-sky-500', to: 'to-blue-800' },
    Tcolors: { Obg: 'bg-sky-800/10', bg: 'group-hover:bg-sky-800', border: 'border-sky-800/20' },
    Thcolors: 'bg-sky-800',
    level: '85%'
  },
    { 
    name: 'Angular',
    abbr: 'NG',
    Ocolors: { from: 'from-red-500', to: 'to-rose-500' },
    Tcolors: { Obg: 'bg-red-500/10', bg: 'group-hover:bg-red-500', border: 'border-red-500/20' },
    Thcolors: 'bg-red-500',
    level: '85%'
  },
  { 
    name: 'Tailwind',
    abbr: 'TW',
    Ocolors: { from: 'from-cyan-500', to: 'to-teal-400' },
    Tcolors: { Obg: 'bg-cyan-500/10', bg: 'group-hover:bg-cyan-500', border: 'border-cyan-500/20' },
    Thcolors: 'bg-cyan-500',
    level: '95%'
  },
  { 
    name: 'RxJS',
    abbr: 'RX',
    Ocolors: { from: 'from-purple-500', to: 'to-fuchsia-500' },
    Tcolors: { Obg: 'bg-purple-500/10', bg: 'group-hover:bg-purple-500', border: 'border-purple-500/20' },
    Thcolors: 'bg-purple-500',
    level: '80%'
  },
  { 
    name: 'Firebase',
    abbr: 'FB',
    Ocolors: { from: 'from-yellow-500', to: 'to-amber-500' },
    Tcolors: { Obg: 'bg-yellow-500/10', bg: 'group-hover:bg-yellow-500', border: 'border-yellow-500/20' },
    Thcolors: 'bg-yellow-500',
    level: '75%'
  },
  { 
    name: 'Bootstrap',
    abbr: 'BS',
    Ocolors: { from: 'from-purple-500', to: 'to-pink-500' },
    Tcolors: { Obg: 'bg-purple-500/10', bg: 'group-hover:bg-purple-500', border: 'border-purple-500/20' },
    Thcolors: 'bg-purple-500',
    level: '85%'
  },
  { 
    name: 'GitHub',
    abbr: 'GH',
    Ocolors: { from: 'from-gray-500', to: 'to-zinc-400' },
    Tcolors: { Obg: 'bg-zinc-500/10', bg: 'group-hover:bg-zinc-500', border: 'border-zinc-500/20' },
    Thcolors: 'bg-zinc-500',
    level: '90%'
  },
  { 
    name: 'npm',
    abbr: 'NP',
    Ocolors: { from: 'from-red-500', to: 'to-rose-500' },
    Tcolors: { Obg: 'bg-red-500/10', bg: 'group-hover:bg-red-700', border: 'border-red-500/20' },
    Thcolors: 'bg-red-500',
    level: '85%'
  },
  { 
    name: 'Clean Code',
    abbr: 'CC',
    Ocolors: { from: 'from-emerald-500', to: 'to-green-500' },
    Tcolors: { Obg: 'bg-emerald-500/10', bg: 'group-hover:bg-emerald-500', border: 'border-emerald-500/20' },
    Thcolors: 'bg-emerald-500',
    level: '80%'
  },
  { 
    name: 'Responsive Design',
    abbr: 'RD',
    Ocolors: { from: 'from-sky-500', to: 'to-cyan-500' },
    Tcolors: { Obg: 'bg-green-500/10', bg: 'group-hover:bg-green-500', border: 'border-sky-500/20' },
    Thcolors: 'bg-green-500',
    level: '95%'
  }
   ]);
}
