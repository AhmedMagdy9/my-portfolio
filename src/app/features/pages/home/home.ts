
import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Projects } from '../../../shared/Reusbale-compnent/projects/projects';
import { Experience } from '../../../shared/Reusbale-compnent/experience/experience';
import { Skills } from '../../../shared/Reusbale-compnent/skills/skills';
import { Testimonal } from '../../../shared/Reusbale-compnent/testimonal/testimonal';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialIcon } from '../../../shared/Reusbale-compnent/social-icon/social-icon';




@Component({
  selector: 'app-home',
  imports: [  Navbar, Projects, Experience, Skills, Testimonal, Footer , TranslatePipe , SocialIcon  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  
 
})
export class Home {
   
}
