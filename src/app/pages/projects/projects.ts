import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';
import { ProjectCardComponent } from '../../components/project-card/project-card';

export interface Project {
  title: string;
  description: string;
  imgUrl: string;
  projectUrl: string;
  tags?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgbNavModule, ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectPage implements OnInit {
  activeTab = 1;

  onWeb: Project[] = [
    {
      title: "Powerlife",
      description: "Service centralization project for portfolio management across multiple corporate projects.",
      imgUrl: "imgs/onWeb_PowerGas.png",
      projectUrl: "https://powergas.com.mx/",
      tags: ['.NET', 'Angular', 'Azure', 'DevOps']
    },
    {
      title: "Curciart",
      description: "Art marketplace platform. Lead developer for module creation and API integrations.",
      imgUrl: "imgs/onWeb_curciart.png",
      projectUrl: "https://curciart.com/",
      tags: ['Magento', 'PHP']
    },
    {
      title: "RedOm8 Mobile App",
      description: "Mobile application for internal sellers to manage customer services, balance assignments, and network expansion from a single platform. Built with Flutter and Odoo.",
      imgUrl: "imgs/onWeb_R8_Mobile_App_Ambassor.png",
      projectUrl: "https://redom8.com/",
      tags: ['Flutter', 'Odoo']
    },
    {
      title: "RedOm8 Ciudadanos",
      description: "PWA platform for end-users to monitor usage, acquire services, and check purchase history in real-time.",
      imgUrl: "imgs/onWeb_R8_PWA_Customer.png",
      projectUrl: "https://ciudadanos.vercel.app/#/",
    },
    {
      title: "Agenda Ambiental Portal",
      description: "Web portal for UASLP department linking events, publications, and exclusive academic activities.",
      imgUrl: "imgs/onWeb_PortalAgenda.jpg",
      projectUrl: "https://ambiental.uaslp.mx/",
    },
  ];

  myProjects: Project[] = [
    {
      title: "NASA Space Apps Hackathon 2022",
      description: "Global programming contest proposing real-world solutions to Earth and space challenges using NASA open data.",
      imgUrl: "imgs/projects_Hackaton.jpg",
      projectUrl: "https://2022.spaceappschallenge.org/...",
      tags: ['Data Science', 'Python']
    },
    {
      title: "Do Mas",
      description: "Conceptual mobile platform to manage pet store inventory and streamline customer-buyer communication.",
      imgUrl: "imgs/projects_DoMas.jpg",
      projectUrl: "https://www.figma.com/file/...",
    },
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
