import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeMode {
  // استخدام Signals لجعل التفاعل أسرع وأسهل
  darkMode = signal<boolean>(false);
  private platformId = inject(PLATFORM_ID)

  constructor(){
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = signal<boolean>(localStorage.getItem('theme') === 'dark');
      this.initTheme();
    }
  }

  toggleDarkMode() {
    this.darkMode.update(mode => !mode);
    this.updateRender();
  }

  updateRender() {
    if (this.darkMode()) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  // استدعاء هذه الدالة عند تشغيل التطبيق (مثلاً في الـ Constructor)
  initTheme() {
    this.updateRender();
  }
}
