import { Component, HostListener, inject } from '@angular/core';
import { ThemeMode } from '../../../core/services/dark-mode/theme-mode';
import { TranslatePipe } from '@ngx-translate/core';
import { Mytranlate } from '../../../core/services/translate/mytranlate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [ TranslatePipe ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
// Default: القائمة مخفية
isMobileMenuHidden = true;
isSticky = false;
isDarkMode = false;
activeSection: string | null = null;
private themeMode = inject(ThemeMode)
private mytranlatet =inject(Mytranlate)
currentLang!: string;
private sub!: Subscription;


  constructor() {
    this.sub = this.mytranlatet.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

ngOnInit() {
  this.isDarkMode = this.themeMode.darkMode();
}

toggleDarkMode() {
  this.themeMode.toggleDarkMode();
  this.isDarkMode = !this.isDarkMode;
}

// function toggle
toggleMobileMenu() {
  this.isMobileMenuHidden = !this.isMobileMenuHidden;
}

scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    this.activeSection = id; 
  }
  // اقفل الموبايل منيو لو مفتوحة
  this.isMobileMenuHidden = true;
}

@HostListener('window:scroll', [])
onScroll() {
  this.isSticky = window.scrollY > 70;
}

changeLang(lang: string) {
  this.mytranlatet.changeLang(lang);
}


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
