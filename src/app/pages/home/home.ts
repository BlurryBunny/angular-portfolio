import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { SwiperComponent, SwiperItem } from "../../components/swiper/swiper";
import { CommonModule } from '@angular/common';
import { faDownload, faCode  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMicrosoft} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  imports: [SwiperComponent, CommonModule,FontAwesomeModule],
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
        setTimeout(() => (this.isDeleting = true), 1000);
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }, speed);
  }

  downloadCV() {
    window.open('my-cv.pdf', '_blank');
  }

  faDownload = faDownload;
  faCode = faCode;
  faMicrosoft = faMicrosoft;
  name = 'Ulises Uriel Domínguez Pérez';
  roles: string[] = ['Full Stack Developer', 'Tech Lead', 'Mobile Developer'];
  techStack: SwiperItem[] = [
    { title: '.NET', image: 'icons/dotnet-svgrepo-com.svg',isBackground: false },
    { title: 'Angular', image: 'icons/angular-svgrepo-com.svg',isBackground: false },
    { title: 'React', image: 'icons/react-svgrepo-com.svg',isBackground: false },
    { title: 'Vue', image: 'icons/vue-svgrepo-com.svg',isBackground: false },
    { title: 'Laravel', image: 'icons/laravel-svgrepo-com.svg',isBackground: false },
    { title: 'Flutter', image: 'icons/flutter-svgrepo-com.svg',isBackground: false },
    { title: 'Magento', image: 'icons/magento-svgrepo-com.svg',isBackground: false },
    { title: 'Python', image: 'icons/python-svgrepo-com.svg',isBackground: false }
  ];

  azureExperience: SwiperItem[] = [
  {
    title: 'CI/CD Automation',
    image: 'imgs/azure-ecosistem/ci-cd.jpeg',
    subtitle: 'Reduces manual errors by 90% and speeds up deployment cycles through automated pipelines, allowing the team to deliver value faster and with higher confidence.',
    isBackground: true
  },
  {
    title: 'Agile Orchestration',
    image: 'imgs/azure-ecosistem/agile-orchestration.png',
    subtitle: 'Optimizes project delivery using Azure Boards to track tasks, sprints, and backlogs, ensuring total transparency and alignment between stakeholders.',
    isBackground: true
  },
  {
    title: 'Infrastructure as Code',
    image: 'imgs/azure-ecosistem/infrastructure-as-code.png',
    subtitle: 'Ensures environment consistency and scalability by managing cloud resources through code, eliminating manual configuration errors across the organization.',
    isBackground: true
  },
  {
    title: 'Quality & Security',
    image: 'imgs/azure-ecosistem/cloud-security.png',
    subtitle: 'Integrates automated testing and security scans directly into the workflow, catching vulnerabilities and bugs before they ever reach production.',
    isBackground: true
  }
];
}
