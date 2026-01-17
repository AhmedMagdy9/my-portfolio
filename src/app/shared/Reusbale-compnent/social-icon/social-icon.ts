import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-icon',
  imports: [ CommonModule , FontAwesomeModule ],
  templateUrl: './social-icon.html',
  styleUrl: './social-icon.css',
})
export class SocialIcon {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faUser = faUser;
  faEnvelope = faEnvelope;
}
