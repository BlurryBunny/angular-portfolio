import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGraduationCap, faUsers, faRocket, faCode, faTerminal,
  faRunning, faFutbol, faDumbbell, faSwimmer, faGamepad, faHeart
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})


export class About implements OnInit {
  faUsers = faUsers;
  faRocket = faRocket;
  faCode = faCode;
  faTerminal = faTerminal;
  faGraduationCap = faGraduationCap;

  hobbies = [
    {
      name: 'Running',
      icon: faRunning,
      desc: 'Running with friends and family to prepare for upcoming races.'
    },
    {
      name: 'Soccer',
      icon: faFutbol,
      desc: 'A lifelong passion for the game since I was a child.'
    },
    {
      name: 'Gym',
      icon: faDumbbell,
      desc: 'Focused on discipline and physical growth.'
    },
    {
      name: 'Swimming',
      icon: faSwimmer,
      desc: 'From being a learner to teaching beginners and finding a new passion.'
    },
    {
      name: 'Gaming',
      icon: faGamepad,
      desc: 'A way to disconnect from the world and catch up with friends.'
    },
    {
      name: 'My Family',
      icon: faHeart,
      desc: 'My favorite quality time spent with my loved ones.'
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
