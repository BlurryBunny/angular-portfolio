import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { SwiperComponent, SwiperItem } from "../../components/swiper/swiper";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [SwiperComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  displayText = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingInterval: any;
  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    if (this.typingInterval) clearInterval(this.typingInterval);
  }

  startTypingEffect() {
    const speed = 100;
    this.typingInterval = setInterval(() => {
      const currentRole = this.roles[this.roleIndex];

      if (this.isDeleting) {
        this.displayText.set(currentRole.substring(0, this.charIndex - 1));
        this.charIndex--;
      } else {
        this.displayText.set(currentRole.substring(0, this.charIndex + 1));
        this.charIndex++;
      }

      if (!this.isDeleting && this.charIndex === currentRole.length) {
        setTimeout(() => (this.isDeleting = true), 1000); // Pausa al terminar de escribir
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }, speed);
  }

  downloadCV() {
    window.open('assets/my-cv.pdf', '_blank');
  }
  name = 'Tu Nombre Aquí';
  roles: string[] = ['Full Stack Developer', 'Tech Lead', 'Mobile Developer'];
  techStack: SwiperItem[] = [
    { title: '.NET', image: 'assets/icons/dotnet.png' },
    { title: 'Angular', image: 'assets/icons/angular.png' },
    { title: 'Laravel', image: 'assets/icons/laravel.png' },
    { title: 'Flutter', image: 'assets/icons/flutter.png' },
    { title: 'Python', image: 'assets/icons/python.png' }
  ];

  azureExperience: SwiperItem[] = [
    { title: 'Azure DevOps', subtitle: 'CI/CD Pipelines & Boards', iconClass: 'bi bi-infinity' },
    { title: 'App Services', subtitle: 'Cloud Hosting & Scaling', iconClass: 'bi bi-cloud-arrow-up' },
    { title: 'Azure Functions', subtitle: 'Serverless Architecture', iconClass: 'bi bi-lightning-charge' },
    { title: 'SQL Azure', subtitle: 'Managed Databases', iconClass: 'bi bi-database' }
  ];
}
