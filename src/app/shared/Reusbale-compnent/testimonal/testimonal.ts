import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Header } from '../header/header';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-testimonal',
  imports: [Header , TranslatePipe],
  templateUrl: './testimonal.html',
  styleUrl: './testimonal.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA  ],
})
export class Testimonal {


}
