import { isPlatformBrowser } from '@angular/common';
import { inject,  Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mytranlate {

  defaultLang = 'en';
  private TranslateService =inject(TranslateService)
  private platformId = inject(PLATFORM_ID)
  private currentLangSubject = new BehaviorSubject<string>(this.defaultLang);
  currentLang$ = this.currentLangSubject.asObservable();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lng');
      if (savedLang) { this.defaultLang = savedLang;}
      this.TranslateService.setDefaultLang(this.defaultLang);
      this.TranslateService.use(this.defaultLang);
       this.currentLangSubject.next(this.defaultLang);
       this.changeDir()
    }
  }

  changeLang(lang: string) {
    this.TranslateService.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lng', lang);
       this.currentLangSubject.next(lang);
       this.changeDir()
    }
  }

  changeDir(){
    const savedLang = localStorage.getItem('lng');
    if(savedLang === 'en'){

      document.body.dir = 'ltr'

    }else if(savedLang === 'ar'){
    document.body.dir = 'rtl'
    }

  }
  
}
