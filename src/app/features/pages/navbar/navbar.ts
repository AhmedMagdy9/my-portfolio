import { Component, HostListener, inject, signal, WritableSignal } from '@angular/core';
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
isMobileMenuHidden:WritableSignal<boolean> = signal(true);
isSticky:WritableSignal<boolean> = signal(false);
isDarkMode:WritableSignal<boolean> = signal(false);
activeSection:WritableSignal<string | null> = signal(null);
private themeMode = inject(ThemeMode)
private mytranlatet =inject(Mytranlate)
currentLang = signal<string | undefined>(undefined);
private sub!: Subscription;


  constructor() {
    this.sub = this.mytranlatet.currentLang$.subscribe(lang => {
      this.currentLang.set(lang);
    });
  }

ngOnInit() {
  this.isDarkMode.set(this.themeMode.darkMode());
}

toggleDarkMode() {
  this.themeMode.toggleDarkMode();
  this.isDarkMode.set(!this.isDarkMode());
}

// function toggle
toggleMobileMenu() {
  this.isMobileMenuHidden.set(!this.isMobileMenuHidden());
}

scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    this.activeSection.set(id); 
  }
  // اقفل الموبايل منيو لو مفتوحة
  this.isMobileMenuHidden.set(true);
}

@HostListener('window:scroll', [])
onScroll() {
  this.isSticky.set(window.scrollY > 70);
}

changeLang(lang: string) {
  this.mytranlatet.changeLang(lang);
}


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
