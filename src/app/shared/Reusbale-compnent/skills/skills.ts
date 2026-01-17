import { Component, inject, signal} from '@angular/core';
import { Header } from "../header/header";
import { Skill } from '../../interfaces/skill-face';
import { Shared } from '../../../core/services/shared/shared';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-skills',
  imports: [Header , TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

allskills = signal<Skill[]>([]);
private shared = inject(Shared);

constructor() {
  this.allskills.set(this.shared.allskills());
}


}
