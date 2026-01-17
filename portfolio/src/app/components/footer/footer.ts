import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faLinkedin , faGoogle } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  developerName: string = 'Ulises c:';
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faGoogle = faGoogle;
}
