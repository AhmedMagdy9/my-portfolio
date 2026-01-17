import { Component } from '@angular/core';
import { Header } from "../header/header";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [Header , TranslatePipe  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

}
