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
      title: "Powergas",
      description: "Proyecto para centralización de servicios para gestion de cartera para multiples proyectos.",
      imgUrl: "imgs/onWeb_PowerGas.png",
      projectUrl: "https://powergas.com.mx/",
      tags: ['.NET', 'Angular', 'Azure', 'DevOps']
    },
    {
      title: "Curciart",
      description: "Mobile application for internal sellers. Created with Flutter, Firebase, Odoo, Python.",
      imgUrl: "imgs/onWeb_curciart.png",
      projectUrl: "https://curciart.com/",
      tags: ['Magento', 'PHP']
    },
    {
      title: "RedOm8 Mobile App",
      description: "The RedOm8 mobile application is designed for internal sellers who pretend to offer service to customers, assigning balance with multiple payment methods, adding more actors as customers or sellers to the network, all from a single application. Created with Flutter, Firebase, Odoo, Python",
      imgUrl: "imgs/onWeb_R8_Mobile_App_Ambassor.png",
      projectUrl: "https://redom8.com/",
      tags: ['Flutter', 'Odoo']
    },
    {
      title: "Ciudadanos RedOm8",
      description: "The RedOm8 Citizens application based on the PWA (Progressive Web App) structure offers end users, i.e. those who use the telephone service, a platform to monitor their usage, acquire services, register new lines or check their history of purchases. Created with Quasar, VueJS, Firebase, Odoo, Python.",
      imgUrl: "imgs/onWeb_R8_PWA_Customer.png",
      projectUrl: "https://ciudadanos.vercel.app/#/",
    },
    {
      title: "Portal Agenda Ambiental",
      description: "Web portal linking to events, meetings, publications, activities and other information exclusive to the  department 'Agenda Ambiental' of the UASLP.",
      imgUrl: "imgs/onWeb_PortalAgenda.jpg",
      projectUrl: "https://ambiental.uaslp.mx/",
    },
  ];

  myProjects: Project[] = [
    {
      title: "Hackaton Nasa 2022",
      description: "Programming contest to propose real solutions to Earth and space problems.",
      imgUrl: "imgs/projects_Hackaton.jpg",
      projectUrl: "https://2022.spaceappschallenge.org/...",
      tags: ['Data Science', 'Python']
    },
    {
      title: "Do Mas",
      description: "Mobile platform to manage the inventory of a pet store, as well as the option to shop through a common user and communication between customer and buyer.",
      imgUrl: "imgs/projects_DoMas.jpg",
      projectUrl: "https://www.figma.com/file/LI6do5Wg3uqFoUMOcGmDdZ/Do-Mas-(API-PC)?node-id=0%3A1",
    },
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
