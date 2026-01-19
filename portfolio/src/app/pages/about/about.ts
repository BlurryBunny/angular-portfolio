import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGraduationCap, faUsers, faRocket, faCode, faTerminal,
  faRunning, faFutbol, faDumbbell, faSwimmer, faGamepad, faHeart
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  faUsers = faUsers;
  faRocket = faRocket;
  faCode = faCode;
  faTerminal = faTerminal;
faGraduationCap = faGraduationCap;
  hobbies = [
    { name: 'Running', icon: faRunning, desc: 'Correr con mi grupo de amigos y familiares en preparación para carreras.' },
    { name: 'Fútbol', icon: faFutbol, desc: 'Pasión por un deporte desde niño.' },
    { name: 'Gimnasio', icon: faDumbbell, desc: 'Disciplina y crecimiento fisicamente.' },
    { name: 'Natación', icon: faSwimmer, desc: 'De ser aprendiz hasta dar clases a principiantes y encontrar una nueva pasión.' },
    { name: 'Gaming', icon: faGamepad, desc: 'Desconexión total con el mundo con amigos.' },
    { name: 'Mi familia', icon: faHeart, desc: 'Mi tiempo de calidad favorito. Con mis seres queridos.' }
  ];
}
