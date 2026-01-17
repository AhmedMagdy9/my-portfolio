import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project-face';
import { TranslatePipe } from '@ngx-translate/core';




@Component({
  selector: 'app-proj-card',
  imports: [ TranslatePipe  ],
  templateUrl: './proj-card.html',
  styleUrl: './proj-card.css',
})
export class ProjCard {

   @Input() OneProject!: Project 
}
