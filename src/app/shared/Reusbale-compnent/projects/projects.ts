import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal, WritableSignal } from '@angular/core';
import { ProjCard } from '../proj-card/proj-card';
import { Header } from '../header/header';
import { Project } from '../../interfaces/project-face';
import { Shared } from '../../../core/services/shared/shared';
import { TranslatePipe } from '@ngx-translate/core';



@Component({
  selector: 'app-projects',
  imports: [ ProjCard , Header , TranslatePipe  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA  ],
})
export class Projects {

allProjects = signal<Project[]>([]);
private shared = inject(Shared);

constructor() {
  this.allProjects.set(this.shared.projects());
}

}
