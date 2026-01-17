import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Header } from '../header/header';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Mytranlate } from '../../../core/services/translate/mytranlate';

@Component({
  selector: 'app-testimonal',
  imports: [Header , TranslatePipe],
  templateUrl: './testimonal.html',
  styleUrl: './testimonal.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA  ],
})
export class Testimonal {

private mytranlatet =inject(Mytranlate)
currentLang!: string;
private sub!: Subscription;

  constructor() {
    this.sub = this.mytranlatet.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

    ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
